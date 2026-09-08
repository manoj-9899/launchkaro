import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { CtaFooter } from '@/components/cta-footer'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Atelier Estate — Real Estate Website Showcase | ${SITE_CONFIG.name}`,
  description:
    'Explore the Atelier Estate real estate portal web design showcase created by LaunchKaro. Sophisticated property listings, floor plans, and site visit inquiries.',
  alternates: {
    canonical: '/work/atelier-estate',
  },
  openGraph: {
    title: `Atelier Estate — Real Estate Website Showcase | ${SITE_CONFIG.name}`,
    description:
      'Explore the Atelier Estate real estate portal web design showcase.',
    url: `${SITE_CONFIG.domain}/work/atelier-estate`,
    siteName: SITE_CONFIG.name,
    locale: 'en_IN',
    type: 'website',
  },
}

export default function AtelierEstateCaseStudyPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-24 sm:pt-28 md:pt-32">
        <section className="px-4 py-12 sm:px-6 md:px-10">
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs items={[{ label: 'Selected Work', href: '/work' }, { label: 'Atelier Estate' }]} />

            <div className="max-w-4xl pt-4 space-y-4">
              <div className="flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-muted-foreground font-mono">
                <span className="size-2 rounded-full bg-signal" />
                <span>REAL ESTATE SHOWCASE PROJECT — 2025</span>
              </div>

              <h1 className="text-[clamp(2.2rem,6.5vw,4.5rem)] leading-[1.02] font-medium tracking-[-0.035em]">
                Atelier Estate — <em className="font-serif font-normal italic text-foreground/80">Property Portal</em>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Sophisticated property portal designed for premium residential and luxury real estate listings.
              </p>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a
                  href="https://atelier-estate-website.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
                >
                  <span>Launch Live Demo</span>
                  <ArrowUpRight className="size-4" />
                </a>
                <Link href="/websites-for-real-estate" className="link-underline text-sm font-medium text-foreground py-2">
                  Learn about Real Estate Websites →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 md:px-10 border-t border-border/70">
          <div className="mx-auto max-w-7xl space-y-8">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src="/images/work-2.webp"
                alt="Atelier Estate real estate website showcase preview"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="grid gap-8 md:grid-cols-12 pt-6">
              <div className="md:col-span-4 space-y-4">
                <h3 className="text-xs uppercase tracking-wider font-mono text-muted-foreground">Project Details</h3>
                <div className="space-y-2 text-sm">
                  <p><strong className="text-foreground">Category:</strong> Real Estate</p>
                  <p><strong className="text-foreground">Year:</strong> 2025</p>
                  <p><strong className="text-foreground">Tech:</strong> Next.js, Tailwind CSS</p>
                </div>
              </div>

              <div className="md:col-span-8 space-y-4 text-muted-foreground leading-relaxed text-base">
                <h3 className="text-xl font-medium text-foreground">Design Direction</h3>
                <p>
                  The Atelier Estate showcase showcases image-rich residential property grids, location maps, and interactive site visit request buttons.
                  Structured to build developer credibility and simplify lead generation for real estate projects.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CtaFooter />
    </>
  )
}
