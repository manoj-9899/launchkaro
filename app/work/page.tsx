import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { CtaFooter } from '@/components/cta-footer'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Selected Work & Portfolio Showcase | ${SITE_CONFIG.name}`,
  description:
    'Explore selected web design and development showcase projects by LaunchKaro for local businesses in Latur and Maharashtra.',
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    title: `Selected Work & Portfolio Showcase | ${SITE_CONFIG.name}`,
    description:
      'Explore selected web design and development showcase projects by LaunchKaro.',
    url: `${SITE_CONFIG.domain}/work`,
    siteName: SITE_CONFIG.name,
    locale: 'en_IN',
    type: 'website',
  },
}

const projects = [
  {
    slug: 'nocturne',
    title: 'Nocturne',
    category: 'Fine Dining',
    image: '/images/work-1.webp',
    tagline: 'Elegant, mood-lit digital experience crafted for a luxury restaurant to showcase menus and table reservations.',
    liveUrl: 'https://nocturne-restaurant-website.vercel.app/',
    industryHref: '/websites-for-restaurants',
  },
  {
    slug: 'atelier-estate',
    title: 'Atelier Estate',
    category: 'Real Estate',
    image: '/images/work-2.webp',
    tagline: 'Sophisticated property portal designed for premium residential and luxury real estate listings.',
    liveUrl: 'https://atelier-estate-website.vercel.app/',
    industryHref: '/websites-for-real-estate',
  },
  {
    slug: 'patel-function-hall',
    title: 'Patel Function Hall',
    category: 'Events & Venues',
    image: '/images/work-3.webp',
    tagline: 'Event venue website highlighting banquet amenities, booking inquiries, and photo galleries for weddings and celebrations.',
    liveUrl: 'https://patel-function-hall-demo-1.vercel.app/',
    industryHref: '/websites-for-event-venues',
  },
  {
    slug: 'spice-palace',
    title: 'Spice Palace',
    category: 'Café & Restaurant',
    image: '/images/work-4.webp',
    tagline: 'Vibrant restaurant website with menu highlights, location integration, and direct ordering pathways.',
    liveUrl: 'https://spicepalace.netlify.app/',
    industryHref: '/websites-for-restaurants',
  },
  {
    slug: 'ascent-academy',
    title: 'Ascent Academy',
    category: 'Education',
    image: '/images/work-5.webp',
    tagline: 'Modern coaching institute website for entrance exam prep (JEE, NEET), built to showcase programs, faculty, and results with demo class bookings.',
    liveUrl: 'https://ascent-academy-website.vercel.app/',
    industryHref: '/websites-for-coaching-institutes',
  },
]

export default function WorkOverviewPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-24 sm:pt-28 md:pt-32">
        <section className="px-4 py-12 sm:px-6 md:px-10">
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs items={[{ label: 'Selected Work' }]} />

            <div className="max-w-4xl pt-4">
              <div className="flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-muted-foreground font-mono">
                <span className="size-2 rounded-full bg-signal" />
                <span>PORTFOLIO SHOWCASE</span>
              </div>

              <h1 className="mt-4 text-[clamp(2.2rem,6.5vw,4.5rem)] leading-[1.02] font-medium tracking-[-0.035em] text-balance">
                Selected work built to{' '}
                <em className="font-serif font-normal italic text-foreground/80">perform</em>.
              </h1>

              <p className="mt-6 text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-3xl">
                Explore showcase web design projects created for various local business categories — fine dining,
                real estate portals, event halls, cafés, and coaching institutes.
              </p>
            </div>
          </div>
        </section>

        {/* Project Grid */}
        <section className="px-4 py-16 sm:px-6 md:px-10 border-t border-border/70">
          <div className="mx-auto max-w-7xl space-y-12">
            {projects.map((p, idx) => (
              <Reveal key={p.slug} delay={idx * 60} className="group rounded-2xl border border-border bg-card overflow-hidden p-6 sm:p-8 space-y-6">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-secondary">
                  <Image
                    src={p.image}
                    alt={`${p.title} ${p.category} website design showcase`}
                    fill
                    priority={idx === 0}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-medium text-foreground">{p.title}</h2>
                    <p className="text-sm text-muted-foreground font-mono mt-1">
                      {p.category}
                    </p>
                    <p className="text-sm text-muted-foreground mt-3 max-w-2xl leading-relaxed">
                      {p.tagline}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 shrink-0">
                    <Link
                      href={`/work/${p.slug}`}
                      className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
                    >
                      Read project details <ArrowUpRight className="size-4" />
                    </Link>
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4.5 py-2 text-xs sm:text-sm font-medium text-background hover:bg-foreground/85 transition-all duration-300 shadow-sm active:scale-95"
                    >
                      <span>Live demo</span>
                      <ArrowUpRight className="size-3.5 text-background" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <CtaFooter />
    </>
  )
}
