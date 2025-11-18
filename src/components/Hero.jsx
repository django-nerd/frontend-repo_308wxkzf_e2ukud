import { Phone, Coffee } from 'lucide-react'

const Hero = () => {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || ''
  const callNumber = '+49 711 1234567'

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1f1f1f] via-[#2b2b2b] to-[#1a1a1a]" />
        <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay" style={{
          backgroundImage: 'radial-gradient(circle at 20% 10%, #b08d57 0 2px, transparent 2px), radial-gradient(circle at 80% 30%, #b08d57 0 2px, transparent 2px), radial-gradient(circle at 40% 80%, #b08d57 0 2px, transparent 2px)'
        }} />
      </div>

      <div className="container mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs tracking-widest bg-amber-100 text-amber-900 mb-4">CAFÉ • FRÜHSTÜCK • BARISTA</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#f8f1e5] drop-shadow-sm">
              Super leckeres Frühstück und bester Cappuccino in town.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#e8dcc8]/90 max-w-xl">
              Caffebar Hölderlin — warmes Ambiente mit dunklem Holz, goldenen Akzenten und urbanem Café-Flair. Willkommen in Ihrer gemütlichen Frühstücksoase.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#speisekarte" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b08d57] text-[#1f1f1f] px-6 py-3 font-semibold shadow-md hover:bg-[#caa66d] transition-colors">
                <Coffee className="h-5 w-5" /> Speisekarte
              </a>
              <a href={`tel:${callNumber.replace(/\s/g,'')}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#b08d57]/60 text-[#f8f1e5] px-6 py-3 font-semibold hover:bg-[#b08d57]/10 transition-colors">
                <Phone className="h-5 w-5" /> Anrufen
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-amber-900/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1600&auto=format&fit=crop"
                alt="Frühstücksszene: Cappuccino, Croissant, belegte Brezel"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block">
              <div className="bg-[#f8f1e5] text-[#2b2b2b] rounded-xl px-4 py-3 shadow-lg border border-amber-900/10">
                <p className="text-sm font-medium">Täglich frisch • Barista-Qualität</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
