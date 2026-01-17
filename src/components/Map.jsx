import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMapSection } from '../store/slices/mapSectionSlice'
import { LOGIN_URL } from '../config/env'
import mapImage from '../assets/map.png'
import Reveal from './Reveal'


function Map() {
  const dispatch = useDispatch()
  const { data: mapData } = useSelector((state) => state.mapSection)

  useEffect(() => {
    dispatch(fetchMapSection())
  }, [dispatch])

  const CheckIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-5 w-5 shrink-0"
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

  if (!mapData) return null

  return (
    <section className="w-full bg-white shadow-[0_0_16px_0_rgb(237,237,237)]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-10 md:py-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <Reveal className="order-1 lg:order-none" variant="fade-left">
            <img
              src={mapImage}
              alt="Australia map"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-contain max-w-[900px] mx-auto animate-floaty"
            />
          </Reveal>

          <div className="flex flex-col items-start">
            {mapData.title && (
              <Reveal as="h2" className="font-roboto text-[#e9724c] text-[26px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold leading-snug" variant="fade-up">
                {mapData.title}
              </Reveal>
            )}

            {mapData.points && (
              <Reveal as="ul" className="mt-6 space-y-4" delay={150} variant="skew-up">
                {mapData.points.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="font-inter text-[15px] sm:text-base text-[#0C153E]">{item}</span>
                  </li>
                ))}
              </Reveal>
            )}

            <Reveal className="mt-8" delay={250} variant="zoom-in">
              <Link
                to={LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine inline-flex items-center justify-center rounded-full bg-[#091540] text-white font-bold font-inter text-sm sm:text-base px-5 sm:px-6 py-2.5 shadow-md transition-colors hover:opacity-95"
              >
                ACCESS FOR FREE 🔥
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Map


