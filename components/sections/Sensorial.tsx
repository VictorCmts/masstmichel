'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Leaf, Utensils, Heart } from 'lucide-react';

const pillars = [
  { key: 'nature', Icon: Leaf },
  { key: 'gastronomy', Icon: Utensils },
  { key: 'wellbeing', Icon: Heart },
];

export default function Sensorial() {
  const t = useTranslations('sensorial');
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={ref} className="relative overflow-hidden py-36">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-[-20%] left-0 right-0"
        style={{ y }}
      >
        <img
          src="https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200&q=85"
          alt="Provence landscape"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[var(--color-charcoal)]/75" />

      {/* Content */}
      <div className="relative container-site text-center">
        <span
          className="inline-block text-[var(--color-or)] text-xs tracking-[0.3em] uppercase font-light mb-4"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {t('label')}
        </span>
        <h2
          className="text-white font-light italic mb-16"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-h2)',
          }}
        >
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map(({ key, Icon }) => (
            <motion.div
              key={key}
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-14 h-14 rounded-full border border-[var(--color-or)]/40 flex items-center justify-center mb-2">
                <Icon size={22} className="text-[var(--color-or)]" />
              </div>
              <h3
                className="text-white font-light italic"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)' }}
              >
                {t(`${key}.title` as `nature.title` | `gastronomy.title` | `wellbeing.title`)}
              </h3>
              <p
                className="text-white/60 text-sm leading-relaxed max-w-xs"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {t(`${key}.description` as `nature.description` | `gastronomy.description` | `wellbeing.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
