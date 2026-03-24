const stats = [
  { number: '4', unit: 'ha', label: 'Parc arboré' },
  { number: '2', unit: '', label: 'Chambres d\'hôtes' },
  { number: '2', unit: '', label: 'Gîtes de charme' },
  { number: '12×6', unit: 'm', label: 'Grande piscine' },
]

export default function Welcome() {
  return (
    <section className="bg-earth-dark relative overflow-hidden">
      {/* Top separator from hero */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container-site py-16 md:py-20">

        {/* Top row: label + quote */}
        <div className="text-center mb-14 reveal">
          <p className="section-label mb-4" style={{ color: 'var(--gold)' }}>Bienvenue</p>
          <h2
            className="font-playfair text-white mb-6"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 400, lineHeight: 1.2 }}
          >
            Un refuge provençal hors du temps
          </h2>
          <p className="font-cormorant text-white/55 italic mx-auto max-w-2xl"
            style={{ fontSize: 'clamp(1.125rem, 2vw, 1.375rem)' }}>
            « Un lieu authentique où Jacques et Vicenta vous accueillent en amis,
            avec simplicité, sous le soleil du Sud. »
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06]">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`bg-earth-dark flex flex-col items-center justify-center py-10 px-6 text-center reveal delay-${i + 1}`}
            >
              <div className="flex items-baseline gap-1 mb-2">
                <span className="stat-number">{stat.number}</span>
                {stat.unit && (
                  <span
                    className="font-inter text-gold/70"
                    style={{ fontSize: '0.75rem', letterSpacing: '0.08em' }}
                  >
                    {stat.unit}
                  </span>
                )}
              </div>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  )
}
