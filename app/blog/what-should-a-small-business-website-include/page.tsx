import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { CtaFooter } from '@/components/cta-footer'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: `What Should a Small Business Website Include? | ${SITE_CONFIG.name}`,
  description:
    'Essential sections, features, and mobile contact options every local business website needs to convert visitors into inquiries.',
  alternates: {
    canonical: '/blog/what-should-a-small-business-website-include',
  },
  openGraph: {
    title: `What Should a Small Business Website Include? | ${SITE_CONFIG.name}`,
    description:
      'Essential sections and mobile contact options every local business website needs.',
    url: `${SITE_CONFIG.domain}/blog/what-should-a-small-business-website-include`,
    siteName: SITE_CONFIG.name,
    locale: 'en_IN',
    type: 'article',
  },
}

export default function Article2Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Should a Small Business Website Include?',
    description:
      'Essential sections every local business website needs to convert visitors.',
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
    mainEntityOfPage: `${SITE_CONFIG.domain}/blog/what-should-a-small-business-website-include`,
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
                { label: 'Essential Business Website Features' },
              ]}
            />

            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-muted-foreground font-mono">
                <span>GUIDE — WEB DESIGN</span>
                <span>•</span>
                <span>5 MIN READ</span>
              </div>

              <h1 className="text-[clamp(2.2rem,5.5vw,3.8rem)] leading-[1.08] font-medium tracking-[-0.03em]">
                What Should a Small Business Website Include?
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed pt-2 border-b border-border/70 pb-8">
                A successful website for a local shop, clinic, or service business doesn&apos;t need complex features. It needs clear, accessible answers that turn visitors into calls or visits.
              </p>

              <div className="space-y-6 text-foreground/90 leading-relaxed text-base pt-4">
                <h2 className="text-2xl font-medium tracking-tight text-foreground">1. Clear Headline & Location Statement</h2>
                <p>
                  Within 3 seconds, a visitor should understand what your business does and where you are located.
                  Include your primary services and city prominently in the hero section.
                </p>

                <h2 className="text-2xl font-medium tracking-tight text-foreground">2. Mobile-First Layout & Fast Loading</h2>
                <p>
                  Most customers search on their mobile phones while on the go. Your website must load quickly on 4G networks and render cleanly on smaller screens.
                </p>

                <h2 className="text-2xl font-medium tracking-tight text-foreground">3. Direct Contact Channels (WhatsApp & Call)</h2>
                <p>
                  Include click-to-call links, a WhatsApp inquiry button, and a clean contact form so customers can reach out through their preferred channel.
                </p>

                <h2 className="text-2xl font-medium tracking-tight text-foreground">4. Service & Product Highlights</h2>
                <p>
                  Break down what you sell or offer into organized sections so visitors can evaluate your offerings easily.
                </p>

                <div className="mt-8 rounded-2xl bg-secondary/50 p-6 border border-border/80 space-y-4">
                  <h3 className="text-lg font-medium text-foreground">Need a clean, mobile-first website for your business?</h3>
                  <p className="text-sm text-muted-foreground">
                    Explore LaunchKaro&apos;s custom website design services in Latur.
                  </p>
                  <Link
                    href="/web-design-latur"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-medium text-background hover:bg-foreground/90 transition-colors"
                  >
                    <span>Explore Web Design Services</span>
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
