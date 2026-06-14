import type { Metadata } from "next"
import { AuthForm } from "@/components/auth-form"

export const metadata: Metadata = {
  title: "Sign in — NeuralPath",
  description: "Sign in to continue your AI learning journey.",
}

export default function LoginPage() {
  return <AuthForm mode="signin" />
}
