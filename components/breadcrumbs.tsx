import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export type BreadcrumbItem = {
  label: string
  href?: string
}

type BreadcrumbsProps = {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const fullItems = [{ label: 'Home', href: '/' }, ...items]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: fullItems.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.label,
      item: item.href ? `${SITE_CONFIG.domain}${item.href === '/' ? '' : item.href}` : undefined,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
        {fullItems.map((item, idx) => {
          const isLast = idx === fullItems.length - 1

          return (
            <div key={idx} className="flex items-center gap-1.5">
              {idx > 0 && <ChevronRight className="size-3 text-muted-foreground/50 shrink-0" />}
              {isLast || !item.href ? (
                <span className="text-foreground font-medium">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-foreground transition-colors underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              )}
            </div>
          )
        })}
      </nav>
    </>
  )
}
