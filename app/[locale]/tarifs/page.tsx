import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { rooms } from '@/data/rooms';
import Badge from '@/components/ui/Badge';
import { Users, BedDouble } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tarifs',
  description: 'Découvrez les tarifs des chambres et suites du Mas Saint Michel en Provence.',
};

export default async function TarifsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('rooms');

  return (
    <div className="pt-32 pb-24 bg-[var(--color-blanc)]">
      <div className="container-site">
        <div className="text-center mb-16">
          <span className="section-label">Tarifs</span>
          <h1
            className="font-light italic text-[var(--color-charcoal)]"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h1)' }}
          >
            Nos Tarifs
          </h1>
          <p
            className="text-[var(--color-gris-doux)] mt-4 max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Petit-déjeuner maison inclus dans tous nos tarifs. Réservation directe = meilleur tarif garanti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-[var(--color-creme)] p-8 relative"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ backgroundColor: room.color }}
              />
              <div className="mb-4">
                <Badge type={room.type} />
              </div>
              <h3
                className="font-light italic text-[var(--color-charcoal)] mb-2"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)' }}
              >
                {room.name}
              </h3>
              <p
                className="text-[var(--color-gris-doux)] text-sm mb-6"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {room.tagline}
              </p>
              <div
                className="flex gap-4 text-xs text-[var(--color-gris-doux)] mb-6"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <span className="flex items-center gap-1.5">
                  <Users size={13} /> {room.capacity} {t('capacity')}
                </span>
                <span className="flex items-center gap-1.5">
                  <BedDouble size={13} /> {room.bed}
                </span>
              </div>
              <div className="border-t border-[var(--color-pierre)]/30 pt-6">
                <div
                  className="text-3xl font-light text-[var(--color-terre)]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {room.price}
                </div>
                <div
                  className="text-xs text-[var(--color-gris-doux)] mt-1"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  par nuit · petit-déjeuner inclus
                </div>
              </div>
              <Link
                href={`/${locale}/chambres-et-suites/${room.slug}`}
                className="btn-outline-dark w-full text-center block mt-6"
              >
                {t('seeRoom')}
              </Link>
            </div>
          ))}
        </div>

        <div
          className="bg-[var(--color-creme)] p-8 text-center max-w-2xl mx-auto"
        >
          <h3
            className="font-light italic text-[var(--color-charcoal)] mb-4"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)' }}
          >
            Réserver Directement
          </h3>
          <p
            className="text-[var(--color-gris-doux)] mb-6"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            En réservant directement auprès de nous, vous bénéficiez du meilleur tarif garanti et d&rsquo;un accueil personnalisé.
          </p>
          <Link href={`/${locale}/reservation`} className="btn-primary">
            Demander une réservation
          </Link>
        </div>
      </div>
    </div>
  );
}
