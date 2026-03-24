export interface Room {
  id: string;
  oldUuid: string;
  name: string;
  nameFr: string;
  type: 'Suite' | 'Chambre';
  tagline: string;
  taglineEn: string;
  description: string;
  descriptionEn: string;
  capacity: number;
  surface: number | null;
  bed: string;
  bedEn: string;
  aircon?: boolean;
  fireplace?: boolean;
  gardenView?: boolean;
  parkView?: boolean;
  montagnettaView?: boolean;
  underEaves?: boolean;
  slug: string;
  color: string;
  price: string;
}

export const rooms: Room[] = [
  {
    id: 'corona-suite',
    oldUuid: '098db06f-f270-4acc-880d-41d204ccaf7a',
    name: 'Corona Suite',
    nameFr: 'Corona Suite',
    type: 'Suite',
    tagline: 'Suite spacieuse avec lit king-size et vue sur le jardin',
    taglineEn: 'Spacious suite with a king-size bed, garden view',
    description:
      'La Corona Suite offre un cadre royal avec son lit king-size luxueux et sa vue imprenable sur le jardin provençal. Une suite d\'exception pour les amoureux en quête d\'intimité et de raffinement.',
    descriptionEn:
      'The Corona Suite offers a royal setting with its luxurious king-size bed and breathtaking view of the Provençal garden. An exceptional suite for lovers seeking intimacy and refinement.',
    capacity: 2,
    surface: null,
    bed: 'King-size',
    bedEn: 'King-size',
    aircon: true,
    fireplace: false,
    gardenView: true,
    slug: 'corona-suite',
    color: '#8B6914',
    price: 'À partir de 180€',
  },
  {
    id: 'menthe-a-leau-suite',
    oldUuid: 'a7a99002-cac1-41a8-a6dd-acbb4ca6df96',
    name: "Menthe à l'Eau Suite",
    nameFr: "Menthe à l'Eau Suite",
    type: 'Suite',
    tagline: 'Charmante suite sous les combles, lumineuse et apaisante',
    taglineEn: 'A very nice suite under the eaves',
    description:
      "Nichée sous les combles du mas, la Suite Menthe à l'Eau baigne dans une lumière douce et apaisante. Ses 30 m² offrent un espace généreux avec un grand lit double et un lit simple, idéal pour les familles ou les voyageurs souhaitant plus d'espace.",
    descriptionEn:
      "Nestled under the eaves of the mas, the Menthe à l'Eau Suite is bathed in soft, soothing light. Its 30 m² offers generous space with a large double bed and a single bed, ideal for families or travelers seeking more space.",
    capacity: 3,
    surface: 30,
    bed: 'Double 180 + Simple 90',
    bedEn: 'Double 180 + Single 90',
    aircon: true,
    fireplace: false,
    underEaves: true,
    slug: 'menthe-a-leau-suite',
    color: '#5C6B3A',
    price: 'À partir de 190€',
  },
  {
    id: 'spritz-room',
    oldUuid: 'd31ac321-c376-4184-9256-c060e5ef718c',
    name: 'Spritz Room',
    nameFr: 'Spritz Room',
    type: 'Chambre',
    tagline: 'Chambre authentiquement provençale avec cheminée et vue parc',
    taglineEn: 'Authentically Provençal room with fireplace and park view',
    description:
      "La Spritz Room incarne l'art de vivre provençal dans toute sa splendeur. Sa cheminée crépitante crée une atmosphère romantique inoubliable, tandis que la vue sur le parc du mas vous invite à la contemplation.",
    descriptionEn:
      "The Spritz Room embodies the Provençal art of living in all its splendor. Its crackling fireplace creates an unforgettable romantic atmosphere, while the view over the mas park invites contemplation.",
    capacity: 2,
    surface: 20,
    bed: 'Double 160',
    bedEn: 'Double 160',
    aircon: true,
    fireplace: true,
    parkView: true,
    slug: 'spritz-room',
    color: '#C4A882',
    price: 'À partir de 150€',
  },
  {
    id: 'sangria-room',
    oldUuid: '18a3a003-b3e6-483c-913d-b3918b82a78e',
    name: 'Sangria Room',
    nameFr: 'Sangria Room',
    type: 'Chambre',
    tagline: 'Chambre double avec vue sur La Montagnette',
    taglineEn: 'Charming double room with a beautiful view of La Montagnette',
    description:
      "La Sangria Room vous offre un panorama exceptionnel sur La Montagnette. Au réveil, laissez-vous envelopper par les couleurs chaudes de la Provence et les parfums de garrigue qui montent jusqu'à votre fenêtre.",
    descriptionEn:
      "The Sangria Room offers an exceptional panorama of La Montagnette. Upon waking, let yourself be enveloped by the warm colors of Provence and the scents of garrigue rising to your window.",
    capacity: 2,
    surface: null,
    bed: 'Double',
    bedEn: 'Double',
    montagnettaView: true,
    slug: 'sangria-room',
    color: '#8B3A2A',
    price: 'À partir de 130€',
  },
  {
    id: 'mojito-room',
    oldUuid: 'eae3446b-9f58-4fdc-b7bd-0dfbdae9989c',
    name: 'Mojito Room',
    nameFr: 'Mojito Room',
    type: 'Chambre',
    tagline: 'Chambre double fraîche avec vue sur La Montagnette',
    taglineEn: 'Very pleasant double room with a view of the Montagnette',
    description:
      "La Mojito Room, baignée de fraîcheur provençale, offre une vue dégagée sur les collines de La Montagnette. Un havre de sérénité où le temps s'écoule doucement, au rythme des cigales et du mistral.",
    descriptionEn:
      "The Mojito Room, bathed in Provençal freshness, offers an open view of the hills of La Montagnette. A haven of serenity where time flows gently, to the rhythm of cicadas and the mistral.",
    capacity: 2,
    surface: null,
    bed: 'Double',
    bedEn: 'Double',
    montagnettaView: true,
    slug: 'mojito-room',
    color: '#8B80A0',
    price: 'À partir de 130€',
  },
];
