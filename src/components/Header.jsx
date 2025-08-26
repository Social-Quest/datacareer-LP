import React, { useState } from 'react'
import logo from '../assets/DataCareerLogo.png'
import { Link, useNavigate } from 'react-router-dom'
import { LOGIN_URL, REGISTER_URL } from '../config/env'

function Header() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const navigate = useNavigate()

    const scrollThenNavigate = (to, external = false) => (e) => {
        e.preventDefault()
        const go = () => {
            if (external) {
                window.location.href = to
            } else {
                navigate(to)
            }
        }
        if (window.scrollY <= 1) {
            go()
            return
        }
        window.scrollTo({ top: 0, behavior: 'smooth' })
        const start = Date.now()
        const id = setInterval(() => {
            if (window.scrollY <= 1 || Date.now() - start > 1200) {
                clearInterval(id)
                go()
            }
        }, 60)
    }

    return (
        <header className="w-full bg-white font-inter border-b border-[#cccccc] border-solid">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between py-10 ">
                <div className="flex items-center min-w-0 max-w-[200px]">
                    <Link to="/" onClick={scrollThenNavigate('/')} aria-label="Go to homepage" className="inline-flex items-center">
                        <img
                            src={logo}
                            alt="datacareer.app"
                            className="h-8 sm:h-9 md:h-10 w-auto object-contain"
                        />
                    </Link>
                </div>

                <nav className="hidden lg:flex items-center gap-2">
                    <Link to="/coming-soon" className="text-[15px] sm:text-[14px] xl:text-[16px] font-medium text-[#0C153E] leading-6 px-3 sm:px-4 xl:px-2 h-10 xl:h-9 flex items-center rounded-full hover:bg-gray-50">
                        Job Database
                    </Link>
                    <Link to={LOGIN_URL} className="text-[15px] sm:text-[13px] xl:text-[16px] font-medium text-[#0C153E] leading-6 px-3 sm:px-4 xl:px-2 h-10 xl:h-9 flex items-center rounded-full hover:bg-gray-50">
                        SQL Practice
                    </Link>
                    <button
                        onClick={() => {
                            const priceSection = document.getElementById('pricing')
                            if (priceSection) {
                                priceSection.scrollIntoView({ behavior: 'smooth' })
                            }
                        }}
                        className="text-[15px] sm:text-[14px] xl:text-[16px] font-medium text-[#0C153E] leading-6 px-3 sm:px-4 xl:px-2 h-10 xl:h-9 flex items-center rounded-full hover:bg-gray-50 cursor-pointer"
                    >
                        Price
                    </button>
                    <span
                        className="text-[15px] sm:text-[14px] xl:text-[16px] font-bold leading-6 px-4 sm:px-2 xl:px-2.5 py-1 rounded-full"
                        style={{
                            backgroundColor: '#abd3fa',
                            color: 'var(--color_text_default, #0C153E)'
                        }}
                    >
                        Job-ready program
                    </span>
                </nav>

                <div className="hidden lg:flex items-center gap-3">
                    <Link
                        to={REGISTER_URL}
                        className="btn-shine inline-flex items-center justify-center h-10 xl:h-9 px-4 md:px-3 xl:px-5 rounded-full text-[15px] sm:text-[13px] xl:text-[16px] font-bold text-white shadow-lg hover:opacity-95 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-10px_rgba(9,21,64,0.45)] "
                        style={{
                            backgroundColor: '#091540',
                        }}
                    >
                        ACCESS FOR FREE 🔥
                    </Link>
                    <Link
                        to={LOGIN_URL}
                        className="btn-shine inline-flex items-center justify-center h-10 xl:h-9 px-4 md:px-3 xl:px-5 rounded-full text-[15px] sm:text-[13px] xl:text-[16px] font-bold text-white shadow-lg hover:opacity-95 transition-transform duration-300 hover:-trans late-y-0.5 hover:shadow-[0_8px_24px_-10px_rgba(9,21,64,0.25)]"
                        style={{
                            backgroundColor: '#091540',
                        }}
                    >
                        SIGN IN
                    </Link>
                </div>

                <button
                    className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg text-slate-900 hover:bg-gray-100"
                    aria-label="Open menu"
                    onClick={() => setMobileOpen((v) => !v)}
                >
                    {mobileOpen ? (
                        // X icon
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        // Hamburger icon
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                            <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                    <div className="lg:hidden border-t border-[#cccccc] bg-white min-h-screen">
                    <div className="mx-auto max-w-[1200px] px-4 py-3 space-y-3">
                        <Link to="/coming-soon" className="block text-[15px] sm:text-[16px] font-normal text-[#0C153E] leading-6 px-3 py-2 rounded-lg hover:bg-gray-50">Job Database</Link>
                        <Link to={LOGIN_URL} className="block text-[15px] sm:text-[16px] font-normal text-[#0C153E] leading-6 px-3 py-2 rounded-lg hover:bg-gray-50">SQL Practice</Link>
                        <button
                            onClick={() => {
                                const priceSection = document.getElementById('pricing')
                                if (priceSection) {
                                    priceSection.scrollIntoView({ behavior: 'smooth' })
                                }
                                setMobileOpen(false)
                            }}
                            className="block text-[15px] sm:text-[16px] font-normal text-[#0C153E] leading-6 px-3 py-2 rounded-lg hover:bg-gray-50 cursor-pointer w-full text-left"
                        >
                            Price
                        </button>
                        <span
                            className="btn-shine inline-block text-[15px] sm:text-[16px] font-normal leading-6 px-3 py-1.5 rounded-[10px]"
                            style={{
                                backgroundColor: '#abd3fa',
                                color: 'var(--color_text_default, #0C153E)'
                            }}
                        >
                            Job-ready program
                        </span>
                        <div className="pt-2 flex items-center gap-2">
                            <Link
                                to="/coming-soon"
                                className="btn-shine flex-1 inline-flex items-center justify-center h-10 px-3 rounded-full text-[11px] sm:text-[16px] font-bold text-white shadow-lg hover:opacity-95 transition-transform duration-200 active:scale-[0.98]"
                                style={{ backgroundColor: 'var(--color_primary_default, #091540)' }}
                            >
                                ACCESS FOR FREE 🔥
                            </Link>
                            <Link
                                to={LOGIN_URL}
                                className="btn-shine flex-1 inline-flex items-center justify-center h-10  rounded-full text-[13px] sm:text-[16px] font-bold text-white shadow-lg hover:opacity-95 transition-transform duration-200 active:scale-[0.98]"
                                style={{ backgroundColor: 'var(--color_primary_default, #091540)' }}
                            >
                                SIGN IN
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header


