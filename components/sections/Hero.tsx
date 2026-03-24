'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const heroImages = [
  'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=85',
  'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=85',
  'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200&q=85',
];

export default function Hero({ locale }: { locale: string }) {
  const t = useTranslations('hero');
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <img
            src={heroImages[currentImage]}
            alt="Mas Saint Michel Provence"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'var(--gradient-hero)' }}
      />
      {/* Additional top overlay for content readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-end pb-24 px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
      >
        {/* Eyebrow */}
        <p
          className="text-white/80 text-xs tracking-[0.3em] uppercase font-light mb-6"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {t('eyebrow')}
        </p>

        {/* H1 */}
        <h1
          className="text-white font-light italic leading-[1.1] mb-6 max-w-5xl"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-hero)',
          }}
        >
          {t('title')}
        </h1>

        {/* Subtitle */}
        <p
          className="text-white/80 font-light max-w-xl mb-10 leading-relaxed"
          style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}
        >
          {t('subtitle')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link href={`/${locale}/le-mas`} className="btn-outline">
            {t('ctaDiscover')}
          </Link>
          <Link href={`/${locale}/reservation`} className="btn-primary">
            {t('ctaReserve')}
          </Link>
        </div>
      </motion.div>

      {/* Scroll chevron */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="text-white/60" size={28} />
      </motion.div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-8 flex gap-2">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`w-6 h-0.5 transition-all duration-300 ${
              idx === currentImage ? 'bg-white' : 'bg-white/30'
            }`}
            aria-label={`Image ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
