import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Sparkles, Image as ImageIcon, MapPin, CalendarCheck } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { CtaFooter } from '@/components/cta-footer'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { MagneticButton } from '@/components/magnetic-button'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Event Venue & Banquet Hall Website Design in Latur | ${SITE_CONFIG.name}`,
  description:
    'Custom website design for wedding venues, banquet halls, and event spaces in Latur & Maharashtra. Photo galleries, amenities, and booking inquiry flows.',
  alternates: {
    canonical: '/websites-for-event-venues',
  },
  openGraph: {
    title: `Event Venue & Banquet Hall Website Design in Latur | ${SITE_CONFIG.name}`,
    description:
      'Custom website design for wedding venues and banquet halls in Latur.',
    url: `${SITE_CONFIG.domain}/websites-for-event-venues`,
    siteName: SITE_CONFIG.name,
    locale: 'en_IN',
    type: 'website',
  },
}

const features = [
  {
    icon: ImageIcon,
    title: 'Banquet & Lawn Photo Galleries',
    desc: 'High-quality image galleries highlighting hall seating, mandap setups, dining capacity, and lighting.',
  },
  {
    icon: CalendarCheck,
    title: 'Date Availability & Booking Inquiry',
    desc: 'Direct WhatsApp and contact form integration for families to inquire about event dates and package rates.',
  },
  {
    icon: Sparkles,
    title: 'Amenity Breakdown',
    desc: 'Detailed lists of seating capacity, air conditioning, parking space, catering facilities, and generator backup.',
  },
  {
    icon: MapPin,
    title: 'Location Map & Contact Details',
    desc: 'Google Maps location embed and direct phone numbers so wedding planners and families can reach you easily.',
  },
]

export default function EventVenueWebsitesPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-24 sm:pt-28 md:pt-32">
        <section className="px-4 py-12 sm:px-6 md:px-10">
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs items={[{ label: 'Industries' }, { label: 'Event Venue Websites' }]} />

            <div className="max-w-4xl pt-4">
              <div className="flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-muted-foreground font-mono">
                <span className="size-2 rounded-full bg-signal" />
                <span>VENUE & BANQUET WEB DESIGN</span>
              </div>

              <h1 className="mt-4 text-[clamp(2.2rem,6.5vw,4.5rem)] leading-[1.02] font-medium tracking-[-0.035em] text-balance">
                Websites for event venues & function halls that{' '}
                <em className="font-serif font-normal italic text-foreground/80">showcase your space</em>.
              </h1>

              <p className="mt-6 text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-3xl">
                We design photo-rich websites for wedding halls, banquet venues, and event spaces in Latur.
                Showcase amenities, display venue capacity, and accept booking inquiries directly on WhatsApp.
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

        <section className="px-4 py-16 sm:px-6 md:px-10 border-t border-border/70">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              index="01"
              label="Venue Features"
              title={
                <>
                  What every banquet hall website{' '}
                  <em className="font-serif font-normal italic text-foreground/75">should include</em>.
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
                  Venue design from{' '}
                  <em className="font-serif font-normal italic text-foreground/75">our portfolio showcase</em>.
                </>
              }
            />

            <div className="mt-12 max-w-2xl">
              <Reveal className="group rounded-2xl border border-border bg-card overflow-hidden p-6 space-y-4">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-secondary">
                  <Image
                    src="/images/work-3.webp"
                    alt="Patel Function Hall event venue website design showcase"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-baseline justify-between pt-2">
                  <div>
                    <h3 className="text-2xl font-medium text-foreground">Patel Function Hall</h3>
                    <p className="text-xs text-muted-foreground font-mono">Events & Venues (2024)</p>
                  </div>
                  <Link href="/work/patel-function-hall" className="link-underline text-sm font-medium text-foreground flex items-center gap-1">
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
