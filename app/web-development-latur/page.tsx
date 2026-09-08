import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Code, ShieldCheck, Zap, Globe } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { CtaFooter } from '@/components/cta-footer'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { MagneticButton } from '@/components/magnetic-button'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Website Development in Latur | ${SITE_CONFIG.name}`,
  description:
    'Professional business website development in Latur, Maharashtra. Fast, clean Next.js code built for local shops, clinics, institutes, and service businesses.',
  alternates: {
    canonical: '/web-development-latur',
  },
  openGraph: {
    title: `Website Development in Latur | ${SITE_CONFIG.name}`,
    description:
      'Professional business website development in Latur. Fast Next.js websites for local businesses.',
    url: `${SITE_CONFIG.domain}/web-development-latur`,
    siteName: SITE_CONFIG.name,
    locale: 'en_IN',
    type: 'website',
  },
}

const techPoints = [
  {
    icon: Code,
    title: 'Clean Next.js & React Code',
    desc: 'We write modern TypeScript and Next.js code so your website is robust, lightning-fast, and secure.',
  },
  {
    icon: Zap,
    title: 'Fast Loading Speed',
    desc: 'Optimized asset sizes, efficient code splitting, and static pre-rendering ensure instant page loads on 4G and 5G networks.',
  },
  {
    icon: Globe,
    title: 'Domain & Hosting Setup',
    desc: 'We assist with domain connection and SSL security configuration so your website is safe and reliable.',
  },
  {
    icon: ShieldCheck,
    title: 'Content Maintenance Ready',
    desc: 'Built so updating your business hours, pricing, photos, or contact info is simple and straightforward.',
  },
]

export default function WebDevelopmentLaturPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Website Development in Latur',
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
      'Clean, fast website development for businesses in Latur and across Maharashtra.',
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
            <Breadcrumbs items={[{ label: 'Services', href: '/#services' }, { label: 'Web Development Latur' }]} />

            <div className="max-w-4xl pt-4">
              <div className="flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-muted-foreground font-mono">
                <span className="size-2 rounded-full bg-signal" />
                <span>TECHNICAL EXCELLENCE — LATUR</span>
              </div>

              <h1 className="mt-4 text-[clamp(2.2rem,6.5vw,4.5rem)] leading-[1.02] font-medium tracking-[-0.035em] text-balance">
                Website development built for{' '}
                <em className="font-serif font-normal italic text-foreground/80">speed & local performance</em>.
              </h1>

              <p className="mt-6 text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-3xl">
                We develop clean, reliable websites for businesses in Latur. Modern Next.js architecture,
                mobile-optimized code, and easy content updates built to last.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <MagneticButton href="#contact-form">Start a project</MagneticButton>
                <MagneticButton href="/work" variant="outline" icon={false}>
                  Explore selected work
                </MagneticButton>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 md:px-10 border-t border-border/70">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              index="01"
              label="Development Standards"
              title={
                <>
                  What goes into our{' '}
                  <em className="font-serif font-normal italic text-foreground/75">website builds</em>.
                </>
              }
            />

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {techPoints.map((tp, idx) => (
                <Reveal key={idx} delay={idx * 60} className="rounded-2xl border border-border/80 bg-card p-6 flex flex-col justify-between">
                  <div>
                    <tp.icon className="size-6 text-foreground/70 stroke-[1.5]" />
                    <h3 className="mt-4 text-xl font-medium tracking-tight text-foreground">{tp.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{tp.desc}</p>
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
