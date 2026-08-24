import Image from 'next/image'

const projects = [
  {
    name: 'Nocturne',
    category: 'Fine Dining',
    image: '/images/dining.png',
    alt: 'Nocturne restaurant dining experience',
    website: 'https://nocturne-restaurant-website.vercel.app/',
    wide: true,
  },
  {
    name: 'Atelier Estate',
    category: 'Real Estate',
    image: '/images/real-estate.png',
    alt: 'Atelier Estate luxury real estate property',
    website: 'https://atelier-estate-website.vercel.app/',
    wide: true,
  },
  {
    name: 'Patel Function Hall',
    category: 'Events & Venues',
    image: '/images/function-hall.png',
    alt: 'Patel Function Hall venue',
    website: 'https://patel-function-hall-demo-1.vercel.app/',
    wide: false,
  },
  {
    name: 'Spice Palace',
    category: 'Café & Restaurant',
    image: '/images/restaurent.png',
    alt: 'Spice Palace restaurant',
    website: 'https://spicepalace.netlify.app/',
    wide: false,
  },
  {
    name: 'Ascent Academy',
    category: 'Coaching Institute',
    image: '/images/coaching-class.png',
    alt: 'Ascent Academy coaching classroom',
    website: 'https://ascent-academy-website.vercel.app/',
    wide: false,
  },
]

export function SelectedWork() {
  return (
    <section id="projects" className="bg-background py-12 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center md:mb-16">
          <h2 className="font-serif text-3xl text-foreground text-balance md:text-5xl">
            Selected Work
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground text-pretty md:mt-4 md:text-lg">
            A few of the businesses we&apos;ve helped look credible, stand out, and
            convert customers online.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-6 md:gap-10">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block ${project.wide ? 'md:col-span-3' : 'md:col-span-2'}`}
            >
              <article>
                <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary/30">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.alt}
                    width={900}
                    height={640}
                    className="aspect-[4/3] w-full object-contain object-center transition-transform duration-400 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center z-10 pointer-events-none">
                    <span className="font-serif text-2xl md:text-3xl text-white">
                      {project.name}
                    </span>
                  </div>
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-xl text-foreground">
                    {project.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {project.category}
                  </p>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
