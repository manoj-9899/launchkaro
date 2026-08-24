const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: 'mailto:launchkaro.team@gmail.com' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row md:py-12">
        <p className="font-serif text-xl text-foreground">LaunchKaro</p>
        <nav aria-label="Footer navigation" className="flex flex-col items-center gap-3.5 md:flex-row md:gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-border py-6 pb-24 md:pb-6 text-center text-xs text-muted-foreground">
        © 2026 LaunchKaro. Digital experiences for real businesses. · Based in Pune
      </div>
    </footer>
  )
}
