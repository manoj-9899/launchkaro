import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { CtaFooter } from '@/components/cta-footer'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Reveal } from '@/components/reveal'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Knowledge Hub & Website Guides for Local Businesses | ${SITE_CONFIG.name}`,
  description:
    'Practical guides and articles on website design, website costs, and local Google search visibility for small business owners in Latur & Maharashtra.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: `Knowledge Hub & Website Guides | ${SITE_CONFIG.name}`,
    description:
      'Practical guides on website design, website costs, and local SEO for small business owners in Latur.',
    url: `${SITE_CONFIG.domain}/blog`,
    siteName: SITE_CONFIG.name,
    locale: 'en_IN',
    type: 'website',
  },
}

const articles = [
  {
    slug: 'how-much-does-a-business-website-cost-in-latur',
    title: 'How Much Does a Business Website Cost in Latur?',
    description:
      'A straightforward breakdown of website design prices, domain/hosting costs, and what small businesses in Latur should expect to pay.',
    date: 'September 2026',
    category: 'Website Pricing',
  },
  {
    slug: 'what-should-a-small-business-website-include',
    title: 'What Should a Small Business Website Include?',
    description:
      'The essential pages, mobile features, contact options, and trust elements every local business website needs to convert visitors.',
    date: 'September 2026',
    category: 'Web Design',
  },
  {
    slug: 'how-to-get-a-business-found-on-google-in-latur',
    title: 'How to Get Your Business Found on Google in Latur',
    description:
      'Practical local SEO steps for shops, clinics, and service businesses in Maharashtra to show up when nearby customers search.',
    date: 'September 2026',
    category: 'Local SEO',
  },
]

export default function BlogOverviewPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-24 sm:pt-28 md:pt-32">
        <section className="px-4 py-12 sm:px-6 md:px-10">
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs items={[{ label: 'Knowledge Hub' }]} />

            <div className="max-w-4xl pt-4">
              <div className="flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-muted-foreground font-mono">
                <span className="size-2 rounded-full bg-signal" />
                <span>KNOWLEDGE HUB & GUIDES</span>
              </div>

              <h1 className="mt-4 text-[clamp(2.2rem,6.5vw,4.5rem)] leading-[1.02] font-medium tracking-[-0.035em] text-balance">
                Practical guides for local business owners{' '}
                <em className="font-serif font-normal italic text-foreground/80">in Latur & Maharashtra</em>.
              </h1>

              <p className="mt-6 text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-3xl">
                No technical jargon or fluff. Clear articles explaining website costs, essential features, and how local SEO works for small businesses.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 md:px-10 border-t border-border/70">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-3">
              {articles.map((art, idx) => (
                <Reveal key={art.slug} delay={idx * 60} className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                      <span>{art.category}</span>
                      <span>{art.date}</span>
                    </div>

                    <h2 className="mt-4 text-xl sm:text-2xl font-medium text-foreground tracking-tight leading-snug">
                      <Link href={`/blog/${art.slug}`} className="hover:text-foreground/80 transition-colors">
                        {art.title}
                      </Link>
                    </h2>

                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {art.description}
                    </p>
                  </div>

                  <Link
                    href={`/blog/${art.slug}`}
                    className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-foreground pt-4 border-t border-border/50"
                  >
                    Read full guide <ArrowUpRight className="size-4" />
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
