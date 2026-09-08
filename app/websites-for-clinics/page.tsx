import type { Metadata } from 'next'
import { HeartPulse, Clock, MapPin, Stethoscope, Shield } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { CtaFooter } from '@/components/cta-footer'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { MagneticButton } from '@/components/magnetic-button'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Medical Clinic & Doctor Website Design in Latur | ${SITE_CONFIG.name}`,
  description:
    'Clean, trust-focused website design for medical clinics, doctors, and healthcare practices in Latur & Maharashtra. Doctor profiles, clinic timings, and appointment inquiries.',
  alternates: {
    canonical: '/websites-for-clinics',
  },
  openGraph: {
    title: `Medical Clinic & Doctor Website Design in Latur | ${SITE_CONFIG.name}`,
    description:
      'Clean, trust-focused website design for medical clinics & doctors in Latur.',
    url: `${SITE_CONFIG.domain}/websites-for-clinics`,
    siteName: SITE_CONFIG.name,
    locale: 'en_IN',
    type: 'website',
  },
}

const clinicGuide = [
  {
    icon: Stethoscope,
    title: 'Doctor & Specialist Profiles',
    desc: 'Clear doctor profiles displaying qualifications, specializations, consulting experience, and hospital affiliations.',
  },
  {
    icon: Clock,
    title: 'Consulting Hours & OPD Timings',
    desc: 'Accurate morning and evening OPD timings so patients know exactly when the clinic is open for consultations.',
  },
  {
    icon: HeartPulse,
    title: 'Services & Treatment Overview',
    desc: 'Organized lists of treatments offered, diagnostic facilities, and patient care procedures.',
  },
  {
    icon: MapPin,
    title: 'Clinic Location & Contact',
    desc: 'Google Maps navigation embed, emergency contact numbers, and direct WhatsApp inquiry for patient convenience.',
  },
]

export default function ClinicWebsitesPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-24 sm:pt-28 md:pt-32">
        <section className="px-4 py-12 sm:px-6 md:px-10">
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs items={[{ label: 'Industries' }, { label: 'Medical Clinic Websites' }]} />

            <div className="max-w-4xl pt-4">
              <div className="flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-muted-foreground font-mono">
                <span className="size-2 rounded-full bg-signal" />
                <span>HEALTHCARE WEB DESIGN — LATUR</span>
              </div>

              <h1 className="mt-4 text-[clamp(2.2rem,6.5vw,4.5rem)] leading-[1.02] font-medium tracking-[-0.035em] text-balance">
                Website design for medical clinics that{' '}
                <em className="font-serif font-normal italic text-foreground/80">instill trust & clarify OPD timings</em>.
              </h1>

              <p className="mt-6 text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-3xl">
                We design clean, professional websites for doctors, polyclinics, and healthcare practices in Latur.
                Present your qualifications clearly, share OPD hours, and make patient inquiries effortless.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <MagneticButton href="#contact-form">Start a project</MagneticButton>
                <MagneticButton href="/pricing" variant="outline" icon={false}>
                  View website plans
                </MagneticButton>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 md:px-10 border-t border-border/70">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              index="01"
              label="Essential Elements"
              title={
                <>
                  What a medical clinic website{' '}
                  <em className="font-serif font-normal italic text-foreground/75">should clearly communicate</em>.
                </>
              }
            />

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {clinicGuide.map((item, idx) => (
                <Reveal key={idx} delay={idx * 60} className="rounded-2xl border border-border/80 bg-card p-6 flex flex-col justify-between">
                  <div>
                    <item.icon className="size-6 text-foreground/70 stroke-[1.5]" />
                    <h3 className="mt-4 text-xl font-medium tracking-tight text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
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
