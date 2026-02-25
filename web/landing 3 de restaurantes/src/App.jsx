import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#d4af37] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
