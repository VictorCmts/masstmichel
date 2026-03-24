'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Newsletter() {
  const t = useTranslations('newsletter');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Placeholder: integrate with email provider
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-[var(--color-blanc)]">
      <div className="container-site">
        <div className="max-w-2xl mx-auto text-center">
          <span className="section-label">{t('label')}</span>
          <h2
            className="font-light italic text-[var(--color-charcoal)] mb-4"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)' }}
          >
            {t('title')}
          </h2>
          <p
            className="text-[var(--color-gris-doux)] mb-10"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {t('subtitle')}
          </p>

          {submitted ? (
            <div
              className="text-[var(--color-terre)] text-lg font-light italic"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Merci ! Vous êtes maintenant abonné(e).
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('placeholder')}
                required
                className="flex-1 px-4 py-3 border border-[var(--color-pierre)] bg-white text-[var(--color-charcoal)] text-sm focus:outline-none focus:border-[var(--color-terre)] transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                {t('submit')}
              </button>
            </form>
          )}

          <p
            className="text-[var(--color-gris-doux)] text-xs mt-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {t('privacy')}
          </p>
        </div>
      </div>
    </section>
  );
}
