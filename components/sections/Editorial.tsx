'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { fadeUpVariant, slideInLeft, slideInRight } from '@/lib/animations';

export default function Editorial() {
  const t = useTranslations('editorial');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-28 bg-[var(--color-blanc)]">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: text */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <span className="section-label">{t('label')}</span>
            <h2
              className="font-light italic mb-8 text-[var(--color-charcoal)]"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-h2)',
              }}
            >
              {t('title')}
            </h2>

            <div
              className="space-y-5 text-[var(--color-gris-doux)] leading-relaxed mb-8"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}
            >
              <p>{t('p1')}</p>
              <p>{t('p2')}</p>
              <p>{t('p3')}</p>
            </div>

            {/* Blockquote */}
            <blockquote className="border-l-2 border-[var(--color-or)] pl-6 py-2">
              <p
                className="text-[var(--color-charcoal)] italic text-lg leading-relaxed mb-3"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                &ldquo;{t('quote')}&rdquo;
              </p>
              <cite
                className="text-[var(--color-gris-doux)] text-xs tracking-[0.15em] uppercase not-italic"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                — {t('quoteAuthor')}
              </cite>
            </blockquote>
          </motion.div>

          {/* Right: image */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div className="relative overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=85"
                alt="Jardin du Mas Saint Michel"
                className="w-full h-full object-cover"
              />
              {/* Decorative border */}
              <div
                className="absolute top-6 left-6 right-6 bottom-6 border border-[var(--color-or)]/30 pointer-events-none"
              />
            </div>

            {/* Floating stat card */}
            <div
              className="absolute -bottom-8 -left-8 bg-[var(--color-terre)] text-white p-6 hidden lg:block"
              style={{ boxShadow: 'var(--shadow-hover)' }}
            >
              <div
                className="text-5xl font-light leading-none mb-1"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                12
              </div>
              <div
                className="text-xs tracking-[0.15em] uppercase text-white/70 font-light"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                km d&rsquo;Avignon
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
