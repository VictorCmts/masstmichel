export interface Testimonial {
  id: string;
  name: string;
  origin: string;
  date: string;
  rating: number;
  quote: string;
  quoteEn: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Marie & Pierre D.',
    origin: 'Lyon, France',
    date: 'Juillet 2025',
    rating: 5,
    quote:
      "Un séjour absolument magique. La Corona Suite est somptueuse, le jardin provençal nous a conquis dès notre arrivée. Les hôtes sont d'une gentillesse rare et les conseils sur la région sont précieux. Nous reviendrons sans hésitation.",
    quoteEn:
      'An absolutely magical stay. The Corona Suite is sumptuous, the Provençal garden won us over upon arrival. The hosts are exceptionally kind and their advice about the region is invaluable. We will return without hesitation.',
  },
  {
    id: '2',
    name: 'Sophie L.',
    origin: 'Paris, France',
    date: 'Août 2025',
    rating: 5,
    quote:
      "Le Mas Saint Michel, c'est la Provence dans toute sa splendeur. La Menthe à l'Eau Suite est lumineuse et le petit-déjeuner maison est un vrai régal. Un endroit hors du temps, parfait pour se ressourcer.",
    quoteEn:
      "Mas Saint Michel is Provence in all its splendor. The Menthe à l'Eau Suite is bright and the homemade breakfast is a real treat. A timeless place, perfect for recharging.",
  },
  {
    id: '3',
    name: 'James & Emily W.',
    origin: 'London, UK',
    date: 'June 2025',
    rating: 5,
    quote:
      'We stayed in the Spritz Room and were utterly charmed. The fireplace, the park view, the impeccable service — everything was perfect. The hosts gave us wonderful tips for exploring the Montagnette. A true gem in Provence.',
    quoteEn:
      'We stayed in the Spritz Room and were utterly charmed. The fireplace, the park view, the impeccable service — everything was perfect. The hosts gave us wonderful tips for exploring the Montagnette. A true gem in Provence.',
  },
  {
    id: '4',
    name: 'Laurent M.',
    origin: 'Bordeaux, France',
    date: 'Septembre 2025',
    rating: 5,
    quote:
      "La Sangria Room avec vue sur La Montagnette est un vrai coup de cœur. Réveillé par le chant des cigales, le panorama est époustouflant. Une adresse confidentielle à garder précieusement. Merci pour ce moment hors du commun.",
    quoteEn:
      "The Sangria Room with views of La Montagnette is a true gem. Woken by the song of cicadas, the panorama is breathtaking. A confidential address to cherish. Thank you for this extraordinary moment.",
  },
  {
    id: '5',
    name: 'Ingrid & Klaus B.',
    origin: 'Munich, Germany',
    date: 'Mai 2025',
    rating: 5,
    quote:
      'Wunderschönes Mas mit herzlichen Gastgebern. Die Mojito Room war perfekt für unseren Urlaub. Das Frühstück war köstlich und die Empfehlungen für die Region haben unsere Reise bereichert. Wir kommen gerne wieder.',
    quoteEn:
      'Beautiful mas with warm hosts. The Mojito Room was perfect for our holiday. Breakfast was delicious and the regional recommendations enriched our trip. We look forward to returning.',
  },
  {
    id: '6',
    name: 'Camille & Antoine R.',
    origin: 'Montpellier, France',
    date: 'Octobre 2025',
    rating: 5,
    quote:
      "Notre week-end romantique au Mas Saint Michel restera gravé dans nos mémoires. Chaque détail témoigne d'un soin exceptionnel : la décoration, les draps, les fleurs fraîches... Un lieu qui mérite amplement ses 5 étoiles.",
    quoteEn:
      'Our romantic weekend at Mas Saint Michel will remain engraved in our memories. Every detail reflects exceptional care: the decoration, the sheets, the fresh flowers... A place that fully deserves its 5 stars.',
  },
];
