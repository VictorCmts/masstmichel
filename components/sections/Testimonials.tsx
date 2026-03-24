'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  // Show 3 visible on desktop
  const visibleCount = 3;
  const visibleTestimonials = Array.from({ length: visibleCount }, (_, i) =>
    testimonials[(current + i) % testimonials.length]
  );

  return (
    <section className="py-28 bg-[var(--color-creme)]">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">{t('label')}</span>
          <h2
            className="font-light italic text-[var(--color-charcoal)]"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)' }}
          >
            {t('title')}
          </h2>
        </div>

        {/* Cards — desktop: 3 columns, mobile: 1 */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {visibleTestimonials.map((testimonial, idx) => (
                <motion.div
                  key={`${testimonial.id}-${current}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`bg-white p-8 ${idx > 0 ? 'hidden md:block' : ''} ${idx > 1 ? 'hidden lg:block' : ''}`}
                  style={{ boxShadow: 'var(--shadow-card)' }}
                >
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-[var(--color-or)] text-sm">★</span>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote
                    className="text-[var(--color-charcoal)] leading-relaxed mb-6 italic"
                    style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
                  >
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div
                    className="flex flex-col gap-0.5"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <span className="text-sm font-medium text-[var(--color-charcoal)]">
                      {testimonial.name}
                    </span>
                    <span className="text-xs text-[var(--color-gris-doux)]">
                      {testimonial.origin} · {testimonial.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 border border-[var(--color-pierre)] flex items-center justify-center text-[var(--color-gris-doux)] hover:border-[var(--color-terre)] hover:text-[var(--color-terre)] transition-colors"
              aria-label={t('previous')}
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    idx === current
                      ? 'w-6 h-2 bg-[var(--color-terre)]'
                      : 'w-2 h-2 bg-[var(--color-pierre)]'
                  }`}
                  aria-label={`Avis ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 border border-[var(--color-pierre)] flex items-center justify-center text-[var(--color-gris-doux)] hover:border-[var(--color-terre)] hover:text-[var(--color-terre)] transition-colors"
              aria-label={t('next')}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
