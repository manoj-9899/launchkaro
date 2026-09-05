'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 fade-up" style={{ '--d': '200ms' } as React.CSSProperties}>
        <div
          className={cn(
            'mx-auto flex items-center justify-between transition-all duration-700 ease-out-expo',
            scrolled
              ? 'mt-3 max-w-[calc(100%-1.5rem)] rounded-full border border-foreground/8 bg-background/80 px-4 py-2 shadow-[0_8px_30px_-16px_rgba(0,0,0,0.25)] backdrop-blur-xl md:mt-4 md:max-w-3xl md:px-5'
              : 'mt-0 max-w-7xl border border-transparent px-4 py-4 sm:px-6 sm:py-5 md:px-10 md:py-7',
          )}
        >
          <a href="#" className="flex items-center gap-2.5 py-1" aria-label="LaunchKaro home">
            <span className="relative size-2.5 rounded-full bg-foreground">
              <span className="absolute inset-0 animate-ping rounded-full bg-foreground/40 [animation-duration:2.4s]" />
            </span>
            <span className="text-sm font-semibold tracking-tight">LaunchKaro</span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-underline py-1 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact-form"
              onClick={(e) => {
                e.preventDefault()
                window.dispatchEvent(new CustomEvent('open-contact-modal'))
              }}
              className="hidden h-10 items-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-transform duration-500 ease-out-expo hover:scale-[1.03] active:scale-[0.98] md:inline-flex"
            >
              Start a project
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="relative flex size-12 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-foreground/15 bg-background/40 backdrop-blur-xs transition-colors hover:border-foreground/30 md:hidden"
            >
              <span
                className={cn(
                  'absolute h-px w-4.5 bg-foreground transition-all duration-500 ease-out-expo',
                  open ? 'rotate-45' : '-translate-y-[3.5px]',
                )}
              />
              <span
                className={cn(
                  'absolute h-px w-4.5 bg-foreground transition-all duration-500 ease-out-expo',
                  open ? '-rotate-45' : 'translate-y-[3.5px]',
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={cn(
          'fixed inset-0 z-40 flex flex-col bg-background px-5 pt-24 sm:pt-28 pb-8 transition-[clip-path] duration-700 ease-out-expo md:hidden',
          open ? '[clip-path:inset(0_0_0_0)]' : 'pointer-events-none [clip-path:inset(0_0_100%_0)]',
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={cn(
                'flex items-baseline justify-between border-b border-border py-4 sm:py-5 font-serif text-3xl sm:text-4xl tracking-tight transition-all duration-700 ease-out-expo',
                open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
              )}
              style={{ transitionDelay: open ? `${150 + i * 70}ms` : '0ms' }}
            >
              {l.label}
              <span className="font-sans text-xs text-muted-foreground">0{i + 1}</span>
            </a>
          ))}
        </nav>
        <div
          className={cn(
            'mt-auto flex flex-col gap-4 transition-all duration-700 ease-out-expo',
            open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
          )}
          style={{ transitionDelay: open ? '400ms' : '0ms' }}
        >
          <a
            href="#contact-form"
            onClick={(e) => {
              e.preventDefault()
              setOpen(false)
              window.dispatchEvent(new CustomEvent('open-contact-modal'))
            }}
            className="flex h-14 items-center justify-center rounded-full bg-foreground text-base font-medium text-background"
          >
            Start a project
          </a>
          <p className="text-center text-xs text-muted-foreground">launchkaro.team@gmail.com</p>
        </div>
      </div>
    </>
  )
}
