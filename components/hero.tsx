'use client'

import type { CSSProperties } from 'react'
import { MagneticButton } from '@/components/magnetic-button'

const d = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero viewport container: 85svh on mobile (Hero only in first viewport), 100vh on desktop */}
      <div className="relative flex min-h-[85svh] flex-col justify-between px-5 pt-24 pb-6 sm:min-h-[88svh] sm:px-6 sm:pt-28 sm:pb-8 md:min-h-screen md:px-10 md:pt-28 md:pb-12 lg:pt-32 lg:pb-14">
        {/* Subtle grid backdrop across the full hero viewport */}
        <div
          aria-hidden
          className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-70"
        />

        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between">
          {/* Main Hero Content Block: Eyebrow + Headline + Description + CTAs */}
          <div className="flex flex-col pt-1 sm:pt-2">
            {/* Eyebrow */}
            <div
              className="fade-up flex items-center gap-2.5 text-[11px] tracking-[0.14em] text-muted-foreground uppercase sm:gap-3 sm:text-xs sm:tracking-[0.18em]"
              style={d(300)}
            >
              <span className="h-px w-5 shrink-0 bg-foreground/35 sm:w-8" />
              <span className="leading-snug">
                DIGITAL AGENCY — LATUR, MAHARASHTRA
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-3.5 max-w-6xl text-[clamp(2.05rem,8.2vw,3.2rem)] leading-[1.02] font-medium tracking-[-0.04em] sm:mt-5 md:mt-8 md:text-[clamp(2.5rem,7.5vw,6.5rem)] md:leading-[0.98]">
              {/* Mobile 3-line balanced layout for phone viewports */}
              <span className="block md:hidden">
                <span className="line-mask py-0.5">
                  <span style={d(350)}>Websites that make</span>
                </span>
                <span className="line-mask py-0.5">
                  <span style={d(420)}>
                    <em className="font-serif font-normal italic tracking-[-0.02em] text-foreground/80">
                      local businesses
                    </em>
                  </span>
                </span>
                <span className="line-mask py-0.5">
                  <span style={d(490)}>impossible to ignore.</span>
                </span>
              </span>

              {/* Desktop 3-line layout matching desktop reference */}
              <span className="hidden md:block">
                <span className="line-mask py-0.5">
                  <span style={d(350)}>Websites that make</span>
                </span>
                <span className="line-mask py-0.5">
                  <span style={d(450)}>
                    <em className="font-serif font-normal italic tracking-[-0.02em] text-foreground/80">
                      local businesses
                    </em>
                  </span>
                </span>
                <span className="line-mask py-0.5">
                  <span style={d(550)}>impossible to ignore.</span>
                </span>
              </span>
            </h1>

            {/* Supporting Copy - placed directly beneath H1 */}
            <p
              className="fade-up mt-4 text-sm sm:text-base leading-relaxed text-pretty text-muted-foreground md:mt-6 md:text-lg lg:text-xl md:max-w-4xl"
              style={d(600)}
            >
              LaunchKaro is a digital agency based in Latur, Maharashtra. We design and build websites for local
              shops, clinics, and service businesses — fast, easy to update, and easy to find on Google.
            </p>

            {/* CTA Group - placed directly beneath supporting copy */}
            <div
              className="fade-up mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3.5 md:mt-8"
              style={d(700)}
            >
              <MagneticButton
                href="#contact-form"
                onClick={(e) => {
                  e.preventDefault()
                  window.dispatchEvent(new CustomEvent('open-contact-modal'))
                }}
                className="w-full h-12 sm:h-12.5 md:h-12 sm:w-auto text-[15px] sm:text-sm font-medium"
              >
                Start a project
              </MagneticButton>
              <MagneticButton
                href="#work"
                variant="outline"
                icon={false}
                className="w-full h-12 sm:h-12.5 md:h-12 sm:w-auto text-[15px] sm:text-sm font-medium"
              >
                See selected work
              </MagneticButton>
            </div>
          </div>

          {/* Subtle Mobile Scroll Continuation Cue */}
          <div
            className="fade-up mt-6 flex items-center gap-2 text-[10px] font-mono tracking-wider uppercase text-muted-foreground/50 md:hidden"
            style={d(800)}
          >
            <span className="h-px w-4 bg-foreground/20" />
            <span>Scroll to explore</span>
          </div>
        </div>
      </div>
    </section>
  )
}
