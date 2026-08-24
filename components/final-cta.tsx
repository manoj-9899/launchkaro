import Image from 'next/image'

export function FinalCta() {
  return (
    <section id="cta" className="relative overflow-hidden py-16 md:py-44">
      <Image
        src="/images/cta-bg.png"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-serif text-3xl text-white text-balance md:text-5xl lg:text-6xl">
          Ready to launch something better?
        </h2>
        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-white/90 min-h-[48px] md:mt-10"
        >
          Get a Free Proposal
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}
