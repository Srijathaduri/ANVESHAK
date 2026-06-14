import Link from "next/link"
import { ArrowRight, Clock, PlayCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { PricingBadge } from "@/components/pricing-badge"
import type { Resource, Section } from "@/lib/data"

export function ResourceCard({
  resource,
  sectionSlug,
}: {
  resource: Resource
  sectionSlug: Section["slug"]
}) {
  return (
    <article className="group flex flex-col rounded-xl border border-border/60 bg-card p-5 transition-colors hover:border-primary/50">
      <div className="mb-3 flex items-center justify-between gap-2">
        <Badge
          variant="secondary"
          className="bg-secondary text-secondary-foreground"
        >
          {resource.category}
        </Badge>
        <PricingBadge pricing={resource.pricing} />
      </div>

      <h3 className="text-balance text-lg font-semibold leading-snug">
        {resource.title}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
        {resource.summary}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <PlayCircle className="h-3.5 w-3.5 text-primary" />
          {resource.platform}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          {resource.duration}
        </span>
        <span className="rounded border border-border/60 px-1.5 py-0.5">
          {resource.level}
        </span>
      </div>

      <Link
        href={`/${sectionSlug}/${resource.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
      >
        View details
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </article>
  )
}
