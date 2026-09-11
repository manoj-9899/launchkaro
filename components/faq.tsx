'use client'

import { useState } from 'react'
import { ChevronDown, MessageCircle, Phone } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'
import { SITE_CONFIG } from '@/lib/constants'

type FAQItem = {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'How much does a business website cost?',
    answer:
      'Our website packages start at ₹9,999 for a 3-page Starter site, ₹17,999 for a 5-page Pro site, and ₹24,999 for an 8-page Premium site. All prices are one-time with no hidden fees.',
  },
  {
    question: 'How long does it take to launch a website?',
    answer:
      'Starter websites are delivered in 7 days, Pro websites in 10 days, and Premium websites in 14 days after we receive your details and photos.',
  },
  {
    question: 'Will my website work well on mobile phones?',
    answer:
      'Yes. Every website we build is designed mobile-first so it loads fast and looks great on all smartphones, tablets, and desktop screens.',
  },
  {
    question: 'Do you help with domain name and hosting setup?',
    answer:
      'Yes. We assist you with domain registration and hosting configuration so your site is properly connected and live on the internet.',
  },
  {
    question: 'What is included in local SEO setup?',
    answer:
      'We set up clean page titles, meta descriptions, mobile responsiveness, fast page speeds, and proper local structure so people searching in your area can find you on Google.',
  },
  {
    question: 'How do I start a project with LaunchKaro?',
    answer:
      'Simply click "Start a project", submit the contact modal, or send us a message on WhatsApp (+91 94235 01805). We will chat through your requirements with no obligation.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="05"
          label="Frequently asked questions"
          title={
            <>
              Common questions about working with{' '}
              <em className="font-serif font-normal italic text-foreground/75">LaunchKaro</em>.
            </>
          }
        />

        <div className="mt-6 sm:mt-8 md:mt-10 grid gap-6 md:grid-cols-12 md:gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct Assistance Card */}
          <Reveal delay={100} className="md:col-span-4 lg:col-span-4">
            <div className="rounded-[22px] border border-border/80 bg-card p-6 sm:p-7 space-y-4 shadow-xs">
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground/80 block">
                Need more help?
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
                Have a different question?
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Can&apos;t find the answer you&apos;re looking for? Reach out directly and we&apos;ll be happy to help.
              </p>
              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={SITE_CONFIG.social.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background transition-all duration-300 ease-out-expo hover:bg-foreground/90 active:scale-[0.98] shadow-xs"
                >
                  <MessageCircle className="size-4 text-emerald-400 shrink-0" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-full border border-border bg-background/60 px-4 text-xs sm:text-sm font-medium text-muted-foreground transition-all duration-300 ease-out-expo hover:border-foreground/30 hover:bg-secondary/60 hover:text-foreground active:scale-[0.98]"
                >
                  <Phone className="size-3.5 text-muted-foreground shrink-0" />
                  <span>Call {SITE_CONFIG.contact.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Accordion Items */}
          <div className="md:col-span-8 lg:col-span-8 space-y-3 sm:space-y-3.5">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i

              return (
                <Reveal key={i} delay={80 + i * 40}>
                  <div
                    className={cn(
                      'rounded-[22px] border transition-all duration-300 ease-out-expo',
                      isOpen
                        ? 'border-foreground/35 bg-background shadow-xs ring-1 ring-foreground/10'
                        : 'border-border/70 bg-card/40 hover:border-foreground/30 hover:bg-card/80'
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${i}`}
                      className="flex w-full min-h-[68px] sm:min-h-[72px] items-center justify-between px-6 py-4 sm:px-7 sm:py-4.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 rounded-[22px]"
                    >
                      <span className="text-base sm:text-[17px] font-medium sm:font-semibold tracking-tight text-foreground pr-4">
                        {faq.question}
                      </span>
                      <span
                        className={cn(
                          'flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ease-out-expo',
                          isOpen
                            ? 'rotate-180 bg-foreground text-background border-foreground shadow-xs'
                            : 'border-border bg-background text-muted-foreground hover:border-foreground/40'
                        )}
                      >
                        <ChevronDown className="size-[15px]" />
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        id={`faq-answer-${i}`}
                        className="px-6 pb-5 sm:px-7 sm:pb-6 text-sm sm:text-[15px] leading-[24px] text-muted-foreground border-t border-border/40 pt-3.5 transition-all duration-300"
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
