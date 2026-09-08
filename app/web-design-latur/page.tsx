import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, CheckCircle2, Code2, Layout, Smartphone, Zap } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { CtaFooter } from '@/components/cta-footer'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { MagneticButton } from '@/components/magnetic-button'
import { SITE_CONFIG, getWhatsAppUrl } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Web Design in Latur for Local Businesses | ${SITE_CONFIG.name}`,
  description:
    'Custom web design services in Latur, Maharashtra. We create fast, mobile-friendly websites designed specifically for local shops, clinics, and service businesses.',
  alternates: {
    canonical: '/web-design-latur',
  },
  openGraph: {
    title: `Web Design in Latur for Local Businesses | ${SITE_CONFIG.name}`,
    description:
      'Custom web design services in Latur, Maharashtra. Fast, mobile-friendly websites for local businesses.',
    url: `${SITE_CONFIG.domain}/web-design-latur`,
    siteName: SITE_CONFIG.name,
    locale: 'en_IN',
    type: 'website',
  },
}

const features = [
  {
    icon: Smartphone,
    title: 'Mobile-First Experience',
    desc: 'Over 80% of local customers browse on smartphones. Your site will load instantly and fit perfectly on all mobile screens.',
  },
  {
    icon: Layout,
    title: 'Custom Brand Identity',
    desc: 'Not a cookie-cutter template. We craft clean layouts, typography, and color schemes tailored to your specific local business.',
  },
  {
    icon: Zap,
    title: 'Lightning Performance',
    desc: 'Fast page speed keeps visitors engaged and helps your website rank higher on Google search results.',
  },
  {
    icon: Code2,
    title: 'Enquiry-Driven UX',
    desc: 'Strategic call-to-action buttons, WhatsApp integration, and click-to-call links designed to convert visitors into inquiries.',
  },
]

const targetIndustries = [
  { name: 'Restaurants & Cafés', href: '/websites-for-restaurants' },
  { name: 'Real Estate Brokers', href: '/websites-for-real-estate' },
  { name: 'Coaching Institutes', href: '/websites-for-coaching-institutes' },
  { name: 'Event & Banquet Halls', href: '/websites-for-event-venues' },
  { name: 'Medical Clinics & Doctors', href: '/websites-for-clinics' },
]

export default function WebDesignLaturPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Web Design in Latur',
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
      'Custom website design services for local shops, clinics, and businesses in Latur, Maharashtra.',
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
            <Breadcrumbs items={[{ label: 'Services', href: '/#services' }, { label: 'Web Design Latur' }]} />

            <div className="max-w-4xl pt-4">
              <div className="flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-muted-foreground font-mono">
                <span className="size-2 rounded-full bg-signal" />
                <span>LOCAL AGENCY SERVICES — LATUR</span>
              </div>

              <h1 className="mt-4 text-[clamp(2.2rem,6.5vw,4.5rem)] leading-[1.02] font-medium tracking-[-0.035em] text-balance">
                Web design that makes your local business{' '}
                <em className="font-serif font-normal italic text-foreground/80">stand out in Latur</em>.
              </h1>

              <p className="mt-6 text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-3xl">
                We design fast, mobile-friendly websites for local businesses in Latur and across Maharashtra.
                Clear layouts, modern typography, and direct WhatsApp contact flows with no hidden fluff.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <MagneticButton href="#contact-form">Start a project</MagneticButton>
                <MagneticButton href="/pricing" variant="outline" icon={false}>
                  View fixed pricing
                </MagneticButton>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="px-4 py-16 sm:px-6 md:px-10 border-t border-border/70">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              index="01"
              label="Why Custom Design Matters"
              title={
                <>
                  Built specifically for how local customers{' '}
                  <em className="font-serif font-normal italic text-foreground/75">browse & decide</em>.
                </>
              }
            />

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f, i) => (
                <Reveal key={i} delay={i * 60} className="rounded-2xl border border-border/80 bg-card p-6 flex flex-col justify-between">
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

        {/* Industry Solutions Links */}
        <section className="px-4 py-16 sm:px-6 md:px-10 bg-secondary/30 border-y border-border/70">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              index="02"
              label="Tailored For Your Industry"
              title={
                <>
                  Specialized design structures for{' '}
                  <em className="font-serif font-normal italic text-foreground/75">key local business categories</em>.
                </>
              }
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {targetIndustries.map((ind, idx) => (
                <Reveal key={idx} delay={idx * 50}>
                  <Link
                    href={ind.href}
                    className="group flex items-center justify-between rounded-xl border border-border bg-background p-5 transition-all hover:border-foreground/40 hover:shadow-md"
                  >
                    <span className="text-base font-medium text-foreground">{ind.name}</span>
                    <ArrowUpRight className="size-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                  </Link>
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
