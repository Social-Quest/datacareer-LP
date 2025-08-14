import React from 'react'
import logo from '../assets/DataCareerLogo.png'
import { FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa6'
import { SiThreads } from 'react-icons/si'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'

const socialLinks = [
  { name: 'Threads', to: 'https://www.threads.com/@datacareer.app', icon: <SiThreads className="h-5 w-5" /> },
  { name: 'YouTube', to: 'https://www.youtube.com/@datacareerapp', icon: <FaYoutube className="h-5 w-5" /> },
  { name: 'LinkedIn', to: 'https://www.linkedin.com/company/datacareer-app/', icon: <FaLinkedinIn className="h-5 w-5" /> },
  { name: 'Instagram', to: 'https://www.instagram.com/datacareer.app/', icon: <FaInstagram className="h-5 w-5" /> },
]

function Footer() {
  const handleScrollTo = (id) => (e) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  const handleScrollTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <footer className="w-full bg-white border-t border-[#e5e7eb] font-roboto text-[#0C153E]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <Reveal variant="fade-up">
            <div className="flex items-center gap-3">
              <img src={logo} alt="datacareer.app" className="h-8 w-auto object-contain" />
              <span className="sr-only">datacareer.app</span>
            </div>
            <p className="mt-4 text-[14px] leading-6 max-w-xs">
              An all-in-one data career toolkit will be soft-launching soon to help you accelerate your data job hunt in Australia.
            </p>
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map((s) => (
                <Link
                  key={s.name}
                  to={s.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d0e3ec] text-[#0C153E] hover:bg-[#f0f4f8]"
                >
                  <span className="text-[#0C153E]">{s.icon}</span>
                </Link>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} variant="blur-up">
            <h3 className="text-sm font-semibold mb-3 text-[#0C153E]">Features</h3>
            <ul className="space-y-3 text-[14px] text-[#0C153E]">
              <li>
                <Link to="#jobs" onClick={handleScrollTop} className="hover:underline">Job Database</Link>
              </li>
              <li>
                <Link to="#sql" onClick={handleScrollTop} className="hover:underline">SQL Practice</Link>
              </li>
              <li>
                <Link to="#tracker" onClick={handleScrollTop} className="hover:underline">Job Tracker</Link>
              </li>
              <li>
                <Link to="#roles" onClick={handleScrollTop} className="hover:underline">Data Analyst jobs</Link>
              </li>
              <li>
                <Link to="#engineer" onClick={handleScrollTop} className="hover:underline">Data Engineer jobs</Link>
              </li>
              <li>
                <Link to="#adjacent" onClick={handleScrollTop} className="hover:underline">Data adjacent roles</Link>
              </li>
              <li>
                <Link to="#pricing" onClick={handleScrollTo('pricing')} className="hover:underline">Pricing</Link>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={200} variant="fade-left">
            <h3 className="text-sm font-semibold mb-3 text-[#0C153E]">Contact us:</h3>
            <ul className="space-y-3 text-[14px] text-[#0C153E]">
              <li>
                <Link to="mailto:info@datacareer.app" className="hover:underline">
                  info@datacareer.app
                </Link>
              </li>
              <li className="text-[#6b7280]">[We will respond in 24 hours]</li>
            </ul>
            <h4 className="text-sm font-semibold mt-6 mb-2 text-[#0C153E]">Address:</h4>
            <p className="text-[14px]">Sydney, Australia</p>
          </Reveal>

          <Reveal delay={300} variant="fade-right">
            <h3 className="text-sm font-semibold mb-3 text-[#0C153E]">Support:</h3>
            <ul className="space-y-3 text-[14px] text-[#0C153E]">
              <li>
                <Link to="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-10 border-t border-[#e5e7eb] pt-6 text-[13px] text-[#6b7280] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" delay={400} variant="fade-up">
          <p className="text-[#0C153E]">© {new Date().getFullYear()} datacareer.app. All rights reserved.</p>
          <p className="text-[#6b7280]">Built with love for Australia’s data community.</p>
        </Reveal>
      </div>
    </footer>
  )
}

export default Footer


