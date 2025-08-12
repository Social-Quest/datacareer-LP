import React from 'react'

function BetaBanner({
  message = 'We are actively working on adding new features & functionalities.',
  badgeText = 'BETA',
}) {
  return (
      <div className="w-full font-inter">
        <div
          className="w-full flex items-center justify-center gap-2 rounded-none py-2 sm:py-2.5 lg:py-3 text-white px-3 sm:px-4"
          style={{
            background:
              'linear-gradient(45deg, rgba(61, 81, 140, 1), rgba(61,81,140,1), #ABD3FA)',
          }}
        >
          <span className="text-[13px] sm:text-sm leading-[19.6px] font-medium text-center">
            {message}
          </span>
          <span className="bg-[#E9724C] text-white text-[11px] sm:text-xs md:text-sm px-1.5 rounded-md">
            {badgeText}
          </span>
        </div>
    </div>
  )
}

export default BetaBanner


