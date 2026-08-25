'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'

const projects = [
  {
    number: '01',
    name: 'Nocturne',
    category: 'Fine Dining',
    summary: 'A quiet, cinematic digital table for a restaurant built around ritual, texture, and the after-dark appetite.',
    details: 'Art direction · Storytelling · Web design',
    image: '/images/dining.png',
    alt: 'Nocturne restaurant dining experience',
    website: 'https://nocturne-restaurant-website.vercel.app/',
    layout: 'feature',
  },
  {
    number: '02',
    name: 'Atelier Estate',
    category: 'Real Estate',
    summary: 'A considered property experience that gives architecture the room to speak before the sales pitch begins.',
    details: 'Positioning · UX direction · Development',
    image: '/images/real-estate.png',
    alt: 'Atelier Estate luxury real estate property',
    website: 'https://atelier-estate-website.vercel.app/',
    layout: 'offset',
  },
  {
    number: '03',
    name: 'Patel Function Hall',
    category: 'Events & Venues',
    summary: 'A warmer, clearer way to turn a venue visit into a confident first enquiry.',
    details: 'Identity · Conversion flow · Launch',
    image: '/images/function-hall.png',
    alt: 'Patel Function Hall venue',
    website: 'https://patel-function-hall-demo-1.vercel.app/',
    layout: 'reverse',
  },
  {
    number: '04',
    name: 'Spice Palace',
    category: 'Café & Restaurant',
    summary: 'A lively food story with enough structure to make every craving easy to follow.',
    details: 'Visual system · Menu UX · Build',
    image: '/images/restaurent.png',
    alt: 'Spice Palace restaurant',
    website: 'https://spicepalace.netlify.app/',
    layout: 'offset',
  },
  {
    number: '05',
    name: 'Ascent Academy',
    category: 'Coaching Institute',
    summary: 'A focused digital front door for ambitious students and the people helping them move forward.',
    details: 'Strategy · Content · Responsive design',
    image: '/images/coaching-class.png',
    alt: 'Ascent Academy coaching classroom',
    website: 'https://ascent-academy-website.vercel.app/',
    layout: 'closing',
  },
]

export function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const moveToProject = (direction: 'previous' | 'next') => {
    const nextIndex = direction === 'next'
      ? Math.min(currentIndex + 1, projects.length - 1)
      : Math.max(currentIndex - 1, 0)
    setCurrentIndex(nextIndex)
    const target = sectionRef.current?.querySelector(`[data-index="${nextIndex}"]`)
    target?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <section ref={sectionRef} id="projects" className="projects-section bg-background py-16 md:py-32" aria-labelledby="projects-title">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <header className="projects-intro mb-14 flex flex-col gap-8 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-accent">Selected work / 2024—25</p>
            <h2 id="projects-title" className="font-serif text-5xl leading-[0.95] text-foreground text-balance md:text-7xl">Built to be <em className="text-accent">remembered.</em></h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground text-pretty md:pb-1 md:text-base">A small collection of digital spaces made to give good businesses a sharper first impression.</p>
        </header>

        <div className="flex items-center justify-between border-y border-border py-3">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">Five digital identities</p>
          <div className="flex items-center gap-2" aria-label="Project navigation">
            <button type="button" onClick={() => moveToProject('previous')} className="project-nav-button" aria-label="Previous project">←</button>
            <button type="button" onClick={() => moveToProject('next')} className="project-nav-button" aria-label="Next project">→</button>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-20 md:mt-16 md:gap-32">
          {projects.map((project, index) => (
            <article key={project.name} data-index={index} data-project-current={index === currentIndex ? 'true' : undefined} className={`project-story project-story--${project.layout}`}>
              <div className="project-image-frame">
                <Image src={project.image} alt={project.alt} fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]" priority={index === 0} />
                <span className="project-index font-mono" aria-hidden="true">{project.number}</span>
              </div>
              <div className="project-copy flex flex-col gap-5">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent">{project.category}</p>
                  <span className="font-mono text-xs text-muted-foreground">{project.number} / 05</span>
                </div>
                <h3 className="font-serif text-4xl leading-none text-foreground md:text-6xl">{project.name}</h3>
                <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">{project.summary}</p>
                <div className="flex flex-col gap-4 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-mono text-[0.65rem] uppercase leading-relaxed tracking-[0.12em] text-muted-foreground">{project.details}</p>
                  <a href={project.website} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`Visit ${project.name} project`}>View project <span aria-hidden="true">↗</span></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
