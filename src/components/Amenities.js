const amenities = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"/>
        <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"/>
      </svg>
    ),
    title: 'Grande Piscine',
    desc: '12 × 6 m, ouverte de mai à septembre, entourée de plages spacieuses',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Wi-Fi Gratuit',
    desc: 'Connexion haut débit dans toutes les chambres et espaces communs',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Terrasses Privées',
    desc: 'Chaque hébergement dispose d\'une terrasse meublée avec vue sur la campagne',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: 'Petit-Déjeuner',
    desc: 'Servi sur terrasse de 8h30 à 10h00 avec produits locaux et maison',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="3" width="15" height="13" rx="1"/>
        <path d="M16 8h4l3 3v5h-7z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: 'Parking Privé',
    desc: 'Parking gratuit et sécurisé à l\'intérieur de la propriété',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="2"/>
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
    title: 'Terrain de Pétanque',
    desc: 'Court ombragé pour des parties conviviales dans la tradition provençale',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Accès Indépendant',
    desc: 'Chaque hébergement possède son propre accès privé et sécurisé',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Table de Ping-Pong',
    desc: 'Pour les amateurs de sport et les familles avec enfants',
  },
]

export default function Amenities() {
  return (
    <section className="py-24 md:py-32 bg-earth-dark overflow-hidden">
      <div className="container-site">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="section-label mb-4">Équipements</p>
          <h2
            className="section-title text-white mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Tout pour votre confort
          </h2>
          <p className="font-cormorant italic text-white/55 mx-auto max-w-lg"
            style={{ fontSize: '1.25rem' }}>
            Le Mas Saint Michel met tout en œuvre pour que votre séjour soit
            une expérience inoubliable.
          </p>
        </div>

        {/* Amenities grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]">
          {amenities.map((item, i) => (
            <div
              key={item.title}
              className={`amenity-card bg-earth-dark p-8 flex flex-col items-start reveal delay-${(i % 4) + 1}`}
            >
              <div className="amenity-icon">
                {item.icon}
              </div>
              <h3 className="font-playfair text-white text-lg mb-2" style={{ fontWeight: 400 }}>
                {item.title}
              </h3>
              <p className="font-inter text-white/45 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center reveal">
          <p className="font-cormorant italic text-white/50 mb-6" style={{ fontSize: '1.1875rem' }}>
            Une question sur nos équipements ou un besoin spécifique ?
          </p>
          <a href="#contact" className="btn btn-gold">
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  )
}
