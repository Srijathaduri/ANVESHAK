import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ResourceDetail } from "@/components/resource-detail"
import { getSection, getResource } from "@/lib/data"
import { checkAuth } from "@/components/protected-route-server"

export function generateStaticParams() {
  return getSection("insights")!.resources.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const found = getResource("insights", slug)
  if (!found) return {}
  return {
    title: `${found.resource.title} | NeuralPath`,
    description: found.resource.summary,
  }
}

export default async function InsightsResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  await checkAuth()
  
  const { slug } = await params
  const found = getResource("insights", slug)
  if (!found) notFound()
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <ResourceDetail section={found.section} resource={found.resource} />
      <SiteFooter />
    </main>
  )
}
