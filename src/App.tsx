import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import LogoWall from './components/LogoWall'
import About from './components/About'
import Topics from './components/Topics'
import Videos from './components/Videos'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StickyBookingButton from './components/StickyBookingButton'
import BookingModal from './components/BookingModal'

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const openBookingModal = () => setIsBookingModalOpen(true)
  const closeBookingModal = () => setIsBookingModalOpen(false)

  return (
    <div className="min-h-screen bg-primary-950">
      <Navbar />
      <StickyBookingButton onBookClick={openBookingModal} />
      <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
      <main>
        <Hero onBookClick={openBookingModal} />
        <Stats />
        <LogoWall />
        <About />
        <Topics />
        <Testimonials />
        <Videos />
        <Contact onBookClick={openBookingModal} />
      </main>
      <Footer />
    </div>
  )
}

export default App
