"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"

export type User = {
  name: string
  email: string
}

type StoredUser = User & { password: string }

type AuthContextType = {
  user: User | null
  loading: boolean
  signUp: (name: string, email: string, password: string) => { ok: boolean; error?: string }
  signIn: (email: string, password: string) => { ok: boolean; error?: string }
  signOut: () => void
}

const USERS_KEY = "neuralpath:users"
const SESSION_KEY = "neuralpath:session"
const SESSION_COOKIE = "neuralpath:session"

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString()
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Strict`
}

function deleteCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}

const AuthContext = createContext<AuthContextType | null>(null)

function readUsers(): StoredUser[] {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]")
  } catch {
    return []
  }
}

function writeUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const session = localStorage.getItem(SESSION_KEY)
      if (session) setUser(JSON.parse(session))
    } catch {
      // ignore
    }
    setLoading(false)
  }, [])

  const signUp = useCallback((name: string, email: string, password: string) => {
    const normalized = email.trim().toLowerCase()
    if (!name.trim() || !normalized || !password) {
      return { ok: false, error: "Please fill in all fields." }
    }
    const users = readUsers()
    if (users.some((u) => u.email === normalized)) {
      return { ok: false, error: "An account with this email already exists." }
    }
    const newUser: StoredUser = { name: name.trim(), email: normalized, password }
    writeUsers([...users, newUser])
    const publicUser: User = { name: newUser.name, email: newUser.email }
    localStorage.setItem(SESSION_KEY, JSON.stringify(publicUser))
    setCookie(SESSION_COOKIE, JSON.stringify(publicUser), 7)
    setUser(publicUser)
    return { ok: true }
  }, [])

  const signIn = useCallback((email: string, password: string) => {
    const normalized = email.trim().toLowerCase()
    const users = readUsers()
    const match = users.find((u) => u.email === normalized && u.password === password)
    if (!match) {
      return { ok: false, error: "Invalid email or password." }
    }
    const publicUser: User = { name: match.name, email: match.email }
    localStorage.setItem(SESSION_KEY, JSON.stringify(publicUser))
    setCookie(SESSION_COOKIE, JSON.stringify(publicUser), 7)
    setUser(publicUser)
    return { ok: true }
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem(SESSION_KEY)
    deleteCookie(SESSION_COOKIE)
    setUser(null)
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider")
  return ctx
}
