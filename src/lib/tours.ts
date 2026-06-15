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
  { value: "all", label: { en: "All", pt: "Todos", es: "Todos", fr: "Tous", it: "Tutti", de: "Alle" } },
  { value: "bus", label: { en: "Bus", pt: "Ônibus", es: "Autobús", fr: "Bus", it: "Bus", de: "Bus" } },
  { value: "boat", label: { en: "Boat", pt: "Barco", es: "Barco", fr: "Bateau", it: "Barca", de: "Boot" } },
  { value: "bike", label: { en: "Bike", pt: "Bike", es: "Bici", fr: "Vélo", it: "Bici", de: "Fahrrad" } },
  { value: "walking", label: { en: "Walking", pt: "A pé", es: "A pie", fr: "À pied", it: "A piedi", de: "Zu Fuß" } },
  { value: "night", label: { en: "Night", pt: "Noturno", es: "Nocturno", fr: "Nocturne", it: "Notturno", de: "Nacht" } },
  { value: "day-trip", label: { en: "Day Trips", pt: "Excursões", es: "Excursiones", fr: "Excursions", it: "Escursioni", de: "Tagesausflüge" } },
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
      es: "La mejor forma de descubrir Dublín a tu propio ritmo",
      fr: "La meilleure façon de découvrir Dublin à votre rythme",
      it: "Il modo migliore per scoprire Dublino al tuo ritmo",
      de: "Die beste Art, Dublin in Ihrem eigenen Tempo zu entdecken",
    },
    description: {
      en: "Hop on and off as many times as you like at any of the stops spread across Dublin's main attractions. Open-top bus with audio guide in 10 languages.",
      pt: "Suba e desça quantas vezes quiser em qualquer uma das paradas espalhadas pelos principais pontos turísticos de Dublin. Ônibus open-top com áudio guia em 10 idiomas.",
      es: "Sube y baja todas las veces que quieras en cualquiera de las paradas distribuidas por las principales atracciones de Dublín. Autobús de techo abierto con audioguía en 10 idiomas.",
      fr: "Montez et descendez autant de fois que vous le souhaitez à n'importe quel arrêt situé près des principales attractions de Dublin. Bus à toit ouvert avec audioguide en 10 langues.",
      it: "Sali e scendi tutte le volte che vuoi in una delle fermate vicino alle principali attrazioni di Dublino. Bus scoperto con audioguida in 10 lingue.",
      de: "Steigen Sie so oft Sie möchten an jeder der Haltestellen in der Nähe der wichtigsten Attraktionen Dublins ein und aus. Bus mit offenem Verdeck und Audioguide in 10 Sprachen.",
    },
    image: CDN_HOHO_BUS,
    gallery: [
      CDN_HOHO_BUS,
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577334928618-7b1907b9b059?q=80&w=1600&auto=format&fit=crop",
    ],
    price: 28,
    duration: {
      en: "Valid for 24h or 48h",
      pt: "Validade de 24h ou 48h",
      es: "Válido por 24h o 48h",
      fr: "Valable 24h ou 48h",
      it: "Valido per 24h o 48h",
      de: "Gültig für 24h oder 48h",
    },
    languages: ["EN", "PT", "ES", "FR", "DE"],
    rating: 4.4,
    reviewCount: 12453,
    highlight: {
      en: "Most Popular",
      pt: "Mais Popular",
      es: "Más Popular",
      fr: "Le Plus Populaire",
      it: "Più Popolare",
      de: "Am Beliebtesten",
    },
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
      es: [
        "Acceso ilimitado por 24h o 48h",
        "Audioguía en 10 idiomas",
        "14 paradas en el centro de Dublín",
        "1 niño gratis por adulto de pago",
      ],
      fr: [
        "Accès illimité pendant 24h ou 48h",
        "Audioguide en 10 langues",
        "14 arrêts dans le centre de Dublin",
        "1 enfant gratuit par adulte payant",
      ],
      it: [
        "Accesso illimitato per 24h o 48h",
        "Audioguida in 10 lingue",
        "14 fermate nel centro di Dublino",
        "1 bambino gratis per adulto pagante",
      ],
      de: [
        "Unbegrenzter Zugang für 24h oder 48h",
        "Audioguide in 10 Sprachen",
        "14 Haltestellen im Stadtzentrum von Dublin",
        "1 kostenloses Kind pro zahlendem Erwachsenen",
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
          es: "¡Perfecto para conocer la ciudad el primer día! El autobús pasa por todos los puntos importantes.",
          fr: "Parfait pour découvrir la ville dès le premier jour ! Le bus s'arrête à tous les sites importants.",
          it: "Perfetto per conoscere la città il primo giorno! L'autobus si ferma in tutti i punti importanti.",
          de: "Perfekt, um die Stadt am ersten Tag zu erkunden! Der Bus hält an allen wichtigen Sehenswürdigkeiten.",
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
          es: "Great way to see the city, audio guide was very informative.",
          fr: "Great way to see the city, audio guide was very informative.",
          it: "Great way to see the city, audio guide was very informative.",
          de: "Great way to see the city, audio guide was very informative.",
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
          es: "Excellent value for money, friendly drivers and great views.",
          fr: "Excellent value for money, friendly drivers and great views.",
          it: "Excellent value for money, friendly drivers and great views.",
          de: "Excellent value for money, friendly drivers and great views.",
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
      es: "Pedalea por parques y calles históricas con un guía local",
      fr: "Pédalez à travers les parcs et les rues historiques avec un guide local",
      it: "Pedala tra parchi e strade storiche con una guida locale",
      de: "Radeln Sie mit einem lokalen Guide durch Parks und historische Straßen",
    },
    description: {
      en: "A guided bike tour through Dublin's main neighbourhoods and parks, with photo stops and stories about the city told by passionate local guides.",
      pt: "Um tour guiado de bicicleta pelos principais bairros e parques de Dublin, com paradas para fotos e histórias sobre a cidade contadas por guias locais apaixonados.",
      es: "Un tour guiado en bicicleta por los principales barrios y parques de Dublín, con paradas para fotos e historias sobre la ciudad contadas por guías locales apasionados.",
      fr: "Un tour guidé à vélo à travers les principaux quartiers et parcs de Dublin, avec des arrêts photo et des histoires sur la ville racontées par des guides locaux passionnés.",
      it: "Un tour guidato in bici attraverso i principali quartieri e parchi di Dublino, con soste fotografiche e storie sulla città raccontate da guide locali appassionate.",
      de: "Eine geführte Fahrradtour durch die wichtigsten Viertel und Parks von Dublin, mit Fotostopps und Geschichten über die Stadt, erzählt von leidenschaftlichen lokalen Guides.",
    },
    image:
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?q=80&w=1600&auto=format&fit=crop",
    ],
    price: 35,
    duration: { en: "2h30", pt: "2h30", es: "2h30", fr: "2h30", it: "2h30", de: "2h30" },
    languages: ["EN", "PT", "ES"],
    rating: 4.7,
    reviewCount: 1820,
    highlight: { en: "New", pt: "Novo", es: "Nuevo", fr: "Nouveau", it: "Nuovo", de: "Neu" },
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
      es: [
        "Bicicleta y casco incluidos",
        "Guía local especializado",
        "Grupos pequeños (máx. 12 personas)",
        "Parada para café incluida",
      ],
      fr: [
        "Vélo et casque inclus",
        "Guide local spécialisé",
        "Petits groupes (max. 12 personnes)",
        "Pause café incluse",
      ],
      it: [
        "Bici e casco inclusi",
        "Guida locale specializzata",
        "Piccoli gruppi (max. 12 persone)",
        "Sosta caffè inclusa",
      ],
      de: [
        "Fahrrad und Helm inklusive",
        "Spezialisierter lokaler Guide",
        "Kleine Gruppen (max. 12 Personen)",
        "Kaffeepause inklusive",
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
          es: "¡Experiencia increíble, el guía conocía cada rincón de la ciudad!",
          fr: "Expérience incroyable, le guide connaissait chaque coin de la ville !",
          it: "Esperienza incredibile, la guida conosceva ogni angolo della città!",
          de: "Tolle Erfahrung, der Guide kannte jede Ecke der Stadt!",
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
          es: "Wonderful tour, very safe routes and beautiful parks.",
          fr: "Wonderful tour, very safe routes and beautiful parks.",
          it: "Wonderful tour, very safe routes and beautiful parks.",
          de: "Wonderful tour, very safe routes and beautiful parks.",
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
          es: "Bel modo per scoprire la città, consigliato!",
          fr: "Bel modo per scoprire la città, consigliato!",
          it: "Bel modo per scoprire la città, consigliato!",
          de: "Bel modo per scoprire la città, consigliato!",
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
      es: "Acantilados, mariscos y vistas impresionantes",
      fr: "Falaises, fruits de mer et vues à couper le souffle",
      it: "Scogliere, frutti di mare e vedute straordinarie",
      de: "Klippen, Meeresfrüchte und atemberaubende Aussichten",
    },
    description: {
      en: "Leave Dublin city centre for Howth, a charming fishing village with spectacular coastal trails and the region's best seafood.",
      pt: "Saia do centro de Dublin em direção a Howth, uma charmosa vila de pescadores com trilhas costeiras espetaculares e os melhores frutos do mar da região.",
      es: "Sal del centro de Dublín hacia Howth, un encantador pueblo de pescadores con espectaculares senderos costeros y los mejores mariscos de la región.",
      fr: "Quittez le centre de Dublin pour Howth, un charmant village de pêcheurs aux sentiers côtiers spectaculaires et aux meilleurs fruits de mer de la région.",
      it: "Lascia il centro di Dublino per Howth, un affascinante villaggio di pescatori con sentieri costieri spettacolari e i migliori frutti di mare della regione.",
      de: "Verlassen Sie die Innenstadt von Dublin in Richtung Howth, ein charmantes Fischerdorf mit spektakulären Küstenwegen und den besten Meeresfrüchten der Region.",
    },
    image: CDN_HOWTH_CLIFFS,
    gallery: [
      CDN_HOWTH_CLIFFS,
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=1600&auto=format&fit=crop",
    ],
    price: 32,
    duration: {
      en: "Half day (4h)",
      pt: "Meio dia (4h)",
      es: "Medio día (4h)",
      fr: "Demi-journée (4h)",
      it: "Mezza giornata (4h)",
      de: "Halber Tag (4h)",
    },
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
      es: [
        "Transporte de ida y vuelta",
        "Caminata guiada por los acantilados",
        "Tiempo libre en el pueblo de Howth",
        "Audioguía incluida",
      ],
      fr: [
        "Transport aller-retour",
        "Randonnée guidée le long des falaises",
        "Temps libre dans le village de Howth",
        "Audioguide inclus",
      ],
      it: [
        "Trasporto andata e ritorno",
        "Passeggiata guidata sulle scogliere",
        "Tempo libero nel villaggio di Howth",
        "Audioguida incluso",
      ],
      de: [
        "Hin- und Rücktransport",
        "Geführter Klippenspaziergang",
        "Freizeit im Dorf Howth",
        "Audioguide inklusive",
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
          es: "¡Las vistas son espectaculares, totalmente vale la pena!",
          fr: "Les vues sont incroyables, ça vaut vraiment le coup !",
          it: "Le vedute sono fantastiche, vale assolutamente la pena!",
          de: "Die Aussichten sind unglaublich, definitiv sehenswert!",
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
          es: "Lovely fishing village, great seafood chowder!",
          fr: "Lovely fishing village, great seafood chowder!",
          it: "Lovely fishing village, great seafood chowder!",
          de: "Lovely fishing village, great seafood chowder!",
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
          es: "Beautiful cliffs and friendly guides, highly recommend.",
          fr: "Beautiful cliffs and friendly guides, highly recommend.",
          it: "Beautiful cliffs and friendly guides, highly recommend.",
          de: "Beautiful cliffs and friendly guides, highly recommend.",
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
      es: "Ve la ciudad transformarse bajo las luces nocturnas",
      fr: "Découvrez la ville se transformer sous les lumières de la nuit",
      it: "Guarda la città trasformarsi sotto le luci notturne",
      de: "Erleben Sie, wie sich die Stadt unter den Nachtlichtern verwandelt",
    },
    description: {
      en: "A special night-time ride through Dublin's illuminated landmarks, with stops at viewpoints and stories about the city's mysterious side.",
      pt: "Um passeio noturno especial pelos pontos icônicos de Dublin iluminados, com paradas em mirantes e histórias sobre o lado misterioso da cidade.",
      es: "Un recorrido nocturno especial por los monumentos iluminados de Dublín, con paradas en miradores e historias sobre el lado misterioso de la ciudad.",
      fr: "Une balade nocturne spéciale à travers les monuments illuminés de Dublin, avec des arrêts aux points de vue et des histoires sur le côté mystérieux de la ville.",
      it: "Un giro notturno speciale tra i monumenti illuminati di Dublino, con soste ai punti panoramici e storie sul lato misterioso della città.",
      de: "Eine besondere Nachtfahrt durch die beleuchteten Sehenswürdigkeiten Dublins mit Stopps an Aussichtspunkten und Geschichten über die mysteriöse Seite der Stadt.",
    },
    image: CDN_NIGHT_TOUR,
    gallery: [
      CDN_NIGHT_TOUR,
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1600&auto=format&fit=crop",
    ],
    price: 24,
    duration: { en: "1h30", pt: "1h30", es: "1h30", fr: "1h30", it: "1h30", de: "1h30" },
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
      es: [
        "Ruta nocturna iluminada",
        "Audioguía en 5 idiomas",
        "Paradas para fotos en miradores",
        "Embarque desde las 19h",
      ],
      fr: [
        "Itinéraire nocturne illuminé",
        "Audioguide en 5 langues",
        "Arrêts photo aux points de vue",
        "Embarquement à partir de 19h",
      ],
      it: [
        "Percorso notturno illuminato",
        "Audioguida in 5 lingue",
        "Soste fotografiche ai punti panoramici",
        "Imbarco dalle 19",
      ],
      de: [
        "Beleuchtete Nachtroute",
        "Audioguide in 5 Sprachen",
        "Fotostopps an Aussichtspunkten",
        "Einstieg ab 19 Uhr",
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
          es: "¡Dublín de noche es mágica, recomiendo mucho este tour!",
          fr: "Dublin la nuit est magique, je recommande vivement cette visite !",
          it: "Dublino di notte è magica, consiglio vivamente questo tour!",
          de: "Dublin bei Nacht ist magisch, ich kann diese Tour wärmstens empfehlen!",
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
          es: "Great atmosphere, the city lights up beautifully at night.",
          fr: "Great atmosphere, the city lights up beautifully at night.",
          it: "Great atmosphere, the city lights up beautifully at night.",
          de: "Great atmosphere, the city lights up beautifully at night.",
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
          es: "Relaxing tour with a different perspective of the city.",
          fr: "Relaxing tour with a different perspective of the city.",
          it: "Relaxing tour with a different perspective of the city.",
          de: "Relaxing tour with a different perspective of the city.",
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
      es: "La historia de Dublín contada a pie, calle por calle",
      fr: "L'histoire de Dublin racontée à pied, rue par rue",
      it: "La storia di Dublino raccontata a piedi, strada per strada",
      de: "Dublins Geschichte zu Fuß erzählt, Straße für Straße",
    },
    description: {
      en: "Walk through Dublin's historic centre with an expert guide, discovering the stories behind the buildings, streets and characters that shaped the city.",
      pt: "Caminhe pelo centro histórico de Dublin com um guia especializado, descobrindo as histórias por trás dos edifícios, ruas e personagens que moldaram a cidade.",
      es: "Camina por el centro histórico de Dublín con un guía experto, descubriendo las historias detrás de los edificios, calles y personajes que dieron forma a la ciudad.",
      fr: "Promenez-vous dans le centre historique de Dublin avec un guide expert, en découvrant les histoires derrière les bâtiments, les rues et les personnages qui ont façonné la ville.",
      it: "Passeggia nel centro storico di Dublino con una guida esperta, scoprendo le storie dietro gli edifici, le strade e i personaggi che hanno plasmato la città.",
      de: "Erkunden Sie zu Fuß mit einem erfahrenen Guide das historische Zentrum Dublins und entdecken Sie die Geschichten hinter den Gebäuden, Straßen und Persönlichkeiten, die die Stadt geprägt haben.",
    },
    image: CDN_CLIFFS_OF_MOHER,
    gallery: [
      CDN_CLIFFS_OF_MOHER,
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577334928618-7b1907b9b059?q=80&w=1600&auto=format&fit=crop",
    ],
    price: 18,
    duration: { en: "2h", pt: "2h", es: "2h", fr: "2h", it: "2h", de: "2h" },
    languages: ["EN", "PT", "ES", "FR", "DE"],
    rating: 4.8,
    reviewCount: 2104,
    highlight: {
      en: "Includes 1 free child",
      pt: "Inclui 1 criança grátis",
      es: "Incluye 1 niño gratis",
      fr: "Inclut 1 enfant gratuit",
      it: "Include 1 bambino gratis",
      de: "Inklusive 1 kostenloses Kind",
    },
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
      es: [
        "Guía local certificado",
        "Recorrido por el centro histórico",
        "Grupos pequeños",
        "No requiere transporte",
      ],
      fr: [
        "Guide local certifié",
        "Itinéraire à travers le centre historique",
        "Petits groupes",
        "Aucun transport nécessaire",
      ],
      it: [
        "Guida locale certificata",
        "Percorso nel centro storico",
        "Piccoli gruppi",
        "Non è necessario alcun trasporto",
      ],
      de: [
        "Zertifizierter lokaler Guide",
        "Route durch das historische Zentrum",
        "Kleine Gruppen",
        "Kein Transport erforderlich",
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
          es: "El guía fue muy divertido y sabía muchas curiosidades históricas.",
          fr: "Le guide était très drôle et connaissait beaucoup de curiosités historiques.",
          it: "La guida era molto divertente e conosceva tante curiosità storiche.",
          de: "Der Guide war sehr unterhaltsam und kannte viele historische Fakten.",
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
          es: "Brilliant walking tour, learned so much about Dublin's history.",
          fr: "Brilliant walking tour, learned so much about Dublin's history.",
          it: "Brilliant walking tour, learned so much about Dublin's history.",
          de: "Brilliant walking tour, learned so much about Dublin's history.",
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
          es: "Muy recomendable, el guía fue excelente y muy ameno.",
          fr: "Muy recomendable, el guía fue excelente y muy ameno.",
          it: "Muy recomendable, el guía fue excelente y muy ameno.",
          de: "Muy recomendable, el guía fue excelente y muy ameno.",
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
      es: "Ve Dublín desde un ángulo único, navegando por el río Liffey",
      fr: "Découvrez Dublin sous un angle unique, en naviguant sur la rivière Liffey",
      it: "Guarda Dublino da un'angolazione unica, navigando sul fiume Liffey",
      de: "Erleben Sie Dublin aus einer einzigartigen Perspektive bei einer Fahrt auf dem Liffey",
    },
    description: {
      en: "A relaxing boat ride along the River Liffey, passing historic bridges and iconic Dublin landmarks, with live narration telling the city's story from the water.",
      pt: "Um relaxante passeio de barco pelo Rio Liffey, passando por pontes históricas e marcos icônicos de Dublin, com narração ao vivo contando a história da cidade vista da água.",
      es: "Un relajante paseo en barco por el río Liffey, pasando por puentes históricos y monumentos icónicos de Dublín, con narración en vivo contando la historia de la ciudad desde el agua.",
      fr: "Une balade relaxante en bateau le long de la rivière Liffey, passant par des ponts historiques et des monuments emblématiques de Dublin, avec une narration en direct racontant l'histoire de la ville depuis l'eau.",
      it: "Una rilassante gita in barca lungo il fiume Liffey, passando per ponti storici e monumenti iconici di Dublino, con narrazione dal vivo che racconta la storia della città vista dall'acqua.",
      de: "Eine entspannte Bootsfahrt entlang des Flusses Liffey, vorbei an historischen Brücken und ikonischen Sehenswürdigkeiten Dublins, mit Live-Erzählung der Stadtgeschichte vom Wasser aus.",
    },
    image: CDN_RIVER_CRUISE,
    gallery: [
      CDN_RIVER_CRUISE,
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=1600&auto=format&fit=crop",
    ],
    price: 22,
    duration: { en: "45min", pt: "45min", es: "45min", fr: "45min", it: "45min", de: "45min" },
    languages: ["EN", "PT", "ES", "FR"],
    rating: 4.7,
    reviewCount: 1376,
    highlight: {
      en: "On-the-water experience",
      pt: "Experiência na água",
      es: "Experiencia en el agua",
      fr: "Expérience sur l'eau",
      it: "Esperienza sull'acqua",
      de: "Erlebnis auf dem Wasser",
    },
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
      es: [
        "Crucero de 45 minutos por el río Liffey",
        "Narración en vivo en inglés",
        "Barco cubierto y climatizado",
        "1 niño gratis por adulto de pago",
      ],
      fr: [
        "Croisière de 45 minutes sur la rivière Liffey",
        "Narration en direct en anglais",
        "Bateau couvert et chauffé",
        "1 enfant gratuit par adulte payant",
      ],
      it: [
        "Crociera di 45 minuti sul fiume Liffey",
        "Narrazione dal vivo in inglese",
        "Barca coperta e riscaldata",
        "1 bambino gratis per adulto pagante",
      ],
      de: [
        "45-minütige Kreuzfahrt entlang des Liffey",
        "Live-Erzählung auf Englisch",
        "Überdachtes, beheiztes Boot",
        "1 kostenloses Kind pro zahlendem Erwachsenen",
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
          es: "¡Ver Dublín desde el agua es una perspectiva completamente diferente, me encantó!",
          fr: "Voir Dublin depuis l'eau offre une perspective totalement différente, j'ai adoré !",
          it: "Vedere Dublino dall'acqua offre una prospettiva completamente diversa, mi è piaciuto molto!",
          de: "Dublin vom Wasser aus zu sehen ist eine völlig andere Perspektive, ich habe es geliebt!",
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
          es: "Lovely relaxing cruise, the guide's stories were brilliant.",
          fr: "Lovely relaxing cruise, the guide's stories were brilliant.",
          it: "Lovely relaxing cruise, the guide's stories were brilliant.",
          de: "Lovely relaxing cruise, the guide's stories were brilliant.",
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
          es: "Nice short cruise with great views of the bridges.",
          fr: "Nice short cruise with great views of the bridges.",
          it: "Nice short cruise with great views of the bridges.",
          de: "Nice short cruise with great views of the bridges.",
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
      es: "Punto de partida principal, en el corazón del centro de Dublín.",
      fr: "Point de départ principal, au cœur du centre-ville de Dublin.",
      it: "Punto di partenza principale, nel cuore del centro di Dublino.",
      de: "Haupt-Ausgangspunkt im Herzen der Innenstadt von Dublin.",
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
      es: "La universidad más antigua de Irlanda, fundada en 1592.",
      fr: "La plus ancienne université d'Irlande, fondée en 1592.",
      it: "L'università più antica dell'Irlanda, fondata nel 1592.",
      de: "Irlands älteste Universität, gegründet 1592.",
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
      es: "Antigua sede del poder británico en Irlanda, ahora un museo.",
      fr: "Ancien siège du pouvoir britannique en Irlande, aujourd'hui un musée.",
      it: "Antica sede del potere britannico in Irlanda, oggi un museo.",
      de: "Ehemaliger Sitz der britischen Macht in Irland, heute ein Museum.",
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
      es: "La atracción más visitada de Irlanda, con vistas de 360° de Dublín.",
      fr: "L'attraction la plus visitée d'Irlande, avec une vue à 360° sur Dublin.",
      it: "L'attrazione più visitata dell'Irlanda, con vista a 360° su Dublino.",
      de: "Irlands meistbesuchte Attraktion mit einem 360°-Blick auf Dublin.",
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
      es: "La catedral más grande de Irlanda, fundada en 1191.",
      fr: "La plus grande cathédrale d'Irlande, fondée en 1191.",
      it: "La cattedrale più grande dell'Irlanda, fondata nel 1191.",
      de: "Irlands größte Kathedrale, gegründet im Jahr 1191.",
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
      es: "Uno de los parques urbanos amurallados más grandes de Europa.",
      fr: "L'un des plus grands parcs urbains clos d'Europe.",
      it: "Uno dei più grandi parchi urbani recintati d'Europa.",
      de: "Einer der größten ummauerten Stadtparks Europas.",
    },
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
    lat: 53.3556,
    lng: -6.3298,
    nextDeparture: "10:05",
  },
];
