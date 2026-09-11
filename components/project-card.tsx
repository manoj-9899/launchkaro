import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface ProjectCardProps {
  title: string
  category: string
  image: string
  href: string
  liveUrl?: string
  priority?: boolean
  className?: string
  onClick?: () => void
  isActive?: boolean
}

export function ProjectCard({
  title,
  category,
  image,
  href,
  liveUrl,
  priority = false,
  className,
  onClick,
  isActive = true,
}: ProjectCardProps) {
  const CardContent = (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl md:rounded-3xl border bg-card p-4 sm:p-5 md:p-6 transition-all duration-500',
        isActive
          ? 'border-border/80 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)] hover:border-border hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.18)]'
          : 'border-border/50 shadow-sm opacity-60',
        className
      )}
    >
      {/* 1. PROJECT IMAGE — PRIMARY FOCUS */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-secondary">
        <Image
          src={image}
          alt={`${title} — ${category} website showcase`}
          fill
          priority={priority}
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 840px"
          className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
        />

        {/* Subtle cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30" />

        {/* Bottom-Right Circular Link Affordance */}
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 flex size-9 sm:size-10 items-center justify-center rounded-full bg-background/90 text-foreground shadow-md backdrop-blur-md ring-1 ring-black/5 transition-all duration-300 group-hover:bg-foreground group-hover:text-background group-hover:scale-105">
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* CARD INFO BLOCK */}
      <div className="mt-4 sm:mt-5 space-y-1">
        {/* 2. PROJECT TITLE */}
        <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-foreground transition-colors group-hover:text-foreground">
          {title}
        </h3>

        {/* 3. CATEGORY */}
        <p className="text-xs sm:text-sm text-muted-foreground font-mono tracking-wide">
          {category}
        </p>

        {/* 5. SINGLE RESTRAINED ACTION */}
        <div className="pt-3 flex items-center gap-1.5 text-xs sm:text-sm font-medium text-foreground">
          <span className="link-underline">View project</span>
          <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </div>
  )

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 rounded-2xl md:rounded-3xl"
      >
        {CardContent}
      </Link>
    )
  }

  return CardContent
}
