const destinations = [
  {
    name: 'Aix-en-Provence',
    distance: '15 km',
    description: 'La capitale du pays d\'art et d\'histoire, avec ses fontaines, son cours Mirabeau et ses musées. La ville de Cézanne vous attend.',
    highlights: ['Cours Mirabeau', 'Musée Granet', 'Marchés provençaux'],
    color: '#8B6914',
  },
  {
    name: 'Le Luberon',
    distance: '15 km',
    description: 'Villages perchés de charme comme Gordes, Roussillon, Bonnieux et Lourmarin. Un pays de ocre, de lavande et d\'authenticité.',
    highlights: ['Gordes', 'Roussillon', 'Lourmarin'],
    color: '#7B8C5A',
  },
  {
    name: 'Montagne Sainte-Victoire',
    distance: '20 km',
    description: 'Symbole de Cézanne, cette montagne calcaire offre des randonnées spectaculaires et une vue imprenable sur la plaine d\'Aix.',
    highlights: ['Randonnées balisées', 'Sites escalade', 'Panoramas'],
    color: '#C4603A',
  },
  {
    name: 'Cassis & les Calanques',
    distance: '45 km',
    description: 'Les calanques de Cassis, Marseille et La Ciotat : des fjords de calcaire blanc plongeant dans une mer turquoise, à couper le souffle.',
    highlights: ['Calanques en bateau', 'Port de Cassis', 'Vins de Cassis'],
    color: '#2E4575',
  },
  {
    name: 'Marseille',
    distance: '26 km',
    description: 'La cité phocéenne, vivante et cosmopolite. Le Vieux-Port, le MuCEM, la Bonne-Mère, le Panier… Une ville à part entière.',
    highlights: ['Vieux-Port', 'MuCEM', 'Le Panier'],
    color: '#5B3D78',
  },
  {
    name: 'Les Alpilles',
    distance: '35 km',
    description: 'Les Baux-de-Provence, Saint-Rémy, Arles… Un pays de lumière qui a inspiré Van Gogh. Paysages d\'oliviers et de roches blanches.',
    highlights: ['Les Baux-de-Provence', 'Saint-Rémy', 'Arles UNESCO'],
    color: '#5A6B3E',
  },
]

export default function Activities() {
  return (
    <section id="activites" className="py-24 md:py-32 bg-pattern-dots overflow-hidden">
      <div className="container-site">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="section-label mb-4">Découvertes</p>
          <h2
            className="section-title text-earth-dark mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            La Provence à portée de main
          </h2>
          <div className="ornament ornament-wide mb-6">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
          </div>
          <p className="font-cormorant italic text-earth-mid mx-auto max-w-2xl"
            style={{ fontSize: '1.25rem' }}>
            La situation centrale du Mas en Provence vous permet de rayonner
            vers les sites les plus emblématiques de la région.
          </p>
        </div>

        {/* Destinations grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {destinations.map((dest, i) => (
            <div
              key={dest.name}
              className={`activity-card bg-warm-white border border-border-warm reveal delay-${(i % 3) + 1}`}
            >
              {/* Top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: dest.color }}
              />

              {/* Distance badge */}
              <div className="flex items-center justify-between mb-5">
                <span
                  className="font-inter text-[0.5625rem] tracking-[0.18em] uppercase font-semibold"
                  style={{ color: dest.color }}
                >
                  À {dest.distance}
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-earth-light"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>

              <h3 className="font-playfair text-earth-dark text-xl mb-3" style={{ fontWeight: 400 }}>
                {dest.name}
              </h3>

              <p className="font-inter text-earth-mid text-sm leading-relaxed mb-5">
                {dest.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-1.5">
                {dest.highlights.map((h) => (
                  <span
                    key={h}
                    className="font-inter text-[0.625rem] tracking-wide px-2.5 py-1 border"
                    style={{
                      color: dest.color,
                      borderColor: `${dest.color}30`,
                      background: `${dest.color}08`,
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-14 text-center reveal">
          <div className="inline-flex items-start gap-4 bg-warm-white border border-border-warm p-8 max-w-2xl text-left">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold flex-shrink-0 mt-0.5">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div>
              <p className="font-inter text-[0.6875rem] tracking-[0.15em] uppercase text-gold font-semibold mb-2">
                Conseils personnalisés
              </p>
              <p className="font-inter text-earth-mid text-sm leading-relaxed">
                Jacques et Vicenta vous feront part de leurs adresses secrètes, restaurants coups de cœur,
                marchés provençaux et randonnées hors des sentiers battus.
                Un <strong className="text-earth-dark">book d&apos;adresses exclusif</strong> est mis à votre disposition
                à votre arrivée.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
