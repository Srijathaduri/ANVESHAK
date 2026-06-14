import { Check, Tag } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Pricing } from "@/lib/data"

export function PricingBadge({
  pricing,
  className,
}: {
  pricing: Pricing
  className?: string
}) {
  const isFree = pricing === "free"
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold",
        isFree
          ? "bg-primary/15 text-primary"
          : "bg-chart-4/15 text-chart-4",
        className,
      )}
    >
      {isFree ? (
        <Check className="h-3 w-3" />
      ) : (
        <Tag className="h-3 w-3" />
      )}
      {isFree ? "Free" : "Paid"}
    </span>
  )
}
