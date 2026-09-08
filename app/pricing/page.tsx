import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { Pricing } from '@/components/pricing'
import { FAQ } from '@/components/faq'
import { CtaFooter } from '@/components/cta-footer'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Website Design Pricing Packages in Latur | ${SITE_CONFIG.name}`,
  description:
    'Simple, transparent website design pricing for local businesses in Latur. Starter (₹9,999), Pro (₹17,999), and Premium (₹24,999) fixed-fee packages with 7 to 14 day delivery.',
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: `Website Design Pricing Packages in Latur | ${SITE_CONFIG.name}`,
    description:
      'Transparent website design pricing packages for local businesses in Latur. Fixed prices from ₹9,999.',
    url: `${SITE_CONFIG.domain}/pricing`,
    siteName: SITE_CONFIG.name,
    locale: 'en_IN',
    type: 'website',
  },
}

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-24 sm:pt-28 md:pt-32">
        <div className="px-4 sm:px-6 md:px-10">
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs items={[{ label: 'Pricing' }]} />
          </div>
        </div>
        <Pricing />
        <FAQ />
      </main>
      <CtaFooter />
    </>
  )
}
