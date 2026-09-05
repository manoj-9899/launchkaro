import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Work } from '@/components/work'
import { Process } from '@/components/process'
import { Pricing } from '@/components/pricing'
import { CtaFooter } from '@/components/cta-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <Pricing />
      </main>
      <CtaFooter />
    </>
  )
}
