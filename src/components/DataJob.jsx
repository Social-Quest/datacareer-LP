import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchFeatures } from '../store/slices/featureSlice'
import { LOGIN_URL } from '../config/env'
import jobGif1 from '../assets/dataJob1.gif'
import jobGif2 from '../assets/dataJob2.gif'
import jobGif3 from '../assets/dataJob3.gif'
import Reveal from './Reveal'

function DataJob() {
  const dispatch = useDispatch()
  const { header, list: featureList, loading, error } = useSelector((state) => state.feature)

  useEffect(() => {
    dispatch(fetchFeatures())
  }, [dispatch])

  const defaultGifs = [jobGif1, jobGif2, jobGif3]

  const sections = featureList.map((f, idx) => ({
    id: `feat-${idx}`,
    title: f.title,
    blurb: f.subtitle,
    bullets: f.points?.map((p, pIdx) => ({ id: `p-${idx}-${pIdx}`, text: p })),
    cta: f.cta || null,
    image: defaultGifs[idx] || jobGif1,
    videoUrl: f.videoUrl,
  }))

  return (
    <section className="w-full bg-[rgb(243,243,243)] font-roboto">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-10 md:py-12 lg:py-[96px]">
        {header && (
          <Reveal as="h2" className="text-center text-[#091540] font-bold text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px] leading-tight">
            {header}
          </Reveal>
        )}

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
                  {bullets.map(({ id: bid, text }) => (
                    <li key={bid} className="leading-6 text-[14px] sm:text-[15px] md:text-base text-slate-800">
                      {text}
                    </li>
                  ))}
                </ul>

                {cta && (
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
                )}
              </Reveal>

              <Reveal className="flex items-stretch lg:col-span-3" delay={200} variant="blur-up">
                {sections[index].videoUrl ? (
                  <video
                    src={sections[index].videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover drop-shadow rounded-xl"
                  />
                ) : (
                  <img
                    src={image}
                    alt="Section preview"
                    loading="lazy" decoding="async" className="w-full h-full object-cover drop-shadow rounded-xl"
                  />
                )}
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DataJob


