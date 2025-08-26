import React from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { LOGIN_URL } from '../config/env'

function Price() {
  const plans = [
    {
      id: 'free',
      name: 'Free',
      monthlyPrice: 0,
      yearlyPrice: 0,
      cta: 'SIGN UP',
      highlight: false,
      features: [
        { label: 'Access to 10 of the 300+ jobs added daily', available: true },
        { label: 'Complete access to job tracker', available: true },
        { label: 'SQL Practice', available: true },
        { label: '30 days worth of data', available: false },
        { label: 'Download as CSV', available: false },
      ],
    },
    {
      id: 'pro',
      name: 'Pro',
      monthlyPrice: 4.9,
      yearlyPrice: 49,
      cta: 'SIGN UP',
      highlight: true,
      features: [
        // Match Free plan labels so the first two rows show as available for Pro
        { label: 'Access to 10 of the 300+ jobs added daily', available: true },
        { label: 'Complete access to job tracker', available: true },
        // Pro-specific phrasing and additional capabilities
        { label: '300+ curated data job added daily at 7 am AEST', available: true },
        { label: 'Access to job tracker', available: true },
        { label: 'SQL Practice', available: true },
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
    <section id="pricing" className="w-full bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12 md:py-30 md:pb-0">
        
        <div className="text-center">
          <Reveal as="h2" className="font-roboto text-[#121f41] text-[26px] sm:text-[25px] md:text-[30px] lg:text-[32px] font-semibold leading-[38px]" variant="fade-up">
            Hack your way to a new data job.
          </Reveal>
          <Reveal as="p" className="font-roboto text-[#7692FF] mt-3 text-base sm:text-lg md:text-[22px] font-medium leading-[33px]" delay={150} variant="fade-up">
            Choose the best plan to fit your needs.
          </Reveal>

        </div>

        <div className="mt-10 grid grid-cols-1 md:[grid-template-columns:repeat(2,max-content)] gap-6 md:gap-6 items-stretch md:justify-center">
          {plans.map((plan, idx) => (
            <Reveal
              key={plan.id}
              className={`w-full md:w-[360px] lg:w-[380px] rounded-2xl border border-[#E6ECF2] bg-[#f8f9fb] p-6 sm:p-8 shadow-sm font-inter h-full flex flex-col ${plan.highlight ? 'ring-1 ring-[#7692FF]/40' : ''
                }`}
              delay={idx * 150}
              variant={idx % 2 === 0 ? 'tilt-in' : 'skew-up'}
            >
              <div>
                <div className="pb-3 mb-4 border-b-[2px] border-[#768bff] flex items-center justify-between gap-3">
                  <h3 className="font-inter text-lg sm:text-xl md:text-[20px] font-medium text-[#121f41] leading-[24px] ">
                    {plan.name}
                  </h3>
                  {plan.highlight && (
                    <span className="inline-block rounded-full bg-[#eaf1f9] text-[#121f41] border border-[#d0e3ec] px-2.5 py-1 text-xs font-semibold whitespace-nowrap">
                      Most popular
                    </span>
                  )}
                </div>
                <div className="font-roboto text-[28px] sm:text-[32px] md:text-[36px] tracking-wide text-[#121f41] leading-tight font-semibold tracking-[-0.5px]">
                  {`AUD ${plan.monthlyPrice.toFixed(2)} / month`}
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={`${plan.id}-feature-${idx}`} className="flex items-center gap-3">
                    {feature.available ? <CheckIcon /> : <XIcon />}
                    <span
                      className={`font-inter text-sm sm:text-base ${feature.available ? 'text-[#121f41]' : 'text-[#667085] '
                        }`}
                    >
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-2 flex flex-col items-center justify-center animate-gentlePulse mt-auto">
                <Link
                  to={LOGIN_URL}
                  className={`btn-shine w-full sm:w-[220px] md:w-[240px] inline-flex items-center justify-center font-inter text-sm md:text-base rounded-[30px] px-6 py-3 transition-colors font-semibold cursor-pointer  ${plan.highlight
                    ? 'bg-[#448aff] text-black hover:bg-[#2563EB] '
                    : 'bg-[#eaf1f9] text-[#121f41] border border-[#d0e3ec] hover:bg-[#dfeaf4]'
                    }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        {/** Comparison table - desktop/tablet */}
        <Reveal className="mt-12 hidden md:block" variant="fade-up">
          <div className="overflow-x-auto">
            <table className="min-w-[640px] w-full border border-[#E6ECF2] rounded-xl overflow-hidden text-sm">
              <thead className="bg-[#f8f9fb]">
                <tr>
                  <th className="text-left px-4 py-3 font-inter text-[#475467]">Feature</th>
                  {plans.map((p) => (
                    <th key={`head-${p.id}`} className="text-center px-4 py-3 font-inter text-[#475467]">{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from(
                  new Set(plans.flatMap((p) => p.features.map((f) => f.label)))
                )
                  .slice(0, -2)
                  .map((label) => (
                    <tr key={label} className="border-t border-[#E6ECF2]">
                      <td className="px-4 py-3 font-inter text-sm text-[#121f41]">{label}</td>
                      {plans.map((p) => {
                        const found = p.features.find((f) => f.label === label)
                        const available = Boolean(found?.available)
                        return (
                          <td key={`${p.id}-${label}`} className="px-4 py-3 text-center">
                            <span className={`${available ? 'bg-[#eaf1f9] text-[#121f41]' : 'bg-gray-200 text-gray-500'} inline-flex h-5 w-5 items-center justify-center rounded-full mx-auto`}>
                              {available ? '✓' : '×'}
                            </span>
                          </td>
                        )
                      })}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/** Mobile Feature-first comparison */}
        <Reveal className="mt-12 md:hidden" variant="fade-up">
          <div className="space-y-6">
            {Array.from(new Set(plans.flatMap((p) => p.features.map((f) => f.label)))).map(
              (label, idx) => (
                <div
                  key={`mobile-feature-${label}`}
                  className="rounded-xl border border-[#E6ECF2] bg-white p-4 shadow-sm"
                >
                  {/* Feature Title */}
                  <h4 className="mb-3 text-sm font-semibold text-[#121f41]">
                    {label}
                  </h4>

                  {/* Plans under this feature */}
                  <div className="flex flex-wrap gap-2">
                    {plans.map((p) => {
                      const found = p.features.find((f) => f.label === label);
                      const available = Boolean(found?.available);
                      return (
                        <span
                          key={`feat-${p.id}-${label}`}
                          className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${available
                              ? "bg-[#eaf1f9] text-[#121f41]"
                              : "bg-gray-200 text-gray-500 line-through"
                            }`}
                        >
                          {p.name} {available ? "✓" : "×"}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )
            )}
          </div>
        </Reveal>

      </div>
    </section>
  )
}

export default Price


