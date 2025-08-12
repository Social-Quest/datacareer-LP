import React, { useEffect, useRef, useState } from 'react'

function Reveal({ children, className = '', delay = 0, as: Tag = 'div', variant = 'fade-up' }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const variants = {
    'fade-up': {
      hidden: 'opacity-0 translate-y-3',
      shown: 'opacity-100 translate-y-0',
    },
    'fade-left': {
      hidden: 'opacity-0 -translate-x-4',
      shown: 'opacity-100 translate-x-0',
    },
    'fade-right': {
      hidden: 'opacity-0 translate-x-4',
      shown: 'opacity-100 translate-x-0',
    },
    'zoom-in': {
      hidden: 'opacity-0 scale-[0.96]',
      shown: 'opacity-100 scale-100',
    },
    'blur-up': {
      hidden: 'opacity-0 translate-y-2 blur-sm',
      shown: 'opacity-100 translate-y-0 blur-0',
    },
    'tilt-in': {
      hidden: 'opacity-0 -rotate-3 translate-y-3 origin-bottom-left',
      shown: 'opacity-100 rotate-0 translate-y-0 origin-bottom-left',
    },
    'skew-up': {
      hidden: 'opacity-0 skew-y-3 translate-y-3',
      shown: 'opacity-100 skew-y-0 translate-y-0',
    },
  }

  const hidden = variants[variant]?.hidden ?? variants['fade-up'].hidden
  const shown = variants[variant]?.shown ?? variants['fade-up'].shown

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${inView ? shown : hidden} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

export default Reveal


