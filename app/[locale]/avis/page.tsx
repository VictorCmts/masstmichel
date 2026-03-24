import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { testimonials } from '@/data/testimonials';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Avis clients',
  description: 'Découvrez les avis de nos hôtes sur le Mas Saint Michel en Provence.',
};

export default async function AvisPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('testimonials');

  return (
    <div className="pt-32 pb-24 bg-[var(--color-blanc)]">
      <div className="container-site">
        <div className="text-center mb-16">
          <span className="section-label">{t('label')}</span>
          <h1
            className="font-light italic text-[var(--color-charcoal)]"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h1)' }}
          >
            {t('title')}
          </h1>
          <div className="flex items-center justify-center gap-2 mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-[var(--color-or)] text-xl">★</span>
            ))}
            <span
              className="text-[var(--color-gris-doux)] ml-2"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              4.9/5 · {testimonials.length} avis
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-[var(--color-or)] text-sm">★</span>
                ))}
              </div>
              <blockquote
                className="text-[var(--color-charcoal)] leading-relaxed mb-6 italic"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
              >
                &ldquo;{locale === 'en' ? testimonial.quoteEn : testimonial.quote}&rdquo;
              </blockquote>
              <div style={{ fontFamily: 'var(--font-body)' }}>
                <div className="text-sm font-medium text-[var(--color-charcoal)]">
                  {testimonial.name}
                </div>
                <div className="text-xs text-[var(--color-gris-doux)]">
                  {testimonial.origin} · {testimonial.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href={`/${locale}/reservation`} className="btn-primary">
            {locale === 'en' ? 'Book Now' : 'Réserver votre séjour'}
          </Link>
        </div>
      </div>
    </div>
  );
}
