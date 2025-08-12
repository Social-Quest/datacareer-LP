import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()

  // Disable browser's automatic scroll restoration so we control it
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    // Always open the homepage at the top
    if (pathname === '/') {
      // Ensure this runs after the new route paints
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
        })
      })
    }
  }, [pathname])

  return null
}

export default ScrollToTop


