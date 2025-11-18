import { MapPin, Clock, Mail, PhoneCall, Instagram } from 'lucide-react'

const Section = ({ id, title, children }) => (
  <section id={id} className="py-16 md:py-24 bg-[#f8f1e5] text-[#2b2b2b]">
    <div className="container mx-auto px-6">
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8 text-[#2b2b2b]">
        {title}
      </h2>
      <div className="grid gap-8">
        {children}
      </div>
    </div>
  </section>
)

export const About = () => (
  <Section id="ueber-uns" title="Über uns">
    <p className="text-lg leading-relaxed max-w-3xl">
      Bei der Caffebar Hölderlin treffen warme Eleganz, dunkles Holz und goldene Details auf urbanes Café-Flair. Wir lieben handwerklich gerösteten Kaffee, frische Zutaten und ein gemütliches Ambiente, in dem man gern ein bisschen länger bleibt.
    </p>
  </Section>
)

export const Breakfast = () => (
  <Section id="speisekarte" title="Frühstück & Snacks">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[ 
        { name: 'Panini', desc: 'mit Käse, Schinken oder Gemüse' },
        { name: 'Belegte Brötchen', desc: 'frisch belegt, wechselnde Sorten' },
        { name: 'Brezeln', desc: 'mit Butter oder belegt' },
        { name: 'Croissants', desc: 'klassisch oder mit Schokolade' },
        { name: 'Kuchen', desc: 'hausgemacht, täglich wechselnd' },
        { name: 'Granola Bowl', desc: 'mit Joghurt und Früchten' },
      ].map((item) => (
        <div key={item.name} className="rounded-xl border border-amber-900/10 bg-white p-5 shadow-sm">
          <h3 className="font-semibold text-[#2b2b2b]">{item.name}</h3>
          <p className="text-[#2b2b2b]/70 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </Section>
)

export const Drinks = () => (
  <Section id="getraenke" title="Kaffee & Getränke">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        'Espresso','Cappuccino','Latte Macchiato','Flat White','Filterkaffee','Heiße Schokolade','Tee-Auswahl','Fruchtsäfte','Hausgemachte Limonade'
      ].map((name) => (
        <div key={name} className="rounded-xl border border-amber-900/10 bg-white p-5 shadow-sm">
          <h3 className="font-semibold text-[#2b2b2b]">{name}</h3>
        </div>
      ))}
    </div>
  </Section>
)

export const Gallery = () => (
  <section id="galerie" className="py-16 md:py-24 bg-[#f8f1e5]">
    <div className="container mx-auto px-6">
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8 text-[#2b2b2b]">Galerie</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {[
          'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1200&auto=format&fit=crop'
        ].map((src, i) => (
          <div key={i} className="relative overflow-hidden rounded-xl shadow-md ring-1 ring-amber-900/10">
            <img src={src} alt="Café Impression" className="w-full h-40 md:h-56 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
        ))}
      </div>
    </div>
  </section>
)

export const HoursLocation = () => (
  <Section id="oeffnungszeiten" title="Öffnungszeiten & Lage">
    <div className="grid md:grid-cols-2 gap-8">
      <div className="rounded-xl border border-amber-900/10 bg-white p-6 shadow-sm">
        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-amber-700 mt-0.5" />
          <div>
            <p className="font-semibold">Öffnungszeiten</p>
            <p className="text-sm text-[#2b2b2b]/70">Mo–Fr 7:30–18:00 • Sa 8:30–16:00 • So geschlossen</p>
          </div>
        </div>
        <div className="flex items-start gap-3 mt-4">
          <PhoneCall className="w-5 h-5 text-amber-700 mt-0.5" />
          <div>
            <p className="font-semibold">Telefon</p>
            <a href="tel:+497111234567" className="text-sm text-[#2b2b2b]/80 hover:underline">+49 711 1234567</a>
          </div>
        </div>
        <div className="flex items-start gap-3 mt-2">
          <Mail className="w-5 h-5 text-amber-700 mt-0.5" />
          <div>
            <p className="font-semibold">E-Mail</p>
            <a href="mailto:hallo@caffebar-hoelderlin.de" className="text-sm text-[#2b2b2b]/80 hover:underline">hallo@caffebar-hoelderlin.de</a>
          </div>
        </div>
      </div>
      <div className="rounded-xl overflow-hidden shadow-md ring-1 ring-amber-900/10 bg-white">
        <iframe
          title="Karte"
          src="https://www.openstreetmap.org/export/embed.html?bbox=9.170%2C48.770%2C9.210%2C48.790&layer=mapnik"
          className="w-full h-72"
          loading="lazy"
        />
      </div>
    </div>
  </Section>
)

export const Contact = () => {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || ''

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const res = await fetch(`${baseUrl}/api/reservations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Fehler beim Senden')
      alert('Vielen Dank! Wir melden uns zeitnah.')
      e.currentTarget.reset()
    } catch (err) {
      alert('Bitte später erneut versuchen.')
    }
  }

  return (
    <Section id="kontakt" title="Kontakt & Reservierung">
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
        <input name="name" required placeholder="Name" className="px-4 py-3 rounded-lg border border-amber-900/20 bg-white focus:outline-none focus:ring-2 focus:ring-amber-600/40" />
        <input name="phone" placeholder="Telefon" className="px-4 py-3 rounded-lg border border-amber-900/20 bg-white focus:outline-none focus:ring-2 focus:ring-amber-600/40" />
        <input name="email" placeholder="E-Mail" className="px-4 py-3 rounded-lg border border-amber-900/20 bg-white focus:outline-none focus:ring-2 focus:ring-amber-600/40" />
        <div className="grid grid-cols-2 gap-4">
          <input name="date" placeholder="Datum" className="px-4 py-3 rounded-lg border border-amber-900/20 bg-white focus:outline-none focus:ring-2 focus:ring-amber-600/40" />
          <input name="time" placeholder="Uhrzeit" className="px-4 py-3 rounded-lg border border-amber-900/20 bg-white focus:outline-none focus:ring-2 focus:ring-amber-600/40" />
        </div>
        <input name="guests" type="number" min="1" max="20" placeholder="Personen" className="px-4 py-3 rounded-lg border border-amber-900/20 bg-white focus:outline-none focus:ring-2 focus:ring-amber-600/40" />
        <textarea name="message" rows="4" placeholder="Nachricht" className="md:col-span-2 px-4 py-3 rounded-lg border border-amber-900/20 bg-white focus:outline-none focus:ring-2 focus:ring-amber-600/40" />
        <button className="md:col-span-2 inline-flex justify-center rounded-full bg-[#b08d57] text-[#1f1f1f] px-6 py-3 font-semibold shadow-md hover:bg-[#caa66d] transition-colors">Absenden</button>
      </form>
    </Section>
  )
}

export const Footer = () => (
  <footer className="bg-[#1f1f1f] text-[#f8f1e5] pt-12 pb-10">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold text-[#b08d57]">Caffebar Hölderlin</h4>
          <p className="text-sm text-[#f8f1e5]/80 mt-2">Café • Frühstück • Cappuccino</p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="hover:text-[#b08d57]"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-[#b08d57]">Kontakt</h4>
          <ul className="mt-2 space-y-1 text-sm text-[#f8f1e5]/80">
            <li><a href="tel:+497111234567" className="hover:underline">Telefon: +49 711 1234567</a></li>
            <li><a href="mailto:hallo@caffebar-hoelderlin.de" className="hover:underline">E-Mail: hallo@caffebar-hoelderlin.de</a></li>
            <li>Hölderlinstraße 1, 70174 Stuttgart</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-[#b08d57]">Rechtliches</h4>
          <ul className="mt-2 space-y-1 text-sm text-[#f8f1e5]/80">
            <li><a href="/impressum" className="hover:underline">Impressum</a></li>
            <li><a href="/datenschutz" className="hover:underline">Datenschutz</a></li>
            <li><a href="#cookies" className="hover:underline">Cookie-Hinweis</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-[#b08d57]">Öffnungszeiten</h4>
          <p className="text-sm text-[#f8f1e5]/80 mt-2">Mo–Fr 7:30–18:00 • Sa 8:30–16:00 • So geschlossen</p>
        </div>
      </div>
      <div className="border-t border-amber-900/20 mt-8 pt-6 text-xs text-[#f8f1e5]/60">© {new Date().getFullYear()} Caffebar Hölderlin • Café in Stuttgart</div>
    </div>
  </footer>
)

export default Section
