import React from 'react'
import Reveal from './Reveal'

function Price() {
  const plans = [
    {
      id: 'free',
      name: 'Free',
      priceLabel: 'AUD 0 / month',
      cta: 'SIGN UP',
      highlight: false,
      features: [
        { label: 'Access to 10 of the 300+ jobs added daily', available: true },
        { label: 'Complete access to job tracker', available: true },
        { label: 'SQL Practice [Coming Soon]', available: true },
        { label: '30 days worth of data', available: false },
        { label: 'Download as CSV', available: false },
      ],
    },
    {
      id: 'pro',
      name: 'Pro',
      priceLabel: 'AUD 4.90 / month',
      cta: 'SIGN UP',
      highlight: true,
      features: [
        { label: '300+ curated data job added daily at 7 am AEST', available: true },
        { label: 'Access to job tracker', available: true },
        { label: 'SQL Practice [Coming Soon]', available: true },
        { label: '30 days worth of data', available: true },
        { label: 'Download as CSV', available: true },
      ],
    },
  ]

  const CheckIcon = ({ className = '' }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`h-5 w-5 shrink-0 ${className}`}
    >
      <circle cx="12" cy="12" r="10" fill="#3B82F6" />
      <path
        d="M8.5 12.5l2.5 2.5 4.5-5.5"
        stroke="#ffffff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  const XIcon = ({ className = '' }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`h-5 w-5 shrink-0 ${className}`}
    >
      <circle cx="12" cy="12" r="10" fill="#E5E7EB" />
      <path d="M9 9l6 6" stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M15 9l-6 6" stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12 md:py-30">
        <div className="text-center">
          <Reveal as="h2" className="font-roboto text-[#121f41] text-[26px] sm:text-[25px] md:text-[30px] lg:text-[32px] font-semibold leading-[38px]" variant="fade-up">
            Hack your way to a new data job.
          </Reveal>
          <Reveal as="p" className="font-roboto text-[#7692FF] mt-3 text-base sm:text-lg md:text-[22px] font-medium leading-[33px]" delay={150} variant="fade-up">
            Choose the best plan to fit your needs.
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {plans.map((plan, idx) => (
            <Reveal
              key={plan.id}
              className={`rounded-2xl border border-[#E6ECF2] bg-[#f8f9fb] p-6 sm:p-8 shadow-sm font-inter ${
                plan.highlight ? 'ring-1 ring-[#7692FF]/40' : ''
              }`}
              delay={idx * 150}
              variant={idx % 2 === 0 ? 'tilt-in' : 'skew-up'}
            >
              <div>
                <div className="pb-3 mb-4 border-b-[2px] border-[#768bff]">
                  <h3 className="font-inter text-lg sm:text-xl md:text-[20px] font-medium text-[#121f41] leading-[24px] ">
                    {plan.name}
                  </h3>
                </div>
                <div className="font-roboto text-2xl sm:text-3xl md:text-[24px] tracking-wide text-[#121f41] leading-[29px] font-semibold tracking-[-1px]">
                  {plan.priceLabel}
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={`${plan.id}-feature-${idx}`} className="flex items-center gap-3">
                    {feature.available ? <CheckIcon /> : <XIcon />}
                    <span
                      className={`font-inter text-sm sm:text-base ${
                        feature.available ? 'text-[#121f41]' : 'text-[#667085] '
                      }`}
                    >
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex justify-center animate-gentlePulse">
                <button
                  type="button"
                  className={`w-full sm:w-[200px] font-inter text-sm md:text-base rounded-[30px] px-6 py-3 transition-colors font-semibold cursor-pointer  ${
                    plan.highlight
                      ? 'bg-[#448aff] text-black hover:bg-[#2563EB] '
                      : 'bg-[#eaf1f9] text-[#121f41] border border-[#d0e3ec] hover:bg-[#dfeaf4]'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Price


