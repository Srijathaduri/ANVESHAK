import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Compass, Layers, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SectionListing } from "@/components/section-listing"
import { getSection } from "@/lib/data"

const journey = [
  {
    href: "/",
    icon: Sparkles,
    name: "What is AI",
    desc: "Talks & explainers from the leaders shaping AI.",
  },
  {
    href: "/beginners",
    icon: BookOpen,
    name: "AI Beginners",
    desc: "Master the fundamentals: pandas, NumPy, TensorFlow.",
  },
  {
    href: "/insights",
    icon: Layers,
    name: "AI Insights",
    desc: "ML, deep learning, CNN, R-CNN, RNN & transformers.",
  },
  {
    href: "/roadmaps",
    icon: Compass,
    name: "All About AI",
    desc: "Roadmaps from free to affordable, clearly labeled.",
  },
]

export default function HomePage() {
  const section = getSection("home")!

  return (
    <main className="min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <Image
          src="/hero-ai.png"
          alt=""
          fill
          priority
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Your curated path into artificial intelligence
          </div>
          <h1 className="mt-6 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-6xl">
            Learn AI from zero to mastery, the{" "}
            <span className="text-primary">right way</span>.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            NeuralPath brings together the best talks, courses, and roadmaps for
            studying AI — from understanding the basics to mastering deep
            learning. Every resource is hand-picked and labeled free or paid.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              render={<Link href="/beginners" />}
              size="lg"
              nativeButton={false}
            >
              Start with the fundamentals
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              render={<Link href="/roadmaps" />}
              size="lg"
              variant="secondary"
              nativeButton={false}
            >
              Explore roadmaps
            </Button>
          </div>
        </div>
      </section>

      {/* Journey cards */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-balance text-2xl font-bold tracking-tight">
          Your learning journey
        </h2>
        <p className="mt-2 text-muted-foreground">
          Four stages, one clear path. Move through them at your own pace.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {journey.map((step, i) => (
            <Link
              key={step.name}
              href={step.href}
              className="group rounded-xl border border-border/60 bg-card p-5 transition-colors hover:border-primary/50"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <step.icon className="h-5 w-5" />
                </span>
                <span className="text-xs font-medium text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-4 font-semibold">{step.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground text-pretty">
                {step.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* What is AI listing */}
      <section className="border-t border-border/60">
        <SectionListing section={section} />
      </section>

      <SiteFooter />
    </main>
  )
}
