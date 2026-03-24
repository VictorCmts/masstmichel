import { getTranslations } from 'next-intl/server';

const stats = [
  { value: '5', key: 'rooms' },
  { value: '1987', key: 'founded' },
  { value: '12', key: 'avignon' },
  { value: '4.9', key: 'rating' },
];

export default async function StatsBar() {
  const t = await getTranslations('stats');

  return (
    <section className="bg-[var(--color-terre)] py-16">
      <div className="container-site">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.key} className="text-center">
              <div
                className="text-white font-light leading-none mb-2"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-white/60 text-xs tracking-[0.15em] uppercase font-light"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {t(stat.key as 'rooms' | 'founded' | 'avignon' | 'rating')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
