'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Newsletter() {
  const t = useTranslations('newsletter');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section
      className="py-24 lg:py-32"
      style={{ background: 'linear-gradient(135deg, var(--lavande-mist) 0%, var(--pierre-chaude) 100%)' }}
    >
      <div className="container-site">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          {/* Eyebrow */}
          <p
            className="mb-5"
            style={{
              fontFamily: 'var(--font-accent)',
              fontSize: '0.72rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--lavande-profonde)',
            }}
          >
            {t('label')}
          </p>

          {/* Decorative lavender sprig SVG */}
          <div className="flex justify-center mb-6">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <line x1="20" y1="38" x2="20" y2="10" stroke="var(--lavande-douce)" strokeWidth="1.2"/>
              <ellipse cx="20" cy="8" rx="3" ry="5" fill="var(--lavande-douce)" opacity="0.7"/>
              <ellipse cx="14" cy="16" rx="2.5" ry="4" fill="var(--lavande-douce)" opacity="0.5" transform="rotate(-30 14 16)"/>
              <ellipse cx="26" cy="16" rx="2.5" ry="4" fill="var(--lavande-douce)" opacity="0.5" transform="rotate(30 26 16)"/>
              <ellipse cx="12" cy="24" rx="2" ry="3.5" fill="var(--lavande-pale)" opacity="0.4" transform="rotate(-25 12 24)"/>
              <ellipse cx="28" cy="24" rx="2" ry="3.5" fill="var(--lavande-pale)" opacity="0.4" transform="rotate(25 28 24)"/>
            </svg>
          </div>

          {/* H2 */}
          <h2
            className="italic mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-h2)',
              color: 'var(--brun-mas)',
              fontWeight: 300,
            }}
          >
            {t('title')}
          </h2>

          {/* Subtitle */}
          <p
            className="mb-10"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--garrigue)',
              fontWeight: 300,
              fontSize: '0.95rem',
            }}
          >
            {t('subtitle')}
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="italic text-lg"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--lavande-profonde)',
              }}
            >
              Merci — nous vous retrouverons bientôt avec l&rsquo;âme de la Provence.
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('placeholder')}
                required
                className="flex-1 px-5 py-3.5 text-sm focus:outline-none transition-all"
                style={{
                  fontFamily: 'var(--font-body)',
                  background: 'var(--pierre-chaude)',
                  border: '1px solid var(--pierre-medium)',
                  borderRight: 'none',
                  color: 'var(--brun-mas)',
                  fontWeight: 300,
                }}
                onFocus={(e) => (e.target.style.boxShadow = '0 0 0 2px var(--lavande-douce)')}
                onBlur={(e) => (e.target.style.boxShadow = 'none')}
              />
              <button
                type="submit"
                className="whitespace-nowrap px-7 py-3.5 text-white text-xs tracking-[0.12em] uppercase font-medium transition-colors"
                style={{
                  fontFamily: 'var(--font-body)',
                  background: 'var(--ocre-soleil)',
                  border: '1px solid var(--ocre-soleil)',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = 'var(--terre-sienne)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = 'var(--ocre-soleil)')}
              >
                {t('submit')}
              </button>
            </form>
          )}

          {/* Privacy note */}
          {!submitted && (
            <p
              className="mt-5"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                color: 'var(--garrigue)',
                fontWeight: 300,
              }}
            >
              {t('privacy')}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
