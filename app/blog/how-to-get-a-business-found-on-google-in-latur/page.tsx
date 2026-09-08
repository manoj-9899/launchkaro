import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { CtaFooter } from '@/components/cta-footer'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: `How to Get Your Business Found on Google in Latur | ${SITE_CONFIG.name}`,
  description:
    'Practical local SEO steps for local business owners in Latur & Maharashtra to improve Google search visibility and attract nearby customers.',
  alternates: {
    canonical: '/blog/how-to-get-a-business-found-on-google-in-latur',
  },
  openGraph: {
    title: `How to Get Your Business Found on Google in Latur | ${SITE_CONFIG.name}`,
    description:
      'Practical local SEO steps for local business owners in Latur & Maharashtra.',
    url: `${SITE_CONFIG.domain}/blog/how-to-get-a-business-found-on-google-in-latur`,
    siteName: SITE_CONFIG.name,
    locale: 'en_IN',
    type: 'article',
  },
}

export default function Article3Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Get Your Business Found on Google in Latur',
    description:
      'Practical local SEO steps for local business owners in Latur & Maharashtra.',
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
    mainEntityOfPage: `${SITE_CONFIG.domain}/blog/how-to-get-a-business-found-on-google-in-latur`,
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
                { label: 'Local SEO Guide Latur' },
              ]}
            />

            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-muted-foreground font-mono">
                <span>GUIDE — LOCAL SEO</span>
                <span>•</span>
                <span>5 MIN READ</span>
              </div>

              <h1 className="text-[clamp(2.2rem,5.5vw,3.8rem)] leading-[1.08] font-medium tracking-[-0.03em]">
                How to Get Your Business Found on Google in Latur
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed pt-2 border-b border-border/70 pb-8">
                When nearby customers search for services on their phones, appearing on Google Search and Google Maps is essential for acquiring new leads.
              </p>

              <div className="space-y-6 text-foreground/90 leading-relaxed text-base pt-4">
                <h2 className="text-2xl font-medium tracking-tight text-foreground">1. Set Up & Verify Google Business Profile</h2>
                <p>
                  Create a free Google Business Profile for your shop, clinic, or office in Latur. Ensure your business name, phone number, and service categories are accurate.
                </p>

                <h2 className="text-2xl font-medium tracking-tight text-foreground">2. Build a Fast, Search-Friendly Website</h2>
                <p>
                  Search engine crawlers evaluate page load speed, mobile layout, meta descriptions, and clean HTML structure when ranking sites for local queries.
                </p>

                <h2 className="text-2xl font-medium tracking-tight text-foreground">3. Include Local Schema & Location Signals</h2>
                <p>
                  Using structured data markup (`PostalAddress`, `AdministrativeArea`, `areaServed`) clarifies your geographic service area for search engine algorithms.
                </p>

                <div className="mt-8 rounded-2xl bg-secondary/50 p-6 border border-border/80 space-y-4">
                  <h3 className="text-lg font-medium text-foreground">Want built-in local SEO foundations for your website?</h3>
                  <p className="text-sm text-muted-foreground">
                    LaunchKaro includes local SEO setup and structured metadata in our business website builds.
                  </p>
                  <Link
                    href="/local-seo-latur"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-medium text-background hover:bg-foreground/90 transition-colors"
                  >
                    <span>Learn About Local SEO Setup</span>
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
