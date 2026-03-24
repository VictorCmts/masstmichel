'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=90',
    caption: 'Suite Corona — Élégance provençale',
    gridArea: 'cell1',
  },
  {
    src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=90',
    caption: 'Jardin du Mas, Boulbon',
    gridArea: 'cell2',
  },
  {
    src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=90',
    caption: 'Piscine au calme',
    gridArea: 'cell3',
  },
  {
    src: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=900&q=90',
    caption: 'Petit-déjeuner maison',
    gridArea: 'cell4',
  },
  {
    src: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=900&q=90',
    caption: 'Luberon — Paysage de garrigue',
    gridArea: 'cell5',
  },
];

const itemVariant = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: 'easeOut' as const },
  },
};

export default function GalleryMoodboard({ locale }: { locale: string }) {
  const t = useTranslations('gallery');

  return (
    <section className="py-28 lg:py-36" style={{ background: '#FEFCF8' }}>
      <div className="container-site">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
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
            className="italic"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-h2)',
              color: 'var(--brun-mas)',
              fontWeight: 300,
            }}
          >
            {t('title')}
          </h2>
        </motion.div>

        {/* Asymmetric editorial grid */}
        <motion.div
          className="hidden lg:grid gap-3"
          style={{
            gridTemplateColumns: '1.4fr 1fr 1fr',
            gridTemplateRows: '340px 280px',
            gridTemplateAreas: `
              "cell1 cell2 cell3"
              "cell4 cell4 cell5"
            `,
          }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.gridArea}
              variants={itemVariant}
              className="relative overflow-hidden group"
              style={{ gridArea: image.gridArea }}
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex items-end p-6 transition-opacity duration-400"
                style={{
                  background: 'linear-gradient(180deg, transparent 40%, rgba(200,134,10,0.75) 100%)',
                  opacity: 0,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
              >
                <p
                  className="italic"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.1rem',
                    color: 'var(--pierre-chaude)',
                    fontWeight: 300,
                  }}
                >
                  {image.caption}
                </p>
              </div>
              {/* Always-visible bottom gradient on hover */}
              <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{
                  background: 'linear-gradient(180deg, transparent 40%, rgba(200,134,10,0.7) 100%)',
                }}
              >
                <p
                  className="italic"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.05rem',
                    color: 'var(--pierre-chaude)',
                    fontWeight: 300,
                  }}
                >
                  {image.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: masonry-style columns */}
        <motion.div
          className="lg:hidden columns-1 sm:columns-2 gap-3"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryImages.map((image, idx) => (
            <motion.div
              key={idx}
              variants={itemVariant}
              className="relative overflow-hidden group break-inside-avoid mb-3"
              style={{ aspectRatio: idx % 2 === 0 ? '3/4' : '4/3' }}
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-400 flex items-end p-4">
                <p
                  className="italic opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                    color: 'var(--pierre-chaude)',
                    fontWeight: 300,
                  }}
                >
                  {image.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href={`/${locale}/galerie`} className="btn-outline-dark">
            {t('cta')}
          </Link>
        </div>
      </div>
    </section>
  );
}
