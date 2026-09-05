import type { ReactNode } from 'react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  index: string
  label: string
  title: ReactNode
  aside?: ReactNode
  className?: string
}

export function SectionHeading({ index, label, title, aside, className }: SectionHeadingProps) {
  return (
    <div className={cn('grid gap-6 md:grid-cols-12 md:gap-8', className)}>
      <Reveal className="flex items-center gap-3 text-xs tracking-[0.18em] uppercase md:col-span-3">
        <span className="text-muted-foreground">{index}</span>
        <span className="h-px w-6 bg-foreground/30" />
        <span>{label}</span>
      </Reveal>
      <Reveal
        as="h2"
        delay={80}
        className="max-w-3xl text-[clamp(1.75rem,5.2vw,3.75rem)] leading-[1.05] font-medium tracking-[-0.035em] text-balance md:col-span-7"
      >
        {title}
      </Reveal>
      {aside && (
        <Reveal delay={160} className="md:col-span-2 md:justify-self-end md:self-end">
          {aside}
        </Reveal>
      )}
    </div>
  )
}
