import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPricing } from '../store/slices/pricingSlice'
import Reveal from './Reveal'
import { LOGIN_URL } from '../config/env'

function Price() {
  const dispatch = useDispatch()
  const { header, card, loading, error } = useSelector((state) => state.pricing)

  useEffect(() => {
    dispatch(fetchPricing())
  }, [dispatch])

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

  if (!header && !card) return null

  const plans = card ? [
    {
      id: 'pro',
      name: card.planName,
      priceDisplay: card.price,
      cta: 'SIGN UP',
      highlight: true,
      badge: card.badge,
      features: card.points.map(p => ({ label: p, available: true }))
    }
  ] : []

  return (
    <section id="pricing" className="w-full bg-[#f3f3f3]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12 md:py-30">

        {header && (
          <div className="text-center">
            <Reveal as="h2" className="font-roboto text-[#121f41] text-[26px] sm:text-[25px] md:text-[30px] lg:text-[32px] font-semibold leading-[38px]" variant="fade-up">
              {header.mainTitle}
            </Reveal>
            <Reveal as="p" className="font-roboto text-[#7692FF] mt-3 text-base sm:text-lg md:text-[22px] font-medium leading-[33px]" delay={150} variant="fade-up">
              {header.mainSubtitle}
            </Reveal>
          </div>
        )}

        <div className="mt-10 flex flex-col items-center justify-center">
          {plans.map((plan, idx) => (
            <Reveal
              key={plan.id}
              className={`w-full md:w-[360px] lg:w-[380px] rounded-2xl border border-[#E6ECF2] bg-[#f8f9fb] p-6 sm:p-8 shadow-sm font-inter flex flex-col ${plan.highlight ? 'ring-1 ring-[#7692FF]/40' : ''
                }`}
              delay={idx * 150}
              variant="tilt-in"
            >
              <div>
                <div className="pb-3 mb-4 border-b-[2px] border-[#768bff] flex items-center justify-between gap-3">
                  <h3 className="font-inter text-lg sm:text-xl md:text-[20px] font-medium text-[#121f41] leading-[24px] ">
                    {plan.name}
                  </h3>
                  {plan.badge && (
                    <span className="inline-block rounded-full bg-[#eaf1f9] text-[#121f41] border border-[#d0e3ec] px-2.5 py-1 text-xs font-semibold whitespace-nowrap">
                      {plan.badge}
                    </span>
                  )}
                </div>
                <div className="font-roboto text-[28px] sm:text-[32px] md:text-[36px] tracking-wide text-[#121f41] leading-tight font-semibold tracking-[-0.5px]">
                  {plan.priceDisplay}
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={`${plan.id}-feature-${idx}`} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="font-inter text-sm sm:text-base text-[#121f41]">
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-2 flex flex-col items-center justify-center animate-gentlePulse mt-auto">
                <Link
                  to={LOGIN_URL}
                  className="btn-shine w-full sm:w-[220px] md:w-[240px] inline-flex items-center justify-center font-inter text-sm md:text-base rounded-[30px] px-6 py-3 transition-colors font-semibold cursor-pointer bg-[#448aff] text-black hover:bg-[#2563EB]"
                >
                  {plan.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Price



