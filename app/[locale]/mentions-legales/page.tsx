import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales',
  robots: { index: false },
};

export default async function MentionsLegalesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="pt-32 pb-24 bg-[var(--color-blanc)]">
      <div className="container-site max-w-3xl">
        <Link
          href={`/${locale}`}
          className="text-xs tracking-widest uppercase text-[var(--color-gris-doux)] hover:text-[var(--color-terre)] transition-colors mb-8 block"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          ← Retour à l&rsquo;accueil
        </Link>
        <h1
          className="font-light italic text-[var(--color-charcoal)] mb-12"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h1)' }}
        >
          Mentions Légales
        </h1>
        <div
          className="space-y-8 text-[var(--color-gris-doux)] leading-relaxed"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          <section>
            <h2
              className="text-[var(--color-charcoal)] font-light italic mb-4"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)' }}
            >
              Éditeur du site
            </h2>
            <p>
              Mas Saint Michel<br />
              Boulbon, 13150<br />
              Provence-Alpes-Côte d&rsquo;Azur, France<br />
              Email : contact@masstmichel.fr
            </p>
          </section>
          <section>
            <h2
              className="text-[var(--color-charcoal)] font-light italic mb-4"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)' }}
            >
              Hébergement
            </h2>
            <p>
              Ce site est hébergé par Vercel Inc.,<br />
              340 Pine Street, Suite 1201, San Francisco, CA 94104, USA.
            </p>
          </section>
          <section>
            <h2
              className="text-[var(--color-charcoal)] font-light italic mb-4"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)' }}
            >
              Propriété intellectuelle
            </h2>
            <p>
              L&rsquo;ensemble du contenu de ce site (textes, images, graphismes) est la propriété exclusive du Mas Saint Michel.
              Toute reproduction, même partielle, est soumise à autorisation préalable.
            </p>
          </section>
          <section>
            <h2
              className="text-[var(--color-charcoal)] font-light italic mb-4"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)' }}
            >
              Données personnelles
            </h2>
            <p>
              Conformément à la loi Informatique et Libertés et au RGPD, vous disposez d&rsquo;un droit d&rsquo;accès,
              de modification et de suppression de vos données personnelles. Pour exercer ce droit,
              contactez-nous à contact@masstmichel.fr.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
