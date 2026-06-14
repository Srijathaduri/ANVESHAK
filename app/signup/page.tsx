import type { Metadata } from "next"
import { AuthForm } from "@/components/auth-form"

export const metadata: Metadata = {
  title: "Sign up — NeuralPath",
  description: "Create an account to start your AI learning journey.",
}

export default function SignupPage() {
  return <AuthForm mode="signup" />
}
