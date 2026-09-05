'use client'

import { useState, useEffect } from 'react'
import { ArrowUpRight, MessageCircle, Phone } from 'lucide-react'
import { MagneticButton } from '@/components/magnetic-button'
import { Reveal } from '@/components/reveal'
import { ContactModal } from '@/components/contact-modal'

const sitemap = ['Services', 'Work', 'Process', 'Pricing', 'Contact']

export function CtaFooter() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Listen for global open events from Header, Hero, Services, or hash links
  useEffect(() => {
    const handleOpen = () => setIsModalOpen(true)
    const handleHashChange = () => {
      if (window.location.hash === '#contact-form') {
        setIsModalOpen(true)
      }
    }

    window.addEventListener('open-contact-modal', handleOpen)
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('open-contact-modal', handleOpen)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (
    <>
      <footer id="contact" className="scroll-mt-24 px-4 pt-10 pb-6 sm:px-6 md:px-10 md:pt-16 md:pb-8">
        <div className="mx-auto max-w-7xl">
          {/* CTA card */}
          <Reveal className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-foreground px-5 sm:px-8 py-12 sm:py-16 text-background md:rounded-[2rem] md:px-16 md:py-28">
            {/* Decorative arcs */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-1/2 -right-1/4 size-[120%] rounded-full border border-background/10 md:-top-[70%] md:-right-[10%] md:size-[90%]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -top-1/3 -right-1/4 size-[100%] rounded-full border border-background/10 md:-top-[55%] md:-right-[5%] md:size-[70%]"
            />

            <div className="relative grid gap-8 sm:gap-10 md:grid-cols-12 md:items-end">
              {/* Headline & Status Badge */}
              <div className="md:col-span-7">
                <p className="flex items-center gap-3 text-xs tracking-[0.18em] text-background/60 uppercase">
                  <span className="size-1.5 rounded-full bg-signal" />
                  Available for new projects
                </p>
                <h2 className="mt-5 sm:mt-6 text-[clamp(1.9rem,6.5vw,5.5rem)] leading-[1.0] font-medium tracking-[-0.04em] text-balance">
                  Have a project
                  <br />
                  in <em className="font-serif font-normal italic text-background/70">mind?</em>
                </h2>
              </div>

              {/* Supporting Text & Three Action Buttons */}
              <div className="flex flex-col items-start gap-5 sm:gap-6 md:col-span-5 md:items-end">
                <p className="max-w-sm text-sm leading-relaxed text-background/60 md:text-right">
                  Tell us about your business and what you want your website to do. We will reply with honest advice
                  on where to start.
                </p>

                <div className="flex w-full flex-col gap-2.5 sm:gap-3 sm:w-auto md:items-end">
                  <div className="flex w-full flex-wrap items-center gap-2 sm:gap-2.5 sm:w-auto sm:justify-end">
                    {/* Let's Talk button opens ContactModal */}
                    <MagneticButton
                      href="#contact-form"
                      variant="light"
                      className="w-full sm:w-auto"
                      onClick={(e) => {
                        e.preventDefault()
                        setIsModalOpen(true)
                      }}
                    >
                      Let&apos;s talk
                    </MagneticButton>

                    <div className="flex w-full items-center gap-2 sm:gap-2.5 sm:w-auto">
                      {/* WhatsApp direct link (unaffected) */}
                      <MagneticButton
                        href="https://wa.me/919423509134"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline-light"
                        icon={false}
                        className="flex-1 px-3.5 sm:px-5 sm:flex-initial"
                      >
                        <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                          <MessageCircle className="size-4 shrink-0 text-emerald-400" />
                          <span className="text-xs sm:text-sm">WhatsApp</span>
                        </span>
                      </MagneticButton>

                      {/* Call direct link (unaffected) */}
                      <MagneticButton
                        href="tel:+919423509134"
                        variant="outline-light"
                        icon={false}
                        className="flex-1 px-3.5 sm:px-5 sm:flex-initial"
                      >
                        <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                          <Phone className="size-4 shrink-0 text-background/80" />
                          <span className="text-xs sm:text-sm">Call</span>
                        </span>
                      </MagneticButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Footer grid */}
          <div className="mt-12 sm:mt-16 md:mt-24 grid gap-8 sm:gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <a href="#" className="flex items-center gap-2.5 py-1" aria-label="LaunchKaro home">
                <span className="size-2.5 rounded-full bg-foreground" />
                <span className="text-sm font-semibold tracking-tight">LaunchKaro</span>
              </a>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
                A digital agency in Latur building websites that help local businesses get found and get chosen.
              </p>
              <div className="mt-6 flex flex-col items-start gap-2">
                <div className="block">
                  <a
                    href="mailto:launchkaro.team@gmail.com"
                    className="link-underline inline-flex items-center gap-1.5 text-base sm:text-lg font-medium tracking-tight"
                  >
                    launchkaro.team@gmail.com
                    <ArrowUpRight className="size-4 shrink-0" />
                  </a>
                </div>
                <div className="block">
                  <a
                    href="tel:+919423509134"
                    className="link-underline inline-block py-0.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    +91 94235 09134
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 md:col-start-7">
              <h3 className="text-xs tracking-[0.18em] text-muted-foreground uppercase">Sitemap</h3>
              <ul className="mt-4 flex flex-col gap-2">
                {sitemap.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="link-underline inline-block py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3">
              <h3 className="text-xs tracking-[0.18em] text-muted-foreground uppercase">Based in</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Latur, Maharashtra
                <br />
                India
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Working with businesses across Maharashtra, remotely and in person.
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} LaunchKaro. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href="#" className="link-underline py-1">
                Back to top ↑
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Business Owner Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
