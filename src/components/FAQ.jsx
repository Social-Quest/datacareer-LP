import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import Reveal from './Reveal'

const faqs = [
  {
    q: 'Where do you source jobs from?',
    a: 'We scan leading Australian job boards and company career pages daily at 7 am AEST. Duplicates are de-duplicated and roles are tagged for seniority and domain.',
  },
  {
    q: 'How often is the database updated?',
    a: 'Every morning at 7 am AEST, with smaller refreshes throughout the day for trending roles.',
  },
  {
    q: 'What’s included in Free vs Pro?',
    a: 'Free provides a taste: limited roles and access. Pro unlocks the full, curated database, job tracker, SQL practice (when launched), and CSV export.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. You can cancel in a click and you will retain access until the end of the billing cycle.',
  },
  {
    q: 'Is this only for Australia?',
    a: 'We are laser-focused on Australia for now to provide the most relevant roles and interview prep content.',
  },
  {
    q: 'How do I upgrade from Free to Pro?',
    a: 'Log in to your account, go to Billing, and choose the Pro plan. Your upgrade is instant.',
  },
  {
    q: 'Do you offer a trial period?',
    a: 'Yes, we provide a 7-day free trial of the Pro plan so you can explore all features.',
  },
  {
    q: 'Can I download the job listings?',
    a: 'Yes, Pro users can export the full job database as a CSV file anytime.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept major credit cards, PayPal, and corporate invoicing for annual plans.',
  },
  {
    q: 'Is my data secure?',
    a: 'Absolutely. We use industry-standard encryption and never share your data with third parties.',
  },
  
]

function Item({ q, a, idx }) {
  const [open, setOpen] = useState(false)
  const contentRef = useRef(null)
  const [maxHeight, setMaxHeight] = useState('0px')

  // Measure content height precisely (includes dynamic content) and animate
  useLayoutEffect(() => {
    const el = contentRef.current
    if (!el) return

    const measure = () => {
      setMaxHeight(open ? `56px` : '0px')
    }

    measure()

    let ro
    if ('ResizeObserver' in window) {
      ro = new ResizeObserver(() => measure())
      ro.observe(el)
    }

    return () => {
      if (ro) ro.disconnect()
    }
  }, [open])

  return (
    <Reveal as="div" className="border-b border-[#E6ECF2] py-4 bg-white rounded-2xl p-4 mb-4" delay={idx * 80} variant={idx % 2 ? 'fade-left' : 'fade-right'}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between text-left"
        aria-expanded={open}
      >
        <span className="font-inter text-[16px] sm:text-[17px] font-semibold text-[#121f41]">{q}</span>
        <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#eaf1f9] text-[#121f41]">
          {open ? '×' : '+'}
        </span>
      </button>
      <div
        className="overflow-hidden transition-[max-height] duration-300 ease-out"
        style={{ maxHeight }}
      >
        <div ref={contentRef} className="mt-3 font-inter text-[14px] text-[#475467] leading-6">
          {a}
        </div>
      </div>
    </Reveal>
  )
}

function FAQ() {
  return (
    <section className="w-full bg-[#f3f3f3]">
      <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center">
          <Reveal as="h2" className="font-roboto text-[#091540] text-[26px] sm:text-[32px] md:text-[38px] font-semibold leading-tight" variant="fade-up">
            Frequently asked questions
          </Reveal>
          <Reveal as="p" className="font-inter text-[#667085] mt-3 text-base sm:text-lg" delay={150} variant="fade-up">
            Answers to common questions about the product and pricing
          </Reveal>
        </div>

        <div className="mt-8 divide-y divide-transparent">
          {faqs.map((f, idx) => (
            <Item key={f.q} q={f.q} a={f.a} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ


