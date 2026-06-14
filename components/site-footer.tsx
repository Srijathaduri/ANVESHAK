import Link from "next/link"
import { Brain } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Brain className="h-4 w-4" />
          </span>
          <span className="text-sm font-semibold">
            Neural<span className="text-primary">Path</span>
          </span>
        </Link>
        <p className="text-sm text-muted-foreground text-pretty">
          A curated learning hub for everyone who wants to study AI.
        </p>
      </div>
    </footer>
  )
}
