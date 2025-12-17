import Navbar from './components/Navbar/Navbar'
import PromoBar from './components/PromoBar/PromoBar'
import Hero from './components/Hero/Hero'
import UniversosSection from './sections/Universos/UniversosSection'
import AboutSection from './sections/About/AboutSection'
import FAQSection from './sections/FAQ/FAQSection'
import ContactSection from './sections/Contacto/ContactSection'

export default function App() {
  return (
    <>
      <Navbar />
      <PromoBar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <UniversosSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
      </main>
    </>
  )
}