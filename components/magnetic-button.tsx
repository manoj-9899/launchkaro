'use client'

import { useRef, type ReactNode, type MouseEvent } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type MagneticButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'dark' | 'light' | 'outline' | 'outline-light'
  className?: string
  icon?: boolean
  target?: string
  rel?: string
}

export function MagneticButton({
  children,
  href = '#',
  variant = 'dark',
  className,
  icon = true,
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current
    if (!el || window.matchMedia('(pointer: coarse)').matches) return
    const r = el.getBoundingClientRect()
    const x = e.clientX - (r.left + r.width / 2)
    const y = e.clientY - (r.top + r.height / 2)
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.28}px)`
  }

  const onLeave = () => {
    const el = ref.current
    if (el) el.style.transform = ''
  }

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        'group relative inline-flex h-12 min-h-[44px] items-center justify-center gap-3 overflow-hidden rounded-full text-sm font-medium tracking-tight whitespace-nowrap transition-[transform,background-color,color,box-shadow] duration-500 ease-out-expo active:scale-[0.98] will-change-transform',
        icon ? 'pr-2.5 pl-6' : 'px-6',
        variant === 'dark' &&
          'bg-foreground text-background hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.45)]',
        variant === 'light' && 'bg-background text-foreground hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.3)]',
        variant === 'outline' &&
          'border border-foreground/20 bg-background/80 text-foreground hover:border-foreground/50 hover:bg-background shadow-xs backdrop-blur-sm',
        variant === 'outline-light' &&
          'border border-background/20 bg-background/10 text-background hover:border-background/40 hover:bg-background/20 shadow-xs backdrop-blur-sm',
        className,
      )}
    >
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-500 ease-out-expo group-hover:-translate-y-full">
          {children}
        </span>
        <span
          aria-hidden
          className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-out-expo group-hover:translate-y-0"
        >
          {children}
        </span>
      </span>
      {icon && (
        <span
          className={cn(
            'relative flex size-8.5 shrink-0 items-center justify-center overflow-hidden rounded-full',
            variant === 'dark' && 'bg-background text-foreground',
            variant === 'light' && 'bg-foreground text-background',
            variant === 'outline' && 'bg-foreground text-background',
            variant === 'outline-light' && 'bg-background/20 text-background',
          )}
        >
          <ArrowUpRight className="size-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-4 group-hover:-translate-y-4" />
          <ArrowUpRight className="absolute size-4 -translate-x-4 translate-y-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-0 group-hover:translate-y-0" />
        </span>
      )}
    </a>
  )
}
