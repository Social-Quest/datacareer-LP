import React from 'react'
import { Link } from 'react-router-dom'

function ComingSoon() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <h1 className="font-roboto text-[#0C153E] text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-tight">
            Coming soon
          </h1>
          <p className="font-inter text-[#667085] mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            We’re putting the finishing touches on this feature. Check back shortly, or head back to the homepage.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              to="/"
              className="btn-shine font-inter rounded-full bg-[#eaf1f9] text-[#121f41] border border-[#d0e3ec] px-5 py-2.5 text-sm sm:text-base"
            >
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="btn-shine font-inter rounded-full bg-[#091540] text-white px-5 py-2.5 text-sm sm:text-base"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComingSoon


