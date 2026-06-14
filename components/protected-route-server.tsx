import { redirect } from "next/navigation"
import { cookies } from "next/headers"

export async function checkAuth() {
  const cookieStore = await cookies()
  const session = cookieStore.get("neuralpath:session")
  
  if (!session?.value) {
    redirect("/login")
  }
}