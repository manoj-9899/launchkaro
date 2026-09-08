import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Search, Gauge, Share2 } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { CtaFooter } from '@/components/cta-footer'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { MagneticButton } from '@/components/magnetic-button'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Local SEO & Google Setup in Latur | ${SITE_CONFIG.name}`,
  description:
    'Local SEO foundations and Google Business setup for local businesses in Latur, Maharashtra. Get found by customers searching in your area.',
  alternates: {
    canonical: '/local-seo-latur',
  },
  openGraph: {
    title: `Local SEO & Google Setup in Latur | ${SITE_CONFIG.name}`,
    description:
      'Local SEO foundations and Google Business setup for local businesses in Latur.',
    url: `${SITE_CONFIG.domain}/local-seo-latur`,
    siteName: SITE_CONFIG.name,
    locale: 'en_IN',
    type: 'website',
  },
}

const seoDeliverables = [
  {
    icon: Search,
    title: 'On-Page SEO Structure',
    desc: 'Clean meta titles, meta descriptions, canonical tags, and structured headings optimized for local search intent.',
  },
  {
    icon: MapPin,
    title: 'Location & Area Metadata',
    desc: 'Structured JSON-LD schema establishing your business location (Latur & Maharashtra) so search engines understand your service area.',
  },
  {
    icon: Gauge,
    title: 'Speed & Mobile Optimization',
    desc: 'Fast loading page speed and mobile-first responsiveness, which are key ranking signals for Google local searches.',
  },
  {
    icon: Share2,
    title: 'Google Maps & Business Setup',
    desc: 'Setup guidance and integration for your Google Maps listing and contact channels so local searchers can call or message directly.',
  },
]

export default function LocalSEOLaturPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Local SEO Setup in Latur',
    provider: {
      '@type': 'ProfessionalService',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.domain,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Latur',
    },
    description:
      'Practical local SEO setup and Google search foundations for businesses in Latur, Maharashtra.',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main className="pt-24 sm:pt-28 md:pt-32">
        <section className="px-4 py-12 sm:px-6 md:px-10">
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs items={[{ label: 'Services', href: '/#services' }, { label: 'Local SEO Latur' }]} />

            <div className="max-w-4xl pt-4">
              <div className="flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-muted-foreground font-mono">
                <span className="size-2 rounded-full bg-signal" />
                <span>SEARCH FOUNDATIONS — LATUR</span>
              </div>

              <h1 className="mt-4 text-[clamp(2.2rem,6.5vw,4.5rem)] leading-[1.02] font-medium tracking-[-0.035em] text-balance">
                Local SEO setup to help customers{' '}
                <em className="font-serif font-normal italic text-foreground/80">find your business in Latur</em>.
              </h1>

              <p className="mt-6 text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-3xl">
                When people in Latur search for your services on Google, your website should be easy to find.
                We build solid technical and local SEO foundations into every site we launch.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <MagneticButton href="#contact-form">Start a project</MagneticButton>
                <MagneticButton href="/pricing" variant="outline" icon={false}>
                  See package pricing
                </MagneticButton>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 md:px-10 border-t border-border/70">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              index="01"
              label="Included Foundations"
              title={
                <>
                  Practical SEO features included in{' '}
                  <em className="font-serif font-normal italic text-foreground/75">our website packages</em>.
                </>
              }
            />

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {seoDeliverables.map((item, idx) => (
                <Reveal key={idx} delay={idx * 60} className="rounded-2xl border border-border/80 bg-card p-6 flex flex-col justify-between">
                  <div>
                    <item.icon className="size-6 text-foreground/70 stroke-[1.5]" />
                    <h3 className="mt-4 text-xl font-medium tracking-tight text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CtaFooter />
    </>
  )
}
