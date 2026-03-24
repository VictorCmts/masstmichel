'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { slideInLeft, slideInRight } from '@/lib/animations';

export default function Editorial() {
  const t = useTranslations('editorial');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-28 lg:py-36" style={{ background: 'var(--pierre-chaude)' }}>
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 items-stretch">
          {/* Left: image full-bleed */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative order-2 lg:order-1"
          >
            <div className="relative overflow-hidden h-full min-h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=90"
                alt="Jardin du Mas Saint Michel"
                className="w-full h-full object-cover"
              />
              {/* Layered overlays for depth */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(92,75,138,0.12) 0%, transparent 60%)',
                }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  border: '1px solid rgba(200,134,10,0.2)',
                  margin: '1.5rem',
                }}
              />
              {/* Floating stat card */}
              <div
                className="absolute -bottom-0 right-0 lg:-right-8 p-7 hidden lg:block"
                style={{
                  background: 'var(--ocre-soleil)',
                  boxShadow: '0 12px 40px rgba(61,43,31,0.25)',
                }}
              >
                <div
                  className="leading-none mb-1"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '3.5rem',
                    color: 'white',
                    fontWeight: 300,
                  }}
                >
                  1987
                </div>
                <div
                  className="tracking-[0.15em] uppercase"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.65rem',
                    color: 'rgba(255,255,255,0.75)',
                    fontWeight: 300,
                  }}
                >
                  Fondation du Mas
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="order-1 lg:order-2 flex flex-col justify-center lg:pl-16 xl:pl-24 py-12 lg:py-0"
          >
            {/* Eyebrow */}
            <p
              className="mb-4"
              style={{
                fontFamily: 'var(--font-accent)',
                fontSize: '0.72rem',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'var(--lavande-douce)',
              }}
            >
              {t('label')}
            </p>

            {/* Decorative rule */}
            <div
              className="mb-6"
              style={{
                width: '3rem',
                height: '2px',
                background: 'var(--ocre-soleil)',
              }}
            />

            {/* H2 */}
            <h2
              className="mb-8 italic"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-h2)',
                color: 'var(--brun-mas)',
                fontWeight: 300,
                lineHeight: 1.15,
              }}
            >
              {t('title')}
            </h2>

            {/* Body text */}
            <div
              className="space-y-5 mb-10"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                color: 'var(--garrigue)',
                lineHeight: 1.75,
                fontWeight: 300,
              }}
            >
              <p>{t('p1')}</p>
              <p>{t('p2')}</p>
              <p>{t('p3')}</p>
            </div>

            {/* Inline stats */}
            <div className="flex gap-10 mb-10">
              {[
                { value: '5', label: 'Chambres & Suites' },
                { value: '12', label: 'km d\'Avignon' },
                { value: '4.9', label: 'Note moyenne' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2.2rem',
                      color: 'var(--ocre-soleil)',
                      fontWeight: 300,
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.7rem',
                      color: 'var(--garrigue)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginTop: '0.25rem',
                      fontWeight: 300,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Blockquote */}
            <blockquote
              className="border-l-2 pl-6 py-2"
              style={{ borderColor: 'var(--ocre-soleil)' }}
            >
              <p
                className="italic leading-relaxed mb-3"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.15rem',
                  color: 'var(--brun-mas)',
                }}
              >
                &ldquo;{t('quote')}&rdquo;
              </p>
              <cite
                className="not-italic tracking-[0.15em] uppercase"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.7rem',
                  color: 'var(--garrigue)',
                }}
              >
                — {t('quoteAuthor')}
              </cite>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
