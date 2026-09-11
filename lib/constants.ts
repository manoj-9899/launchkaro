export const SITE_CONFIG = {
  name: 'LaunchKaro',
  domain: 'https://launchkaro.online',
  tagline: 'Websites for Local Businesses in Latur, Maharashtra',
  description:
    'LaunchKaro is a digital agency based in Latur, Maharashtra. We design, build and maintain fast, search-friendly websites for local businesses.',
  location: {
    city: 'Latur',
    state: 'Maharashtra',
    country: 'India',
    addressLocality: 'Latur',
    addressRegion: 'MH',
    postalCode: '413512',
    countryCode: 'IN',
  },
  contact: {
    phone: '+919423501805',
    phoneDisplay: '+91 94235 01805',
    whatsappNumber: '919423501805',
    email: 'launchkaro.team@gmail.com',
  },
  social: {
    whatsappUrl: 'https://wa.me/919423501805',
  },
} as const

export function getWhatsAppUrl(customMessage?: string): string {
  if (!customMessage) {
    return SITE_CONFIG.social.whatsappUrl
  }
  return `${SITE_CONFIG.social.whatsappUrl}?text=${encodeURIComponent(customMessage)}`
}

export function getPlanWhatsAppUrl(planName: string, price: string): string {
  const message = `Hi LaunchKaro, I'm interested in the ${planName} plan (${price}). Can we discuss getting started?`
  return getWhatsAppUrl(message)
}

export function getAdvisoryWhatsAppUrl(): string {
  const message = "Hi LaunchKaro, I'm not sure which website plan fits my business best. Can you help me decide?"
  return getWhatsAppUrl(message)
}

export function getFormWhatsAppUrl(details: {
  selectedType: string
  name: string
  phone: string
  message: string
}): string {
  const formattedText =
    `*New Conversation from LaunchKaro Website*\n\n` +
    `*I need:* ${details.selectedType}\n` +
    `*Name:* ${details.name || 'N/A'}\n` +
    `*Phone/WhatsApp:* ${details.phone || 'N/A'}\n` +
    `*Notes:* ${details.message || 'No additional details provided'}`

  return getWhatsAppUrl(formattedText)
}
