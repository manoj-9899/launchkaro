import { Palette, Smartphone, TrendingUp, Fingerprint } from 'lucide-react'

const capabilities = [
  {
    icon: Palette,
    title: 'Premium Design',
    description:
      'Thoughtful visual design that makes your business feel credible and distinctive.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First',
    description:
      'Experiences designed to look and work beautifully across every screen.',
  },
  {
    icon: TrendingUp,
    title: 'Conversion Focused',
    description:
      'Clear journeys and calls to action designed to turn visitors into customers.',
  },
  {
    icon: Fingerprint,
    title: 'Built Around Your Brand',
    description:
      'Every website shaped around the business, audience, and identity.',
  },
]

export function WhyLaunchKaro() {
  return (
    <section className="bg-background px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl rounded-3xl border border-border bg-secondary px-6 py-10 md:px-16 md:py-20">
        <h2 className="text-center font-serif text-2xl text-foreground text-balance sm:text-3xl md:text-4xl lg:text-5xl">
          Built for Businesses Ready to Stand Out
        </h2>
        <div className="mt-8 grid gap-x-16 gap-y-8 md:mt-14 md:grid-cols-2">
          {capabilities.map((capability) => (
            <div key={capability.title}>
              <capability.icon
                className="h-6 w-6 text-accent"
                aria-hidden="true"
              />
              <h3 className="mt-4 font-serif text-xl md:text-2xl text-foreground">
                {capability.title}
              </h3>
              <p className="mt-2.5 max-w-md text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
