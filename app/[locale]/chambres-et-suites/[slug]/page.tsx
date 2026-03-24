import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { rooms } from '@/data/rooms';
import Badge from '@/components/ui/Badge';
import { Users, BedDouble, Maximize2, Wind, Flame, ArrowLeft, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

const roomImages: Record<string, string[]> = {
  'corona-suite': [
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85',
    'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=1200&q=85',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=85',
  ],
  'menthe-a-leau-suite': [
    'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=1200&q=85',
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=85',
  ],
  'spritz-room': [
    'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1200&q=85',
    'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=1200&q=85',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=85',
  ],
  'sangria-room': [
    'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1200&q=85',
    'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=85',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=85',
  ],
  'mojito-room': [
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85',
    'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200&q=85',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=85',
  ],
};

export async function generateStaticParams() {
  const locales = ['fr', 'en'];
  return locales.flatMap((locale) =>
    rooms.map((room) => ({ locale, slug: room.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);
  if (!room) return {};
  return {
    title: room.name,
    description: room.tagline,
  };
}

export default async function RoomPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const room = rooms.find((r) => r.slug === slug);
  if (!room) notFound();

  const t = await getTranslations('room');
  const breadcrumb = await getTranslations('breadcrumb');
  const roomsT = await getTranslations('rooms');

  const images = roomImages[slug] || roomImages['corona-suite'];
  const otherRooms = rooms.filter((r) => r.slug !== slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={images[0]}
          alt={room.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="mb-6">
            <Badge type={room.type} />
          </div>
          <h1
            className="text-white font-light italic mb-4"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h1)' }}
          >
            {room.name}
          </h1>
          <p
            className="text-white/70 max-w-lg"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {locale === 'en' ? room.taglineEn : room.tagline}
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-[var(--color-creme)] border-b border-[var(--color-pierre)]/30">
        <div className="container-site py-4">
          <nav
            className="flex items-center gap-2 text-xs tracking-widest uppercase text-[var(--color-gris-doux)]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <Link href={`/${locale}`} className="hover:text-[var(--color-terre)] transition-colors">
              {breadcrumb('home')}
            </Link>
            <span>/</span>
            <Link
              href={`/${locale}/chambres-et-suites`}
              className="hover:text-[var(--color-terre)] transition-colors"
            >
              {breadcrumb('chambres')}
            </Link>
            <span>/</span>
            <span className="text-[var(--color-charcoal)]">{room.name}</span>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <section className="py-20 bg-[var(--color-blanc)]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: gallery */}
            <div className="space-y-4">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={images[0]}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {images.slice(1).map((img, idx) => (
                  <div key={idx} className="aspect-[4/3] overflow-hidden">
                    <img
                      src={img}
                      alt={`${room.name} — vue ${idx + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: info */}
            <div>
              <div className="mb-2">
                <Badge type={room.type} />
              </div>
              <h2
                className="font-light italic text-[var(--color-charcoal)] mt-4 mb-6"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)' }}
              >
                {room.name}
              </h2>

              <p
                className="text-[var(--color-gris-doux)] leading-relaxed mb-8"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {locale === 'en' ? room.descriptionEn : room.description}
              </p>

              {/* Details */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-[var(--color-creme)] p-4">
                  <div
                    className="text-xs tracking-widest uppercase text-[var(--color-gris-doux)] mb-1"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {t('capacity')}
                  </div>
                  <div
                    className="flex items-center gap-2 text-[var(--color-charcoal)]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <Users size={16} />
                    {room.capacity} {roomsT('capacity')}
                  </div>
                </div>
                <div className="bg-[var(--color-creme)] p-4">
                  <div
                    className="text-xs tracking-widest uppercase text-[var(--color-gris-doux)] mb-1"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {t('bed')}
                  </div>
                  <div
                    className="flex items-center gap-2 text-[var(--color-charcoal)]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <BedDouble size={16} />
                    {locale === 'en' ? room.bedEn : room.bed}
                  </div>
                </div>
                {room.surface && (
                  <div className="bg-[var(--color-creme)] p-4">
                    <div
                      className="text-xs tracking-widest uppercase text-[var(--color-gris-doux)] mb-1"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {t('surface')}
                    </div>
                    <div
                      className="flex items-center gap-2 text-[var(--color-charcoal)]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <Maximize2 size={16} />
                      {room.surface} {roomsT('surface')}
                    </div>
                  </div>
                )}
              </div>

              {/* Amenities */}
              <div className="mb-8">
                <h3
                  className="text-xs tracking-widest uppercase text-[var(--color-gris-doux)] mb-3"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {t('amenities')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {room.aircon && (
                    <span
                      className="flex items-center gap-1.5 text-sm text-[var(--color-charcoal)] bg-[var(--color-creme)] px-3 py-1.5"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <Wind size={14} /> {roomsT('amenities.aircon')}
                    </span>
                  )}
                  {room.fireplace && (
                    <span
                      className="flex items-center gap-1.5 text-sm text-[var(--color-charcoal)] bg-[var(--color-creme)] px-3 py-1.5"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <Flame size={14} /> {roomsT('amenities.fireplace')}
                    </span>
                  )}
                  {room.gardenView && (
                    <span
                      className="text-sm text-[var(--color-charcoal)] bg-[var(--color-creme)] px-3 py-1.5"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {roomsT('amenities.gardenView')}
                    </span>
                  )}
                  {room.parkView && (
                    <span
                      className="text-sm text-[var(--color-charcoal)] bg-[var(--color-creme)] px-3 py-1.5"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {roomsT('amenities.parkView')}
                    </span>
                  )}
                  {room.montagnettaView && (
                    <span
                      className="text-sm text-[var(--color-charcoal)] bg-[var(--color-creme)] px-3 py-1.5"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {roomsT('amenities.montagnettaView')}
                    </span>
                  )}
                  {room.underEaves && (
                    <span
                      className="text-sm text-[var(--color-charcoal)] bg-[var(--color-creme)] px-3 py-1.5"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {roomsT('amenities.underEaves')}
                    </span>
                  )}
                </div>
              </div>

              {/* Price + CTA */}
              <div className="border-t border-[var(--color-creme)] pt-8">
                <div className="flex items-baseline gap-2 mb-6">
                  <span
                    className="text-xs uppercase tracking-widest text-[var(--color-gris-doux)]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {t('from')}
                  </span>
                  <span
                    className="text-3xl font-light text-[var(--color-terre)]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {room.price.replace('À partir de ', '')}
                  </span>
                  <span
                    className="text-xs text-[var(--color-gris-doux)]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {t('perNight')}
                  </span>
                </div>
                <Link href={`/${locale}/reservation`} className="btn-primary w-full text-center block">
                  {t('bookNow')}
                </Link>
                <Link
                  href={`/${locale}/chambres-et-suites`}
                  className="flex items-center gap-2 text-xs tracking-widest uppercase text-[var(--color-gris-doux)] hover:text-[var(--color-terre)] transition-colors mt-4"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <ArrowLeft size={14} /> {t('back')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Also like */}
      <section className="py-20 bg-[var(--color-creme)]">
        <div className="container-site">
          <h2
            className="font-light italic text-[var(--color-charcoal)] mb-12 text-center"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)' }}
          >
            {t('alsoLike')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherRooms.map((other) => (
              <div
                key={other.id}
                className="bg-white overflow-hidden group"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <Link href={`/${locale}/chambres-et-suites/${other.slug}`}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={roomImages[other.slug]?.[0] || roomImages['corona-suite'][0]}
                      alt={other.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3
                      className="font-light italic text-[var(--color-charcoal)] mb-2 group-hover:text-[var(--color-terre)] transition-colors"
                      style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)' }}
                    >
                      {other.name}
                    </h3>
                    <p
                      className="text-[var(--color-gris-doux)] text-sm mb-4"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {locale === 'en' ? other.taglineEn : other.tagline}
                    </p>
                    <span
                      className="flex items-center gap-1 text-xs uppercase tracking-widest text-[var(--color-terre)]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {roomsT('seeRoom')} <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
