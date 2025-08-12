import React from 'react'
import { Link } from 'react-router-dom'
import { FaRocket, FaMagnifyingGlass, FaDatabase } from 'react-icons/fa6'
import Reveal from './Reveal'

const steps = [
  {
    id: 'discover',
    title: 'Discover curated roles',
    text: 'We scan leading boards and surface high-signal data jobs in Australia.',
    Icon: FaMagnifyingGlass,
  },
  {
    id: 'practice',
    title: 'Practice real SQL cases',
    text: 'Solve Aussie company-style scenarios and sharpen interview skills.',
    Icon: FaDatabase,
  },
  {
    id: 'apply',
    title: 'Track and apply faster',
    text: 'Save roles, organise outreach, and ship more applications in less time.',
    Icon: FaRocket,
  },
]

function HowItWorks() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center">
          <Reveal as="h2" className="font-roboto text-[#091540] text-[26px] sm:text-[32px] md:text-[38px] font-semibold leading-tight" variant="fade-up">
            How it works
          </Reveal>
          <Reveal as="p" className="font-inter text-[#667085] mt-3 text-base sm:text-lg" delay={150} variant="fade-up">
            Three steps to accelerate your data job hunt in Australia
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <Reveal
              key={s.id}
              className="rounded-2xl border border-[#E6ECF2] bg-white p-6 sm:p-7"
              delay={idx * 150}
              variant={idx === 1 ? 'tilt-in' : 'fade-up'}
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf1f9] text-[#121f41]">
                  <s.Icon className="h-5 w-5" />
                </div>
                <h3 className="font-inter text-[18px] font-semibold text-[#121f41]">{s.title}</h3>
              </div>
              <p className="mt-3 font-inter text-[14px] text-[#475467] leading-6">{s.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 flex justify-center" delay={400} variant="fade-up">
          <Link
            to="/coming-soon"
            className="inline-flex items-center justify-center rounded-full bg-[#091540] text-white px-6 py-3 text-[16px] font-bold hover:opacity-95"
          >
            Get started
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

export default HowItWorks


