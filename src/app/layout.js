import './globals.css'

export const metadata = {
  title: 'Mas Saint Michel — Gîtes & Chambres d\'Hôtes en Provence',
  description: 'Au cœur de la Provence, entre Aix-en-Provence et le Luberon, le Mas Saint Michel vous accueille dans un parc arboré de 4 hectares. Chambres d\'hôtes de charme et gîtes avec piscine à Rognes.',
  keywords: ['mas saint michel', 'rognes', 'provence', 'chambres d\'hôtes', 'gîtes', 'aix-en-provence', 'luberon', 'piscine'],
  openGraph: {
    title: 'Mas Saint Michel — Gîtes & Chambres d\'Hôtes en Provence',
    description: 'Un mas provençal authentique au cœur d\'un parc de 4 hectares entre Aix-en-Provence et le Luberon.',
    type: 'website',
    url: 'https://www.mas-saintmichel.com',
    locale: 'fr_FR',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
