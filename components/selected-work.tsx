'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'

const projects = [
  { number: '01', name: 'Nocturne', category: 'Fine Dining', summary: 'A quiet, cinematic digital table for a restaurant built around ritual, texture, and the after-dark appetite.', details: 'Art direction · Storytelling · Web design', image: '/images/dining.png', alt: 'Nocturne restaurant homepage preview', website: 'https://nocturne-restaurant-website.vercel.app/', layout: 'feature' },
  { number: '02', name: 'Atelier Estate', category: 'Real Estate', summary: 'A considered property experience that gives architecture the room to speak before the sales pitch begins.', details: 'Positioning · UX direction · Development', image: '/images/real-estate.png', alt: 'Atelier Estate luxury real estate homepage preview', website: 'https://atelier-estate-website.vercel.app/', layout: 'offset' },
  { number: '03', name: 'Patel Function Hall', category: 'Events & Venues', summary: 'A warmer, clearer way to turn a venue visit into a confident first enquiry.', details: 'Identity · Conversion flow · Launch', image: '/images/function-hall.png', alt: 'Patel Function Hall venue homepage preview', website: 'https://patel-function-hall-demo-1.vercel.app/', layout: 'reverse' },
  { number: '04', name: 'Spice Palace', category: 'Café & Restaurant', summary: 'A lively food story with enough structure to make every craving easy to follow.', details: 'Visual system · Menu UX · Build', image: '/images/restaurent.png', alt: 'Spice Palace restaurant homepage preview', website: 'https://spicepalace.netlify.app/', layout: 'offset' },
  { number: '05', name: 'Ascent Academy', category: 'Coaching Institute', summary: 'A focused digital front door for ambitious students and the people helping them move forward.', details: 'Strategy · Content · Responsive design', image: '/images/coaching-class.png', alt: 'Ascent Academy coaching homepage preview', website: 'https://ascent-academy-website.vercel.app/', layout: 'closing' },
]

export function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const moveToProject = (direction: 'previous' | 'next') => {
    const nextIndex = direction === 'next' ? Math.min(currentIndex + 1, projects.length - 1) : Math.max(currentIndex - 1, 0)
    setCurrentIndex(nextIndex)
    sectionRef.current?.querySelector(`[data-index="${nextIndex}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <section ref={sectionRef} id="projects" className="projects-section bg-background py-16 md:py-32" aria-labelledby="projects-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12">
        <header className="projects-intro mb-12 flex flex-col gap-8 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-accent">Selected work / 2024—25</p>
            <h2 id="projects-title" className="max-w-[11ch] font-serif text-[3.25rem] leading-[0.88] tracking-[-0.04em] text-foreground text-balance sm:text-6xl md:max-w-none md:text-8xl">Built to be <em className="text-accent">remembered.</em></h2>
          </div>
          <p className="max-w-xs text-[0.95rem] leading-relaxed text-muted-foreground text-pretty md:pb-2 md:text-base">A small collection of digital spaces made to give good businesses a sharper first impression.</p>
        </header>

        <div className="projects-rail flex items-center justify-between gap-4 border-y border-border py-4">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground"><span className="text-accent">/</span> Five digital identities</p>
          <div className="flex items-center gap-2" aria-label="Project navigation">
            <button type="button" onClick={() => moveToProject('previous')} className="project-nav-button" aria-label="Previous project" disabled={currentIndex === 0}>←</button>
            <span className="hidden font-mono text-[0.65rem] tabular-nums text-muted-foreground sm:inline">{String(currentIndex + 1).padStart(2, '0')} / 05</span>
            <button type="button" onClick={() => moveToProject('next')} className="project-nav-button" aria-label="Next project" disabled={currentIndex === projects.length - 1}>→</button>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-24 md:mt-20 md:gap-40">
          {projects.map((project, index) => (
            <article key={project.name} data-index={index} className={`project-story project-story--${project.layout}`}>
              <a href={project.website} target="_blank" rel="noopener noreferrer" className="project-image-frame group" aria-label={`Open ${project.name} project`}>
                <div className="project-image-meta font-mono">{project.number}<span>Open case study ↗</span></div>
                <Image src={project.image} alt={project.alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1200px) 62vw, 760px" className="project-screenshot object-contain p-2.5 transition-transform duration-700 ease-out group-hover:scale-[1.025] sm:p-4" priority={index === 0} />
              </a>
              <div className="project-copy flex flex-col gap-5">
                <div className="flex items-start justify-between gap-4"><p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent">{project.category}</p><span className="font-mono text-xs text-muted-foreground">{project.number} / 05</span></div>
                <h3 className="font-serif text-[2.8rem] leading-[0.9] tracking-[-0.03em] text-foreground md:text-7xl">{project.name}</h3>
                <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">{project.summary}</p>
                <div className="flex flex-col gap-4 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between"><p className="font-mono text-[0.65rem] uppercase leading-relaxed tracking-[0.12em] text-muted-foreground">{project.details}</p><a href={project.website} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`Visit ${project.name} project`}>View project <span aria-hidden="true">↗</span></a></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
