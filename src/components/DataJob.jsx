import React from 'react'
import { Link } from 'react-router-dom'
import { LOGIN_URL } from '../config/env'
import jobGif1 from '../assets/dataJob1.gif'
import jobGif2 from '../assets/dataJob2.gif'
import jobGif3 from '../assets/dataJob3.gif'
import Reveal from './Reveal'

function DataJob() {
  const sections = [
    {
      id: 'curated-jobs',
      title: (
        <>
          Handpicked & curated <span className="text-[#e9724c]">#data</span> jobs
        </>
      ),
      blurb:
        'Don’t waste time searching. Spend more time churning out applications.',
      bullets: [
        { id: 'au-roles', icon: '🚩', text: 'Australian based data analyst & engineering jobs' },
        { id: 'scan-boards', icon: '✨', text: 'We scan leading job boards like LinkedIn & Seek' },
        { id: 'hidden-jobs', icon: '➕', text: 'Hidden jobs that “data” professionals can do' },
        { id: 'seniority-filter', icon: '💡', text: 'Filter by seniority; 100s of junior and associate roles' },
        { id: 'ai-filters', icon: '⚡', text: 'Smart AI filters to expedite your job hunt' },
        { id: 'security-flags', icon: '🛡️', text: 'Security clearance, citizenship/PR flags' },
      ],
      cta: { label: 'ACCESS FOR FREE 🔥', to: '#free', variant: 'primary' },
      image: jobGif1,
    },
    {
      id: 'sql-sims',
      title: (
        <>
          SQL simulations & interview practice <span className="font-normal">[COMING SOON]</span>
        </>
      ),
      blurb:
        'Become a SQL guru. Stand out from the crowd. Get domain exposure.',
      bullets: [
        { id: 'au-cases', icon: '📍', text: '50+ Aussie-based company-specific case studies' },
        { id: 'real-models', icon: '✨', text: 'Get exposed to real-world data models & project briefs' },
        { id: 'brand-cases', icon: '📁', text: 'Case studies from Woolies, CBA, Telstra etc.' },
        { id: 'solve-sql', icon: '🧠', text: 'Solve business questions using SQL' },
        { id: 'advanced', icon: '💡', text: 'Develop advanced SQL skills' },
        { id: 'exec-env', icon: '⌨️', text: 'Code SQL using our code execution environment' },
      ],
      cta: { label: 'ACCESS FOR FREE 🔥', to: '#', variant: 'primary' },
      image: jobGif2,
    },
    {
      id: 'save-track',
      title: 'Save jobs & track your applications',
      blurb:
        'No missed deadlines, no missed opportunities, know when to follow-up.',
      bullets: [
        { id: 'save', icon: '📌', text: 'Save jobs directly from the job database' },
        { id: 'age', icon: '⏳', text: 'See ageing jobs and take action' },
        { id: 'manage', icon: '🗂️', text: 'You can manage details about different companies' },
        { id: 'one-place', icon: '📦', text: 'Everything’s in one place, so it saves time' },
        { id: 'contacts', icon: '📇', text: 'Store contacts so you can follow up easily' },
        { id: 'status', icon: '⚡', text: 'You can change the status of each application' },
      ],
      cta: { label: 'ACCESS FOR FREE 🔥', to: '#free', variant: 'primary' },
      image: jobGif3,
    },
  ]

  return (
    <section className="w-full bg-[rgb(243,243,243)] font-roboto">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-10 md:py-12 lg:py-[96px]">
        <Reveal as="h2" className="text-center text-[#091540] font-bold text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px] leading-tight">
          The smarter way to
          land a data job.
        </Reveal>

        <div className="mt-8 md:mt-10 space-y-12 md:space-y-16 lg:space-y-20">
          {sections.map(({ id, title, blurb, bullets, cta, image }, index) => (
            <div key={id} className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-stretch">
              <Reveal className="w-full lg:col-span-2" variant="fade-right">
                <h3 className="text-[#e9724c] text-lg sm:text-xl md:text-2xl font-semibold leading-[1.2] tracking-[-0.5px] md:tracking-[-1px] font-inter">
                  {title}
                </h3>
                <p className="mt-3 text-[15px] sm:text-[16px] md:text-[18px] leading-[24px] md:leading-[27px] font-inter text-[#7692FF] ">
                  {blurb}
                </p>

                <ul className="mt-5 md:mt-6 space-y-2.5 md:space-y-3 font-inter">
                  {bullets.map(({ id: bid, icon, text }) => (
                    <li key={bid} className="flex items-start gap-2.5 md:gap-3 text-slate-800">
                      <span className="select-none leading-6 text-base sm:text-lg">{icon}</span>
                      <span className="leading-6 text-[14px] sm:text-[15px] md:text-base">{text}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 md:mt-8">
                  {cta.variant === 'primary' ? (
                    <Link
                      to={LOGIN_URL}
                      className="btn-shine inline-flex w-full sm:w-auto items-center justify-center h-11 px-6 rounded-full text-[16px] font-bold text-white bg-[#091540] shadow-[0_7px_30px_-10px_rgba(9,21,64,0.25)] hover:opacity-95"
                    >
                      {cta.label}
                    </Link>
                  ) : (
                    <span className="inline-flex w-full sm:w-auto items-center justify-center h-11 px-6 rounded-full text-[16px] font-semibold text-slate-600 bg-slate-200 cursor-not-allowed">
                      {cta.label}
                    </span>
                  )}
                </div>
              </Reveal>

              <Reveal className="flex items-stretch lg:col-span-3" delay={200} variant="blur-up">
                <img
                  src={image}
                  alt="Section preview"
                  loading="lazy" decoding="async" className="w-full h-full object-cover drop-shadow rounded-xl"
                />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DataJob


