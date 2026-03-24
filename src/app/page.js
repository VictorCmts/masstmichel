import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Welcome from '@/components/Welcome'
import About from '@/components/About'
import Rooms from '@/components/Rooms'
import Gites from '@/components/Gites'
import Amenities from '@/components/Amenities'
import Breakfast from '@/components/Breakfast'
import Activities from '@/components/Activities'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Welcome />
        <About />
        <Rooms />
        <Gites />
        <Amenities />
        <Breakfast />
        <Activities />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  )
}
