import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SectionListing } from "@/components/section-listing"
import { ProtectedPageContent } from "@/components/protected-page-content"
import { getSection } from "@/lib/data"

export const metadata = {
  title: "All About AI — Roadmaps | NeuralPath",
  description:
    "Complete AI learning roadmaps and platforms, from free to affordable, clearly labeled.",
}

export default function RoadmapsPage() {
  const section = getSection("roadmaps")!
  return (
    <ProtectedPageContent>
      <main className="min-h-screen">
        <SiteHeader />
        <SectionListing section={section} />
        <SiteFooter />
      </main>
    </ProtectedPageContent>
  )
}
