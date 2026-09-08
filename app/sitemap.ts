import type { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.domain
  const now = new Date()

  const routes = [
    '',
    '/web-design-latur',
    '/web-development-latur',
    '/local-seo-latur',
    '/pricing',
    '/websites-for-restaurants',
    '/websites-for-real-estate',
    '/websites-for-coaching-institutes',
    '/websites-for-event-venues',
    '/websites-for-clinics',
    '/work',
    '/work/nocturne',
    '/work/atelier-estate',
    '/work/patel-function-hall',
    '/work/spice-palace',
    '/work/ascent-academy',
    '/blog',
    '/blog/how-much-does-a-business-website-cost-in-latur',
    '/blog/what-should-a-small-business-website-include',
    '/blog/how-to-get-a-business-found-on-google-in-latur',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/web-') || route === '/pricing' ? 0.9 : 0.8,
  }))
}
