'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2, MessageCircle, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const projectTypes = [
  'Website',
  'Redesign',
  'Landing Page',
  'Something Else',
]

type ContactModalProps = {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [selectedType, setSelectedType] = useState('Website')
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const backdropRef = useRef<HTMLDivElement>(null)

  // Handle Escape key and body scroll lock
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const getFormattedWhatsAppMessage = () => {
    return encodeURIComponent(
      `*New Conversation from LaunchKaro Website*\n\n` +
        `*I need:* ${selectedType}\n` +
        `*Name:* ${name || 'N/A'}\n` +
        `*Phone/WhatsApp:* ${phone || 'N/A'}\n` +
        `*Notes:* ${message || 'No additional details provided'}`
    )
  }

  const whatsappLink = `https://wa.me/919423509134?text=${getFormattedWhatsAppMessage()}`

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return

    setIsSubmitting(true)

    // Simulate submission delay for interactive polish
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 500)
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backdropRef.current) {
      onClose()
    }
  }

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-300 overflow-y-auto"
    >
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl border border-background/20 bg-foreground text-background shadow-2xl p-6 sm:p-8 space-y-5 animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 flex size-8 sm:size-9 items-center justify-center rounded-full border border-background/20 bg-background/10 text-background transition-colors hover:bg-background/20 hover:border-background/40 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50"
        >
          <X className="size-4" />
        </button>

        {isSubmitted ? (
          <div className="py-3 text-background space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                <CheckCircle2 className="size-6 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-xl font-medium tracking-tight">Conversation Started!</h3>
                <p className="text-xs text-background/70">Thank you, {name}. We will reach out within 24 hours.</p>
              </div>
            </div>

            <div className="rounded-xl bg-background/5 p-4 border border-background/10 text-xs space-y-1.5 text-background/80 font-mono">
              <p><span className="text-background/50">Looking for:</span> {selectedType}</p>
              <p><span className="text-background/50">Phone:</span> {phone}</p>
              {message && <p><span className="text-background/50">Notes:</span> {message}</p>}
            </div>

            <div className="pt-1">
              <button
                type="button"
                onClick={onClose}
                className="w-full h-11 items-center justify-center rounded-full bg-background text-foreground text-sm font-medium hover:bg-background/90 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Header & Subtext */}
            <div className="pr-8">
              <h3 id="modal-title" className="text-2xl sm:text-3xl font-medium tracking-tight">
                Let’s build something
              </h3>
              <p className="text-xs sm:text-sm text-background/70 mt-1">
                Tell us what you need. We’ll take it from there.
              </p>
            </div>

            {/* Section 1: I NEED A */}
            <div className="space-y-2">
              <label className="text-[11px] font-mono uppercase tracking-[0.14em] text-background/60 block">
                I NEED A
              </label>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((type) => {
                  const isSelected = selectedType === type
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelectedType(type)}
                      className={cn(
                        'rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 border',
                        isSelected
                          ? 'border-background bg-background text-foreground shadow-sm'
                          : 'border-background/20 bg-background/5 text-background/80 hover:bg-background/15 hover:border-background/30'
                      )}
                    >
                      {type}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Section 2: WHAT’S ON YOUR MIND? */}
            <div className="space-y-1.5">
              <label htmlFor="modal-mind" className="text-[11px] font-mono uppercase tracking-[0.14em] text-background/60 block">
                WHAT’S ON YOUR MIND?
              </label>
              <textarea
                id="modal-mind"
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="e.g. I need a website for my clinic with appointment booking."
                className="w-full rounded-xl border border-background/20 bg-background/10 p-3 text-sm text-background placeholder:text-background/40 focus:border-background focus:bg-background/20 focus:outline-none transition-all resize-none"
              />
            </div>

            {/* Section 3: Contact Details */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1">
                <label htmlFor="modal-name" className="text-xs font-medium text-background/80">
                  Name <span className="text-emerald-400">*</span>
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full h-10.5 rounded-xl border border-background/20 bg-background/10 px-3.5 text-sm text-background placeholder:text-background/40 focus:border-background focus:bg-background/20 focus:outline-none transition-all"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="modal-phone" className="text-xs font-medium text-background/80">
                  WhatsApp / Phone <span className="text-emerald-400">*</span>
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 94235 09134"
                  className="w-full h-10.5 rounded-xl border border-background/20 bg-background/10 px-3.5 text-sm text-background placeholder:text-background/40 focus:border-background focus:bg-background/20 focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* CTA & Microcopy */}
            <div className="pt-2 space-y-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 rounded-full bg-background text-foreground font-medium text-sm flex items-center justify-center gap-2 hover:bg-background/90 transition-all duration-300 active:scale-[0.98] disabled:opacity-50 shadow-md"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Start a conversation</span>
                    <ArrowRight className="size-4" />
                  </>
                )}
              </button>

              <div className="text-center text-xs text-background/60">
                Usually reply within 24 hours · No commitment
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
