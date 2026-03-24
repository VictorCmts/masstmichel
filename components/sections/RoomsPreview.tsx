'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Users, Maximize2, BedDouble, ArrowRight } from 'lucide-react';
import { rooms } from '@/data/rooms';
import { staggerContainer } from '@/lib/animations';

const roomImages: Record<string, string> = {
  'corona-suite': 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=90',
  'menthe-a-leau-suite': 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=900&q=90',
  'spritz-room': 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=900&q=90',
  'sangria-room': 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=900&q=90',
  'mojito-room': 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=900&q=90',
};

const previewRooms = rooms.slice(0, 3);

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const },
  },
};

export default function RoomsPreview({ locale }: { locale: string }) {
  const t = useTranslations('rooms');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      className="py-28 lg:py-36"
      ref={ref}
      style={{ background: '#FEFCF8' }}
    >
      <div className="container-site">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {previewRooms.map((room) => (
            <motion.div
              key={room.id}
              variants={cardVariant}
              className="group overflow-hidden flex flex-col"
              style={{
                background: 'white',
                boxShadow: 'var(--shadow-card)',
                transition: 'box-shadow 0.4s ease',
              }}
              whileHover={{ boxShadow: 'var(--shadow-hover)' }}
            >
              {/* Image */}
              <Link href={`/${locale}/chambres-et-suites/${room.slug}`}>
                <div className="overflow-hidden aspect-[4/3] relative">
                  <img
                    src={roomImages[room.slug]}
                    alt={room.name}
                    className="w-full h-full object-cover transition-all duration-700"
                    style={{ filter: 'grayscale(20%)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0%)')}
                    onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(20%)')}
                  />
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="inline-block px-3 py-1 text-[0.62rem] tracking-[0.15em] uppercase"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: 500,
                        background: room.type === 'Suite' ? 'var(--lavande-mist)' : 'var(--pierre-chaude)',
                        color: room.type === 'Suite' ? 'var(--lavande-profonde)' : 'var(--brun-mas)',
                      }}
                    >
                      {room.type}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <Link href={`/${locale}/chambres-et-suites/${room.slug}`}>
                  <h3
                    className="italic mb-2 hover:text-[var(--ocre-soleil)] transition-colors"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'var(--text-h3)',
                      color: 'var(--brun-mas)',
                      fontWeight: 400,
                    }}
                  >
                    {room.name}
                  </h3>
                </Link>
                <p
                  className="text-sm mb-5 leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--garrigue)',
                    fontWeight: 300,
                  }}
                >
                  {room.tagline}
                </p>

                {/* Meta */}
                <div
                  className="flex flex-wrap gap-4 text-xs mb-6 mt-auto"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--garrigue)',
                    fontWeight: 300,
                  }}
                >
                  <span className="flex items-center gap-1.5">
                    <Users size={12} />
                    {room.capacity} {t('capacity')}
                  </span>
                  {room.surface && (
                    <span className="flex items-center gap-1.5">
                      <Maximize2 size={12} />
                      {room.surface} {t('surface')}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    <BedDouble size={12} />
                    {room.bed}
                  </span>
                </div>

                {/* Footer */}
                <div
                  className="flex items-center justify-between pt-5"
                  style={{ borderTop: '1px solid var(--pierre-medium)' }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      color: 'var(--ocre-soleil)',
                      fontWeight: 500,
                    }}
                  >
                    {room.price}
                  </span>
                  <Link
                    href={`/${locale}/chambres-et-suites/${room.slug}`}
                    className="flex items-center gap-1.5 transition-all group-hover:gap-2.5"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--brun-mas)',
                    }}
                  >
                    {t('seeRoom')}
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* See all CTA */}
        <div className="text-center mt-14">
          <Link href={`/${locale}/chambres-et-suites`} className="btn-outline-dark">
            {t('seeAll')}
          </Link>
        </div>
      </div>
    </section>
  );
}
