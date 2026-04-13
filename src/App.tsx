import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import LogoWall from './components/LogoWall'
import About from './components/About'
import Topics from './components/Topics'
import Videos from './components/Videos'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import StickyBookingButton from './components/StickyBookingButton'
import BookingModal from './components/BookingModal'
import VideoModal from './components/VideoModal'

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [videoModalUrl, setVideoModalUrl] = useState<string | null>(null)

  const openBookingModal = () => setIsBookingModalOpen(true)
  const closeBookingModal = () => setIsBookingModalOpen(false)

  const openVideoModal = (url: string) => setVideoModalUrl(url)
  const closeVideoModal = () => setVideoModalUrl(null)

  return (
    <div className="min-h-screen bg-primary-950">
      <Navbar />
      <StickyBookingButton onBookClick={openBookingModal} />
      <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
      <VideoModal isOpen={!!videoModalUrl} onClose={closeVideoModal} videoUrl={videoModalUrl || ''} />
      <main>
        <Hero onBookClick={openBookingModal} onVideoClick={openVideoModal} />
        <Stats />
        <LogoWall />
        <About onBookClick={openBookingModal} />
        <Topics onVideoClick={openVideoModal} />
        <Testimonials />
        <Videos />
        <Contact onBookClick={openBookingModal} />
        <FAQ />
      </main>
      <Footer />
      <Analytics />
    </div>
  )
}

export default App
