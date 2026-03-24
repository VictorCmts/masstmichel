const gites = [
  {
    id: 'gite-charme',
    name: 'Le Gîte de Charme',
    size: '70 m²',
    capacity: 'Jusqu\'à 4 personnes',
    description:
      'Grand gîte indépendant de 70 m² aménagé avec soin, idéal pour une famille ou deux couples. Deux chambres spacieuses avec deux salles de bains, une cuisine entièrement équipée et un salon provençal chaleureux.',
    features: [
      '2 chambres + 2 salles de bains',
      'Cuisine entièrement équipée',
      'Salon provençal',
      'Terrasse privée meublée',
      'Accès indépendant',
      'Vue sur le parc arboré',
    ],
    color: 'bg-gite-charme',
    badge: 'Idéal famille',
  },
  {
    id: 'gite-pool',
    name: 'Le Gîte de la Piscine',
    size: '50 m²',
    capacity: '2 personnes',
    description:
      'Gîte indépendant de 50 m² situé directement face à la piscine. Un cocon intime pour deux, avec terrasse privative qui s\'ouvre sur la grande piscine de 12×6 m. Le rêve pour un séjour en amoureux en Provence.',
    features: [
      '1 chambre de charme',
      'Face à la piscine 12×6 m',
      'Terrasse privative directe',
      'Cuisine équipée',
      'Accès totalement indépendant',
      'Idéal séjour en amoureux',
    ],
    color: 'bg-gite-pool',
    badge: 'Coup de cœur',
  },
]

function GiteCard({ gite, reversed }) {
  return (
    <div className={`grid lg:grid-cols-2 gap-0 overflow-hidden border border-border-warm ${reversed ? '' : ''} reveal`}>

      {/* Visual */}
      <div
        className={`relative overflow-hidden group ${gite.color} ${reversed ? 'lg:order-2' : ''}`}
        style={{ minHeight: '400px' }}
      >
        {/* Texture */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 40px)'
          }}
        />

        {/* Center visual */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
          <p className="font-playfair text-white/25 mb-4 transition-all duration-500 group-hover:text-white/40"
            style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', lineHeight: 1 }}>
            {gite.size}
          </p>
          <div className="w-10 h-px bg-white/20 mx-auto mb-4" />
          <p className="font-inter text-white/50 text-xs tracking-[0.2em] uppercase">
            Gîte indépendant
          </p>
        </div>

        {/* Badge */}
        <div className="absolute top-6 left-6 bg-gold px-3 py-1.5">
          <span className="font-inter text-[0.5625rem] tracking-[0.15em] uppercase text-white font-medium">
            {gite.badge}
          </span>
        </div>

        {/* Capacity */}
        <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-2">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="opacity-60">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          <span className="font-inter text-white/70 text-xs">{gite.capacity}</span>
        </div>
      </div>

      {/* Content */}
      <div className={`bg-warm-white p-10 lg:p-14 flex flex-col justify-center ${reversed ? 'lg:order-1' : ''}`}>
        <p className="section-label mb-3">Gîte indépendant · {gite.size}</p>
        <h3
          className="font-playfair text-earth-dark mb-2"
          style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 400 }}
        >
          {gite.name}
        </h3>
        <div className="w-8 h-px bg-gold mb-6" />
        <p className="font-inter text-earth-mid text-sm leading-relaxed mb-8">
          {gite.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6 mb-10">
          {gite.features.map((feat) => (
            <div key={feat} className="flex items-start gap-2.5">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                className="flex-shrink-0 mt-0.5 text-gold"
              >
                <polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2.5"/>
              </svg>
              <span className="font-inter text-earth-mid text-[0.8125rem]">{feat}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a href="#contact" className="btn btn-gold">
            Réserver ce gîte
          </a>
          <a href="#contact" className="btn btn-gold-outline">
            Vérifier les dates
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Gites() {
  return (
    <section id="gites" className="py-24 md:py-32 bg-section-alt overflow-hidden">
      <div className="container-site">

        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <p className="section-label mb-4">Location</p>
          <h2
            className="section-title text-earth-dark mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Nos Gîtes de Charme
          </h2>
          <div className="ornament ornament-wide mb-6">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
          </div>
          <p className="font-cormorant italic text-earth-mid mx-auto max-w-lg"
            style={{ fontSize: '1.25rem' }}>
            Deux gîtes indépendants pour profiter de votre intimité en pleine Provence,
            avec tous les équipements pour un séjour parfait.
          </p>
        </div>

        {/* Gites */}
        <div className="flex flex-col gap-6">
          {gites.map((gite, i) => (
            <GiteCard key={gite.id} gite={gite} reversed={i % 2 === 1} />
          ))}
        </div>

        {/* Info band */}
        <div className="mt-12 grid sm:grid-cols-3 gap-px bg-border-warm overflow-hidden reveal">
          {[
            { icon: '🗝️', title: 'Arrivée', desc: 'À partir de 17h00' },
            { icon: '🌅', title: 'Départ', desc: 'Avant 10h00' },
            { icon: '🐾', title: 'Animaux', desc: 'Sur demande préalable' },
          ].map((info) => (
            <div key={info.title} className="bg-warm-white p-7 text-center">
              <span className="text-2xl mb-3 block">{info.icon}</span>
              <p className="font-inter text-[0.6875rem] tracking-[0.15em] uppercase text-earth-light mb-1">{info.title}</p>
              <p className="font-playfair text-earth-dark text-lg">{info.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
