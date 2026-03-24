import { getTranslations } from 'next-intl/server';

const stats = [
  { value: '5', suffix: '', key: 'rooms' },
  { value: '1987', suffix: '', key: 'founded' },
  { value: '12', suffix: 'km', key: 'avignon' },
  { value: '4.9', suffix: '★', key: 'rating' },
];

export default async function StatsBar() {
  const t = await getTranslations('stats');

  return (
    <section style={{ background: 'var(--nuit-provence)' }} className="py-16 lg:py-20">
      <div className="container-site">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <div
              key={stat.key}
              className="text-center py-8 lg:py-0"
              style={{
                borderRight: idx < stats.length - 1 ? '1px solid rgba(92,75,138,0.25)' : 'none',
              }}
            >
              {/* Large number */}
              <div
                className="leading-none mb-3 flex items-end justify-center gap-1"
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(3rem, 5vw, 5rem)',
                    color: 'var(--ocre-soleil)',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      color: 'var(--ocre-light)',
                      fontWeight: 300,
                      marginBottom: '0.4rem',
                    }}
                  >
                    {stat.suffix}
                  </span>
                )}
              </div>
              {/* Label */}
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--lavande-pale)',
                  fontWeight: 300,
                }}
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
