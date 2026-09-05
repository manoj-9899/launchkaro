import { ArrowUpRight, Code2, Gauge, LifeBuoy, PenTool } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const services = [
  {
    n: '01',
    icon: Code2,
    title: 'Web design & development',
    desc: 'Custom websites built from scratch for your business — not a recycled template. Works properly on the phones your customers actually use.',
    tags: ['Business websites', 'Landing pages', 'Mobile-first'],
  },
  {
    n: '02',
    icon: PenTool,
    title: 'Branding & visual identity',
    desc: 'A logo, colours, and type that make your business look established and easy to recognise. Everything stays consistent from your signboard to your website.',
    tags: ['Logo design', 'Colour & type', 'Brand kit'],
  },
  {
    n: '03',
    icon: Gauge,
    title: 'SEO & performance',
    desc: 'We set up your pages so people searching in your area can find you on Google. Fast loading, clean structure, and proper local listings.',
    tags: ['Local SEO', 'Page speed', 'Google Business'],
  },
  {
    n: '04',
    icon: LifeBuoy,
    title: 'Maintenance & support',
    desc: 'Your site stays online, updated, and backed up after launch. Send us a message when prices, photos, or timings change and we handle it.',
    tags: ['Content updates', 'Hosting & domain', 'Backups'],
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="01"
          label="Services"
          title={
            <>
              Everything you need to get your business{' '}
              <em className="font-serif font-normal italic text-foreground/70">online</em> — and keep it there.
            </>
          }
        />

        <ul className="mt-10 sm:mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:mt-20 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 80} className="group relative flex h-full flex-col bg-background">
              <a href="#contact-form" className="flex flex-1 flex-col p-5 sm:p-6 transition-colors duration-500 hover:bg-secondary/70 md:p-8">
                <div className="flex items-start justify-between">
                  <span className="text-xs tracking-[0.18em] text-muted-foreground">{s.n}</span>
                  <span className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-500 ease-out-expo group-hover:rotate-45 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>

                <s.icon className="mt-6 sm:mt-8 size-6 stroke-[1.5] text-foreground/70 transition-transform duration-500 ease-out-expo group-hover:-translate-y-1 md:mt-16" />

                <h3 className="mt-4 text-xl sm:text-2xl font-medium tracking-tight text-foreground">{s.title}</h3>
                <p className="mt-2.5 sm:mt-3 text-sm leading-relaxed text-pretty text-muted-foreground">{s.desc}</p>

                <ul className="mt-6 flex flex-wrap gap-1.5 md:mt-auto md:pt-10">
                  {s.tags.map((t, j) => (
                    <li
                      key={j}
                      className="rounded-full border border-border px-2.5 py-1 text-[11px] tracking-wide text-muted-foreground transition-colors duration-300 group-hover:border-foreground/20"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
