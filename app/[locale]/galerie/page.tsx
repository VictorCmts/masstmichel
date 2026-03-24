'use client';

import { useState, use } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const galleryItems = [
  { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85', alt: 'Corona Suite', category: 'chambres', tall: true },
  { src: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1200&q=85', alt: 'Spritz Room', category: 'chambres', tall: false },
  { src: 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=1200&q=85', alt: 'Détail chambre', category: 'chambres', tall: false },
  { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=85', alt: 'Jardin provençal', category: 'exterieurs', tall: true },
  { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=85', alt: 'Piscine', category: 'exterieurs', tall: false },
  { src: 'https://images.unsplash.com/photo-1504592628-42e2c1c70d47?w=1200&q=85', alt: 'Vue Provence', category: 'provence', tall: false },
  { src: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=1200&q=85', alt: 'Petit-déjeuner', category: 'gastronomie', tall: true },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85', alt: 'Table gastronomique', category: 'gastronomie', tall: false },
  { src: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200&q=85', alt: 'Paysage provençal', category: 'provence', tall: false },
  { src: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=85', alt: 'La Montagnette', category: 'provence', tall: true },
  { src: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=1200&q=85', alt: 'Village de Provence', category: 'provence', tall: false },
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=85', alt: 'Soirée au mas', category: 'exterieurs', tall: false },
];

const filters = ['all', 'chambres', 'exterieurs', 'gastronomie', 'provence'];

export default function GaleriePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  const t = useTranslations('galerie');
  const tFilters = useTranslations('gallery.filters');
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=85"
          alt="Galerie Mas Saint Michel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <nav
            className="flex items-center gap-2 text-white/50 text-xs tracking-widest uppercase mb-8"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <Link href={`/${locale}`} className="hover:text-white transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-white">{t('heroTitle')}</span>
          </nav>
          <span
            className="text-white/70 text-xs tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {t('label')}
          </span>
          <h1
            className="text-white font-light italic"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h1)' }}
          >
            {t('heroTitle')}
          </h1>
          <p
            className="text-white/70 mt-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {t('heroSubtitle')}
          </p>
        </div>
      </div>

      {/* Gallery */}
      <section className="py-20 bg-[var(--color-blanc)]">
        <div className="container-site">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs tracking-[0.15em] uppercase transition-all ${
                  activeFilter === filter
                    ? 'bg-[var(--color-terre)] text-white'
                    : 'bg-[var(--color-creme)] text-[var(--color-gris-doux)] hover:bg-[var(--color-pierre)] hover:text-white'
                }`}
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {tFilters(filter as 'all' | 'chambres' | 'exterieurs' | 'gastronomie' | 'provence')}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={`${activeFilter}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative overflow-hidden group break-inside-avoid mb-4"
                  style={{ aspectRatio: item.tall ? '3/4' : '4/3' }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end p-4">
                    <span
                      className="text-white text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {item.alt}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
