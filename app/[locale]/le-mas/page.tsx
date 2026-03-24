import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { Check } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Le Mas',
  description:
    'Découvrez l\'histoire et la philosophie du Mas Saint Michel, demeure provençale du XVIIIe siècle restaurée avec passion au pied de la Montagnette.',
};

export default async function LeMasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('leMas');
  const breadcrumb = await getTranslations('breadcrumb');

  const philosophy = [
    t('philosophy1'),
    t('philosophy2'),
    t('philosophy3'),
    t('philosophy4'),
  ];

  return (
    <>
      {/* Hero */}
      <div className="relative h-[65vh] min-h-[450px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=85"
          alt="Mas Saint Michel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <nav
            className="flex items-center gap-2 text-white/50 text-xs tracking-widest uppercase mb-8"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <Link href={`/${locale}`} className="hover:text-white transition-colors">
              {breadcrumb('home')}
            </Link>
            <span>/</span>
            <span className="text-white">{breadcrumb('leMas')}</span>
          </nav>
          <span
            className="text-white/70 text-xs tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {t('label')}
          </span>
          <h1
            className="text-white font-light italic mb-4"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h1)' }}
          >
            {t('heroTitle')}
          </h1>
          <p
            className="text-white/70 max-w-lg"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {t('heroSubtitle')}
          </p>
        </div>
      </div>

      {/* Story section */}
      <section className="py-24 bg-[var(--color-blanc)]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="section-label">{t('label')}</span>
              <h2
                className="font-light italic text-[var(--color-charcoal)] mb-8"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)' }}
              >
                {t('title')}
              </h2>
              <div
                className="space-y-5 text-[var(--color-gris-doux)] leading-relaxed"
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}
              >
                <p>{t('p1')}</p>
                <p>{t('p2')}</p>
                <p>{t('p3')}</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=85"
                  alt="Le Mas Saint Michel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute -bottom-6 -right-6 bg-[var(--color-terre)] text-white p-6 hidden lg:block"
                style={{ boxShadow: 'var(--shadow-hover)' }}
              >
                <div
                  className="text-4xl font-light leading-none mb-1"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  XVIIIe
                </div>
                <div
                  className="text-xs tracking-widest uppercase text-white/70"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Siècle
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-[var(--color-creme)]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=1200&q=85"
                  alt="Petit-déjeuner au Mas"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="section-label">Philosophie</span>
              <h2
                className="font-light italic text-[var(--color-charcoal)] mb-8"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)' }}
              >
                {t('philosophyTitle')}
              </h2>
              <ul className="space-y-4">
                {philosophy.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 text-[var(--color-charcoal)]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <Check size={16} className="text-[var(--color-or)] mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Images */}
      <section className="py-24 bg-[var(--color-blanc)]">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=85"
                alt="Piscine du Mas"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden md:mt-12">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=85"
                alt="Jardin provençal"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200&q=85"
                alt="Paysage de Provence"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--color-terre)] text-center">
        <div className="container-site">
          <h2
            className="text-white font-light italic mb-6"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)' }}
          >
            Venez Nous Rendre Visite
          </h2>
          <Link href={`/${locale}/reservation`} className="btn-outline">
            Réserver votre séjour
          </Link>
        </div>
      </section>
    </>
  );
}
