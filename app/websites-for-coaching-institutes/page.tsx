import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, GraduationCap, BookOpen, Users, Calendar } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { CtaFooter } from '@/components/cta-footer'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { MagneticButton } from '@/components/magnetic-button'
import { ProjectCard } from '@/components/project-card'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Coaching Institute Website Design in Latur | ${SITE_CONFIG.name}`,
  description:
    'Custom website design for coaching institutes, competitive exam prep classes (JEE/NEET), and educational centers in Latur & Maharashtra.',
  alternates: {
    canonical: '/websites-for-coaching-institutes',
  },
  openGraph: {
    title: `Coaching Institute Website Design in Latur | ${SITE_CONFIG.name}`,
    description:
      'Custom website design for coaching institutes and classes in Latur.',
    url: `${SITE_CONFIG.domain}/websites-for-coaching-institutes`,
    siteName: SITE_CONFIG.name,
    locale: 'en_IN',
    type: 'website',
  },
}

const features = [
  {
    icon: BookOpen,
    title: 'Course & Batch Presentation',
    desc: 'Clear breakdown of offered courses (JEE, NEET, Foundation), batch timings, syllabus overviews, and fee details.',
  },
  {
    icon: Calendar,
    title: 'Demo Class & Admission Booking',
    desc: 'Direct inquiry buttons for parents and students to book free demo classes or request admission counseling via WhatsApp.',
  },
  {
    icon: GraduationCap,
    title: 'Results & Achievements Gallery',
    desc: 'Structured sections highlighting student toppers, exam selections, and institute accomplishments to build trust.',
  },
  {
    icon: Users,
    title: 'Faculty & Infrastructure Profiles',
    desc: 'Dedicated profile blocks for subject faculty, classroom amenities, and teaching methodologies.',
  },
]

export default function CoachingWebsitesPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-24 sm:pt-28 md:pt-32">
        <section className="px-4 py-12 sm:px-6 md:px-10">
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs items={[{ label: 'Industries' }, { label: 'Coaching Institute Websites' }]} />

            <div className="max-w-4xl pt-4">
              <div className="flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-muted-foreground font-mono">
                <span className="size-2 rounded-full bg-signal" />
                <span>EDUCATION WEB DESIGN — LATUR</span>
              </div>

              <h1 className="mt-4 text-[clamp(2.2rem,6.5vw,4.5rem)] leading-[1.02] font-medium tracking-[-0.035em] text-balance">
                Websites for coaching institutes that{' '}
                <em className="font-serif font-normal italic text-foreground/80">drive student admissions</em>.
              </h1>

              <p className="mt-6 text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-3xl">
                We design modern websites for coaching classes, entrance exam centers, and educational institutes in Latur.
                Showcase programs, highlight faculty experience, and accept demo class bookings.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <MagneticButton href="#contact-form">Start a project</MagneticButton>
                <MagneticButton href="/pricing" variant="outline" icon={false}>
                  View pricing packages
                </MagneticButton>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 md:px-10 border-t border-border/70">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              index="01"
              label="Institute Features"
              title={
                <>
                  Essential features for{' '}
                  <em className="font-serif font-normal italic text-foreground/75">coaching class websites</em>.
                </>
              }
            />

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f, idx) => (
                <Reveal key={idx} delay={idx * 60} className="rounded-2xl border border-border/80 bg-card p-6 flex flex-col justify-between">
                  <div>
                    <f.icon className="size-6 text-foreground/70 stroke-[1.5]" />
                    <h3 className="mt-4 text-xl font-medium tracking-tight text-foreground">{f.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 md:px-10 bg-secondary/30 border-t border-border/70">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              index="02"
              label="Showcase Example"
              title={
                <>
                  Education design from{' '}
                  <em className="font-serif font-normal italic text-foreground/75">our portfolio showcase</em>.
                </>
              }
            />

            <div className="mt-12 max-w-xl">
              <Reveal>
                <ProjectCard
                  title="Ascent Academy"
                  category="Education & Coaching"
                  image="/images/work-5.webp"
                  href="/work/ascent-academy"
                  liveUrl="https://ascent-academy-website.vercel.app/"
                />
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <CtaFooter />
    </>
  )
}
