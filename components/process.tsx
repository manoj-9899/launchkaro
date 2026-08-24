const steps = [
  {
    name: 'Discover',
    description: 'Understand the business, audience, goals, and brand.',
  },
  {
    name: 'Design',
    description: 'Shape the visual direction and experience.',
  },
  {
    name: 'Build',
    description: 'Develop a responsive, polished website.',
  },
  {
    name: 'Launch',
    description: 'Refine, test, and take the finished experience live.',
  },
]

export function Process() {
  return (
    <section id="process" className="bg-background py-12 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-serif text-3xl text-foreground text-balance md:text-5xl">
          How We Work
        </h2>
        <div className="relative mt-10 md:mt-14 pl-6 md:pl-0 space-y-7 md:space-y-0 md:grid md:grid-cols-4 md:gap-10">
          {/* Desktop horizontal connector line */}
          <div
            className="hidden md:block absolute top-[0.625rem] left-[5%] right-[10%] h-[1px] bg-[#D0CBC2] z-0"
            aria-hidden="true"
          />

          {/* Mobile vertical timeline connector line */}
          <div
            className="md:hidden absolute top-2 bottom-2 left-2 w-[1px] bg-[#D0CBC2]"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <div key={step.name} className="relative z-10 text-left">
              {/* Mobile timeline dot indicator */}
              <div
                className="md:hidden absolute -left-[21px] top-[5px] h-2.5 w-2.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              <span className="inline-block bg-background md:pr-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Step {i + 1}
              </span>
              <h3 className="mt-1 md:mt-3 font-serif text-xl md:text-2xl text-foreground">
                {step.name}
              </h3>
              <p className="mt-1 md:mt-2.5 text-sm md:text-base leading-relaxed text-muted-foreground text-pretty">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
