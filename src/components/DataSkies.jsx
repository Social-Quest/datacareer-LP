import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LOGIN_URL } from '../config/env'
import sheet from '../assets/spreadeSheet.svg'
import Reveal from './Reveal'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDataSkies } from '../store/slices/dataSkiesSlice'

function DataSkies() {
  const dispatch = useDispatch()
  const { data: skiesData } = useSelector((state) => state.dataSkies)

  useEffect(() => {
    dispatch(fetchDataSkies())
  }, [dispatch])

  const roles = [
    { id: 'analyst', label: 'DATA ANALYST' },
    { id: 'engineer', label: 'DATA ENGINEER' },
    { id: 'scientist', label: 'DATA SCIENTIST' },
    { id: 'adjacent', label: 'DATA-ADJACENT ROLES' },
  ]

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12 md:py-30">
        <Reveal as="h2" className="font-roboto text-center text-[#091540] text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-semibold leading-tight" variant="fade-up">
          {skiesData?.title ? (
            <span dangerouslySetInnerHTML={{ __html: skiesData.title }} />
          ) : (
            <>
              We curate every <span className="text-[#7692FF]">#data</span> job under the Aussie skies
            </>
          )}
        </Reveal>

        <Reveal className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4" variant="zoom-in">
          {roles.map((r) => (
            <span
              key={r.id}
              className="font-roboto text-[12px] sm:text-sm font-medium text-[#e9724c] bg-[#ffe8df] border border-[#ffd6c8] rounded-md px-3 py-1"
            >
              {r.label}
            </span>
          ))}
        </Reveal>

        <Reveal className="mt-10 md:mt-12 grid grid-cols-1 place-items-center" delay={150} variant="fade-up">
          <img
            src={sheet}
            alt="Job spreadsheet preview"
            loading="lazy"
            decoding="async"
            className="w-full max-w-[720px] h-auto object-contain rounded-xl"
          />
        </Reveal>

        <Reveal className="mt-8 flex justify-center" delay={250} variant="fade-up">
          <Link
            to={LOGIN_URL}
            className="btn-shine inline-flex items-center justify-center h-11 px-6 rounded-full text-[16px] font-bold text-white bg-[#091540] shadow-[0_7px_30px_-10px_rgba(9,21,64,0.25)] hover:opacity-95"
          >
            ACCESS FOR FREE 🔥
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

export default DataSkies


