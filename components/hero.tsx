import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/images/hero.png"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/25" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 pt-24 pb-20 md:py-20 text-center">
        <h1 className="font-serif text-[1.75rem] leading-[1.18] text-white text-balance sm:text-4xl md:text-6xl lg:text-7xl lg:leading-[1.12]">
          <span className="block sm:inline">Turn your business into a </span>
          <span className="block sm:inline">brand people remember.</span>
        </h1>

        <div className="mt-6 md:mt-10 flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-3.5 md:gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-white/95 min-h-[48px]"
            >
              Start a Project
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/50 min-h-[48px]"
            >
              View Our Work
            </a>
          </div>
          <p className="mt-3.5 text-[11px] sm:text-xs font-normal text-white/75 tracking-wide">
            2 client spots available for September
          </p>
        </div>
      </div>

      {/* Quiet bottom-left brand mark */}
      <div
        className="absolute bottom-5 left-6 z-10 hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/40 font-semibold pointer-events-none"
        aria-hidden="true"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
        LaunchKaro
      </div>

      {/* Subtle bottom-centered scroll cue */}
      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-0.5 text-[11px] font-medium tracking-wider text-white/60 pointer-events-none animate-pulse"
        aria-hidden="true"
      >
        <span>Scroll to explore</span>
        <span aria-hidden="true">↓</span>
      </div>
    </section>
  )
}
