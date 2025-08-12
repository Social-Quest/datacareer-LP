import React, { useState } from 'react'
import logo from '../assets/DataCareerLogo.png'
import { Link } from 'react-router-dom'

function Header() {
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <header className="w-full bg-white font-inter border-b border-[#cccccc] border-solid">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between py-10 ">
                <div className="flex items-center min-w-0 max-w-[200px]">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-8 sm:h-9 md:h-10 w-auto object-contain animate-gentlePulse"
                    />
                </div>

                <nav className="hidden lg:flex items-center gap-2">
                    <Link to="/coming-soon" className="text-[15px] sm:text-[16px] font-medium text-[#0C153E] leading-6 px-3 sm:px-4 h-10 flex items-center rounded-full hover:bg-gray-50">
                        Job Database
                    </Link>
                    <Link to="/#" className="text-[15px] sm:text-[16px] font-medium text-[#0C153E] leading-6 px-3 sm:px-4 h-10 flex items-center rounded-full hover:bg-gray-50">
                        SQL Practice
                    </Link>
                    <span
                        className="text-[15px] sm:text-[16px] font-bold leading-6 px-2 sm:px-2.5 py-1 rounded-[10px] lg:p-1 lg:text-[15px]"
                        style={{
                            backgroundColor: '#bfe1f6',
                            color: 'var(--color_text_default, #0C153E)'
                        }}
                    >
                        Job-ready program
                    </span>
                </nav>

                <div className="hidden lg:flex items-center gap-3">
                    <Link
                        to="/coming-soon"
                        className="inline-flex items-center justify-center h-10 px-4 md:px-5 rounded-full text-[15px] sm:text-[16px] font-bold text-white shadow-lg hover:opacity-95 lg:p-1 lg:text-[16px] lg:px-1"
                        style={{
                            backgroundColor: '#091540',
                        }}
                    >
                        ACCESS FOR FREE 🔥
                    </Link>
                    <Link
                        to="/coming-soon"
                        className="inline-flex items-center justify-center h-10 px-4 md:px-5 rounded-full text-[15px] sm:text-[16px] font-bold text-white shadow-lg hover:opacity-95 lg:text-[15px]"
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
                <div className="lg:hidden border-t bg-white">
                    <div className="mx-auto max-w-[1200px] px-4 py-3 space-y-3">
                        <Link to="/coming-soon" className="block text-[15px] sm:text-[16px] font-normal text-[#0C153E] leading-6 px-3 py-2 rounded-lg hover:bg-gray-50">Job Database</Link>
                        <Link to="/coming-soon" className="block text-[15px] sm:text-[16px] font-normal text-[#0C153E] leading-6 px-3 py-2 rounded-lg hover:bg-gray-50">SQL Practice</Link>
                        <span
                            className="inline-block text-[15px] sm:text-[16px] font-normal leading-6 px-3 py-1.5 rounded-[10px]"
                            style={{
                                backgroundColor: 'var(--color_alert_default, #FFD7A8)',
                                color: 'var(--color_text_default, #0C153E)'
                            }}
                        >
                            Job-ready program
                        </span>
                        <div className="pt-2 flex items-center gap-2">
                            <Link
                                to="/coming-soon"
                                className="flex-1 inline-flex items-center justify-center h-10 px-4 rounded-full text-[15px] sm:text-[16px] font-bold text-white shadow-lg hover:opacity-95"
                                style={{ backgroundColor: 'var(--color_primary_default, #091540)' }}
                            >
                                ACCESS FOR FREE 🔥
                            </Link>
                            <Link
                                to="/coming-soon"
                                className="flex-1 inline-flex items-center justify-center h-10 px-4 rounded-full text-[15px] sm:text-[16px] font-bold text-white shadow-lg hover:opacity-95"
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


