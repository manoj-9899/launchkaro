import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const steps = [
  {
    n: '01',
    title: 'We talk it through',
    desc: 'A free call or WhatsApp chat about your business, your customers, and what the website needs to do. No jargon, no obligation.',
  },
  {
    n: '02',
    title: 'Plan & design',
    desc: 'We agree on the pages, gather your photos and details, then share a design for you to review. Nothing gets built until you are happy with how it looks.',
  },
  {
    n: '03',
    title: 'Build & review',
    desc: 'We build the site to load fast and work on every screen size. You get a private link to check it and ask for changes.',
  },
  {
    n: '04',
    title: 'Launch & support',
    desc: 'We connect your domain, put the site live, and list it on Google. After that we stay available for updates whenever you need them.',
  },
]

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="03"
          label="Process"
          title={
            <>
              A simple process, with{' '}
              <em className="font-serif font-normal italic text-foreground/70">no surprises</em> along the way.
            </>
          }
        />

        <ol className="mt-10 sm:mt-12 md:mt-20">
          {steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.n}
              delay={i * 60}
              className="group grid gap-3 sm:gap-4 border-t border-border py-6 sm:py-7 transition-colors duration-500 hover:border-foreground/40 md:grid-cols-12 md:items-baseline md:gap-8 md:py-10"
            >
              <span className="font-serif text-3xl sm:text-4xl leading-none text-foreground/25 transition-colors duration-500 group-hover:text-foreground md:col-span-2 md:text-6xl">
                {s.n}
              </span>
              <div className="md:col-span-4">
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight transition-transform duration-500 ease-out-expo md:text-3xl md:group-hover:translate-x-2">
                  {s.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-pretty text-muted-foreground md:col-span-6 md:text-base">
                {s.desc}
              </p>
            </Reveal>
          ))}
          <li className="border-t border-border" aria-hidden />
        </ol>
      </div>
    </section>
  )
}
