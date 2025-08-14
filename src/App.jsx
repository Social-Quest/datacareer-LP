import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import BetaBanner from './components/BetaBanner'
import Header from './components/Header'
import SpreadSheet from './components/SpreadSheet'
import DataJob from './components/DataJob'
import DataSkies from './components/DataSkies'
import DataSQL from './components/DataSQL'
import Price from './components/Price'
import Map from './components/Map'
import Footer from './components/Footer'
import ComingSoon from './components/ComingSoon'
import HowItWorks from './components/HowItWorks'
import FAQ from './components/FAQ'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'

function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <div className="sticky top-0 z-[50]">
          <BetaBanner />  
          <Header />
        </div>
        <main className="w-full">
          <Routes>
            <Route
              path="/"
              element={(
                <>
                  <div className="bg-white">
                    <SpreadSheet />
                  </div>
                  <DataJob />
                  <DataSkies />
                  <DataSQL />
                  <Price />
                  <HowItWorks />
                  <Map />
                  <FAQ />
                  </>
              )}
            />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
