'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const territoryItems = [
  {
    key: 'montagnette',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=900&q=90',
    distance: '2 km',
  },
  {
    key: 'villages',
    image: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=900&q=90',
    distance: '15 km',
  },
  {
    key: 'marches',
    image: 'https://images.unsplash.com/photo-1504592628-42e2c1c70d47?w=900&q=90',
    distance: '12 km',
  },
  {
    key: 'gastronomie',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=90',
    distance: '20 km',
  },
];

export default function Territory() {
  const t = useTranslations('territory');
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-28 lg:py-36 overflow-hidden" style={{ background: 'var(--pierre-chaude)' }}>
      <div className="container-site mb-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="mb-4"
            style={{
              fontFamily: 'var(--font-accent)',
              fontSize: '0.72rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--ocre-soleil)',
            }}
          >
            {t('label')}
          </p>
          <h2
            className="italic mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-h2)',
              color: 'var(--brun-mas)',
              fontWeight: 300,
            }}
          >
            {t('title')}
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--garrigue)',
              fontWeight: 300,
            }}
          >
            {t('subtitle')}
          </p>
        </motion.div>
      </div>

      {/* Nearby places context strip */}
      <div className="container-site mb-8 hidden lg:flex justify-center gap-8">
        {['Avignon · 12 km', 'Arles · 18 km', 'Les Baux · 14 km', 'Gordes · 45 km', 'L\'Isle-sur-la-Sorgue · 35 km'].map((place) => (
          <span
            key={place}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              color: 'var(--garrigue)',
              letterSpacing: '0.08em',
              fontWeight: 300,
            }}
          >
            {place}
          </span>
        ))}
      </div>

      {/* Horizontal scroll cards */}
      <div
        ref={scrollRef}
        className="flex gap-5 px-[clamp(1.25rem,5vw,5rem)] overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none' }}
      >
        {territoryItems.map(({ key, image, distance }, index) => (
          <motion.div
            key={key}
            className="flex-none w-[85vw] sm:w-[60vw] lg:w-[28vw] snap-start"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative overflow-hidden group" style={{ aspectRatio: '3/4' }}>
              <img
                src={image}
                alt={t(`items.${key}.title` as 'items.montagnette.title')}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(26,20,32,0.82) 100%)' }}
              />
              {/* Distance badge */}
              <div
                className="absolute top-5 right-5"
                style={{
                  background: 'var(--ocre-soleil)',
                  padding: '0.35rem 0.75rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.68rem',
                    color: 'white',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                  }}
                >
                  {distance}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <h3
                  className="italic mb-2"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-h3)',
                    color: 'var(--pierre-chaude)',
                    fontWeight: 300,
                  }}
                >
                  {t(`items.${key}.title` as 'items.montagnette.title')}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.87rem',
                    color: 'rgba(184,168,136,0.9)',
                    fontWeight: 300,
                  }}
                >
                  {t(`items.${key}.description` as 'items.montagnette.description')}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
