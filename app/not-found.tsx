import type { Metadata } from 'next'
import Link from 'next/link'
import { Home } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { CtaFooter } from '@/components/cta-footer'
import { MagneticButton } from '@/components/magnetic-button'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Page Not Found | ${SITE_CONFIG.name}`,
  description: 'The page you are looking for does not exist or has been moved.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24 px-4 sm:px-6 md:px-10 min-h-[70vh] flex items-center justify-center">
        <div className="mx-auto max-w-2xl text-center space-y-6">
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-muted-foreground font-mono">
            <span className="size-2 rounded-full bg-signal" />
            <span>404 ERROR — PAGE NOT FOUND</span>
          </div>

          <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] leading-[1.0] font-medium tracking-[-0.035em] text-foreground">
            Looks like this page{' '}
            <em className="font-serif font-normal italic text-foreground/75">doesn&apos;t exist</em>.
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto">
            The link you followed may be broken or the page has been moved. Explore our website services or return home.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href="/" icon={false}>
              <span className="flex items-center gap-2">
                <Home className="size-4" />
                <span>Return to Homepage</span>
              </span>
            </MagneticButton>
            <MagneticButton href="/pricing" variant="outline" icon={false}>
              View Fixed Pricing
            </MagneticButton>
          </div>
        </div>
      </main>
      <CtaFooter />
    </>
  )
}
