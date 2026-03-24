const menu = [
  { category: 'Boissons', items: ['Jus d\'orange pressé maison', 'Café, thé ou chocolat chaud'] },
  { category: 'Boulangerie', items: ['Pain frais de la boulangerie du village', 'Assortiment de viennoiseries'] },
  { category: 'Maison', items: ['Confitures faites maison', 'Yaourts nature & fromage de chèvre local'] },
  { category: 'Frais', items: ['Salade de fruits frais de saison'] },
]

export default function Breakfast() {
  return (
    <section id="petit-dejeuner" className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="container-site">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Text side */}
          <div className="reveal-left">
            <p className="section-label mb-5">Gastronomie provençale</p>
            <h2
              className="section-title text-earth-dark mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Le Petit-Déjeuner,
              <br />
              <em className="text-gold" style={{ fontStyle: 'italic' }}>
                servi sur la terrasse
              </em>
            </h2>
            <div className="w-10 h-px bg-gold mb-8" />

            <p className="font-inter text-earth-mid text-[0.9375rem] leading-relaxed mb-8">
              Chaque matin entre <strong className="text-earth-dark">8h30 et 10h00</strong>, un
              petit-déjeuner gourmand est servi sur les terrasses privatives des chambres,
              ou dans l&apos;espace commun lorsque le soleil invite à s&apos;attarder.
            </p>

            <p className="font-cormorant italic text-earth-mid mb-10"
              style={{ fontSize: '1.1875rem' }}>
              « Des produits régionaux ou faits maison d&apos;excellente qualité,
              qui mettent chaque matin la Provence dans votre assiette. »
            </p>

            {/* Menu grid */}
            <div className="grid grid-cols-2 gap-6">
              {menu.map((section) => (
                <div key={section.category}>
                  <p
                    className="font-inter text-[0.625rem] tracking-[0.2em] uppercase text-gold font-semibold mb-3"
                  >
                    {section.category}
                  </p>
                  <ul className="space-y-1.5">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-gold/60 mt-0.5 flex-shrink-0" style={{ fontSize: '0.5rem' }}>◆</span>
                        <span className="font-inter text-earth-mid text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Option */}
            <div className="mt-8 p-5 border-l-2 border-gold bg-gold/5">
              <p className="font-inter text-[0.6875rem] tracking-[0.15em] uppercase text-gold font-semibold mb-1.5">
                Option dîner provençal
              </p>
              <p className="font-inter text-earth-mid text-sm leading-relaxed">
                Sur demande 48h à l&apos;avance, un <strong className="text-earth-dark">plateau provençal</strong> du soir
                peut être préparé pour votre arrivée. Une attention parfaite pour commencer
                votre séjour en douceur.
              </p>
            </div>
          </div>

          {/* Visual side */}
          <div className="reveal-right">
            <div className="relative">

              {/* Main visual block */}
              <div
                className="relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #8B6914 0%, #C4943A 40%, #D4A94A 65%, #7B8C5A 100%)',
                  aspectRatio: '3/4',
                }}
              >
                {/* Pattern */}
                <div className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 30px 30px, rgba(255,255,255,0.8) 2px, transparent 2px), radial-gradient(circle at 90px 90px, rgba(255,255,255,0.8) 2px, transparent 2px)',
                    backgroundSize: '120px 120px',
                  }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                  {/* Plate icon */}
                  <div className="mb-8">
                    <svg width="72" height="72" viewBox="0 0 100 100" fill="none" className="text-white/30 mx-auto">
                      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1"/>
                      <path d="M30 50 Q40 35 50 50 Q60 65 70 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>

                  <p className="font-playfair text-white/90 text-2xl italic mb-3">Chaque matin</p>
                  <p className="font-inter text-white/50 text-xs tracking-[0.2em] uppercase mb-8">
                    Sur votre terrasse
                  </p>

                  {/* Time badge */}
                  <div className="bg-white/15 backdrop-blur-sm px-8 py-4 border border-white/20 mb-6">
                    <p className="font-playfair text-white text-3xl">8h30 – 10h00</p>
                    <p className="font-inter text-white/50 text-[0.625rem] tracking-widest uppercase mt-1">Service du matin</p>
                  </div>

                  <p className="font-inter text-white/40 text-xs max-w-[200px] leading-relaxed">
                    Produits locaux, artisanaux et faits maison avec amour.
                  </p>
                </div>
              </div>

              {/* Floating note */}
              <div className="absolute -bottom-6 -left-6 bg-earth-dark p-5 text-white max-w-[200px] hidden md:block">
                <p className="font-inter text-[0.5625rem] tracking-[0.15em] uppercase text-gold mb-1">Inclus</p>
                <p className="font-playfair text-sm leading-snug">
                  Petit-déjeuner compris dans toutes nos chambres d&apos;hôtes
                </p>
              </div>

              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border border-gold/20 -z-10 hidden md:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
