const rooms = [
  {
    id: 'pointe-rouge',
    name: 'La Pointe Rouge',
    tagline: 'La chambre romantique',
    description:
      'En rez-de-chaussée, c\'est la plus romantique des trois suites. Elle dispose d\'une grande salle de bains avec douche italienne et baignoire, d\'une terrasse privative ombragée face à la garrigue.',
    features: [
      'Grande salle de bains (douche + baignoire)',
      'Accès de plain-pied',
      'Terrasse privée meublée',
      'Vue sur la campagne provençale',
    ],
    color: 'bg-room-rouge',
    accent: '#C4603A',
    symbol: '♦',
  },
  {
    id: 'joliette',
    name: 'La Joliette',
    tagline: 'La suite lumineuse',
    description:
      'Suite en duplex, très lumineuse, décorée avec une dominante de vert olive. Une mezzanine intime surplombe un espace de vie élégant, avec terrasse privative et vue dégagée sur le parc.',
    features: [
      'Suite duplex avec mezzanine',
      'Décor olive & boiseries',
      'Terrasse privée panoramique',
      'Luminosité exceptionnelle',
    ],
    color: 'bg-room-joliette',
    accent: '#7B8C5A',
    symbol: '◆',
  },
  {
    id: 'bastidon',
    name: 'Le Bastidon',
    tagline: 'La suite face à la piscine',
    description:
      'Suite de 50 m² avec lit king-size, accessible par un escalier extérieur. Située directement face à la piscine, le bleu y est la couleur dominante — une invitation permanente à la détente.',
    features: [
      '50 m² avec lit king-size',
      'Face à la piscine 12×6 m',
      'Accès extérieur indépendant',
      'Décor bleu & ambiance mer',
    ],
    color: 'bg-room-bastidon',
    accent: '#5B7DB5',
    symbol: '●',
  },
]

function RoomCard({ room, index }) {
  return (
    <div
      className={`group relative flex flex-col card-lift reveal delay-${index + 1}`}
    >
      {/* Image/Visual area */}
      <div className={`relative overflow-hidden ${room.color}`} style={{ aspectRatio: '4/3' }}>

        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 512 512\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          }}
        />

        {/* Room symbol */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div
              className="font-playfair text-white/20 mb-4 transition-all duration-500 group-hover:text-white/30 group-hover:scale-110"
              style={{ fontSize: 'clamp(5rem, 12vw, 9rem)' }}
            >
              {room.symbol}
            </div>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-400" />

        {/* Room number badge */}
        <div
          className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center border border-white/30"
          style={{ fontSize: '0.625rem', letterSpacing: '0.1em' }}
        >
          <span className="font-inter text-white/70 text-xs font-medium">0{index + 1}</span>
        </div>

        {/* Tag */}
        <div className="absolute bottom-5 left-5">
          <span
            className="font-inter text-[0.5625rem] tracking-[0.2em] uppercase text-white/60 bg-black/20 backdrop-blur-sm px-3 py-1.5"
          >
            Chambre d&apos;hôtes
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-warm-white p-7 flex flex-col border border-border-warm border-t-0">
        <p
          className="font-inter mb-1"
          style={{ fontSize: '0.6875rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: room.accent }}
        >
          {room.tagline}
        </p>
        <h3 className="font-playfair text-earth-dark mb-4" style={{ fontSize: '1.5rem', fontWeight: 400 }}>
          {room.name}
        </h3>
        <p className="font-inter text-earth-mid text-sm leading-relaxed mb-6 flex-1">
          {room.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-7">
          {room.features.map((feat) => (
            <li key={feat} className="flex items-start gap-2.5">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                className="flex-shrink-0 mt-1"
                style={{ color: room.accent }}
              >
                <polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2.5"/>
              </svg>
              <span className="font-inter text-earth-mid text-[0.8125rem]">{feat}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="btn btn-gold-outline w-full justify-center text-xs group-hover:bg-gold group-hover:text-white"
          style={{ borderColor: room.accent, color: room.accent }}
        >
          Demander une disponibilité
        </a>
      </div>
    </div>
  )
}

export default function Rooms() {
  return (
    <section id="chambres" className="py-24 md:py-32 bg-pattern-dots overflow-hidden">
      <div className="container-site">

        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <p className="section-label mb-4">Hébergements</p>
          <h2
            className="section-title text-earth-dark mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Nos Chambres d&apos;Hôtes
          </h2>
          <div className="ornament ornament-wide mb-6">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
          </div>
          <p className="font-cormorant italic text-earth-mid mx-auto max-w-xl"
            style={{ fontSize: '1.25rem' }}>
            Trois suites à l&apos;ambiance singulière, chacune dotée d&apos;un accès indépendant,
            d&apos;une terrasse privée et d&apos;une vue sur la campagne.
          </p>
        </div>

        {/* Rooms grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} />
          ))}
        </div>

        {/* Common amenities note */}
        <div className="mt-14 p-8 border border-border-warm bg-warm-white reveal">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '📶', text: 'Wi-Fi gratuit' },
              { icon: '📺', text: 'TV LCD & lecteur DVD' },
              { icon: '☕', text: 'Bouilloire électrique' },
              { icon: '🌿', text: 'Produits d\'accueil' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <span className="text-xl">{item.icon}</span>
                <span className="font-inter text-earth-mid text-sm">{item.text}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-border-warm">
            <p className="font-inter text-earth-light text-xs text-center tracking-wide">
              Toutes les chambres : accès indépendant · terrasse privée · salle de bains privée · vue campagne · parking privé
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
