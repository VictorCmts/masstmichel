import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const locales = ['fr', 'en'];

export const metadata: Metadata = {
  title: {
    default: 'Mas Saint Michel — Chambres d\'hôtes de luxe en Provence',
    template: '%s | Mas Saint Michel',
  },
  description:
    'Chambre d\'hôtes et gîtes de charme au cœur de la Provence, au pied de La Montagnette entre Avignon et Arles. 5 chambres et suites, piscine, jardin provençal.',
  keywords: [
    'chambre hotes provence',
    'mas provençal',
    'Boulbon',
    'Montagnette',
    'Avignon',
    'luxe',
    'gite charme',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://masstmichel.fr',
    siteName: 'Mas Saint Michel',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=85',
        width: 1200,
        height: 630,
        alt: 'Mas Saint Michel — Provence',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LodgingBusiness',
              name: 'Mas Saint Michel',
              description:
                "Chambres d'hôtes et gîtes de charme au cœur de la Provence, au pied de La Montagnette.",
              url: 'https://masstmichel.fr',
              telephone: '+33400000000',
              email: 'contact@masstmichel.fr',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Boulbon',
                addressRegion: 'Provence-Alpes-Côte d\'Azur',
                addressCountry: 'FR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 43.833,
                longitude: 4.75,
              },
              starRating: {
                '@type': 'Rating',
                ratingValue: '4.9',
                bestRating: '5',
              },
              numberOfRooms: 5,
              amenityFeature: [
                { '@type': 'LocationFeatureSpecification', name: 'Piscine', value: true },
                { '@type': 'LocationFeatureSpecification', name: 'Jardin', value: true },
                { '@type': 'LocationFeatureSpecification', name: 'Petit-déjeuner', value: true },
                { '@type': 'LocationFeatureSpecification', name: 'Climatisation', value: true },
              ],
            }),
          }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          <main>{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
