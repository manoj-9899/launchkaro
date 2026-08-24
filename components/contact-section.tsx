'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'

const businessTypes = [
  'Function Hall / Venue',
  'Jewellery Store',
  'Café / Restaurant',
  'Coaching Institute',
  'Hotel / Hospitality',
  'Other',
]

export function ContactSection() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  // Form state
  const [businessType, setBusinessType] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    // TODO: Wire this up to Neon / backend action
    await new Promise((resolve) => setTimeout(resolve, 600))
    setSubmitting(false)
    setSubmitted(true)
  }

  function handleNext(e: FormEvent) {
    e.preventDefault()
    if (!businessType || !name.trim()) return
    setStep(2)
  }

  return (
    <section id="contact" className="py-12 md:py-32 bg-background">
      <div className="mx-auto max-w-xl px-6">
        {/* Top Header & WhatsApp Action */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </p>
          <h2 className="mt-2 font-serif text-3xl text-balance md:mt-4 md:text-5xl">
            Tell us about your business
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground text-pretty md:mt-4 md:text-base">
            Most people just send us a WhatsApp — it&apos;s faster and easier.
          </p>

          <div className="mt-6 md:mt-8">
            <a
              href="https://wa.me/919423503805?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20website%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:opacity-95 min-h-[52px] shadow-xs"
            >
              <svg
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp →
            </a>
          </div>

          {/* Thin Divider */}
          <div className="relative my-8 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative bg-background px-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              or
            </div>
          </div>
        </div>

        {/* 2-Step Form Card */}
        <div className="rounded-3xl border bg-card p-6 md:p-10 shadow-xs">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 py-10 text-center">
              <p className="font-serif text-3xl">Thank you</p>
              <p className="max-w-xs leading-relaxed text-muted-foreground text-sm">
                Your inquiry has been received. We&apos;ll be in touch soon.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false)
                  setStep(1)
                  setBusinessType('')
                  setName('')
                  setEmail('')
                  setMessage('')
                }}
                className="mt-2 text-sm text-accent underline-offset-4 hover:underline"
              >
                Send another inquiry
              </button>
            </div>
          ) : step === 1 ? (
            <form onSubmit={handleNext} className="flex flex-col gap-5">
              <div className="flex items-center justify-between text-xs text-muted-foreground font-medium mb-1">
                <span>Step 1 of 2</span>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="businessType" className="text-sm font-medium">
                  What kind of business do you have?
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  required
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="appearance-none rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring min-h-[48px]"
                >
                  <option value="" disabled>
                    Select your business
                  </option>
                  {businessTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  placeholder="Full name"
                  className="rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-ring min-h-[48px]"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 min-h-[48px]"
              >
                Next →
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex items-center justify-between text-xs text-muted-foreground font-medium mb-1">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-1 text-accent hover:underline"
                >
                  ← Back
                </button>
                <span>Step 2 of 2</span>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  placeholder="you@business.com"
                  className="rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-ring min-h-[48px]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What are you looking to build?"
                  className="resize-none rounded-xl border bg-background px-4 py-3 text-sm leading-relaxed outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-ring"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60 min-h-[48px]"
                >
                  {submitting ? 'Sending…' : 'Send Inquiry →'}
                </button>
                <p className="mt-2.5 text-center text-xs text-muted-foreground font-normal">
                  We respond to every inquiry.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
