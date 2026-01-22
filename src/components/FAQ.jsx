import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchFaqHeader } from '../store/slices/faqSlice'
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
    q: 'Can I cancel anytime?',
    a: 'Yes. You can cancel in a click and you will retain access until the end of the billing cycle.',
  },
  {
    q: 'Is this only for Australia?',
    a: 'We are laser-focused on Australia for now to provide the most relevant roles and interview prep content.',
  },
  {
    q: 'Do you offer a trial period?',
    a: 'Yes, we provide a 7-day free trial of the Pro plan so you can explore all features.',
  },
  {
    q: 'What happens when my trial ends based on current flow?',
    a: 'You can still log in after your trial ends. To keep using premium features, simply upgrade anytime - no automatic charges.',
  },
  {
    q: 'Can I switch between plans?',
    a: 'Yes, you can upgrade or downgrade your plan at any time from your account settings.',
  },
  {
    q: 'Do you offer a refund policy?',
    a: 'We offer a 30-day money-back guarantee if you are not satisfied with our service.',
  },
  {
    q: 'Is there a discount for annual billing?',
    a: 'Yes, we offer a 20% discount if you choose to be billed annually.',
  },
]

const Item = ({ q, a, idx }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (idx === 0) setOpen(true)
  }, [idx])

  // Toggle handling specifically for click
  const toggleOpen = () => {
    setOpen((prev) => !prev)
  }

  return (
    <Reveal as="div" className="border-b border-[#E6ECF2] py-4 bg-white cursor-pointer rounded-2xl p-4 mb-4" delay={idx * 80} variant={idx % 2 ? 'fade-left' : 'fade-right'}>
      <button
        type="button"
        onClick={toggleOpen}
        className="w-full flex items-center justify-between text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-inter text-[16px] sm:text-[17px] font-semibold text-[#121f41]">{q}</span>
        <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#eaf1f9] text-[#121f41] cursor-pointer">
          {open ? '×' : '+'}
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'
          }`}
      >
        <div className="overflow-hidden">
          <p className="font-inter text-[15px] sm:text-base text-[#475467] leading-6">{a}</p>
        </div>
      </div>
    </Reveal>
  )
}

function FAQ() {
  const dispatch = useDispatch()
  const { header } = useSelector((state) => state.faq)

  useEffect(() => {
    dispatch(fetchFaqHeader())
  }, [dispatch])

  return (
    <section id="faq" className="w-full bg-[#f8f9fb]">
      <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8 py-12 md:py-20">

        {header && (
          <div className="text-center mb-10">
            <Reveal as="h2" className="font-roboto text-[#121f41] text-[26px] sm:text-[32px] md:text-[38px] font-semibold leading-tight" variant="fade-up">
              {header.mainTitle}
            </Reveal>
            <Reveal as="p" className="font-roboto text-[#7692FF] mt-3 text-base sm:text-lg md:text-[20px]" delay={150} variant="fade-up">
              {header.mainSubtitle}
            </Reveal>
          </div>
        )}

        <div className="mt-8 divide-y divide-transparent ">
          {faqs.map((f, idx) => (
            <Item key={f.q} q={f.q} a={f.a} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ


