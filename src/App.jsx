import Hero from './components/Hero'
import { About, Breakfast, Drinks, Gallery, HoursLocation, Contact, Footer } from './components/Sections'
import CookieBanner from './components/CookieBanner'
import SEO from './components/SEO'

function App() {
  return (
    <div className="bg-[#1f1f1f] text-[#f8f1e5]">
      <SEO />
      {/* Navigation */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-amber-900/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-wide text-[#f8f1e5]">
            Caffebar <span className="text-[#b08d57]">Hölderlin</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-[#f8f1e5]/80">
            <a href="#ueber-uns" className="hover:text-[#b08d57]">Über uns</a>
            <a href="#speisekarte" className="hover:text-[#b08d57]">Speisekarte</a>
            <a href="#getraenke" className="hover:text-[#b08d57]">Getränke</a>
            <a href="#galerie" className="hover:text-[#b08d57]">Galerie</a>
            <a href="#oeffnungszeiten" className="hover:text-[#b08d57]">Öffnungszeiten</a>
            <a href="#kontakt" className="hover:text-[#b08d57]">Kontakt</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <Hero />

      {/* Sections */}
      <About />
      <Breakfast />
      <Drinks />
      <Gallery />
      <HoursLocation />
      <Contact />

      {/* Footer */}
      <Footer />

      {/* SEO text block */}
      <section className="bg-[#1f1f1f] text-[#f8f1e5]/70 py-10">
        <div className="container mx-auto px-6 text-sm leading-relaxed">
          <p>
            Café in Stuttgart • Frühstück in Stuttgart • Cappuccino in Stuttgart • Caffebar Hölderlin • Bestes Café für Frühstück & Kaffee • Panini, Croissants, belegte Brezeln.
          </p>
        </div>
      </section>

      <CookieBanner />
    </div>
  )
}

export default App
