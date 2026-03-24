'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const territoryItems = [
  {
    key: 'montagnette',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=85',
  },
  {
    key: 'villages',
    image: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=1200&q=85',
  },
  {
    key: 'marches',
    image: 'https://images.unsplash.com/photo-1504592628-42e2c1c70d47?w=1200&q=85',
  },
  {
    key: 'gastronomie',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85',
  },
];

export default function Territory() {
  const t = useTranslations('territory');
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-28 bg-[var(--color-creme)] overflow-hidden">
      <div className="container-site mb-12">
        <div className="text-center">
          <span className="section-label">{t('label')}</span>
          <h2
            className="font-light italic text-[var(--color-charcoal)] mb-4"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)' }}
          >
            {t('title')}
          </h2>
          <p
            className="text-[var(--color-gris-doux)] max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {t('subtitle')}
          </p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex gap-6 px-[clamp(1.25rem,5vw,5rem)] overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none' }}
      >
        {territoryItems.map(({ key, image }, index) => (
          <motion.div
            key={key}
            className="flex-none w-[85vw] sm:w-[60vw] lg:w-[30vw] snap-start"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="relative overflow-hidden aspect-[3/4] group">
              <img
                src={image}
                alt={t(`items.${key}.title` as `items.montagnette.title`)}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3
                  className="text-white font-light italic mb-2"
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)' }}
                >
                  {t(`items.${key}.title` as `items.montagnette.title`)}
                </h3>
                <p
                  className="text-white/70 text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {t(`items.${key}.description` as `items.montagnette.description`)}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
