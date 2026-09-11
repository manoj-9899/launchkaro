import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { CtaFooter } from '@/components/cta-footer'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Reveal } from '@/components/reveal'
import { ProjectCard } from '@/components/project-card'
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
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 sm:gap-10 md:grid-cols-2">
              {projects.map((p, idx) => (
                <Reveal key={p.slug} delay={idx * 60}>
                  <ProjectCard
                    title={p.title}
                    category={p.category}
                    image={p.image}
                    href={`/work/${p.slug}`}
                    liveUrl={p.liveUrl}
                    priority={idx < 2}
                  />
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
