import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { CtaFooter } from '@/components/cta-footer'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: `How Much Does a Business Website Cost in Latur? | ${SITE_CONFIG.name}`,
  description:
    'A realistic breakdown of website design costs in Latur, Maharashtra. Learn what small business website packages include and how pricing works.',
  alternates: {
    canonical: '/blog/how-much-does-a-business-website-cost-in-latur',
  },
  openGraph: {
    title: `How Much Does a Business Website Cost in Latur? | ${SITE_CONFIG.name}`,
    description:
      'A realistic breakdown of website design costs in Latur for local business owners.',
    url: `${SITE_CONFIG.domain}/blog/how-much-does-a-business-website-cost-in-latur`,
    siteName: SITE_CONFIG.name,
    locale: 'en_IN',
    type: 'article',
  },
}

export default function Article1Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How Much Does a Business Website Cost in Latur?',
    description:
      'A straightforward breakdown of website design costs in Latur, Maharashtra.',
    author: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.domain,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.domain,
    },
    datePublished: '2026-09-08',
    mainEntityOfPage: `${SITE_CONFIG.domain}/blog/how-much-does-a-business-website-cost-in-latur`,
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
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: 'Knowledge Hub', href: '/blog' },
                { label: 'Website Cost in Latur' },
              ]}
            />

            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-muted-foreground font-mono">
                <span>GUIDE — WEBSITE PRICING</span>
                <span>•</span>
                <span>4 MIN READ</span>
              </div>

              <h1 className="text-[clamp(2.2rem,5.5vw,3.8rem)] leading-[1.08] font-medium tracking-[-0.03em]">
                How Much Does a Business Website Cost in Latur?
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed pt-2 border-b border-border/70 pb-8">
                If you own a shop, clinic, restaurant, or service business in Latur, knowing what a professional website costs helps you budget accurately without getting overcharged.
              </p>

              <div className="space-y-6 text-foreground/90 leading-relaxed text-base pt-4">
                <h2 className="text-2xl font-medium tracking-tight text-foreground">Typical Website Price Ranges in Latur</h2>
                <p>
                  In Latur and across Maharashtra, website development pricing generally falls into three main tiers based on scope and customization:
                </p>

                <ul className="space-y-4 pl-4 border-l-2 border-border">
                  <li>
                    <strong className="text-foreground">1. Starter Business Sites (₹9,999):</strong> Designed for local shops or single-service businesses needing a clean 3-page online presence (Home, Services, Contact) with mobile responsiveness and WhatsApp contact options.
                  </li>
                  <li>
                    <strong className="text-foreground">2. Pro Growth Sites (₹17,999):</strong> Ideal for growing businesses (5 pages) requiring basic local SEO setup, Google Maps integration, and inquiry-focused sections.
                  </li>
                  <li>
                    <strong className="text-foreground">3. Premium Complete Launches (₹24,999):</strong> For established firms needing 8 pages, custom content structure, Google Analytics setup, and domain/hosting configuration.
                  </li>
                </ul>

                <h2 className="text-2xl font-medium tracking-tight text-foreground pt-6">What Influences the Final Cost?</h2>
                <p>
                  Three primary factors determine website cost:
                </p>
                <ol className="list-decimal pl-5 space-y-2">
                  <td><strong>Page Count:</strong> More pages require additional layout design and content structuring.</td>
                  <td><strong>Customization:</strong> Hand-crafted code vs generic heavy templates that slow down mobile load speed.</td>
                  <td><strong>Included Services:</strong> Whether domain setup, local SEO foundations, and mobile optimization are included.</td>
                </ol>

                <div className="mt-8 rounded-2xl bg-secondary/50 p-6 border border-border/80 space-y-4">
                  <h3 className="text-lg font-medium text-foreground">Looking for transparent fixed pricing?</h3>
                  <p className="text-sm text-muted-foreground">
                    LaunchKaro offers fixed-fee packages with defined page counts, revisions, and delivery timelines.
                  </p>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-medium text-background hover:bg-foreground/90 transition-colors"
                  >
                    <span>View LaunchKaro Pricing Packages</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CtaFooter />
    </>
  )
}
