export default function About() {
  return (
    <section id="le-mas" className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="container-site">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Visual */}
          <div className="relative reveal-left order-2 lg:order-1">

            {/* Main visual block */}
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: '4/5', maxWidth: '520px' }}
            >
              {/* Primary gradient backdrop */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(145deg, #5E3D78 0%, #C4943A 45%, #7B8C5A 80%, #3D2810 100%)',
                }}
              />
              {/* Texture overlay */}
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 20px)'
                }}
              />
              {/* Overlay content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10">
                <div className="mb-6">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-white/30 mx-auto">
                    <path d="M24 4L28.5 16H42L31.5 23.5L36 36L24 28.5L12 36L16.5 23.5L6 16H19.5L24 4Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="font-playfair text-white/90 text-2xl italic mb-2">Mas Saint Michel</p>
                <p className="font-inter text-white/50 text-xs tracking-[0.2em] uppercase">Rognes · Provence</p>
                <div className="mt-8 grid grid-cols-2 gap-4 w-full max-w-xs">
                  <div className="bg-white/10 backdrop-blur-sm p-4 text-center">
                    <p className="font-playfair text-white text-2xl">4</p>
                    <p className="font-inter text-white/50 text-[0.6rem] tracking-[0.15em] uppercase mt-1">Hectares</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 text-center">
                    <p className="font-playfair text-white text-2xl">2 km</p>
                    <p className="font-inter text-white/50 text-[0.6rem] tracking-[0.15em] uppercase mt-1">De Rognes</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 text-center">
                    <p className="font-playfair text-white text-2xl">15</p>
                    <p className="font-inter text-white/50 text-[0.6rem] tracking-[0.15em] uppercase mt-1">km d'Aix</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 text-center">
                    <p className="font-playfair text-white text-2xl">26</p>
                    <p className="font-inter text-white/50 text-[0.6rem] tracking-[0.15em] uppercase mt-1">km Marseille</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent card */}
            <div
              className="absolute -bottom-8 -right-4 lg:right-0 bg-gold p-6 text-white hidden md:block"
              style={{ width: '200px' }}
            >
              <p className="font-inter text-[0.5625rem] tracking-[0.2em] uppercase text-white/70 mb-2">Depuis</p>
              <p className="font-playfair text-4xl font-light">2004</p>
              <p className="font-inter text-[0.625rem] tracking-widest uppercase text-white/70 mt-1">
                Accueil en famille
              </p>
            </div>

            {/* Decorative border */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 border border-gold/20 -z-10"
            />
          </div>

          {/* Right: Text content */}
          <div className="order-1 lg:order-2 reveal-right">
            <p className="section-label mb-5">Le Mas</p>

            <h2
              className="section-title text-earth-dark mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              4 hectares au cœur
              <br />
              <em className="text-gold not-italic" style={{ fontStyle: 'italic' }}>de la Provence</em>
            </h2>

            <div className="w-10 h-px bg-gold mb-8" />

            <div className="space-y-5 font-inter text-earth-mid leading-relaxed" style={{ fontSize: '0.9375rem' }}>
              <p>
                À 15 km d'Aix-en-Provence et de Lourmarin, le Mas Saint Michel est situé
                en pleine nature à 2 km du village de Rognes, dans un calme absolu. La
                propriété s'étend sur 4 hectares principalement plantés d'oliviers, de chênes
                truffiers, de pins et de lavandes.
              </p>
              <p>
                Entourée de vignobles et de collines des Côteaux d'Aix-en-Provence, elle
                garantit le dépaysement et la verdure à perte de vue. Rognes, village provençal
                préservé, est réputé pour sa pierre sculptée de sédiments marins, sa truffe
                noire et ses nombreux domaines viticoles.
              </p>
              <p>
                <strong className="text-earth-dark font-medium">Jacques et Vicenta</strong> sauront
                vous conseiller et vous aider à choisir activités et visites pour que votre
                séjour soit inoubliable. Des guides et un book d'adresses sont à votre
                disposition pour découvrir sites, musées, gastronomie et activités sportives.
              </p>
            </div>

            {/* Features */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { icon: '🌿', text: 'Oliviers, chênes truffiers, lavande' },
                { icon: '🍷', text: 'Vignobles Côteaux d\'Aix environnants' },
                { icon: '🤝', text: 'Accueil personnalisé & conseils locaux' },
                { icon: '🔇', text: 'Calme absolu, 2 km du village' },
              ].map((feature) => (
                <div key={feature.text} className="flex items-start gap-3">
                  <span className="text-base mt-0.5 flex-shrink-0">{feature.icon}</span>
                  <span className="font-inter text-earth-mid text-sm leading-relaxed">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a href="#chambres" className="btn btn-dark">
                Voir les hébergements
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
