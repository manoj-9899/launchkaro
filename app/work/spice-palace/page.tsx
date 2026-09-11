import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { CtaFooter } from '@/components/cta-footer'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Spice Palace — Café & Restaurant Website Showcase | ${SITE_CONFIG.name}`,
  description:
    'Explore the Spice Palace restaurant web design showcase created by LaunchKaro. Menu highlights, location map integration, and direct ordering pathways.',
  alternates: {
    canonical: '/work/spice-palace',
  },
  openGraph: {
    title: `Spice Palace — Café & Restaurant Website Showcase | ${SITE_CONFIG.name}`,
    description:
      'Explore the Spice Palace restaurant web design showcase.',
    url: `${SITE_CONFIG.domain}/work/spice-palace`,
    siteName: SITE_CONFIG.name,
    locale: 'en_IN',
    type: 'website',
  },
}

export default function SpicePalaceCaseStudyPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-24 sm:pt-28 md:pt-32">
        <section className="px-4 py-12 sm:px-6 md:px-10">
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs items={[{ label: 'Selected Work', href: '/work' }, { label: 'Spice Palace' }]} />

            <div className="max-w-4xl pt-4 space-y-4">
              <div className="flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-muted-foreground font-mono">
                <span className="size-2 rounded-full bg-signal" />
                <span>CAFÉ & RESTAURANT SHOWCASE PROJECT</span>
              </div>

              <h1 className="text-[clamp(2.2rem,6.5vw,4.5rem)] leading-[1.02] font-medium tracking-[-0.035em]">
                Spice Palace — <em className="font-serif font-normal italic text-foreground/80">Café & Restaurant</em>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Vibrant restaurant website with menu highlights, location integration, and direct ordering pathways.
              </p>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a
                  href="https://spicepalace.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
                >
                  <span>Launch Live Demo</span>
                  <ArrowUpRight className="size-4" />
                </a>
                <Link href="/websites-for-restaurants" className="link-underline text-sm font-medium text-foreground py-2">
                  Learn about Restaurant Websites →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 md:px-10 border-t border-border/70">
          <div className="mx-auto max-w-7xl space-y-8">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src="/images/work-4.webp"
                alt="Spice Palace restaurant website showcase preview"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid gap-8 md:grid-cols-12 pt-6">
              <div className="md:col-span-4 space-y-4">
                <h3 className="text-xs uppercase tracking-wider font-mono text-muted-foreground">Project Details</h3>
                <div className="space-y-2 text-sm">
                  <p><strong className="text-foreground">Category:</strong> Café & Restaurant</p>
                  <p><strong className="text-foreground">Tech:</strong> React, HTML5, CSS3</p>
                </div>
              </div>

              <div className="md:col-span-8 space-y-4 text-muted-foreground leading-relaxed text-base">
                <h3 className="text-xl font-medium text-foreground">Design Direction</h3>
                <p>
                  Spice Palace is designed to highlight chef specials, digital menu categories, and Google Maps direction buttons,
                  making it effortless for hungry customers browsing on mobile devices to order or visit the café.
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
