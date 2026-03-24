'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visibleCount = 3;
  const visibleTestimonials = Array.from({ length: visibleCount }, (_, i) =>
    testimonials[(current + i) % testimonials.length]
  );

  return (
    <section className="py-28 lg:py-36" style={{ background: 'var(--pierre-chaude)' }}>
      <div className="container-site">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="mb-4"
            style={{
              fontFamily: 'var(--font-accent)',
              fontSize: '0.72rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--ocre-soleil)',
            }}
          >
            {t('label')}
          </p>
          <h2
            className="italic"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-h2)',
              color: 'var(--brun-mas)',
              fontWeight: 300,
            }}
          >
            {t('title')}
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {visibleTestimonials.map((testimonial, idx) => (
                <motion.div
                  key={`${testimonial.id}-${current}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col ${idx > 0 ? 'hidden md:flex' : ''} ${idx > 1 ? 'hidden lg:flex' : ''}`}
                  style={{
                    background: 'white',
                    padding: '2.5rem',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  {/* Opening quote mark — massive */}
                  <span
                    className="absolute -top-4 left-6 leading-none select-none"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '7rem',
                      color: 'var(--ocre-soleil)',
                      opacity: 0.18,
                      lineHeight: 1,
                    }}
                  >
                    &ldquo;
                  </span>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} style={{ color: 'var(--ocre-soleil)', fontSize: '0.85rem' }}>★</span>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote
                    className="italic leading-relaxed mb-7 flex-1"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.05rem',
                      color: 'var(--brun-mas)',
                      fontWeight: 400,
                    }}
                  >
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Separator */}
                  <div
                    className="mb-5"
                    style={{ width: '2rem', height: '1px', background: 'var(--ocre-soleil)', opacity: 0.5 }}
                  />

                  {/* Author */}
                  <div style={{ fontFamily: 'var(--font-body)' }}>
                    <p
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        color: 'var(--brun-mas)',
                      }}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--garrigue)',
                        fontWeight: 300,
                        marginTop: '0.2rem',
                      }}
                    >
                      {testimonial.origin} · {testimonial.date}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-11 h-11 flex items-center justify-center transition-all"
              style={{
                border: '1px solid var(--pierre-sombre)',
                color: 'var(--garrigue)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--brun-mas)';
                (e.currentTarget as HTMLButtonElement).style.color = 'var(--brun-mas)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--pierre-sombre)';
                (e.currentTarget as HTMLButtonElement).style.color = 'var(--garrigue)';
              }}
              aria-label={t('previous')}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="10,3 5,8 10,13" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2 items-center">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: idx === current ? '1.75rem' : '0.5rem',
                    height: '3px',
                    background: idx === current ? 'var(--ocre-soleil)' : 'var(--pierre-sombre)',
                    borderRadius: 0,
                  }}
                  aria-label={`Avis ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 flex items-center justify-center transition-all"
              style={{
                border: '1px solid var(--pierre-sombre)',
                color: 'var(--garrigue)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--brun-mas)';
                (e.currentTarget as HTMLButtonElement).style.color = 'var(--brun-mas)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--pierre-sombre)';
                (e.currentTarget as HTMLButtonElement).style.color = 'var(--garrigue)';
              }}
              aria-label={t('next')}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="6,3 11,8 6,13" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
