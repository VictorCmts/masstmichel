import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { rooms } from '@/data/rooms';
import Badge from '@/components/ui/Badge';
import { Users, BedDouble, Maximize2, ArrowRight, Wind, Flame } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chambres & Suites',
  description:
    'Découvrez nos 5 chambres et suites provençales au Mas Saint Michel. Chaque espace porte l\'âme de la Provence — intimité, raffinement, vue imprenable.',
};

const roomImages: Record<string, string> = {
  'corona-suite': 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85',
  'menthe-a-leau-suite': 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=1200&q=85',
  'spritz-room': 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1200&q=85',
  'sangria-room': 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1200&q=85',
  'mojito-room': 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85',
};

export default async function ChambresPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('rooms');
  const breadcrumb = await getTranslations('breadcrumb');

  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85"
          alt="Chambres & Suites"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/50 text-xs tracking-widest uppercase mb-8" style={{ fontFamily: 'var(--font-body)' }}>
            <Link href={`/${locale}`} className="hover:text-white transition-colors">{breadcrumb('home')}</Link>
            <span>/</span>
            <span className="text-white">{breadcrumb('chambres')}</span>
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
            Chambres &amp; Suites
          </h1>
          <p
            className="text-white/70 mt-4 max-w-xl"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {t('subtitle')}
          </p>
        </div>
      </div>

      {/* Rooms grid */}
      <section className="py-24 bg-[var(--color-creme)]">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white overflow-hidden group flex flex-col"
                style={{ boxShadow: 'var(--shadow-card)' }}
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
                    {/* Color accent */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1"
                      style={{ backgroundColor: room.color }}
                    />
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <Link href={`/${locale}/chambres-et-suites/${room.slug}`}>
                    <h2
                      className="font-light italic text-[var(--color-charcoal)] mb-2 hover:text-[var(--color-terre)] transition-colors"
                      style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)' }}
                    >
                      {room.name}
                    </h2>
                  </Link>
                  <p
                    className="text-[var(--color-gris-doux)] text-sm mb-5 leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {room.tagline}
                  </p>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {room.aircon && (
                      <span className="flex items-center gap-1 text-xs text-[var(--color-gris-doux)] bg-[var(--color-creme)] px-2.5 py-1" style={{ fontFamily: 'var(--font-body)' }}>
                        <Wind size={11} /> {t('amenities.aircon')}
                      </span>
                    )}
                    {room.fireplace && (
                      <span className="flex items-center gap-1 text-xs text-[var(--color-gris-doux)] bg-[var(--color-creme)] px-2.5 py-1" style={{ fontFamily: 'var(--font-body)' }}>
                        <Flame size={11} /> {t('amenities.fireplace')}
                      </span>
                    )}
                    {room.gardenView && (
                      <span className="text-xs text-[var(--color-gris-doux)] bg-[var(--color-creme)] px-2.5 py-1" style={{ fontFamily: 'var(--font-body)' }}>
                        {t('amenities.gardenView')}
                      </span>
                    )}
                    {room.parkView && (
                      <span className="text-xs text-[var(--color-gris-doux)] bg-[var(--color-creme)] px-2.5 py-1" style={{ fontFamily: 'var(--font-body)' }}>
                        {t('amenities.parkView')}
                      </span>
                    )}
                    {room.montagnettaView && (
                      <span className="text-xs text-[var(--color-gris-doux)] bg-[var(--color-creme)] px-2.5 py-1" style={{ fontFamily: 'var(--font-body)' }}>
                        {t('amenities.montagnettaView')}
                      </span>
                    )}
                    {room.underEaves && (
                      <span className="text-xs text-[var(--color-gris-doux)] bg-[var(--color-creme)] px-2.5 py-1" style={{ fontFamily: 'var(--font-body)' }}>
                        {t('amenities.underEaves')}
                      </span>
                    )}
                  </div>

                  {/* Meta */}
                  <div
                    className="flex flex-wrap gap-4 text-xs text-[var(--color-gris-doux)] mb-6 mt-auto"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <span className="flex items-center gap-1.5">
                      <Users size={13} /> {room.capacity} {t('capacity')}
                    </span>
                    {room.surface && (
                      <span className="flex items-center gap-1.5">
                        <Maximize2 size={13} /> {room.surface} {t('surface')}
                      </span>
                    )}
                    <span className="flex items-center gap-1.5">
                      <BedDouble size={13} /> {room.bed}
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
                      {t('seeRoom')} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
