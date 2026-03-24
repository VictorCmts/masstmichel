'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Users, BedDouble, Maximize2, ArrowRight } from 'lucide-react';
import { rooms } from '@/data/rooms';
import Badge from '@/components/ui/Badge';
import { staggerContainer, cardHover } from '@/lib/animations';

const roomImages: Record<string, string> = {
  'corona-suite': 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85',
  'menthe-a-leau-suite': 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85',
  'spritz-room': 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1200&q=85',
  'sangria-room': 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1200&q=85',
  'mojito-room': 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=1200&q=85',
};

const previewRooms = rooms.slice(0, 3);

export default function RoomsPreview({ locale }: { locale: string }) {
  const t = useTranslations('rooms');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-28 bg-[var(--color-creme)]" ref={ref}>
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">{t('label')}</span>
          <div className="ornament-line justify-center">
            <h2
              className="font-light italic text-[var(--color-charcoal)] px-4"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)' }}
            >
              {t('title')}
            </h2>
          </div>
          <p
            className="text-[var(--color-gris-doux)] max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {t('subtitle')}
          </p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {previewRooms.map((room) => (
            <motion.div
              key={room.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <motion.div
                variants={cardHover}
                className="bg-white overflow-hidden group cursor-pointer h-full flex flex-col"
              >
                {/* Image */}
                <Link href={`/${locale}/chambres-et-suites/${room.slug}`}>
                  <div className="overflow-hidden aspect-[4/3] relative">
                    <img
                      src={roomImages[room.slug]}
                      alt={room.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge type={room.type} />
                    </div>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <Link href={`/${locale}/chambres-et-suites/${room.slug}`}>
                    <h3
                      className="text-[var(--color-charcoal)] font-light italic mb-2 hover:text-[var(--color-terre)] transition-colors"
                      style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)' }}
                    >
                      {room.name}
                    </h3>
                  </Link>
                  <p
                    className="text-[var(--color-gris-doux)] text-sm mb-4 leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {room.tagline}
                  </p>

                  {/* Meta */}
                  <div
                    className="flex flex-wrap gap-4 text-xs text-[var(--color-gris-doux)] mb-6 mt-auto"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <span className="flex items-center gap-1.5">
                      <Users size={13} />
                      {room.capacity} {t('capacity')}
                    </span>
                    {room.surface && (
                      <span className="flex items-center gap-1.5">
                        <Maximize2 size={13} />
                        {room.surface} {t('surface')}
                      </span>
                    )}
                    <span className="flex items-center gap-1.5">
                      <BedDouble size={13} />
                      {room.bed}
                    </span>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--color-creme)]">
                    <span
                      className="text-sm font-light text-[var(--color-terre)]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {room.price}
                    </span>
                    <Link
                      href={`/${locale}/chambres-et-suites/${room.slug}`}
                      className="flex items-center gap-1 text-xs tracking-[0.1em] uppercase text-[var(--color-terre)] hover:gap-2 transition-all"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {t('seeRoom')}
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* See all CTA */}
        <div className="text-center mt-12">
          <Link
            href={`/${locale}/chambres-et-suites`}
            className="btn-outline-dark"
          >
            {t('seeAll')}
          </Link>
        </div>
      </div>
    </section>
  );
}
