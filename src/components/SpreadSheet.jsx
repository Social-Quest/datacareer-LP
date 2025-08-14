import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { LOGIN_URL } from '../config/env'
import spreadsheet from '../assets/spreadeSheet.svg'

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-sm font-medium">
      {children}
    </span>
  )
}

function CTAButton() {
  return (
    <Link
      to={LOGIN_URL}
      className="btn-shine inline-flex w-full sm:w-auto items-center justify-center h-11 px-6 rounded-full text-[16px] font-bold text-white bg-[#091540] shadow-[0_7px_30px_-10px_rgba(9,21,64,0.25)] hover:opacity-95"
    >
      ACCESS FOR FREE 🔥
    </Link>
  )
}

function SpreadSheet() {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const hidden = 'opacity-0 translate-y-4'
  const shown = 'opacity-100 translate-y-0'

  return (
    <section ref={sectionRef} className="font-roboto mx-auto w-full max-w-[1200px] py-8 md:py-12 lg:py-[96px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center bg-white px-4 sm:px-6 lg:px-8 " >
      <div>
        <div className={`transition-all duration-700 ease-out ${inView ? shown : hidden}`}>
          <Pill>
            <span className="font-inter text-[12px] sm:text-sm">Finding your 1st tech job in Australia is tough 😖</span>
          </Pill>
        </div>

        <h1
          className={`mt-6 text-[30px] leading-[1.2] sm:text-[36px] md:text-[44px] lg:text-[48px] text-[#091540] font-semibold tracking-[-2px] transition-all duration-700 ease-out ${inView ? shown : hidden} delay-150`}
        >
          Our app helps you <span className="text-[#7692ff]">accelerate</span> your <span className="text-[#e9724c]">#data</span> job hunt
        </h1>

        <div className={`mt-6 md:mt-8 max-w-sm transition-all duration-700 ease-out ${inView ? shown : hidden} delay-300`}>
          <CTAButton />
        </div>
      </div>

      <div className={`mt-8 md:mt-0 flex w-full items-center justify-center transition-all duration-700 ease-out ${inView ? shown : hidden} delay-500`}>
        <img src={spreadsheet} alt="Spreadsheet" className="w-full max-w-[460px] sm:max-w-[560px] h-auto object-contain" />
      </div>
    </section>
  )
}

export default SpreadSheet


