'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const heroSlides = [
  {
    src: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1600&q=90',
    alt: 'Mas Saint Michel, Provence',
  },
  {
    src: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1600&q=90',
    alt: 'Jardin provençal au Mas Saint Michel',
  },
  {
    src: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1600&q=90',
    alt: 'Piscine et terrasse provençale',
  },
  {
    src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=90',
    alt: 'Suite luxueuse au Mas Saint Michel',
  },
];

export default function Hero({ locale }: { locale: string }) {
  const t = useTranslations('hero');
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrent(idx);
    }
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: '100svh', minHeight: '600px' }}>
      {/* Background slideshow with Ken Burns */}
      <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <motion.img
            src={heroSlides[current].src}
            alt={heroSlides[current].alt}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: 9, ease: 'linear' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Layered overlays */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, rgba(26,20,32,0.15) 0%, rgba(26,20,32,0.05) 40%, rgba(26,20,32,0.75) 100%)',
      }} />
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(90deg, rgba(26,20,32,0.45) 0%, rgba(26,20,32,0) 70%)',
      }} />

      {/* Content — centered-left */}
      <div className="absolute inset-0 flex flex-col justify-end pb-28 px-6 md:px-0">
        <div className="container-site">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Eyebrow label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-5"
              style={{
                fontFamily: 'var(--font-accent)',
                fontSize: '0.72rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--ocre-soleil)',
              }}
            >
              Chambres d&rsquo;hôtes de Charme
            </motion.p>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-light leading-[1.05] mb-6"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-hero)',
                color: 'var(--pierre-chaude)',
                fontWeight: 300,
              }}
            >
              Au cœur<br />
              <em style={{ fontStyle: 'italic' }}>de la Provence</em>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.95 }}
              className="mb-10 max-w-lg leading-relaxed"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)',
                color: 'var(--pierre-sombre)',
                fontWeight: 300,
              }}
            >
              {t('subtitle')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <Link href={`/${locale}/reservation`} className="btn-primary">
                Réserver un séjour
              </Link>
              <Link href={`/${locale}/le-mas`} className="btn-outline">
                Découvrir le Mas
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.62rem',
            letterSpacing: '0.25em',
            color: 'var(--ocre-soleil)',
            textTransform: 'uppercase',
          }}
        >
          Défiler
        </span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" style={{ color: 'var(--ocre-soleil)' }}>
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5"/>
          <motion.rect
            x="6.5" y="5" width="3" height="5" rx="1.5"
            fill="currentColor"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </motion.div>

      {/* Slide navigation dots — bottom right */}
      <div className="absolute bottom-8 right-8 flex gap-2.5 items-center">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className="transition-all duration-500"
            style={{
              width: idx === current ? '2rem' : '0.5rem',
              height: '2px',
              background: idx === current ? 'var(--ocre-soleil)' : 'rgba(245,237,214,0.35)',
            }}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div
        className="absolute top-1/2 right-8 -translate-y-1/2 hidden lg:flex flex-col items-center gap-1"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        <span style={{ color: 'var(--ocre-soleil)', fontSize: '0.85rem', fontWeight: 300 }}>
          0{current + 1}
        </span>
        <div style={{ width: '1px', height: '3rem', background: 'rgba(245,237,214,0.25)' }} />
        <span style={{ color: 'rgba(245,237,214,0.4)', fontSize: '0.75rem', fontWeight: 300 }}>
          0{heroSlides.length}
        </span>
      </div>
    </section>
  );
}
