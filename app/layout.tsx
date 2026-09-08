import type { Metadata, Viewport } from 'next'
import { Geist, Instrument_Serif } from 'next/font/google'
import { SITE_CONFIG } from '@/lib/constants'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: `${SITE_CONFIG.name} | Website Design & Development for Local Businesses`,
  description: SITE_CONFIG.description,
  applicationName: SITE_CONFIG.name,
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  keywords: [
    'Web design Latur',
    'Website development Latur',
    'Digital agency Latur',
    'Website designer Latur',
    'Web developer Latur',
    'Local business website development Maharashtra',
    'Local SEO Latur',
    'Google Business setup Latur',
    'LaunchKaro',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${SITE_CONFIG.name} | Website Design & Development for Local Businesses`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.name,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} | Website Design & Development for Local Businesses`,
    description: SITE_CONFIG.description,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fbfaf8',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_CONFIG.domain}/#website`,
      url: SITE_CONFIG.domain,
      name: SITE_CONFIG.name,
      description: SITE_CONFIG.description,
      inLanguage: 'en-IN',
    },
    {
      '@type': ['ProfessionalService', 'Organization'],
      '@id': `${SITE_CONFIG.domain}/#organization`,
      name: SITE_CONFIG.name,
      description: SITE_CONFIG.description,
      url: SITE_CONFIG.domain,
      telephone: SITE_CONFIG.contact.phone,
      email: SITE_CONFIG.contact.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE_CONFIG.location.addressLocality,
        addressRegion: SITE_CONFIG.location.addressRegion,
        postalCode: SITE_CONFIG.location.postalCode,
        addressCountry: SITE_CONFIG.location.countryCode,
      },
      priceRange: '₹9,999 - ₹24,999',
      areaServed: [
        {
          '@type': 'AdministrativeArea',
          name: 'Latur',
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Maharashtra',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Website Development Packages',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Starter Website Package',
              description: '3-page website built for local businesses with 7-day delivery.',
            },
            price: '9999',
            priceCurrency: 'INR',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Pro Website Package',
              description: '5-page website with local SEO setup and Google Maps integration.',
            },
            price: '17999',
            priceCurrency: 'INR',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Premium Website Package',
              description: '8-page complete website launch with analytics, domain & hosting setup assistance.',
            },
            price: '24999',
            priceCurrency: 'INR',
          },
        ],
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${instrument.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
