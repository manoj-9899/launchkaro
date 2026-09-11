import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Building2, MapPin, PhoneCall, LayoutGrid } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { CtaFooter } from '@/components/cta-footer'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { MagneticButton } from '@/components/magnetic-button'
import { ProjectCard } from '@/components/project-card'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Real Estate Website Design in Latur | ${SITE_CONFIG.name}`,
  description:
    'Custom real estate portal web design for property developers, brokers, and real estate agencies in Latur & Maharashtra. Property showcases and lead capture.',
  alternates: {
    canonical: '/websites-for-real-estate',
  },
  openGraph: {
    title: `Real Estate Website Design in Latur | ${SITE_CONFIG.name}`,
    description:
      'Custom real estate portal web design for property developers & brokers in Latur.',
    url: `${SITE_CONFIG.domain}/websites-for-real-estate`,
    siteName: SITE_CONFIG.name,
    locale: 'en_IN',
    type: 'website',
  },
}

const features = [
  {
    icon: LayoutGrid,
    title: 'Property Listing Showcases',
    desc: 'Organized visual grids highlighting floor plans, property specs, pricing, and high-resolution photo galleries.',
  },
  {
    icon: PhoneCall,
    title: 'Direct Lead Inquiry Flow',
    desc: 'Integrated WhatsApp and call buttons allowing prospective buyers to request site visits or pricing details.',
  },
  {
    icon: MapPin,
    title: 'Location & Amenities Overview',
    desc: 'Clear location highlights, nearby landmarks, and connectivity details for residential and commercial projects.',
  },
  {
    icon: Building2,
    title: 'Developer Brand Authority',
    desc: 'Elegant, established visual presentation designed to build trust with homebuyers and real estate investors.',
  },
]

export default function RealEstateWebsitesPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-24 sm:pt-28 md:pt-32">
        <section className="px-4 py-12 sm:px-6 md:px-10">
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs items={[{ label: 'Industries' }, { label: 'Real Estate Websites' }]} />

            <div className="max-w-4xl pt-4">
              <div className="flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-muted-foreground font-mono">
                <span className="size-2 rounded-full bg-signal" />
                <span>PROPERTY PORTAL WEB DESIGN</span>
              </div>

              <h1 className="mt-4 text-[clamp(2.2rem,6.5vw,4.5rem)] leading-[1.02] font-medium tracking-[-0.035em] text-balance">
                Real estate websites built to showcase properties and{' '}
                <em className="font-serif font-normal italic text-foreground/80">capture site visit inquiries</em>.
              </h1>

              <p className="mt-6 text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-3xl">
                We build modern property showcase websites for real estate brokers, developers, and estate agents
                in Latur and Maharashtra. Highlighting property specs and making site visit requests effortless.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <MagneticButton href="#contact-form">Start a project</MagneticButton>
                <MagneticButton href="/pricing" variant="outline" icon={false}>
                  View website packages
                </MagneticButton>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 md:px-10 border-t border-border/70">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              index="01"
              label="Real Estate Features"
              title={
                <>
                  Essential sections for modern{' '}
                  <em className="font-serif font-normal italic text-foreground/75">property websites</em>.
                </>
              }
            />

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f, idx) => (
                <Reveal key={idx} delay={idx * 60} className="rounded-2xl border border-border/80 bg-card p-6 flex flex-col justify-between">
                  <div>
                    <f.icon className="size-6 text-foreground/70 stroke-[1.5]" />
                    <h3 className="mt-4 text-xl font-medium tracking-tight text-foreground">{f.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 md:px-10 bg-secondary/30 border-t border-border/70">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              index="02"
              label="Showcase Example"
              title={
                <>
                  Real estate design from{' '}
                  <em className="font-serif font-normal italic text-foreground/75">our portfolio showcase</em>.
                </>
              }
            />

            <div className="mt-12 max-w-xl">
              <Reveal>
                <ProjectCard
                  title="Atelier Estate"
                  category="Real Estate"
                  image="/images/work-2.webp"
                  href="/work/atelier-estate"
                  liveUrl="https://atelier-estate-website.vercel.app/"
                />
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <CtaFooter />
    </>
  )
}
