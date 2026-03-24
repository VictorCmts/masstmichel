export interface Experience {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  icon: string;
  tags: string[];
}

export const experiences: Experience[] = [
  {
    id: 'randonnees-montagnette',
    title: 'Randonnées Montagnette',
    titleEn: 'Montagnette Hiking',
    description:
      "La Montagnette s'étend à quelques pas du mas, offrant des sentiers ombragés entre garrigue et oliviers centenaires. Nous vous fournissons des cartes et conseils personnalisés pour explorer ces collines sauvages au rythme des cigales.",
    descriptionEn:
      "La Montagnette stretches just steps from the mas, offering shaded trails between scrubland and century-old olive trees. We provide maps and personalized advice to explore these wild hills to the rhythm of cicadas.",
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=85',
    icon: 'Mountain',
    tags: ['Nature', 'Randonnée', 'Panoramas'],
  },
  {
    id: 'gastronomie-marches',
    title: 'Gastronomie & Marchés',
    titleEn: 'Gastronomy & Markets',
    description:
      "Plongez dans les saveurs authentiques de la Provence : marchés colorés d'Arles et Saint-Rémy, dégustation d'huiles d'olive locales, restaurants étoilés d'Avignon. Notre petit-déjeuner maison met à l'honneur les producteurs locaux.",
    descriptionEn:
      "Dive into the authentic flavors of Provence: colorful markets in Arles and Saint-Rémy, local olive oil tastings, Michelin-starred restaurants in Avignon. Our homemade breakfast showcases local producers.",
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85',
    icon: 'Utensils',
    tags: ['Gastronomie', 'Marchés', 'Terroir'],
  },
  {
    id: 'bien-etre-detente',
    title: 'Bien-être & Détente',
    titleEn: 'Wellness & Relaxation',
    description:
      "Le Mas Saint Michel est avant tout un lieu de ressourcement. Sa piscine au calme, ses terrasses ombragées et ses jardins fleuris vous invitent à la contemplation et au repos. Un art de vivre provençal, sans compromis.",
    descriptionEn:
      "Mas Saint Michel is above all a place of renewal. Its peaceful pool, shaded terraces and flowering gardens invite contemplation and rest. A Provençal art of living, without compromise.",
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=85',
    icon: 'Heart',
    tags: ['Piscine', 'Détente', 'Jardins'],
  },
  {
    id: 'privatisation-evenements',
    title: 'Privatisation & Événements',
    titleEn: 'Private Events',
    description:
      "Le Mas Saint Michel se prête magnifiquement à la privatisation pour vos événements les plus précieux : mariages en Provence, séminaires d'entreprise, anniversaires ou célébrations familiales. Contactez-nous pour créer ensemble votre événement sur mesure.",
    descriptionEn:
      "Mas Saint Michel lends itself beautifully to privatization for your most precious events: Provence weddings, corporate seminars, birthdays or family celebrations. Contact us to create your tailor-made event together.",
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=85',
    icon: 'Star',
    tags: ['Mariage', 'Séminaire', 'Événements'],
  },
];
