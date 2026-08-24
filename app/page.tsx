import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Positioning } from '@/components/positioning'
import { IndustryStrip } from '@/components/industry-strip'
import { ServicesShowcase } from '@/components/services-showcase'
import { SelectedWork } from '@/components/selected-work'
import { Pricing } from '@/components/pricing'
import { WhyLaunchKaro } from '@/components/why-launchkaro'
import { Process } from '@/components/process'
import { FinalCta } from '@/components/final-cta'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Positioning />
        <IndustryStrip />
        <ServicesShowcase />
        <SelectedWork />
        <Pricing />
        <WhyLaunchKaro />
        <Process />
        <ContactSection />
        <FinalCta />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  )
}
