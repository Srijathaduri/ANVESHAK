import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SectionListing } from "@/components/section-listing"
import { ProtectedPageContent } from "@/components/protected-page-content"
import { getSection } from "@/lib/data"

export const metadata = {
  title: "AI Insights — ML, DL, CNN, RNN | NeuralPath",
  description:
    "Go deep with machine learning, deep learning, CNNs, R-CNN, RNNs, and transformers.",
}

export default function InsightsPage() {
  const section = getSection("insights")!
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
