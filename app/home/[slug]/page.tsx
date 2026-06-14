import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ResourceDetail } from "@/components/resource-detail"
import { getSection, getResource } from "@/lib/data"

export function generateStaticParams() {
  return getSection("home")!.resources.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const found = getResource("home", slug)
  if (!found) return {}
  return {
    title: `${found.resource.title} | NeuralPath`,
    description: found.resource.summary,
  }
}

export default async function HomeResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const found = getResource("home", slug)
  if (!found) notFound()
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <ResourceDetail section={found.section} resource={found.resource} />
      <SiteFooter />
    </main>
  )
}
