'use client'

import { Check, MessageCircle, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

type Plan = {
  id: string
  name: string
  popular?: boolean
  description: string
  price: string
  priceLabel: string
  stats: {
    pages: string
    delivery: string
    revisions: string
  }
  features: string[]
}

const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'A professional website to establish your online presence.',
    price: '₹9,999',
    priceLabel: 'one-time',
    stats: {
      pages: '3',
      delivery: '7 days',
      revisions: '1',
    },
    features: [
      'Custom design',
      'Mobile responsive',
      'Contact form',
      'WhatsApp integration',
      'Website deployment & launch',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    popular: true,
    description: 'Built to get found and turn visitors into enquiries.',
    price: '₹17,999',
    priceLabel: 'one-time',
    stats: {
      pages: '5',
      delivery: '10 days',
      revisions: '2',
    },
    features: [
      'Everything in Starter',
      'Basic SEO setup',
      'Google Maps integration',
      'Enquiry-focused sections',
      'Website deployment & launch',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'A complete, done-for-you website launch.',
    price: '₹24,999',
    priceLabel: 'one-time',
    stats: {
      pages: '8',
      delivery: '14 days',
      revisions: '3',
    },
    features: [
      'Everything in Pro',
      'Domain setup assistance',
      'Hosting setup assistance',
      'Google Analytics setup',
      'SEO setup',
      'Content structure assistance',
      'Priority support',
      'Website deployment & launch',
    ],
  },
]

export function Pricing() {
  const getWhatsAppLink = (planName: string, price: string) => {
    const message = encodeURIComponent(
      `Hi LaunchKaro, I'm interested in the ${planName} plan (${price}). Can we discuss getting started?`
    )
    return `https://wa.me/919423509134?text=${message}`
  }

  const advisoryWhatsAppLink = `https://wa.me/919423509134?text=${encodeURIComponent(
    "Hi LaunchKaro, I'm not sure which website plan fits my business best. Can you help me decide?"
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

        {/* Pricing Cards Grid */}
        <div className="mt-10 sm:mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8 items-stretch">
          {plans.map((plan, i) => {
            const isPro = plan.popular

            return (
              <Reveal
                key={plan.id}
                delay={140 + i * 80}
                className="flex"
              >
                <div
                  className={cn(
                    'relative flex w-full flex-col justify-between rounded-2xl border transition-all duration-500 ease-out-expo p-6 sm:p-8',
                    isPro
                      ? 'border-foreground/40 bg-background shadow-xl shadow-foreground/5 ring-1 ring-foreground/20 lg:-translate-y-2'
                      : 'border-border bg-card/60 hover:border-foreground/30 hover:bg-card'
                  )}
                >
                  {/* Pro "MOST POPULAR" Badge */}
                  {isPro && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3.5 py-1 text-[11px] font-semibold tracking-wider text-background uppercase shadow-sm">
                        <Sparkles className="size-3 text-signal" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Header Info */}
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
                        {plan.name}
                      </h3>
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty min-h-[44px]">
                      {plan.description}
                    </p>

                    {/* Price Display */}
                    <div className="mt-5 border-y border-border/70 py-4 flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-xs font-mono tracking-wide text-muted-foreground uppercase">
                        {plan.priceLabel}
                      </span>
                    </div>

                    {/* Stats Summary Block */}
                    <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl border border-border/70 bg-secondary/50 p-3 text-center">
                      <div>
                        <span className="block text-[10px] font-mono uppercase tracking-wider text-muted-foreground">PAGES</span>
                        <span className="text-sm font-semibold text-foreground font-mono">{plan.stats.pages}</span>
                      </div>
                      <div className="border-x border-border/60">
                        <span className="block text-[10px] font-mono uppercase tracking-wider text-muted-foreground">DELIVERY</span>
                        <span className="text-sm font-semibold text-foreground font-mono">{plan.stats.delivery}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] font-mono uppercase tracking-wider text-muted-foreground">REVISIONS</span>
                        <span className="text-sm font-semibold text-foreground font-mono">{plan.stats.revisions}</span>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="mt-6 space-y-3">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-foreground/75 block">
                        Included Features
                      </span>
                      <ul className="space-y-2.5">
                        {plan.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-sm text-foreground/90"
                          >
                            <span className="mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-foreground">
                              <Check className="size-3 stroke-[2.5]" />
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Primary WhatsApp CTA Action Button */}
                  <div className="mt-8 pt-2">
                    <a
                      href={getWhatsAppLink(plan.name, plan.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'group flex h-12 w-full items-center justify-center gap-2 rounded-full text-sm font-medium tracking-tight transition-all duration-300 ease-out-expo active:scale-[0.98]',
                        isPro
                          ? 'bg-foreground text-background hover:bg-foreground/90 shadow-md shadow-foreground/10'
                          : 'border border-foreground/25 bg-background text-foreground hover:border-foreground hover:bg-foreground hover:text-background'
                      )}
                    >
                      <MessageCircle className={cn('size-4 shrink-0', isPro ? 'text-emerald-400' : 'text-emerald-500')} />
                      <span>Start on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Footer line below cards */}
        <Reveal delay={320} className="mt-12 sm:mt-16 text-center">
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
