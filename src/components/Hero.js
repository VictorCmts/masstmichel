export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[640px] flex flex-col items-center justify-center overflow-hidden hero-bg">

      {/* Subtle star pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Bottom gradient to blend into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-earth-dark to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">

        {/* Label / location */}
        <div className="ornament mb-8 animate-[fadeIn_1.2s_ease_0.2s_both]">
          <span className="font-inter text-[0.625rem] tracking-[0.3em] uppercase text-white/60">
            Rognes · Provence · France
          </span>
        </div>

        {/* Main Title */}
        <h1
          className="display-title text-white mb-4 animate-[fadeIn_1.2s_ease_0.4s_both]"
          style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)' }}
        >
          Mas Saint Michel
        </h1>

        {/* Subtitle */}
        <p
          className="subtitle text-white/75 mb-10 animate-[fadeIn_1.2s_ease_0.6s_both]"
          style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.625rem)' }}
        >
          Gîtes & Chambres d&apos;Hôtes de charme en Provence
        </p>

        {/* Divider ornament */}
        <div className="flex items-center gap-4 mb-10 animate-[fadeIn_1.2s_ease_0.7s_both]">
          <div className="w-12 h-px bg-gold/50" />
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-gold">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
          </svg>
          <div className="w-12 h-px bg-gold/50" />
        </div>

        {/* Key features row */}
        <div className="flex items-center gap-6 mb-12 text-white/55 font-inter text-[0.6875rem] tracking-[0.15em] uppercase animate-[fadeIn_1.2s_ease_0.8s_both]">
          <span>4 hectares</span>
          <span className="text-gold/40">·</span>
          <span>Piscine privée</span>
          <span className="text-gold/40">·</span>
          <span>Entre Aix et Luberon</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 animate-[fadeIn_1.2s_ease_1s_both]">
          <a href="#chambres" className="btn btn-gold">
            Nos hébergements
          </a>
          <a href="#contact" className="btn btn-white-outline">
            Réserver un séjour
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-[fadeIn_1s_ease_1.5s_both]">
        <span className="font-inter text-[0.5625rem] tracking-[0.25em] uppercase text-white/40">
          Découvrir
        </span>
        <div className="scroll-indicator text-white/50">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-32 left-8 w-16 h-16 border border-white/10 hidden lg:block animate-[fadeIn_2s_ease_1.2s_both]" />
      <div className="absolute top-36 left-12 w-16 h-16 border border-white/6 hidden lg:block animate-[fadeIn_2s_ease_1.4s_both]" />
      <div className="absolute top-32 right-8 w-16 h-16 border border-white/10 hidden lg:block animate-[fadeIn_2s_ease_1.2s_both]" />
      <div className="absolute top-36 right-12 w-16 h-16 border border-white/6 hidden lg:block animate-[fadeIn_2s_ease_1.4s_both]" />
    </section>
  )
}
