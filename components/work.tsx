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

import { ProjectCard } from '@/components/project-card'

const projects = [
  {
    id: '01',
    slug: 'nocturne',
    title: 'Nocturne',
    category: 'Fine Dining',
    image: '/images/work-1.webp',
    href: '/work/nocturne',
    liveUrl: 'https://nocturne-restaurant-website.vercel.app/',
  },
  {
    id: '02',
    slug: 'atelier-estate',
    title: 'Atelier Estate',
    category: 'Real Estate',
    image: '/images/work-2.webp',
    href: '/work/atelier-estate',
    liveUrl: 'https://atelier-estate-website.vercel.app/',
  },
  {
    id: '03',
    slug: 'patel-function-hall',
    title: 'Patel Function Hall',
    category: 'Events & Venues',
    image: '/images/work-3.webp',
    href: '/work/patel-function-hall',
    liveUrl: 'https://patel-function-hall-demo-1.vercel.app/',
  },
  {
    id: '04',
    slug: 'spice-palace',
    title: 'Spice Palace',
    category: 'Café & Restaurant',
    image: '/images/work-4.webp',
    href: '/work/spice-palace',
    liveUrl: 'https://spicepalace.netlify.app/',
  },
  {
    id: '05',
    slug: 'ascent-academy',
    title: 'Ascent Academy',
    category: 'Education',
    image: '/images/work-5.webp',
    href: '/work/ascent-academy',
    liveUrl: 'https://ascent-academy-website.vercel.app/',
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
              <div className="rounded-2xl md:rounded-3xl border border-transparent p-4 sm:p-5 md:p-6">
                <div className="aspect-[16/10] w-full" />
                <div className="mt-4 sm:mt-5 space-y-1">
                  <div className="h-8 text-xl sm:text-2xl font-medium tracking-tight">
                    {projects[0].title}
                  </div>
                  <div className="h-5 text-xs sm:text-sm font-mono">{projects[0].category}</div>
                  <div className="pt-3 h-5 text-xs sm:text-sm font-medium">View project</div>
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

                    <ProjectCard
                      title={project.title}
                      category={project.category}
                      image={project.image}
                      href={isActive ? project.href : ''}
                      liveUrl={project.liveUrl}
                      priority={index === 0 || index === 1}
                      isActive={isActive}
                    />
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

