import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SectionListing } from "@/components/section-listing"
import { ProtectedPageContent } from "@/components/protected-page-content"
import { getSection } from "@/lib/data"

export const metadata = {
  title: "AI Beginners — Fundamentals | NeuralPath",
  description:
    "Master the fundamentals you need before AI: pandas, NumPy, TensorFlow, Matplotlib, scikit-learn and more.",
}

export default function BeginnersPage() {
  const section = getSection("beginners")!
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
