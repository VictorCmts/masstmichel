'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';

const pillars = [
  {
    key: 'nature',
    word: 'Lavande',
    wordColor: 'var(--lavande-douce)',
    svgPath: 'M12 22V8M12 8C12 8 8 12 5 10M12 8C12 8 16 12 19 10M9 15C9 15 5 17 4 14M15 15C15 15 19 17 20 14',
  },
  {
    key: 'gastronomy',
    word: 'Safran',
    wordColor: 'var(--ocre-soleil)',
    svgPath: 'M12 2C12 2 8 6 8 10C8 13 10 14 12 14C14 14 16 13 16 10C16 6 12 2 12 2ZM12 14V22M8 22H16',
  },
  {
    key: 'wellbeing',
    word: 'Sérénité',
    wordColor: 'var(--olivier)',
    svgPath: 'M12 22V6M12 6C12 6 9 9 7 8M12 6C12 6 15 9 17 8M10 14C10 14 7 16 6 14M14 14C14 14 17 16 18 14M10 18C10 18 7 20 6 18M14 18C14 18 17 20 18 18',
  },
];

export default function Sensorial() {
  const t = useTranslations('sensorial');
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section ref={ref} className="relative overflow-hidden py-36 lg:py-44">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0"
        style={{ y, top: '-15%', bottom: '-15%', left: 0, right: 0 }}
      >
        <img
          src="https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1600&q=90"
          alt="Paysage provençal"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(26,20,32,0.82)' }}
      />

      {/* Horizontal gradient dividers */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--ocre-soleil), transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--ocre-soleil), transparent)' }}
      />

      {/* Content */}
      <div className="relative container-site text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="mb-6"
            style={{
              fontFamily: 'var(--font-accent)',
              fontSize: '0.72rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--ocre-soleil)',
            }}
          >
            {t('label')}
          </p>

          {/* Large italic quote */}
          <h2
            className="italic mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-h2)',
              color: 'var(--pierre-chaude)',
              fontWeight: 300,
              lineHeight: 1.15,
            }}
          >
            {t('title')}
          </h2>

          {/* Floating sensory words */}
          <div className="flex justify-center flex-wrap gap-4 mb-16">
            {['Lavande', 'Garrigue', 'Olivier', 'Mistral', 'Cigales'].map((word, i) => (
              <motion.span
                key={word}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '1rem',
                  color: i % 2 === 0 ? 'var(--ocre-soleil)' : i % 3 === 0 ? 'var(--lavande-douce)' : 'var(--olivier-pale)',
                  opacity: 0.8,
                }}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {pillars.map(({ key, svgPath, wordColor }, idx) => (
            <motion.div
              key={key}
              className="flex flex-col items-center gap-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* SVG illustration */}
              <div
                className="w-16 h-16 flex items-center justify-center"
                style={{
                  border: '1px solid rgba(200,134,10,0.35)',
                  borderRadius: '50%',
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={wordColor}
                  strokeWidth="1.2"
                  strokeLinecap="round"
                >
                  <path d={svgPath} />
                </svg>
              </div>

              {/* Title */}
              <h3
                className="italic"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-h3)',
                  color: 'var(--pierre-chaude)',
                  fontWeight: 300,
                }}
              >
                {t(`${key}.title` as 'nature.title' | 'gastronomy.title' | 'wellbeing.title')}
              </h3>

              {/* Description */}
              <p
                className="max-w-xs leading-relaxed"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  color: 'rgba(184,168,136,0.85)',
                  fontWeight: 300,
                }}
              >
                {t(`${key}.description` as 'nature.description' | 'gastronomy.description' | 'wellbeing.description')}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
