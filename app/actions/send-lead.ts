'use server'

import { Resend } from 'resend'
import { SITE_CONFIG } from '@/lib/constants'

export type SendLeadPayload = {
  selectedType: string
  name: string
  phone: string
  message: string
}

export type SendLeadResult = {
  success: boolean
  error?: string
}

export async function sendLeadAction(payload: SendLeadPayload): Promise<SendLeadResult> {
  const apiKey = process.env.RESEND_API_KEY

  // Basic validation
  if (!payload.name || !payload.phone) {
    return { success: false, error: 'Name and phone number are required.' }
  }

  // If no API key configured yet (e.g. initial setup), return success so UX works smoothly
  if (!apiKey || apiKey.trim() === '') {
    console.warn('[LaunchKaro] RESEND_API_KEY is not set in environment variables.')
    return { success: true }
  }

  const resend = new Resend(apiKey)
  const recipientEmail = process.env.LEAD_NOTIFICATION_EMAIL || SITE_CONFIG.contact.email

  try {
    const { error } = await resend.emails.send({
      from: 'LaunchKaro Website <onboarding@resend.dev>',
      to: [recipientEmail],
      subject: `⚡ New Lead: ${payload.selectedType} — ${payload.name}`,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 560px; margin: 0 auto; border: 1px solid #e5e5e5; border-radius: 16px; padding: 32px; background-color: #ffffff; color: #171717;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 24px;">
            <span style="font-weight: 700; font-size: 18px; letter-spacing: -0.02em;">LaunchKaro Website Lead</span>
          </div>
          
          <div style="background-color: #f5f5f5; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
            <p style="margin: 0 0 10px 0; font-size: 14px;"><strong>Service Requested:</strong> ${payload.selectedType}</p>
            <p style="margin: 0 0 10px 0; font-size: 14px;"><strong>Client Name:</strong> ${payload.name}</p>
            <p style="margin: 0 0 10px 0; font-size: 14px;"><strong>Phone / WhatsApp:</strong> <a href="tel:${payload.phone}" style="color: #000; text-decoration: underline;">${payload.phone}</a></p>
            <p style="margin: 0; font-size: 14px;"><strong>Project Notes:</strong> ${payload.message || 'No additional notes provided.'}</p>
          </div>

          <p style="font-size: 12px; color: #737373; margin: 0;">
            This email was sent automatically from your website form at LaunchKaro.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('[LaunchKaro] Resend API error:', error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown server error'
    console.error('[LaunchKaro] Resend exception:', errorMessage)
    return { success: false, error: errorMessage }
  }
}
