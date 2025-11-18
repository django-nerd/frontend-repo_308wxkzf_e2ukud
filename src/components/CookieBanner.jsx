import { useEffect, useState } from 'react'

const CookieBanner = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  if (!visible) return null
  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-5xl m-4 rounded-xl border border-amber-900/20 bg-[#2b2b2b] text-[#f8f1e5] p-4 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-sm md:pr-4">
            Diese Website verwendet nur technisch notwendige Cookies, um die Funktion sicherzustellen. Mehr dazu in unserem{' '}
            <a href="/datenschutz" className="underline text-[#b08d57] hover:text-[#caa66d]">Datenschutzhinweis</a> und{' '}
            <a href="/cookies" className="underline text-[#b08d57] hover:text-[#caa66d]">Cookie-Hinweis</a>.
          </p>
          <div className="flex items-center gap-2">
            <button onClick={accept} className="inline-flex justify-center rounded-full bg-[#b08d57] text-[#1f1f1f] px-5 py-2 text-sm font-semibold shadow hover:bg-[#caa66d]">
              Verstanden
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner
