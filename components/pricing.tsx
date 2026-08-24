'use client'

import { useState, useRef } from 'react'
import { Check, Minus } from 'lucide-react'

const packages = [
  {
    name: 'Starter',
    hook: 'Perfect for getting online fast',
    price: '₹9,999',
    delivery: '7-day delivery',
    revisions: '1 revision',
    popular: false,
    features: [
      { text: '3 pages', included: true },
      { text: 'Custom design', included: true },
      { text: 'Mobile responsive', included: true },
      { text: 'Contact form', included: true },
      { text: 'SEO basics', included: false },
      { text: 'Google Maps + WhatsApp integration', included: false },
      { text: 'Domain & hosting help', included: false },
    ],
  },
  {
    name: 'Pro',
    hook: 'Best for businesses serious about growth',
    badge: 'Most Popular',
    price: '₹17,999',
    delivery: '10-day delivery',
    revisions: '2 revisions',
    popular: true,
    features: [
      { text: '5 pages', included: true },
      { text: 'Custom design', included: true },
      { text: 'Mobile responsive', included: true },
      { text: 'Contact form', included: true },
      { text: 'SEO basics', included: true },
      { text: 'Google Maps + WhatsApp integration', included: true },
      { text: 'Domain & hosting help', included: false },
    ],
  },
  {
    name: 'Premium',
    hook: 'For brands that want everything done right',
    price: '₹24,999',
    delivery: '14-day delivery',
    revisions: '3 revisions',
    popular: false,
    features: [
      { text: '8 pages', included: true },
      { text: 'Custom design', included: true },
      { text: 'Mobile responsive', included: true },
      { text: 'Contact form', included: true },
      { text: 'SEO basics', included: true },
      { text: 'Google Maps + WhatsApp integration', included: true },
      { text: 'Domain & hosting help', included: true },
    ],
  },
]

const getWhatsAppLink = (packageName: string, price: string, withMaintenance: boolean) => {
  const planDetails = `${packageName} package (${price}${withMaintenance ? ' + ₹999/month maintenance' : ''})`
  const message = `Hi LaunchKaro! I'm interested in the ${planDetails}. I'd like to get started with my website project.`
  return `https://wa.me/919423503805?text=${encodeURIComponent(message)}`
}

export function Pricing() {
  const [maintenanceMode, setMaintenanceMode] = useState(false)
  const [activeDot, setActiveDot] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (!carouselRef.current) return
    const scrollLeft = carouselRef.current.scrollLeft
    const width = carouselRef.current.clientWidth
    const index = Math.round(scrollLeft / (width * 0.75))
    setActiveDot(Math.min(Math.max(index, 0), packages.length - 1))
  }

  return (
    <section id="pricing" className="bg-background py-12 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header & Toggle */}
        <div className="mb-10 text-center md:mb-14">
          <h2 className="font-serif text-3xl text-foreground text-balance md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground text-pretty md:mt-4 md:text-lg">
            No hidden costs. No surprises. Just great work.
          </p>

          {/* Website Only vs Maintenance Toggle */}
          <div className="mt-6 inline-flex items-center rounded-full border border-border bg-card p-1 shadow-2xs">
            <button
              type="button"
              onClick={() => setMaintenanceMode(false)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                !maintenanceMode
                  ? 'bg-primary text-primary-foreground shadow-xs'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Website Only
            </button>
            <button
              type="button"
              onClick={() => setMaintenanceMode(true)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                maintenanceMode
                  ? 'bg-primary text-primary-foreground shadow-xs'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Website + Maintenance
            </button>
          </div>
        </div>

        {/* Carousel & Cards */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 pt-2 -mx-6 px-6 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:mx-0 lg:px-0 lg:pb-0 items-stretch scrollbar-none"
        >
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col justify-between rounded-3xl p-6 md:p-10 transition-all w-[85vw] max-w-[340px] shrink-0 snap-center lg:w-auto ${
                pkg.popular
                  ? 'border-2 border-foreground bg-card'
                  : 'border border-border bg-card/60'
              }`}
            >
              <div>
                {/* Name + Inline Badge + Delivery */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-2xl text-foreground">
                      {pkg.name}
                    </h3>
                    {pkg.popular && (
                      <span className="rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary-foreground whitespace-nowrap">
                        {pkg.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground shrink-0">
                    {pkg.delivery}
                  </span>
                </div>

                {/* One-line value hook */}
                <p className="mt-1 text-xs text-muted-foreground font-normal">
                  {pkg.hook}
                </p>

                {/* Price & Maintenance Note */}
                <div className="mt-5 flex flex-col">
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-4xl font-normal text-foreground md:text-5xl">
                      {pkg.price}
                    </span>
                  </div>
                  {maintenanceMode && (
                    <span className="mt-1 text-xs font-medium text-muted-foreground">
                      + ₹999/month maintenance
                    </span>
                  )}
                </div>

                {/* Features list */}
                <div className="mt-7 border-t border-border pt-6">
                  <ul className="flex flex-col gap-3.5">
                    {pkg.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className={`flex items-center gap-3 text-sm ${
                          feature.included
                            ? 'text-foreground font-medium'
                            : 'text-muted-foreground/50'
                        }`}
                      >
                        {feature.included ? (
                          <Check className="h-4 w-4 shrink-0 text-foreground" />
                        ) : (
                          <Minus className="h-4 w-4 shrink-0 text-muted-foreground/40" />
                        )}
                        <span>{feature.text}</span>
                      </li>
                    ))}
                    <li className="flex items-center gap-3 text-sm text-foreground font-medium pt-1">
                      <Check className="h-4 w-4 shrink-0 text-foreground" />
                      <span>{pkg.revisions}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href={getWhatsAppLink(pkg.name, pkg.price, maintenanceMode)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-medium transition-all min-h-[48px] ${
                    pkg.popular
                      ? 'bg-primary text-primary-foreground hover:opacity-90'
                      : 'border border-border bg-background text-foreground hover:bg-secondary'
                  }`}
                >
                  Get Started →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Dot Indicators */}
        <div className="mt-4 flex justify-center items-center gap-2 lg:hidden">
          {packages.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full transition-all ${
                activeDot === i ? 'bg-primary w-4' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>

        {/* Reassurance line */}
        <div className="mt-10 text-center text-xs md:text-sm text-muted-foreground">
          Not sure which plan fits?{' '}
          <a
            href="https://wa.me/919423503805"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline underline-offset-4 hover:text-accent"
          >
            Chat with us
          </a>{' '}
          and we&apos;ll help you decide. No pressure.
        </div>
      </div>
    </section>
  )
}
