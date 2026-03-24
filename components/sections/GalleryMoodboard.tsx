'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { staggerContainer } from '@/lib/animations';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85', alt: 'Suite luxueuse', tall: true },
  { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=85', alt: 'Jardin provençal', tall: false },
  { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=85', alt: 'Piscine', tall: false },
  { src: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=1200&q=85', alt: 'Petit-déjeuner', tall: true },
  { src: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200&q=85', alt: 'Paysage provençal', tall: false },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85', alt: 'Table gastronomique', tall: false },
];

export default function GalleryMoodboard({ locale }: { locale: string }) {
  const t = useTranslations('gallery');

  return (
    <section className="py-28 bg-[var(--color-blanc)]">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">{t('label')}</span>
          <h2
            className="font-light italic text-[var(--color-charcoal)]"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)' }}
          >
            {t('title')}
          </h2>
        </div>

        {/* Masonry grid */}
        <motion.div
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
              }}
              className="relative overflow-hidden group break-inside-avoid mb-4"
              style={{ aspectRatio: image.tall ? '3/4' : '4/3' }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <span
                  className="text-white text-sm tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {t('cta')}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href={`/${locale}/galerie`}
            className="btn-outline-dark"
          >
            {t('cta')}
          </Link>
        </div>
      </div>
    </section>
  );
}
