import Image from 'next/image'

const services = [
  {
    title: 'Premium Websites',
    description:
      'Beautiful, responsive websites designed around each business and its brand — built to earn trust from the first impression.',
    image: '/images/showcase-websites.png',
    alt: 'Elegant restaurant website shown on a laptop screen',
    link: 'Explore Websites',
  },
  {
    title: 'Digital Experiences',
    description:
      'Interactive and polished digital experiences designed to make businesses feel more premium and memorable across every touchpoint.',
    image: '/images/showcase-experiences.png',
    alt: 'Refined jewellery brand website shown on a mobile phone',
    link: 'Explore Experiences',
  },
]

export function ServicesShowcase() {
  return (
    <section id="services" className="bg-background py-12 md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:gap-32">
        {services.map((service, i) => (
          <div
            key={service.title}
            className="grid items-center gap-6 md:grid-cols-2 md:gap-16"
          >
            <div
              className={`overflow-hidden rounded-3xl border border-border shadow-[0_24px_60px_-30px_rgba(60,50,35,0.25)] ${
                i % 2 === 1 ? 'md:order-2' : ''
              }`}
            >
              <Image
                src={service.image || '/placeholder.svg'}
                alt={service.alt}
                width={880}
                height={660}
                className="h-full w-full object-cover"
              />
            </div>
            <div className={i % 2 === 1 ? 'md:order-1' : ''}>
              <h2 className="font-serif text-2xl text-foreground text-balance md:text-4xl lg:text-5xl">
                {service.title}
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
                {service.description}
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:text-accent"
              >
                Start a Project
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
