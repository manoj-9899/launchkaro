'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Pause,
  Play,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const projects = [
  {
    id: '01',
    title: 'Nocturne',
    client: '[Client 01]',
    category: 'Fine Dining',
    tagline: 'Elegant, mood-lit digital experience crafted for a luxury restaurant to showcase menus and table reservations.',
    year: '2025',
    image: '/images/work-1.png',
    liveUrl: 'https://nocturne-restaurant-website.vercel.app/',
    tags: ['Fine Dining', 'Menu Showcase', 'Reservations'],
  },
  {
    id: '02',
    title: 'Atelier Estate',
    client: '[Client 02]',
    category: 'Real Estate',
    tagline: 'Sophisticated property portal designed for premium residential and luxury real estate listings.',
    year: '2025',
    image: '/images/work-2.png',
    liveUrl: 'https://atelier-estate-website.vercel.app/',
    tags: ['Real Estate', 'Luxury Listings', 'Property Portal'],
  },
  {
    id: '03',
    title: 'Patel Function Hall',
    client: '[Client 03]',
    category: 'Events & Venues',
    tagline: 'Event venue website highlighting banquet amenities, booking inquiries, and photo galleries for weddings and celebrations.',
    year: '2024',
    image: '/images/work-3.png',
    liveUrl: 'https://patel-function-hall-demo-1.vercel.app/',
    tags: ['Events & Venues', 'Banquet Amenities', 'Inquiries'],
  },
  {
    id: '04',
    title: 'Spice Palace',
    client: '[Client 04]',
    category: 'Café & Restaurant',
    tagline: 'Vibrant restaurant website with menu highlights, location integration, and direct ordering pathways.',
    year: '2024',
    image: '/images/work-4.png',
    liveUrl: 'https://spicepalace.netlify.app/',
    tags: ['Café & Restaurant', 'Menu Highlights', 'Online Ordering'],
  },
  {
    id: '05',
    title: 'Ascent Academy',
    client: '[Client 05]',
    category: 'Education',
    tagline: 'Modern coaching institute website for entrance exam prep (JEE, NEET), built to showcase programs, faculty, and results with demo class bookings.',
    year: '2024',
    image: '/images/work-5.png',
    liveUrl: 'https://ascent-academy-website.vercel.app/',
    tags: ['Education', 'JEE & NEET Prep', 'Demo Class Booking'],
  },
]

export function Work() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [isInteracting, setIsInteracting] = useState(false)

  const isPaused = !isAutoplay || isHovered || isInteracting

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projects.length)
  }, [])

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }, [])

  const goTo = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  // Auto-advance interval (5 seconds)
  useEffect(() => {
    if (isPaused) return

    const timer = setTimeout(() => {
      goNext()
    }, 5000)

    return () => clearTimeout(timer)
  }, [activeIndex, isPaused, goNext])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const carouselEl = document.getElementById('work-carousel')
      if (!carouselEl) return

      if (document.activeElement && carouselEl.contains(document.activeElement)) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault()
          goPrev()
        } else if (e.key === 'ArrowRight') {
          e.preventDefault()
          goNext()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goNext, goPrev])

  // Touch swipe support
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
    setIsInteracting(true)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current !== null && touchStartY.current !== null) {
      const deltaX = e.changedTouches[0].clientX - touchStartX.current
      const deltaY = e.changedTouches[0].clientY - touchStartY.current

      // Horizontal swipe dominant and exceeds 35px threshold
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 35) {
        if (deltaX < 0) {
          goNext()
        } else {
          goPrev()
        }
      }
    }
    touchStartX.current = null
    touchStartY.current = null
    setTimeout(() => setIsInteracting(false), 800)
  }

  // Circular offset relative to active card (-2, -1, 0, 1, 2)
  const getCircularDiff = (index: number) => {
    let diff = (index - activeIndex) % projects.length
    if (diff > Math.floor(projects.length / 2)) {
      diff -= projects.length
    } else if (diff < -Math.floor(projects.length / 2)) {
      diff += projects.length
    }
    return diff
  }

  return (
    <section id="work" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="02"
          label="Selected work"
          title={
            <>
              Selected work built to{' '}
              <em className="font-serif font-normal italic text-foreground/70">perform</em>.
            </>
          }
          aside={
            <a
              href="#contact"
              className="link-underline inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Start a project
              <ArrowUpRight className="size-3.5" />
            </a>
          }
        />

        {/* Carousel Viewport Stage */}
        <Reveal delay={100} className="mt-10 sm:mt-12 md:mt-18">
          <div
            id="work-carousel"
            tabIndex={0}
            role="region"
            aria-roledescription="carousel"
            aria-label="Selected work showcase carousel"
            className="relative w-full overflow-hidden py-4 outline-none select-none [--carousel-offset:94%] sm:[--carousel-offset:86%] md:[--carousel-offset:78%] lg:[--carousel-offset:72%] [--carousel-scale:0.92] md:[--carousel-scale:0.89]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Ghost card for natural container height across responsive widths */}
            <div
              className="invisible pointer-events-none mx-auto w-[90vw] sm:w-[82vw] md:w-[68vw] lg:w-[58vw] max-w-[840px] select-none"
              aria-hidden="true"
            >
              <div className="rounded-2xl md:rounded-3xl border border-transparent">
                <div className="px-4 py-2.5 sm:px-5 sm:py-3 md:px-7 md:py-3.5">
                  <div className="h-4" />
                </div>
                <div className="aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/10] w-full" />
                <div className="p-4 sm:p-5 md:p-7">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-transparent pb-4">
                    <div className="h-7 text-lg sm:text-xl md:text-2xl font-medium tracking-tight">
                      {projects[0].title}
                    </div>
                    <div className="h-5 text-xs md:text-sm">Explore project</div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed">
                    {projects[0].tagline}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {projects[0].tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-[11px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Absolute Carousel Card Layer */}
            <div className="absolute inset-0 flex items-center justify-center">
              {projects.map((project, index) => {
                const diff = getCircularDiff(index)
                const isActive = diff === 0
                const isNext = diff === 1
                const isPrev = diff === -1
                const isFar = Math.abs(diff) >= 2

                const transform = isActive
                  ? 'translateX(0%) scale(1)'
                  : isNext
                    ? 'translateX(var(--carousel-offset)) scale(var(--carousel-scale))'
                    : isPrev
                      ? 'translateX(calc(-1 * var(--carousel-offset))) scale(var(--carousel-scale))'
                      : diff > 0
                        ? 'translateX(160%) scale(0.75)'
                        : 'translateX(-160%) scale(0.75)'

                const opacity = isFar ? 0 : isActive ? 1 : 0.55
                const zIndex = isActive ? 30 : isNext || isPrev ? 20 : 10
                const transition = isFar
                  ? 'none'
                  : 'transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease'

                return (
                  <div
                    key={project.id}
                    onClick={() => {
                      if (isNext) goNext()
                      if (isPrev) goPrev()
                    }}
                    style={{
                      transform,
                      opacity,
                      zIndex,
                      transition,
                    }}
                    className={cn(
                      'group absolute w-[90vw] sm:w-[82vw] md:w-[68vw] lg:w-[58vw] max-w-[840px]',
                      'will-change-transform origin-center',
                      isActive && 'cursor-default pointer-events-auto',
                      (isNext || isPrev) && 'cursor-pointer pointer-events-auto hover:opacity-95',
                      isFar && 'pointer-events-none'
                    )}
                  >
                    {/* Floating Next Pill on peeked next card (inspired by Squarespace) */}
                    {isNext && (
                      <div className="absolute inset-0 z-40 hidden sm:flex items-center justify-start pl-4 sm:pl-8 md:pl-10 pointer-events-none">
                        <div className="flex items-center gap-2 rounded-full border border-border/80 bg-background/95 px-4 py-2 text-xs font-semibold tracking-tight text-foreground shadow-xl ring-1 ring-foreground/10 backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                          <span>Next</span>
                          <ArrowRight className="size-3.5" />
                        </div>
                      </div>
                    )}

                    {/* Floating Previous Pill on peeked previous card */}
                    {isPrev && (
                      <div className="absolute inset-0 z-40 hidden sm:flex items-center justify-end pr-4 sm:pr-8 md:pr-10 pointer-events-none">
                        <div className="flex items-center gap-2 rounded-full border border-border/80 bg-background/95 px-4 py-2 text-xs font-semibold tracking-tight text-foreground shadow-xl ring-1 ring-foreground/10 backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                          <ArrowLeft className="size-3.5" />
                          <span>Previous</span>
                        </div>
                      </div>
                    )}

                    {/* Main Card Frame */}
                    <div
                      className={cn(
                        'relative overflow-hidden rounded-2xl md:rounded-3xl border bg-card transition-all duration-700',
                        isActive
                          ? 'border-border/90 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.12)] ring-1 ring-foreground/5'
                          : 'border-border/60 shadow-sm'
                      )}
                    >
                      {/* Editorial Top Chrome Bar */}
                      <div className="flex items-center justify-between border-b border-border/60 px-4 py-2.5 sm:px-5 sm:py-3 md:px-7 md:py-3.5 bg-muted/25">
                        <div className="flex items-center gap-2">
                          <span className="size-2 rounded-full bg-foreground/25" />
                          <span className="size-2 rounded-full bg-foreground/25" />
                          <span className="size-2 rounded-full bg-foreground/25" />
                          <span className="ml-1 sm:ml-2 font-mono text-[10px] sm:text-[11px] text-muted-foreground tracking-wider">
                            SHOWCASE // {project.id}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className="hidden sm:inline-block rounded-full border border-border/70 bg-background/90 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-foreground/80">
                            {project.category}
                          </span>
                          <span className="text-xs text-muted-foreground font-mono tabular-nums">{project.year}</span>
                        </div>
                      </div>

                      {/* Large Image Preview Area */}
                      <div className="group/image relative aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/10] w-full overflow-hidden bg-secondary">
                        <Image
                          src={project.image}
                          alt={`${project.title} - ${project.category}`}
                          fill
                          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 840px"
                          className="object-cover transition-transform duration-[1.4s] ease-out-expo group-hover/image:scale-[1.04]"
                          priority={index === 0 || index === 1}
                        />

                        {/* Subtle editorial contrast veil */}
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover/image:opacity-40" />

                        {/* Hover View Button on Active Card */}
                        {isActive ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open live site for ${project.title}`}
                            className="absolute top-4 right-4 z-20 flex size-11 items-center justify-center rounded-full bg-background/95 text-foreground opacity-0 shadow-md backdrop-blur-sm transition-all duration-500 ease-out-expo group-hover/image:opacity-100 group-hover/image:translate-y-0 translate-y-2 md:top-5 md:right-5 hover:bg-foreground hover:text-background"
                          >
                            <ArrowUpRight className="size-4" />
                          </a>
                        ) : (
                          <div className="absolute top-4 right-4 flex size-11 items-center justify-center rounded-full bg-background/95 text-foreground opacity-0 shadow-md backdrop-blur-sm transition-all duration-500 ease-out-expo group-hover/image:opacity-100 group-hover/image:translate-y-0 translate-y-2 md:top-5 md:right-5">
                            <ArrowUpRight className="size-4" />
                          </div>
                        )}

                        {/* Client / Category Tag */}
                        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-5 md:left-6 flex items-center gap-2">
                          <span className="rounded-full border border-white/50 bg-white/85 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-[11px] font-medium tracking-wide text-foreground shadow-sm backdrop-blur-md">
                            {project.client}
                          </span>
                        </div>
                      </div>

                      {/* Card Content & Metadata */}
                      <div className="p-4 sm:p-5 md:p-7">
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-border/60 pb-3 sm:pb-4">
                          <div className="flex items-baseline gap-2 sm:gap-3">
                            <span className="font-serif text-sm italic text-foreground/50 tabular-nums">
                              {project.id}
                            </span>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-foreground">
                              {project.title}
                            </h3>
                          </div>
                          <a
                            href={isActive ? project.liveUrl : undefined}
                            target={isActive ? '_blank' : undefined}
                            rel={isActive ? 'noopener noreferrer' : undefined}
                            className="link-underline inline-flex items-center gap-1.5 text-xs md:text-sm font-medium text-foreground transition-colors hover:text-signal"
                            onClick={(e) => {
                              if (!isActive) {
                                e.preventDefault()
                              }
                            }}
                          >
                            Live demo
                            <ArrowUpRight className="size-3.5" />
                          </a>
                        </div>

                        <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                          <span className="font-medium text-foreground/80 sm:hidden">{project.category} — </span>
                          {project.tagline}
                        </p>

                        {/* Project tags */}
                        <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-1.5 sm:gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-[10px] sm:text-[11px] text-muted-foreground font-mono"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Carousel Controls & Counter Bar */}
          <div className="mt-6 sm:mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-border/70 pt-5 sm:pt-6">
            {/* Numbered Counter: 01 / 05 */}
            <div className="flex items-center justify-between sm:justify-start gap-3 w-full sm:w-auto">
              <div className="flex items-baseline gap-1 text-sm font-medium tracking-tight">
                <span className="font-serif text-xl sm:text-2xl md:text-3xl italic text-foreground tabular-nums">
                  {projects[activeIndex].id}
                </span>
                <span className="text-xs text-muted-foreground/60">/</span>
                <span className="text-xs text-muted-foreground font-mono tabular-nums">
                  0{projects.length}
                </span>
              </div>

              <div className="h-4 w-px bg-border/80" />

              <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase line-clamp-1 max-w-[180px] sm:max-w-none">
                {projects[activeIndex].category}
              </span>
            </div>

            {/* 5 Project Slide Indicators with Animated Auto-advance Progress */}
            <div
              className="flex items-center justify-center gap-1.5 sm:gap-2 py-1"
              role="tablist"
              aria-label="Project carousel indicators"
            >
              {projects.map((p, i) => {
                const isActive = i === activeIndex
                return (
                  <button
                    key={p.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Jump to project ${i + 1}: ${p.title}`}
                    onClick={() => goTo(i)}
                    className={cn(
                      'group relative h-2.5 rounded-full transition-all duration-500 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50',
                      isActive
                        ? 'w-10 sm:w-14 bg-border/70 overflow-hidden ring-1 ring-foreground/10'
                        : 'w-2.5 bg-border/80 hover:bg-foreground/40'
                    )}
                  >
                    {isActive && (
                      <span
                        key={`${i}-${isAutoplay}-${isPaused}`}
                        className="absolute inset-0 origin-left rounded-full bg-foreground"
                        style={{
                          animation: isAutoplay && !isPaused ? 'carousel-progress 5000ms linear forwards' : undefined,
                          width: isAutoplay && !isPaused ? undefined : '100%',
                        }}
                      />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Manual Navigation Controls */}
            <div className="flex items-center justify-end gap-2">
              {/* Autoplay Pause/Play button */}
              <button
                type="button"
                onClick={() => setIsAutoplay((prev) => !prev)}
                aria-label={isAutoplay ? 'Pause auto-advance' : 'Resume auto-advance'}
                className="flex size-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-border/80 bg-background text-muted-foreground transition-all duration-300 hover:border-foreground/40 hover:text-foreground hover:bg-card active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50"
                title={isAutoplay ? (isPaused ? 'Paused on hover' : 'Pause auto-advance') : 'Resume auto-advance'}
              >
                {isAutoplay && !isPaused ? (
                  <Pause className="size-3.5" />
                ) : (
                  <Play className="size-3.5 translate-x-0.5 text-foreground" />
                )}
              </button>

              {/* Previous Arrow Button */}
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous project"
                className="flex size-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 shadow-sm"
              >
                <ChevronLeft className="size-4" />
              </button>

              {/* Next Arrow Button */}
              <button
                type="button"
                onClick={goNext}
                aria-label="Next project"
                className="flex size-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 shadow-sm"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

