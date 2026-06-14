"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Brain, LogOut, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/", label: "What is AI" },
  { href: "/beginners", label: "AI Beginners" },
  { href: "/insights", label: "AI Insights" },
  { href: "/roadmaps", label: "All About AI" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { user, loading, signOut } = useAuth()

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <img 
            src="/kaaralogo.jpg" 
            alt="NeuralPath Logo" 
            className="h-9 w-9 rounded-lg object-cover"
          />
          <span className="text-lg font-semibold tracking-tight">
            Neural<span className="text-primary">Path</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}

          <div className="ml-2 flex items-center gap-2 border-l border-border/60 pl-3">
            {!loading && user ? (
              <>
                <span className="text-sm font-medium text-foreground">
                  {user.name.split(" ")[0]}
                </span>
                <Button
                  type="button"
                  size="sm"
                  variant="secondary"
                  onClick={signOut}
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </Button>
              </>
            ) : (
              <>
                <Button
                  render={<Link href="/login" />}
                  size="sm"
                  variant="ghost"
                  nativeButton={false}
                >
                  Sign in
                </Button>
                <Button
                  render={<Link href="/signup" />}
                  size="sm"
                  nativeButton={false}
                >
                  Sign up
                </Button>
              </>
            )}
          </div>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 px-4 pb-4 pt-2 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}

          <div className="mt-2 flex flex-col gap-2 border-t border-border/60 pt-3">
            {!loading && user ? (
              <>
                <span className="px-3 text-sm font-medium text-foreground">
                  Signed in as {user.name.split(" ")[0]}
                </span>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => {
                    signOut()
                    setOpen(false)
                  }}
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </Button>
              </>
            ) : (
              <>
                <Button
                  render={<Link href="/login" />}
                  variant="ghost"
                  nativeButton={false}
                  onClick={() => setOpen(false)}
                >
                  Sign in
                </Button>
                <Button
                  render={<Link href="/signup" />}
                  nativeButton={false}
                  onClick={() => setOpen(false)}
                >
                  Sign up
                </Button>
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  )
}
