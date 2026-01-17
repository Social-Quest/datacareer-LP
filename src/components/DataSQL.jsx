import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSqlSection } from '../store/slices/sqlSectionSlice'
import sqlImage from '../assets/dataSQL.svg'

function DataSQL() {
  const dispatch = useDispatch()
  const { data: sqlData, loading, error } = useSelector((state) => state.sqlSection)

  useEffect(() => {
    dispatch(fetchSqlSection())
  }, [dispatch])

  if (!sqlData) return null

  return (
    <section className="w-full bg-[#091540]">
      <div className="mx-auto max-w-[1200px] sm:px-6 py-10 md:py-30">
        <div className="text-center">
          {sqlData.title && (
            <h2
              className="font-roboto text-white text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-semibold leading-tight"
              dangerouslySetInnerHTML={{ __html: sqlData.title }}
            />
          )}
          {sqlData.subtitle && (
            <p className="font-roboto text-[#ABD3FA] mt-3 text-[22px] sm:text-[22px] mb-10 sm:mb-20 leading-[33px] font-semibold">
              {sqlData.subtitle}
            </p>
          )}
        </div>
        <div className="grid place-items-center">
          <img
            src={sqlImage}
            alt="SQL practice preview"
            loading="lazy"
            decoding="async"
            className="w-full max-w-[1100px] h-auto object-contain"
          />
        </div>
        <div className="mt-4 sm:mt-6 flex justify-center">
          <button
            type="button"
            aria-label="Coming soon"
            className="font-inter text-sm bg-[#eaf1f9] text-[#121f41] border border-[#d0e3ec] py-1 px-3 rounded-[8px]"
          >
            Coming soon
          </button>
        </div>
      </div>
    </section>
  )
}

export default DataSQL


