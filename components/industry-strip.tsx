const industries = [
  'Restaurants',
  'Cafés',
  'Hotels',
  'Salons',
  'Coaching',
  'Jewellery',
  'Fitness',
  'Events',
]

export function IndustryStrip() {
  const items = [...industries, ...industries, ...industries, ...industries]
  return (
    <section
      aria-label="Industries we serve"
      className="overflow-hidden border-y border-border bg-secondary py-6"
    >
      <div className="animate-marquee flex w-max items-center">
        {items.map((industry, i) => (
          <span
            key={`${industry}-${i}`}
            className="flex items-center text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground"
          >
            <span className="px-8">{industry}</span>
            <span aria-hidden="true" className="text-accent">
              ·
            </span>
          </span>
        ))}
      </div>
    </section>
  )
}
