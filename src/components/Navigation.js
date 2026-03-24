'use client'
import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Chambres', href: '#chambres' },
  { label: 'Gîtes', href: '#gites' },
  { label: 'Le Mas', href: '#le-mas' },
  { label: 'Petit-Déjeuner', href: '#petit-dejeuner' },
  { label: 'Activités', href: '#activites' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/96 backdrop-blur-md shadow-[0_1px_20px_rgba(28,23,16,0.08)]'
            : 'bg-transparent'
        }`}
        style={{ height: 'var(--nav-height)' }}
      >
        <div className="container-site h-full flex items-center justify-between">

          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex flex-col leading-none group"
          >
            <span
              className={`font-playfair text-xl font-bold tracking-tight transition-colors duration-400 ${
                scrolled ? 'text-earth-dark' : 'text-white'
              }`}
            >
              Mas
            </span>
            <span
              className={`font-inter text-[0.5rem] tracking-[0.32em] uppercase transition-colors duration-400 ${
                scrolled ? 'text-gold' : 'text-gold-light'
              } mt-0.5`}
            >
              Saint Michel
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNav(item.href)}
                  className={`font-inter text-[0.8125rem] tracking-wide transition-colors duration-300 hover-underline ${
                    scrolled
                      ? 'text-earth-mid hover:text-gold'
                      : 'text-white/85 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+33642271234"
              className={`hidden xl:flex items-center gap-2 font-inter text-xs tracking-wide transition-colors duration-300 ${
                scrolled ? 'text-earth-mid hover:text-gold' : 'text-white/80 hover:text-white'
              }`}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.01 6.01l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +33 6 42 27 12 34
            </a>
            <button
              onClick={() => handleNav('#contact')}
              className="hidden lg:block btn btn-gold text-xs"
            >
              Réserver
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8 transition-colors duration-300 ${
                scrolled ? 'text-earth-dark' : 'text-white'
              }`}
              aria-label="Menu"
            >
              <span
                className={`w-6 h-[1.5px] bg-current transition-all duration-350 origin-center ${
                  menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
                }`}
              />
              <span
                className={`w-5 h-[1.5px] bg-current transition-all duration-350 ${
                  menuOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`w-6 h-[1.5px] bg-current transition-all duration-350 origin-center ${
                  menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-earth-dark/80 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-cream flex flex-col transition-transform duration-500 ease-expo-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-8 py-6 border-b border-border-warm">
            <div>
              <span className="font-playfair text-xl font-bold text-earth-dark block">Mas</span>
              <span className="font-inter text-[0.5rem] tracking-[0.3em] uppercase text-gold block mt-0.5">Saint Michel</span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-earth-light hover:text-gold transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 px-8 py-8">
            <ul className="flex flex-col gap-1">
              {navItems.map((item, i) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNav(item.href)}
                    className="w-full text-left py-3.5 font-playfair text-lg text-earth-dark hover:text-gold transition-colors duration-200 border-b border-border-warm last:border-0"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="px-8 pb-10">
            <button
              onClick={() => handleNav('#contact')}
              className="btn btn-gold w-full justify-center"
            >
              Réserver un séjour
            </button>
            <p className="mt-4 font-inter text-xs text-earth-light text-center">
              Rognes, Provence — 1142 Chemin des Mauvares
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
