import type { Localized } from "@/lib/i18n/translations";

export type Review = {
  name: string;
  country: string;
  rating: number;
  comment: Localized<string>;
  avatar: string;
};

export type TourCategory = "bus" | "boat" | "bike" | "walking" | "night" | "day-trip";

export type Tour = {
  slug: string;
  name: string;
  tagline: Localized<string>;
  description: Localized<string>;
  image: string;
  gallery: string[];
  price: number;
  duration: Localized<string>;
  languages: string[];
  rating: number;
  reviewCount: number;
  highlight?: Localized<string>;
  category: TourCategory;
  includes: Localized<string[]>;
  reviews: Review[];
};

export const tourCategories: { value: TourCategory | "all"; label: Localized<string> }[] = [
  { value: "all", label: { en: "All", pt: "Todos" } },
  { value: "bus", label: { en: "Bus", pt: "Ônibus" } },
  { value: "boat", label: { en: "Boat", pt: "Barco" } },
  { value: "bike", label: { en: "Bike", pt: "Bike" } },
  { value: "walking", label: { en: "Walking", pt: "A pé" } },
  { value: "night", label: { en: "Night", pt: "Noturno" } },
  { value: "day-trip", label: { en: "Day Trips", pt: "Excursões" } },
];

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
    tagline: {
      en: "The best way to discover Dublin at your own pace",
      pt: "A melhor forma de conhecer Dublin no seu próprio ritmo",
    },
    description: {
      en: "Hop on and off as many times as you like at any of the stops spread across Dublin's main attractions. Open-top bus with audio guide in 10 languages.",
      pt: "Suba e desça quantas vezes quiser em qualquer uma das paradas espalhadas pelos principais pontos turísticos de Dublin. Ônibus open-top com áudio guia em 10 idiomas.",
    },
    image: CDN_HOHO_BUS,
    gallery: [
      CDN_HOHO_BUS,
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577334928618-7b1907b9b059?q=80&w=1600&auto=format&fit=crop",
    ],
    price: 28,
    duration: { en: "Valid for 24h or 48h", pt: "Validade de 24h ou 48h" },
    languages: ["EN", "PT", "ES", "FR", "DE"],
    rating: 4.4,
    reviewCount: 12453,
    highlight: { en: "Most Popular", pt: "Mais Popular" },
    category: "bus",
    includes: {
      en: [
        "Unlimited access for 24h or 48h",
        "Audio guide in 10 languages",
        "14 stops across Dublin city centre",
        "1 free child per paying adult",
      ],
      pt: [
        "Acesso ilimitado por 24h ou 48h",
        "Áudio guia em 10 idiomas",
        "14 paradas no centro de Dublin",
        "1 criança grátis por adulto pagante",
      ],
    },
    reviews: [
      {
        name: "Marina Costa",
        country: "Brasil",
        rating: 5,
        comment: {
          en: "Perfect for getting to know the city on your first day! The bus stops at all the important sights.",
          pt: "Perfeito para conhecer a cidade no primeiro dia! O ônibus passa em todos os pontos importantes.",
        },
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      },
      {
        name: "James O'Connor",
        country: "Irlanda",
        rating: 4,
        comment: {
          en: "Great way to see the city, audio guide was very informative.",
          pt: "Great way to see the city, audio guide was very informative.",
        },
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      },
      {
        name: "Sophie Laurent",
        country: "França",
        rating: 5,
        comment: {
          en: "Excellent value for money, friendly drivers and great views.",
          pt: "Excellent value for money, friendly drivers and great views.",
        },
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "bike-tour",
    name: "Dublin Bike Tour",
    tagline: {
      en: "Cycle through parks and historic streets with a local guide",
      pt: "Pedale pelos parques e ruas históricas com um guia local",
    },
    description: {
      en: "A guided bike tour through Dublin's main neighbourhoods and parks, with photo stops and stories about the city told by passionate local guides.",
      pt: "Um tour guiado de bicicleta pelos principais bairros e parques de Dublin, com paradas para fotos e histórias sobre a cidade contadas por guias locais apaixonados.",
    },
    image:
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?q=80&w=1600&auto=format&fit=crop",
    ],
    price: 35,
    duration: { en: "2h30", pt: "2h30" },
    languages: ["EN", "PT", "ES"],
    rating: 4.7,
    reviewCount: 1820,
    highlight: { en: "New", pt: "Novo" },
    category: "bike",
    includes: {
      en: [
        "Bike and helmet included",
        "Specialized local guide",
        "Small groups (max. 12 people)",
        "Coffee stop included",
      ],
      pt: [
        "Bicicleta e capacete inclusos",
        "Guia local especializado",
        "Grupos pequenos (máx. 12 pessoas)",
        "Parada para café incluída",
      ],
    },
    reviews: [
      {
        name: "Lucas Pereira",
        country: "Brasil",
        rating: 5,
        comment: {
          en: "Amazing experience, the guide knew every corner of the city!",
          pt: "Experiência incrível, o guia conhecia cada cantinho da cidade!",
        },
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00d5a4ee9baa?q=80&w=200&auto=format&fit=crop",
      },
      {
        name: "Anna Schmidt",
        country: "Alemanha",
        rating: 5,
        comment: {
          en: "Wonderful tour, very safe routes and beautiful parks.",
          pt: "Wonderful tour, very safe routes and beautiful parks.",
        },
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
      },
      {
        name: "Marco Rossi",
        country: "Itália",
        rating: 4,
        comment: {
          en: "Bel modo per scoprire la città, consigliato!",
          pt: "Bel modo per scoprire la città, consigliato!",
        },
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "howth-tour",
    name: "Howth Coastal Tour",
    tagline: {
      en: "Cliffs, seafood and breathtaking views",
      pt: "Falésias, frutos do mar e vistas de tirar o fôlego",
    },
    description: {
      en: "Leave Dublin city centre for Howth, a charming fishing village with spectacular coastal trails and the region's best seafood.",
      pt: "Saia do centro de Dublin em direção a Howth, uma charmosa vila de pescadores com trilhas costeiras espetaculares e os melhores frutos do mar da região.",
    },
    image: CDN_HOWTH_CLIFFS,
    gallery: [
      CDN_HOWTH_CLIFFS,
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=1600&auto=format&fit=crop",
    ],
    price: 32,
    duration: { en: "Half day (4h)", pt: "Meio dia (4h)" },
    languages: ["EN", "PT", "ES", "FR"],
    rating: 4.6,
    reviewCount: 945,
    category: "day-trip",
    includes: {
      en: [
        "Return transport",
        "Guided cliff walk",
        "Free time in Howth village",
        "Audio guide included",
      ],
      pt: [
        "Transporte de ida e volta",
        "Trilha guiada pelas falésias",
        "Tempo livre na vila de Howth",
        "Áudio guia incluído",
      ],
    },
    reviews: [
      {
        name: "Carla Mendes",
        country: "Portugal",
        rating: 5,
        comment: {
          en: "The views are out of this world, totally worth it!",
          pt: "As vistas são de outro mundo, vale muito a pena!",
        },
        avatar:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&auto=format&fit=crop",
      },
      {
        name: "Tom Walsh",
        country: "Irlanda",
        rating: 4,
        comment: {
          en: "Lovely fishing village, great seafood chowder!",
          pt: "Lovely fishing village, great seafood chowder!",
        },
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00d5a4ee9baa?q=80&w=200&auto=format&fit=crop",
      },
      {
        name: "Elena Petrova",
        country: "Rússia",
        rating: 5,
        comment: {
          en: "Beautiful cliffs and friendly guides, highly recommend.",
          pt: "Beautiful cliffs and friendly guides, highly recommend.",
        },
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "evening-tour",
    name: "Dublin by Night",
    tagline: {
      en: "See the city transform under the night lights",
      pt: "Veja a cidade se transformar sob as luzes da noite",
    },
    description: {
      en: "A special night-time ride through Dublin's illuminated landmarks, with stops at viewpoints and stories about the city's mysterious side.",
      pt: "Um passeio noturno especial pelos pontos icônicos de Dublin iluminados, com paradas em mirantes e histórias sobre o lado misterioso da cidade.",
    },
    image: CDN_NIGHT_TOUR,
    gallery: [
      CDN_NIGHT_TOUR,
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1600&auto=format&fit=crop",
    ],
    price: 24,
    duration: { en: "1h30", pt: "1h30" },
    languages: ["EN", "PT", "ES"],
    rating: 4.5,
    reviewCount: 612,
    category: "night",
    includes: {
      en: [
        "Illuminated night route",
        "Audio guide in 5 languages",
        "Photo stops at viewpoints",
        "Boarding from 7pm",
      ],
      pt: [
        "Rota noturna iluminada",
        "Áudio guia em 5 idiomas",
        "Paradas para fotos em mirantes",
        "Embarque a partir das 19h",
      ],
    },
    reviews: [
      {
        name: "Beatriz Souza",
        country: "Brasil",
        rating: 5,
        comment: {
          en: "Dublin at night is magical, I highly recommend this tour!",
          pt: "Dublin de noite é mágica, recomendo demais esse passeio!",
        },
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
      },
      {
        name: "Liam Byrne",
        country: "Irlanda",
        rating: 4,
        comment: {
          en: "Great atmosphere, the city lights up beautifully at night.",
          pt: "Great atmosphere, the city lights up beautifully at night.",
        },
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      },
      {
        name: "Hana Kobayashi",
        country: "Japão",
        rating: 4,
        comment: {
          en: "Relaxing tour with a different perspective of the city.",
          pt: "Relaxing tour with a different perspective of the city.",
        },
        avatar:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "walking-tour",
    name: "Historic Walking Tour",
    tagline: {
      en: "Dublin's history told on foot, street by street",
      pt: "A história de Dublin contada a pé, rua por rua",
    },
    description: {
      en: "Walk through Dublin's historic centre with an expert guide, discovering the stories behind the buildings, streets and characters that shaped the city.",
      pt: "Caminhe pelo centro histórico de Dublin com um guia especializado, descobrindo as histórias por trás dos edifícios, ruas e personagens que moldaram a cidade.",
    },
    image: CDN_CLIFFS_OF_MOHER,
    gallery: [
      CDN_CLIFFS_OF_MOHER,
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577334928618-7b1907b9b059?q=80&w=1600&auto=format&fit=crop",
    ],
    price: 18,
    duration: { en: "2h", pt: "2h" },
    languages: ["EN", "PT", "ES", "FR", "DE"],
    rating: 4.8,
    reviewCount: 2104,
    highlight: { en: "Includes 1 free child", pt: "Inclui 1 criança grátis" },
    category: "walking",
    includes: {
      en: [
        "Certified local guide",
        "Route through the historic centre",
        "Small groups",
        "No transport needed",
      ],
      pt: [
        "Guia local certificado",
        "Roteiro pelo centro histórico",
        "Grupos pequenos",
        "Sem necessidade de transporte",
      ],
    },
    reviews: [
      {
        name: "Renata Alves",
        country: "Brasil",
        rating: 5,
        comment: {
          en: "The guide was great fun and knew lots of historical trivia.",
          pt: "O guia era muito divertido e sabia muitas curiosidades históricas.",
        },
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00d5a4ee9baa?q=80&w=200&auto=format&fit=crop",
      },
      {
        name: "David Smith",
        country: "Reino Unido",
        rating: 5,
        comment: {
          en: "Brilliant walking tour, learned so much about Dublin's history.",
          pt: "Brilliant walking tour, learned so much about Dublin's history.",
        },
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      },
      {
        name: "Isabel Garcia",
        country: "Espanha",
        rating: 5,
        comment: {
          en: "Muy recomendable, el guía fue excelente y muy ameno.",
          pt: "Muy recomendable, el guía fue excelente y muy ameno.",
        },
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "river-cruise",
    name: "Liffey River Cruise",
    tagline: {
      en: "See Dublin from a unique angle, sailing along the River Liffey",
      pt: "Veja Dublin de um ângulo único, navegando pelo Rio Liffey",
    },
    description: {
      en: "A relaxing boat ride along the River Liffey, passing historic bridges and iconic Dublin landmarks, with live narration telling the city's story from the water.",
      pt: "Um relaxante passeio de barco pelo Rio Liffey, passando por pontes históricas e marcos icônicos de Dublin, com narração ao vivo contando a história da cidade vista da água.",
    },
    image: CDN_RIVER_CRUISE,
    gallery: [
      CDN_RIVER_CRUISE,
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=1600&auto=format&fit=crop",
    ],
    price: 22,
    duration: { en: "45min", pt: "45min" },
    languages: ["EN", "PT", "ES", "FR"],
    rating: 4.7,
    reviewCount: 1376,
    highlight: { en: "On-the-water experience", pt: "Experiência na água" },
    category: "boat",
    includes: {
      en: [
        "45-minute cruise along the River Liffey",
        "Live narration in English",
        "Covered, heated boat",
        "1 free child per paying adult",
      ],
      pt: [
        "Cruzeiro de 45min pelo Rio Liffey",
        "Narração ao vivo em inglês",
        "Barco coberto e aquecido",
        "1 criança grátis por adulto pagante",
      ],
    },
    reviews: [
      {
        name: "Patrícia Lima",
        country: "Brasil",
        rating: 5,
        comment: {
          en: "Seeing Dublin from the water is a completely different perspective, I loved it!",
          pt: "Ver Dublin pela água é uma perspectiva totalmente diferente, amei!",
        },
        avatar:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&auto=format&fit=crop",
      },
      {
        name: "Seán Murphy",
        country: "Irlanda",
        rating: 5,
        comment: {
          en: "Lovely relaxing cruise, the guide's stories were brilliant.",
          pt: "Lovely relaxing cruise, the guide's stories were brilliant.",
        },
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00d5a4ee9baa?q=80&w=200&auto=format&fit=crop",
      },
      {
        name: "Yuki Tanaka",
        country: "Japão",
        rating: 4,
        comment: {
          en: "Nice short cruise with great views of the bridges.",
          pt: "Nice short cruise with great views of the bridges.",
        },
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
  description: Localized<string>;
  image: string;
  lat: number;
  lng: number;
  nextDeparture: string;
};

export const busStops: BusStop[] = [
  {
    number: 1,
    name: "O'Connell Street",
    description: {
      en: "Main starting point, in the heart of Dublin city centre.",
      pt: "Ponto de partida principal, no coração do centro de Dublin.",
    },
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800&auto=format&fit=crop",
    lat: 53.3498,
    lng: -6.2603,
    nextDeparture: "09:15",
  },
  {
    number: 2,
    name: "Trinity College",
    description: {
      en: "Ireland's oldest university, founded in 1592.",
      pt: "A mais antiga universidade da Irlanda, fundada em 1592.",
    },
    image:
      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=800&auto=format&fit=crop",
    lat: 53.3438,
    lng: -6.2546,
    nextDeparture: "09:25",
  },
  {
    number: 3,
    name: "Dublin Castle",
    description: {
      en: "Former seat of British power in Ireland, now a museum.",
      pt: "Antigo centro do poder britânico na Irlanda, hoje um museu.",
    },
    image:
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=800&auto=format&fit=crop",
    lat: 53.3429,
    lng: -6.2674,
    nextDeparture: "09:35",
  },
  {
    number: 4,
    name: "Guinness Storehouse",
    description: {
      en: "Ireland's most visited attraction, with 360° views of Dublin.",
      pt: "A atração mais visitada da Irlanda, com vista 360° de Dublin.",
    },
    image:
      "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?q=80&w=800&auto=format&fit=crop",
    lat: 53.3419,
    lng: -6.2867,
    nextDeparture: "09:45",
  },
  {
    number: 5,
    name: "St. Patrick's Cathedral",
    description: {
      en: "Ireland's largest cathedral, founded in 1191.",
      pt: "A maior catedral da Irlanda, fundada em 1191.",
    },
    image:
      "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?q=80&w=800&auto=format&fit=crop",
    lat: 53.3393,
    lng: -6.2715,
    nextDeparture: "09:55",
  },
  {
    number: 6,
    name: "Phoenix Park",
    description: {
      en: "One of the largest walled urban parks in Europe.",
      pt: "Um dos maiores parques urbanos murados da Europa.",
    },
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
    lat: 53.3556,
    lng: -6.3298,
    nextDeparture: "10:05",
  },
];
