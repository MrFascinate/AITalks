import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Topics from './components/Topics'
import Videos from './components/Videos'
import Testimonials from './components/Testimonials'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-primary-950">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Topics />
        <Videos />
        <Testimonials />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
