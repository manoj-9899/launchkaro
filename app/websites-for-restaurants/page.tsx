import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Utensils, MessageCircle, MapPin, Smartphone } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { CtaFooter } from '@/components/cta-footer'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { MagneticButton } from '@/components/magnetic-button'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Restaurant & Café Website Design in Latur | ${SITE_CONFIG.name}`,
  description:
    'Custom website design for fine dining restaurants, cafés, and eateries in Latur & Maharashtra. Digital menus, location maps, and WhatsApp reservations.',
  alternates: {
    canonical: '/websites-for-restaurants',
  },
  openGraph: {
    title: `Restaurant & Café Website Design in Latur | ${SITE_CONFIG.name}`,
    description:
      'Custom website design for restaurants and cafés in Latur. Digital menus and WhatsApp ordering.',
    url: `${SITE_CONFIG.domain}/websites-for-restaurants`,
    siteName: SITE_CONFIG.name,
    locale: 'en_IN',
    type: 'website',
  },
}

const features = [
  {
    icon: Utensils,
    title: 'Digital Menu Presentation',
    desc: 'Clean, mobile-optimized menu layout making food items, specials, and prices easy to read on mobile phones.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Ordering & Inquiries',
    desc: 'Direct WhatsApp integration so customers can inquire about table reservations, party bookings, or takeaway orders.',
  },
  {
    icon: MapPin,
    title: 'Google Maps Location Integration',
    desc: 'Embedded maps and address directions so diners can navigate to your restaurant easily.',
  },
  {
    icon: Smartphone,
    title: 'Fast Mobile Browsing',
    desc: 'Built to load instantly on 4G/5G mobile networks when hungry customers search on their phones.',
  },
]

export default function RestaurantWebsitesPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-24 sm:pt-28 md:pt-32">
        <section className="px-4 py-12 sm:px-6 md:px-10">
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs items={[{ label: 'Industries' }, { label: 'Restaurant & Café Websites' }]} />

            <div className="max-w-4xl pt-4">
              <div className="flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-muted-foreground font-mono">
                <span className="size-2 rounded-full bg-signal" />
                <span>DINING & HOSPITALITY WEB DESIGN</span>
              </div>

              <h1 className="mt-4 text-[clamp(2.2rem,6.5vw,4.5rem)] leading-[1.02] font-medium tracking-[-0.035em] text-balance">
                Websites for restaurants & cafés that{' '}
                <em className="font-serif font-normal italic text-foreground/80">turn viewers into diners</em>.
              </h1>

              <p className="mt-6 text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-3xl">
                We design mood-lit, mobile-first websites for luxury restaurants, local cafés, and food businesses.
                Showcase your food, share location details, and accept table bookings via WhatsApp.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <MagneticButton href="#contact-form">Start a project</MagneticButton>
                <MagneticButton href="/pricing" variant="outline" icon={false}>
                  View website plans
                </MagneticButton>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-4 py-16 sm:px-6 md:px-10 border-t border-border/70">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              index="01"
              label="Key Features"
              title={
                <>
                  What every great restaurant website{' '}
                  <em className="font-serif font-normal italic text-foreground/75">needs to include</em>.
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

        {/* Portfolio Showcase References */}
        <section className="px-4 py-16 sm:px-6 md:px-10 bg-secondary/30 border-t border-border/70">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              index="02"
              label="Showcase Examples"
              title={
                <>
                  Dining & restaurant designs from{' '}
                  <em className="font-serif font-normal italic text-foreground/75">our portfolio showcase</em>.
                </>
              }
            />

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <Reveal className="group rounded-2xl border border-border bg-card overflow-hidden p-6 space-y-4">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-secondary">
                  <Image
                    src="/images/work-1.webp"
                    alt="Nocturne fine dining website design showcase"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-baseline justify-between pt-2">
                  <div>
                    <h3 className="text-2xl font-medium text-foreground">Nocturne</h3>
                    <p className="text-xs text-muted-foreground font-mono">Fine Dining (2025)</p>
                  </div>
                  <Link href="/work/nocturne" className="link-underline text-sm font-medium text-foreground flex items-center gap-1">
                    View project case study <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={100} className="group rounded-2xl border border-border bg-card overflow-hidden p-6 space-y-4">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-secondary">
                  <Image
                    src="/images/work-4.webp"
                    alt="Spice Palace restaurant website design showcase"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-baseline justify-between pt-2">
                  <div>
                    <h3 className="text-2xl font-medium text-foreground">Spice Palace</h3>
                    <p className="text-xs text-muted-foreground font-mono">Café & Restaurant (2024)</p>
                  </div>
                  <Link href="/work/spice-palace" className="link-underline text-sm font-medium text-foreground flex items-center gap-1">
                    View project case study <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <CtaFooter />
    </>
  )
}
