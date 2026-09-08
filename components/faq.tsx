'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

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
      'Simply click "Start a project", submit the contact modal, or send us a message on WhatsApp (+91 94235 09134). We will chat through your requirements with no obligation.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-32">
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

        <div className="mt-10 sm:mt-14 max-w-4xl space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i

            return (
              <Reveal key={i} delay={80 + i * 40}>
                <div className="rounded-2xl border border-border/80 bg-card/60 transition-all duration-300 hover:border-foreground/30">
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    className="flex w-full items-center justify-between p-5 sm:p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 rounded-2xl"
                  >
                    <span className="text-base sm:text-lg font-medium tracking-tight text-foreground pr-4">
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        'flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-transform duration-300',
                        isOpen && 'rotate-180 bg-foreground text-background border-foreground'
                      )}
                    >
                      <ChevronDown className="size-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${i}`}
                      className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base leading-relaxed text-muted-foreground border-t border-border/40 pt-4"
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
    </section>
  )
}
