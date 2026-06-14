import { ResourceCard } from "@/components/resource-card"
import { PricingBadge } from "@/components/pricing-badge"
import type { Section } from "@/lib/data"

export function SectionListing({ section }: { section: Section }) {
  const freeCount = section.resources.filter((r) => r.pricing === "free").length
  const paidCount = section.resources.length - freeCount

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="text-sm font-medium uppercase tracking-widest text-primary">
        {section.tagline}
      </p>
      <h1 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
        {section.name}
      </h1>
      <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
        {section.description}
      </p>

      <div className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
        <span>{section.resources.length} resources</span>
        <span aria-hidden>•</span>
        <span className="inline-flex items-center gap-2">
          <PricingBadge pricing="free" /> {freeCount}
        </span>
        {paidCount > 0 && (
          <span className="inline-flex items-center gap-2">
            <PricingBadge pricing="paid" /> {paidCount}
          </span>
        )}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {section.resources.map((resource) => (
          <ResourceCard
            key={resource.slug}
            resource={resource}
            sectionSlug={section.slug}
          />
        ))}
      </div>
    </div>
  )
}
