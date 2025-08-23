import React from 'react'
import sqlImage from '../assets/dataSQL.svg'  

function DataSQL() {
  return (
    <section className="w-full bg-[#091540]">
      <div className="mx-auto max-w-[1200px] sm:px-6 py-10 md:py-30">
        <div className="text-center">
          <h2 className="font-roboto text-white text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-semibold leading-tight">
            SQL: your golden ticket to landing a <span className="text-[#7692FF]">#data</span> job.
          </h2>
          <p className="font-roboto text-[#ABD3FA] mt-3 text-[22px] sm:text-[22px] mb-10 sm:mb-20 leading-[33px] font-semibold">
            Become a SQL rockstar by solving real-world simulations.
          </p>
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


