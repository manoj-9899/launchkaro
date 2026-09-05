'use client'

import { useState } from 'react'
import { ArrowRight, Check, Clock, Minus, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

type Plan = {
  id: string
  name: string
  delivery: string
  tagline: string
  oneTimePrice: string
  maintenancePrice: string
  popular?: boolean
  included: string[]
  notIncluded: string[]
}

const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    delivery: '7-day delivery',
    tagline: 'Perfect for getting online fast',
    oneTimePrice: '₹9,999',
    maintenancePrice: '+ ₹1,499/mo',
    included: [
      '3 pages',
      'Custom design',
      'Mobile responsive',
      'Contact form',
      '1 revision',
    ],
    notIncluded: [
      'SEO basics',
      'Google Maps + WhatsApp integration',
      'Domain & hosting help',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    delivery: '10-day delivery',
    tagline: 'Best for businesses serious about growth',
    oneTimePrice: '₹17,999',
    maintenancePrice: '+ ₹2,499/mo',
    popular: true,
    included: [
      '5 pages',
      'Custom design',
      'Mobile responsive',
      'Contact form',
      'SEO basics',
      'Google Maps + WhatsApp integration',
      '2 revisions',
    ],
    notIncluded: [
      'Domain & hosting help',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    delivery: '14-day delivery',
    tagline: 'For brands that want everything done right',
    oneTimePrice: '₹24,999',
    maintenancePrice: '+ ₹3,499/mo',
    included: [
      '8 pages',
      'Custom design',
      'Mobile responsive',
      'Contact form',
      'SEO basics',
      'Google Maps + WhatsApp integration',
      'Domain & hosting help',
      '3 revisions',
    ],
    notIncluded: [],
  },
]

export function Pricing() {
  const [billingType, setBillingType] = useState<'website' | 'maintenance'>('website')

  const getWhatsAppLink = (planName: string) => {
    const mode = billingType === 'website' ? 'Website Only' : 'Website + Maintenance'
    const message = encodeURIComponent(
      `Hi LaunchKaro, I'm interested in the ${planName} plan (${mode}). Can we discuss getting started?`,
    )
    return `https://wa.me/919423509134?text=${message}`
  }

  const advisoryWhatsAppLink = `https://wa.me/919423509134?text=${encodeURIComponent(
    "Hi LaunchKaro, I'm not sure which website plan fits my business best. Can you help me decide?",
  )}`

  return (
    <section id="pricing" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="04"
          label="Pricing"
          title={
            <>
              Simple,{' '}
              <em className="font-serif font-normal italic text-foreground/75">transparent</em>{' '}
              pricing.
            </>
          }
          aside={
            <p className="text-sm leading-relaxed text-muted-foreground">
              No hidden costs. No surprises. Just great work.
            </p>
          }
        />

        {/* Plan mode toggle */}
        <Reveal delay={120} className="mt-10 sm:mt-12 flex flex-col items-center justify-center gap-3">
          <div
            role="tablist"
            aria-label="Pricing billing options"
            className="inline-flex rounded-full border border-border bg-secondary/60 p-1 shadow-xs"
          >
            <button
              type="button"
              role="tab"
              aria-selected={billingType === 'website'}
              onClick={() => setBillingType('website')}
              className={cn(
                'relative rounded-full px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-300',
                billingType === 'website'
                  ? 'bg-foreground text-background shadow-xs'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              Website Only
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={billingType === 'maintenance'}
              onClick={() => setBillingType('maintenance')}
              className={cn(
                'relative flex items-center gap-1.5 rounded-full px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-300',
                billingType === 'maintenance'
                  ? 'bg-foreground text-background shadow-xs'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              <span>Website + Maintenance</span>
              <span
                className={cn(
                  'hidden sm:inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase',
                  billingType === 'maintenance'
                    ? 'bg-background/20 text-background'
                    : 'bg-foreground/10 text-foreground/80',
                )}
              >
                Care Plan
              </span>
            </button>
          </div>

          <p className="text-xs text-muted-foreground/80 text-center">
            {billingType === 'website'
              ? 'One-time setup with zero recurring obligations.'
              : 'Includes monthly content updates, speed optimization, and backups.'}
          </p>
        </Reveal>

        {/* Pricing Cards Grid */}
        <div className="mt-10 sm:mt-12 grid gap-6 lg:grid-cols-3 lg:gap-8 items-stretch">
          {plans.map((plan, i) => {
            const isPro = plan.popular

            return (
              <Reveal
                key={plan.id}
                delay={160 + i * 80}
                className="flex"
              >
                <div
                  className={cn(
                    'relative flex w-full flex-col justify-between rounded-2xl border transition-all duration-500 ease-out-expo p-6 sm:p-8',
                    isPro
                      ? 'border-foreground/40 bg-background shadow-xl shadow-foreground/5 ring-1 ring-foreground/20 lg:-translate-y-2'
                      : 'border-border bg-card/60 hover:border-foreground/30 hover:bg-card',
                  )}
                >
                  {/* Pro "Most Popular" Ribbon / Badge */}
                  {isPro && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3.5 py-1 text-[11px] font-semibold tracking-wider text-background uppercase shadow-sm">
                        <Sparkles className="size-3 text-signal" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Header info */}
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
                        {plan.name}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/80 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                        <Clock className="size-3" />
                        {plan.delivery}
                      </span>
                    </div>

                    <p className="mt-2.5 text-sm text-muted-foreground text-pretty min-h-[40px]">
                      {plan.tagline}
                    </p>

                    {/* Pricing Display */}
                    <div className="mt-6 border-y border-border/80 py-5">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
                          {plan.oneTimePrice}
                        </span>
                        {billingType === 'maintenance' && (
                          <span className="text-sm font-medium text-foreground/75">
                            {plan.maintenancePrice}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {billingType === 'website'
                          ? 'One-time project investment'
                          : 'Initial build + monthly care & updates'}
                      </p>
                    </div>

                    {/* Features list */}
                    <div className="mt-6 space-y-4">
                      <div>
                        <span className="text-[11px] font-semibold tracking-wider text-foreground/80 uppercase">
                          What&apos;s Included
                        </span>
                        <ul className="mt-3 space-y-2.5">
                          {plan.included.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-sm text-foreground/90"
                            >
                              <span className="mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-foreground">
                                <Check className="size-3 stroke-[2.5]" />
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {plan.notIncluded.length > 0 && (
                        <div className="pt-2">
                          <span className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                            Not Included
                          </span>
                          <ul className="mt-3 space-y-2.5">
                            {plan.notIncluded.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2.5 text-sm text-muted-foreground/70"
                              >
                                <span className="mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground/60">
                                  <Minus className="size-3" />
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CTA Action button */}
                  <div className="mt-8 pt-4">
                    <a
                      href={getWhatsAppLink(plan.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'group flex h-12 w-full items-center justify-center gap-2 rounded-full text-sm font-medium tracking-tight transition-all duration-300 ease-out-expo active:scale-[0.98]',
                        isPro
                          ? 'bg-foreground text-background hover:bg-foreground/90 shadow-md shadow-foreground/10'
                          : 'border border-foreground/25 bg-background text-foreground hover:border-foreground hover:bg-foreground hover:text-background',
                      )}
                    >
                      <span>Get Started</span>
                      <ArrowRight className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Footer line below cards */}
        <Reveal delay={360} className="mt-12 sm:mt-16 text-center">
          <p className="text-sm sm:text-base text-muted-foreground">
            Not sure which plan fits?{' '}
            <a
              href={advisoryWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4 decoration-foreground/30 transition-colors hover:decoration-foreground"
            >
              Chat with us
            </a>{' '}
            and we&apos;ll help you decide. No pressure.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
