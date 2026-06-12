export type Review = {
  name: string;
  country: string;
  rating: number;
  comment: string;
  avatar: string;
};

export type Tour = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  gallery: string[];
  price: number;
  duration: string;
  languages: string[];
  rating: number;
  reviewCount: number;
  highlight?: string;
  includes: string[];
  reviews: Review[];
};

const CDN_HOHO_BUS =
  "https://d2i7eq829tbbje.cloudfront.net/webp/Dublin-HOHO-main-pic1_P_60_70975efe-3076-4f53-a4de-8dd57650bcdc";
const CDN_RIVER_CRUISE =
  "https://d2i7eq829tbbje.cloudfront.net/webp/tmp_1600072867800_P_3216_cc4055f5-609d-47b7-9db8-7672cf18e432";
const CDN_NIGHT_TOUR =
  "https://d2i7eq829tbbje.cloudfront.net/webp/Dublin%20Night%20Tour%20Card_P_4791_972dc684-9687-4e47-b7f8-31f4618bab76";
const CDN_HOWTH_CLIFFS =
  "https://d2i7eq829tbbje.cloudfront.net/webp/Howth%20Cliffs%20Card_P_4792_c6af2722-e228-4f6b-8353-67f5b6e74e8f";
const CDN_CLIFFS_OF_MOHER =
  "https://d2i7eq829tbbje.cloudfront.net/webp/cliffs0_P_4496_5c2a2771-696a-42b1-b79d-a34b0fb5c89f";

export const tours: Tour[] = [
  {
    slug: "bus-tour",
    name: "Hop-On Hop-Off Bus Tour",
    tagline: "A melhor forma de conhecer Dublin no seu próprio ritmo",
    description:
      "Suba e desça quantas vezes quiser em qualquer uma das paradas espalhadas pelos principais pontos turísticos de Dublin. Ônibus open-top com áudio guia em 10 idiomas.",
    image: CDN_HOHO_BUS,
    gallery: [
      CDN_HOHO_BUS,
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577334928618-7b1907b9b059?q=80&w=1600&auto=format&fit=crop",
    ],
    price: 28,
    duration: "Validade de 24h ou 48h",
    languages: ["EN", "PT", "ES", "FR", "DE"],
    rating: 4.4,
    reviewCount: 12453,
    highlight: "Mais Popular",
    includes: [
      "Acesso ilimitado por 24h ou 48h",
      "Áudio guia em 10 idiomas",
      "14 paradas no centro de Dublin",
      "1 criança grátis por adulto pagante",
    ],
    reviews: [
      {
        name: "Marina Costa",
        country: "Brasil",
        rating: 5,
        comment:
          "Perfeito para conhecer a cidade no primeiro dia! O ônibus passa em todos os pontos importantes.",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      },
      {
        name: "James O'Connor",
        country: "Irlanda",
        rating: 4,
        comment: "Great way to see the city, audio guide was very informative.",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      },
      {
        name: "Sophie Laurent",
        country: "França",
        rating: 5,
        comment: "Excellent value for money, friendly drivers and great views.",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "bike-tour",
    name: "Dublin Bike Tour",
    tagline: "Pedale pelos parques e ruas históricas com um guia local",
    description:
      "Um tour guiado de bicicleta pelos principais bairros e parques de Dublin, com paradas para fotos e histórias sobre a cidade contadas por guias locais apaixonados.",
    image: CDN_RIVER_CRUISE,
    gallery: [
      CDN_RIVER_CRUISE,
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?q=80&w=1600&auto=format&fit=crop",
    ],
    price: 35,
    duration: "2h30",
    languages: ["EN", "PT", "ES"],
    rating: 4.7,
    reviewCount: 1820,
    highlight: "Novo",
    includes: [
      "Bicicleta e capacete inclusos",
      "Guia local especializado",
      "Grupos pequenos (máx. 12 pessoas)",
      "Parada para café incluída",
    ],
    reviews: [
      {
        name: "Lucas Pereira",
        country: "Brasil",
        rating: 5,
        comment: "Experiência incrível, o guia conhecia cada cantinho da cidade!",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00d5a4ee9baa?q=80&w=200&auto=format&fit=crop",
      },
      {
        name: "Anna Schmidt",
        country: "Alemanha",
        rating: 5,
        comment: "Wonderful tour, very safe routes and beautiful parks.",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
      },
      {
        name: "Marco Rossi",
        country: "Itália",
        rating: 4,
        comment: "Bel modo per scoprire la città, consigliato!",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "howth-tour",
    name: "Howth Coastal Tour",
    tagline: "Falésias, frutos do mar e vistas de tirar o fôlego",
    description:
      "Saia do centro de Dublin em direção a Howth, uma charmosa vila de pescadores com trilhas costeiras espetaculares e os melhores frutos do mar da região.",
    image: CDN_HOWTH_CLIFFS,
    gallery: [
      CDN_HOWTH_CLIFFS,
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=1600&auto=format&fit=crop",
    ],
    price: 32,
    duration: "Meio dia (4h)",
    languages: ["EN", "PT", "ES", "FR"],
    rating: 4.6,
    reviewCount: 945,
    includes: [
      "Transporte de ida e volta",
      "Trilha guiada pelas falésias",
      "Tempo livre na vila de Howth",
      "Áudio guia incluído",
    ],
    reviews: [
      {
        name: "Carla Mendes",
        country: "Portugal",
        rating: 5,
        comment: "As vistas são de outro mundo, vale muito a pena!",
        avatar:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&auto=format&fit=crop",
      },
      {
        name: "Tom Walsh",
        country: "Irlanda",
        rating: 4,
        comment: "Lovely fishing village, great seafood chowder!",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00d5a4ee9baa?q=80&w=200&auto=format&fit=crop",
      },
      {
        name: "Elena Petrova",
        country: "Rússia",
        rating: 5,
        comment: "Beautiful cliffs and friendly guides, highly recommend.",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "evening-tour",
    name: "Dublin by Night",
    tagline: "Veja a cidade se transformar sob as luzes da noite",
    description:
      "Um passeio noturno especial pelos pontos icônicos de Dublin iluminados, com paradas em mirantes e histórias sobre o lado misterioso da cidade.",
    image: CDN_NIGHT_TOUR,
    gallery: [
      CDN_NIGHT_TOUR,
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1600&auto=format&fit=crop",
    ],
    price: 24,
    duration: "1h30",
    languages: ["EN", "PT", "ES"],
    rating: 4.5,
    reviewCount: 612,
    includes: [
      "Rota noturna iluminada",
      "Áudio guia em 5 idiomas",
      "Paradas para fotos em mirantes",
      "Embarque a partir das 19h",
    ],
    reviews: [
      {
        name: "Beatriz Souza",
        country: "Brasil",
        rating: 5,
        comment: "Dublin de noite é mágica, recomendo demais esse passeio!",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
      },
      {
        name: "Liam Byrne",
        country: "Irlanda",
        rating: 4,
        comment: "Great atmosphere, the city lights up beautifully at night.",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      },
      {
        name: "Hana Kobayashi",
        country: "Japão",
        rating: 4,
        comment: "Relaxing tour with a different perspective of the city.",
        avatar:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "walking-tour",
    name: "Historic Walking Tour",
    tagline: "A história de Dublin contada a pé, rua por rua",
    description:
      "Caminhe pelo centro histórico de Dublin com um guia especializado, descobrindo as histórias por trás dos edifícios, ruas e personagens que moldaram a cidade.",
    image: CDN_CLIFFS_OF_MOHER,
    gallery: [
      CDN_CLIFFS_OF_MOHER,
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577334928618-7b1907b9b059?q=80&w=1600&auto=format&fit=crop",
    ],
    price: 18,
    duration: "2h",
    languages: ["EN", "PT", "ES", "FR", "DE"],
    rating: 4.8,
    reviewCount: 2104,
    highlight: "Inclui 1 criança grátis",
    includes: [
      "Guia local certificado",
      "Roteiro pelo centro histórico",
      "Grupos pequenos",
      "Sem necessidade de transporte",
    ],
    reviews: [
      {
        name: "Renata Alves",
        country: "Brasil",
        rating: 5,
        comment: "O guia era muito divertido e sabia muitas curiosidades históricas.",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00d5a4ee9baa?q=80&w=200&auto=format&fit=crop",
      },
      {
        name: "David Smith",
        country: "Reino Unido",
        rating: 5,
        comment: "Brilliant walking tour, learned so much about Dublin's history.",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      },
      {
        name: "Isabel Garcia",
        country: "Espanha",
        rating: 5,
        comment: "Muy recomendable, el guía fue excelente y muy ameno.",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
      },
    ],
  },
];

export function getTourBySlug(slug: string) {
  return tours.find((tour) => tour.slug === slug);
}

export type BusStop = {
  number: number;
  name: string;
  description: string;
  image: string;
  lat: number;
  lng: number;
  nextDeparture: string;
};

export const busStops: BusStop[] = [
  {
    number: 1,
    name: "O'Connell Street",
    description: "Ponto de partida principal, no coração do centro de Dublin.",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800&auto=format&fit=crop",
    lat: 53.3498,
    lng: -6.2603,
    nextDeparture: "09:15",
  },
  {
    number: 2,
    name: "Trinity College",
    description: "A mais antiga universidade da Irlanda, fundada em 1592.",
    image:
      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=800&auto=format&fit=crop",
    lat: 53.3438,
    lng: -6.2546,
    nextDeparture: "09:25",
  },
  {
    number: 3,
    name: "Dublin Castle",
    description: "Antigo centro do poder britânico na Irlanda, hoje um museu.",
    image:
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=800&auto=format&fit=crop",
    lat: 53.3429,
    lng: -6.2674,
    nextDeparture: "09:35",
  },
  {
    number: 4,
    name: "Guinness Storehouse",
    description: "A atração mais visitada da Irlanda, com vista 360° de Dublin.",
    image:
      "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?q=80&w=800&auto=format&fit=crop",
    lat: 53.3419,
    lng: -6.2867,
    nextDeparture: "09:45",
  },
  {
    number: 5,
    name: "St. Patrick's Cathedral",
    description: "A maior catedral da Irlanda, fundada em 1191.",
    image:
      "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?q=80&w=800&auto=format&fit=crop",
    lat: 53.3393,
    lng: -6.2715,
    nextDeparture: "09:55",
  },
  {
    number: 6,
    name: "Phoenix Park",
    description: "Um dos maiores parques urbanos murados da Europa.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
    lat: 53.3556,
    lng: -6.3298,
    nextDeparture: "10:05",
  },
];
