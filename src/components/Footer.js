const footerLinks = [
  {
    title: 'Hébergements',
    links: [
      { label: 'Chambre La Pointe Rouge', href: '#chambres' },
      { label: 'Chambre La Joliette', href: '#chambres' },
      { label: 'Chambre Le Bastidon', href: '#chambres' },
      { label: 'Gîte de Charme', href: '#gites' },
      { label: 'Gîte de la Piscine', href: '#gites' },
    ],
  },
  {
    title: 'Le Mas',
    links: [
      { label: 'À propos', href: '#le-mas' },
      { label: 'Équipements', href: '#le-mas' },
      { label: 'Petit-Déjeuner', href: '#petit-dejeuner' },
      { label: 'Activités & Découvertes', href: '#activites' },
      { label: 'Contact & Réservation', href: '#contact' },
    ],
  },
]

const destinations = [
  'Aix-en-Provence', 'Le Luberon', 'Sainte-Victoire',
  'Cassis', 'Marseille', 'Les Alpilles',
]

export default function Footer() {
  return (
    <footer className="bg-earth-dark text-white">

      {/* Top CTA band */}
      <div
        className="relative overflow-hidden py-16"
        style={{
          background: 'linear-gradient(135deg, #2A1A0A 0%, #C4943A 50%, #8B6914 100%)',
        }}
      >
        <div className="container-site text-center relative z-10">
          <p className="font-cormorant italic text-white/80 mb-2" style={{ fontSize: '1.125rem' }}>
            Prêt pour votre escapade provençale ?
          </p>
          <h2
            className="font-playfair text-white mb-8"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 400 }}
          >
            Réservez votre séjour au Mas Saint Michel
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn btn-white">
              Demander une disponibilité
            </a>
            <a
              href="tel:+33642271234"
              className="btn btn-white-outline"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.01 6.01l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Appeler directement
            </a>
          </div>
        </div>
        {/* Decorative */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Main footer */}
      <div className="container-site py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <p className="font-playfair text-3xl text-white font-medium leading-none">Mas</p>
              <p className="font-inter text-[0.5rem] tracking-[0.32em] uppercase text-gold mt-1">Saint Michel</p>
            </div>
            <p className="font-inter text-white/45 text-sm leading-relaxed mb-6">
              Gîtes & Chambres d&apos;Hôtes de charme en Provence,
              entre Aix-en-Provence et le Luberon.
            </p>
            <p className="font-inter text-white/30 text-xs leading-relaxed mb-6">
              1142 Chemin des Mauvares<br />
              13840 Rognes, Provence
            </p>
            <a
              href="tel:+33642271234"
              className="font-inter text-gold text-sm hover:text-gold-light transition-colors"
            >
              +33 6 42 27 12 34
            </a>
          </div>

          {/* Links columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-inter text-[0.625rem] tracking-[0.22em] uppercase text-gold font-semibold mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-inter text-white/45 text-sm hover:text-white transition-colors duration-200 hover-underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Destinations */}
          <div>
            <h4 className="font-inter text-[0.625rem] tracking-[0.22em] uppercase text-gold font-semibold mb-5">
              À Proximité
            </h4>
            <ul className="space-y-3">
              {destinations.map((dest) => (
                <li key={dest}>
                  <span className="font-inter text-white/45 text-sm flex items-center gap-2">
                    <span className="text-gold/30" style={{ fontSize: '0.4rem' }}>◆</span>
                    {dest}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-white/25 text-xs">
            © {new Date().getFullYear()} Mas Saint Michel. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2">
            <span className="font-inter text-white/20 text-[0.625rem]">Rognes</span>
            <span className="text-white/10" style={{ fontSize: '0.5rem' }}>◆</span>
            <span className="font-inter text-white/20 text-[0.625rem]">Bouches-du-Rhône</span>
            <span className="text-white/10" style={{ fontSize: '0.5rem' }}>◆</span>
            <span className="font-inter text-white/20 text-[0.625rem]">Provence, France</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="font-inter text-white/25 text-[0.6875rem] hover:text-white/60 transition-colors">
              Mentions légales
            </a>
            <a href="#" className="font-inter text-white/25 text-[0.6875rem] hover:text-white/60 transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
