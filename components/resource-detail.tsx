import Link from "next/link"
import { ArrowLeft, Check, Clock, ExternalLink, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PricingBadge } from "@/components/pricing-badge"
import type { Resource, Section } from "@/lib/data"

export function ResourceDetail({
  section,
  resource,
}: {
  section: Section
  resource: Resource
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link
        href={`/${section.slug}`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to {section.name}
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <Badge variant="secondary">{resource.category}</Badge>
        <PricingBadge pricing={resource.pricing} />
        <span className="rounded border border-border/60 px-2 py-0.5 text-xs text-muted-foreground">
          {resource.level}
        </span>
      </div>

      <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
        {resource.title}
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <User className="h-4 w-4" />
          {resource.author}
        </span>
        <span className="flex items-center gap-1.5">
          <ExternalLink className="h-4 w-4 text-primary" />
          {resource.platform}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="h-4 w-4" />
          {resource.duration}
        </span>
      </div>

      <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
        {resource.description}
      </p>

      <div className="mt-8 rounded-xl border border-border/60 bg-card p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">
          What you&apos;ll get
        </h2>
        <ul className="mt-4 space-y-3">
          {resource.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-sm">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="text-muted-foreground">{h}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-col gap-3 rounded-xl border border-primary/30 bg-primary/5 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium">Ready to start learning?</p>
          <p className="text-sm text-muted-foreground">
            This resource is hosted on {resource.platform}
            {resource.pricing === "free" ? " and is free to access." : "."}
          </p>
        </div>
        <Button
          render={
            <a href={resource.url} target="_blank" rel="noopener noreferrer" />
          }
          size="lg"
          className="shrink-0"
          nativeButton={false}
        >
          Go to {resource.platform}
          <ExternalLink className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
