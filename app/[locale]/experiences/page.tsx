import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { experiences } from '@/data/experiences';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Expériences',
  description:
    'Randonnées dans la Montagnette, gastronomie provençale, bien-être et privatisation — vivez la Provence authentique au Mas Saint Michel.',
};

export default async function ExperiencesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('experiences');
  const breadcrumb = await getTranslations('breadcrumb');

  return (
    <>
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=85"
          alt="Expériences en Provence"
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
            <span className="text-white">{breadcrumb('experiences')}</span>
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

      {/* Experiences grid */}
      <section className="py-24 bg-[var(--color-creme)]">
        <div className="container-site">
          <div className="text-center mb-16">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="bg-white overflow-hidden group"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={exp.image}
                    alt={locale === 'en' ? exp.titleEn : exp.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[0.65rem] tracking-[0.15em] uppercase text-[var(--color-terre)] bg-[var(--color-creme)] px-2.5 py-1"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3
                    className="font-light italic text-[var(--color-charcoal)] mb-4"
                    style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)' }}
                  >
                    {locale === 'en' ? exp.titleEn : exp.title}
                  </h3>
                  <p
                    className="text-[var(--color-gris-doux)] leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}
                  >
                    {locale === 'en' ? exp.descriptionEn : exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link href={`/${locale}/contact`} className="btn-primary">
              {locale === 'en' ? 'Contact Us' : 'Nous Contacter'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
