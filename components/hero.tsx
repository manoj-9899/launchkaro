'use client'

import type { CSSProperties } from 'react'
import { MagneticButton } from '@/components/magnetic-button'

const d = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-screen Hero viewport matching mobile & desktop full-screen references */}
      <div className="relative flex min-h-[100dvh] flex-col justify-between px-4 pt-20 pb-5 sm:px-6 sm:pb-7 md:min-h-screen md:px-10 md:pt-28 md:pb-12 lg:pt-32 lg:pb-14">
        {/* Subtle grid backdrop across the full hero viewport */}
        <div
          aria-hidden
          className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-70"
        />

        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between">
          {/* Top group: Eyebrow + Headline */}
          <div className="flex flex-col pt-1 sm:pt-2">
            {/* Eyebrow */}
            <div
              className="fade-up flex items-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs tracking-[0.14em] sm:tracking-[0.18em] text-muted-foreground uppercase"
              style={d(300)}
            >
              <span className="h-px w-5 shrink-0 bg-foreground/35 sm:w-8" />
              <span className="leading-snug">
                DIGITAL AGENCY — LATUR, MAHARASHTRA
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-4 max-w-6xl text-[clamp(2.15rem,9.2vw,3.6rem)] leading-[0.98] font-medium tracking-[-0.04em] sm:mt-6 md:mt-8 md:text-[clamp(2.5rem,7.5vw,6.5rem)]">
              {/* Mobile 5-line layout matching mobile reference */}
              <span className="block md:hidden">
                <span className="line-mask py-0.5">
                  <span style={d(350)}>Websites that</span>
                </span>
                <span className="line-mask py-0.5">
                  <span style={d(400)}>make</span>
                </span>
                <span className="line-mask py-0.5">
                  <span style={d(450)}>
                    <em className="font-serif font-normal italic tracking-[-0.02em] text-foreground/80">
                      local businesses
                    </em>
                  </span>
                </span>
                <span className="line-mask py-0.5">
                  <span style={d(500)}>impossible to</span>
                </span>
                <span className="line-mask py-0.5">
                  <span style={d(550)}>ignore.</span>
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
          </div>

          {/* Bottom group: Description (desktop only) + Action Buttons */}
          <div className="mt-auto flex flex-col gap-4 sm:gap-6 md:mt-12 md:max-w-4xl pb-1 md:pb-3">
            {/* Description - hidden on mobile screens, visible on desktop */}
            <p
              className="fade-up hidden md:block text-base leading-relaxed text-pretty text-muted-foreground md:text-lg lg:text-xl"
              style={d(700)}
            >
              LaunchKaro is a digital agency based in Latur, Maharashtra. We design and build websites for local
              shops, clinics, and service businesses — fast, easy to update, and easy to find on Google.
            </p>

            <div className="fade-up flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:gap-3.5" style={d(800)}>
              <MagneticButton
                href="#contact-form"
                onClick={(e) => {
                  e.preventDefault()
                  window.dispatchEvent(new CustomEvent('open-contact-modal'))
                }}
                className="w-full h-12.5 sm:h-13.5 sm:w-auto md:h-12 text-[15px] sm:text-sm font-medium"
              >
                Start a project
              </MagneticButton>
              <MagneticButton
                href="#work"
                variant="outline"
                icon={false}
                className="w-full h-12.5 sm:h-13.5 sm:w-auto md:h-12 text-[15px] sm:text-sm font-medium"
              >
                See selected work
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
