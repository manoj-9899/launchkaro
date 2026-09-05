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
    category: 'Fine Dining',
    tagline: 'Elegant, mood-lit digital experience crafted for a luxury restaurant to showcase menus and table reservations.',
    year: '2025',
    image: '/images/work-1.webp',
    liveUrl: 'https://nocturne-restaurant-website.vercel.app/',
    tags: ['Fine Dining', 'Menu Showcase', 'Reservations'],
  },
  {
    id: '02',
    title: 'Atelier Estate',
    category: 'Real Estate',
    tagline: 'Sophisticated property portal designed for premium residential and luxury real estate listings.',
    year: '2025',
    image: '/images/work-2.webp',
    liveUrl: 'https://atelier-estate-website.vercel.app/',
    tags: ['Real Estate', 'Luxury Listings', 'Property Portal'],
  },
  {
    id: '03',
    title: 'Patel Function Hall',
    category: 'Events & Venues',
    tagline: 'Event venue website highlighting banquet amenities, booking inquiries, and photo galleries for weddings and celebrations.',
    year: '2024',
    image: '/images/work-3.webp',
    liveUrl: 'https://patel-function-hall-demo-1.vercel.app/',
    tags: ['Events & Venues', 'Banquet Amenities', 'Inquiries'],
  },
  {
    id: '04',
    title: 'Spice Palace',
    category: 'Café & Restaurant',
    tagline: 'Vibrant restaurant website with menu highlights, location integration, and direct ordering pathways.',
    year: '2024',
    image: '/images/work-4.webp',
    liveUrl: 'https://spicepalace.netlify.app/',
    tags: ['Café & Restaurant', 'Menu Highlights', 'Online Ordering'],
  },
  {
    id: '05',
    title: 'Ascent Academy',
    category: 'Education',
    tagline: 'Modern coaching institute website for entrance exam prep (JEE, NEET), built to showcase programs, faculty, and results with demo class bookings.',
    year: '2024',
    image: '/images/work-5.webp',
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
                <div className="aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/10] w-full" />
                <div className="p-5 sm:p-6 md:p-8 space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                    <div className="h-8 text-xl sm:text-2xl md:text-3xl font-medium tracking-tight">
                      {projects[0].title}
                    </div>
                    <div className="h-5 text-xs sm:text-sm">Live demo</div>
                  </div>
                  <p className="text-sm leading-relaxed">
                    {projects[0].tagline}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {projects[0].tags.map((tag) => (
                      <span key={tag} className="px-3 py-0.5 text-[11px]">
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

                    {/* Main Cinematic Card Frame */}
                    <div
                      className={cn(
                        'relative overflow-hidden rounded-2xl md:rounded-3xl border bg-card transition-all duration-700',
                        isActive
                          ? 'border-border/80 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.15)] ring-1 ring-foreground/5'
                          : 'border-border/50 shadow-sm'
                      )}
                    >
                      {/* Cinematic Full-Bleed Image Preview Area */}
                      <div className="group/image relative aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/10] w-full overflow-hidden bg-secondary">
                        <Image
                          src={project.image}
                          alt={`${project.title} - ${project.category}`}
                          fill
                          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 840px"
                          className="object-cover transition-transform duration-[1.6s] ease-out-expo group-hover/image:scale-[1.04]"
                          priority={index === 0 || index === 1}
                        />

                        {/* Subtle cinematic gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-40 transition-opacity duration-500 group-hover/image:opacity-20" />

                        {/* Hover View Button on Active Card */}
                        {isActive ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open live site for ${project.title}`}
                            className="absolute top-4 right-4 z-20 flex size-11 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 shadow-lg backdrop-blur-md transition-all duration-500 ease-out-expo group-hover/image:opacity-100 group-hover/image:translate-y-0 translate-y-2 md:top-5 md:right-5 hover:bg-foreground hover:text-background"
                          >
                            <ArrowUpRight className="size-4" />
                          </a>
                        ) : (
                          <div className="absolute top-4 right-4 flex size-11 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 shadow-lg backdrop-blur-md transition-all duration-500 ease-out-expo group-hover/image:opacity-100 group-hover/image:translate-y-0 translate-y-2 md:top-5 md:right-5">
                            <ArrowUpRight className="size-4" />
                          </div>
                        )}
                      </div>

                      {/* Clean Gallery Info Block */}
                      <div className="p-5 sm:p-6 md:p-8 space-y-3 sm:space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                          <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-foreground">
                              {project.title}
                            </h3>
                            <span className="text-xs sm:text-sm text-muted-foreground/75 font-mono">
                              — {project.category} <span className="opacity-60">({project.year})</span>
                            </span>
                          </div>

                          <a
                            href={isActive ? project.liveUrl : undefined}
                            target={isActive ? '_blank' : undefined}
                            rel={isActive ? 'noopener noreferrer' : undefined}
                            className="link-underline inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-foreground transition-colors hover:text-signal shrink-0"
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

                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-1">
                          {project.tagline}
                        </p>

                        {/* Project Tags */}
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-border/60 bg-secondary/50 px-3 py-0.5 text-[11px] text-muted-foreground font-mono"
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

