export type Locale = "en" | "pt";

export const locales: Locale[] = ["en", "pt"];

export const localeNames: Record<Locale, string> = {
  en: "English",
  pt: "Português",
};

export const defaultLocale: Locale = "en";

export const translations = {
  pt: {
    topBar: {
      seal1: "Líder mundial em tours Hop-On Hop-Off",
      seal2: "Cancelamento gratuito",
      seal3: "Vouchers flexíveis: válidos por 12 meses",
    },
    nav: {
      tours: "Tours",
      busStops: "Paradas",
      tickets: "Bilhetes",
      about: "Sobre",
      blog: "Blog",
      faq: "FAQ",
      contact: "Contato",
      bookNow: "Reservar Agora",
    },
    hero: {
      ratingSuffix: "· +12.000 avaliações verificadas",
      title: "Explore Dublin no seu próprio ritmo",
      subtitle:
        "Tours hop-on hop-off, passeios de bike, caminhadas históricas e muito mais. Suba e desça quantas vezes quiser nas principais atrações da cidade.",
      from: "A partir de",
      perPerson: "por pessoa",
      bookNow: "Reservar Agora",
      seeTours: "Ver Tours",
    },
    home: {
      explore: {
        eyebrow: "Dublin à sua maneira",
        title: "Como você quer explorar a cidade?",
        busTitle: "Tour de Ônibus",
        busDesc: "Suba e desça quando quiser nas 14 paradas",
        bikeTitle: "Tour de Bicicleta",
        bikeDesc: "Descubra os cantos escondidos pedalando",
        boatTitle: "Cruzeiro no Rio",
        boatDesc: "Veja Dublin de um ângulo único pelo Liffey",
        from: "A partir de",
      },
      interest: {
        eyebrow: "Encontre sua experiência",
        title: "Explore Dublin por interesse",
        history: "História & Cultura",
        historyDesc: "Castelos, museus e lendas irlandesas",
        nature: "Natureza & Ar Livre",
        natureDesc: "Falésias, parques e costa selvagem",
        food: "Gastronomia & Pub",
        foodDesc: "Pubs, whiskey e culinária local",
        night: "Dublin Noturno",
        nightDesc: "A cidade à luz das lanternas históricas",
      },
      stats: {
        eyebrow: "Números que falam por si",
        title: "Criando experiências inesquecíveis em Dublin",
        satisfied: "Clientes satisfeitos",
        recommend: "Recomendam o tour",
        days: "Dias de operação por ano",
        stops: "Paradas pelo centro de Dublin",
      },
      newsletter: {
        badge: "Ofertas exclusivas para assinantes",
        title: "Receba ofertas de Dublin direto no seu e-mail",
        subtitle:
          "Descontos exclusivos, novos tours e dicas de viagem para aproveitar Dublin ao máximo.",
        placeholder: "Seu melhor e-mail",
        button: "Quero receber",
        disclaimer: "Sem spam. Cancelamento a qualquer momento. 🔒",
      },
    },
    toursSection: {
      title: "Nossos Tours",
      subtitle:
        "Escolha a experiência ideal para conhecer Dublin, com preços claros e tudo incluído.",
      reviews: "avaliações",
      cta: "Ver detalhes e reservar",
      from: "A partir de",
    },
    categories: {
      all: "Todos",
      bus: "Ônibus",
      boat: "Barco",
      bike: "Bike",
      walking: "A pé",
      night: "Noturno",
      dayTrip: "Excursões",
    },
    tourDetail: {
      breadcrumbHome: "Home",
      breadcrumbTours: "Tours",
      reviews: "avaliações",
      about: "Sobre este tour",
      included: "O que está incluído",
      reviewsTitle: "Avaliações",
      related: "Outros tours recomendados",
      from: "A partir de",
      plansTitle: "Planos e preços",
      mostChosen: "Mais escolhido",
      perPerson: "/pessoa",
      booking: {
        from: "A partir de",
        perAdult: "por adulto",
        date: "Data do passeio",
        adults: "Adultos",
        children: "Crianças",
        freeUnder13: "Grátis até 13 anos",
        total: "Total",
        bookNow: "Reservar Agora",
        freeCancellation: "Cancelamento gratuito até 24h antes do passeio",
        decreaseAdults: "Diminuir adultos",
        increaseAdults: "Aumentar adultos",
        decreaseChildren: "Diminuir crianças",
        increaseChildren: "Aumentar crianças",
      },
    },
    routeMap: {
      title: "Mapa das Paradas",
      subtitle:
        "Clique em uma parada no mapa ou na lista para ver detalhes e o próximo horário.",
      nextDeparture: "Próximo horário",
    },
    social: {
      title: "O que nossos visitantes dizem",
      subtitle: "Avaliações reais de quem já explorou Dublin com a gente.",
      tripadvisor: "4.4/5 no Tripadvisor",
      google: "4.5/5 no Google",
    },
    packagesSection: {
      title: "Escolha a duração ideal",
      subtitle:
        "Compare o que está incluído em cada pacote e aproveite mais quanto mais tempo você fica.",
      reserve: "Reservar",
    },
    bookingPage: {
      title: "Reserve seu Tour",
      subtitle:
        "Escolha um dos nossos tours abaixo para ver os detalhes, planos e preços antes de finalizar a sua reserva.",
      from: "A partir de",
      seeTour: "Ver tour",
    },
    ticketsPage: {
      title: "Bilhetes & Preços",
      subtitle: "Compare nossos planos e escolha a melhor opção para a sua visita a Dublin.",
      mostChosen: "Mais escolhido",
      perPerson: "/pessoa",
      choose: "Escolher",
    },
    promo: {
      title: "Oferta por tempo limitado! Termina em:",
      days: "dias",
      hours: "horas",
      minutes: "min",
      seconds: "seg",
    },
    footer: {
      newsletterTitle: "Receba ofertas exclusivas",
      newsletterText: "Dicas de Dublin e promoções dos nossos tours direto no seu e-mail.",
      newsletterSuccess: "Inscrição confirmada! Em breve você receberá nossas novidades.",
      about:
        "Explore Dublin no seu próprio ritmo com nossos tours hop-on hop-off, passeios de bike, caminhadas históricas e muito mais.",
      toursTitle: "Tours",
      infoTitle: "Informações",
      contactTitle: "Contato",
      rights: "Todos os direitos reservados.",
      demo: "Demo site — Redesign & Modernização",
    },
    chat: {
      title: "Fale com a gente",
      online: "Online agora",
    },
    mobileBookBar: {
      cta: "Reservar agora — a partir de",
    },
    currency: {
      label: "Moeda",
    },
  },
  en: {
    topBar: {
      seal1: "World leader in Hop-On Hop-Off tours",
      seal2: "Free cancellation",
      seal3: "Flexible vouchers: valid for 12 months",
    },
    nav: {
      tours: "Tours",
      busStops: "Bus Stops",
      tickets: "Tickets",
      about: "About",
      blog: "Blog",
      faq: "FAQ",
      contact: "Contact",
      bookNow: "Book Now",
    },
    hero: {
      ratingSuffix: "· +12,000 verified reviews",
      title: "Explore Dublin at your own pace",
      subtitle:
        "Hop-on hop-off tours, bike rides, historic walking tours and much more. Hop on and off as many times as you like at the city's main attractions.",
      from: "From",
      perPerson: "per person",
      bookNow: "Book Now",
      seeTours: "See Tours",
    },
    home: {
      explore: {
        eyebrow: "Dublin your way",
        title: "How do you want to explore the city?",
        busTitle: "Bus Tour",
        busDesc: "Hop on and off whenever you like at 14 stops",
        bikeTitle: "Bike Tour",
        bikeDesc: "Discover hidden corners by bike",
        boatTitle: "River Cruise",
        boatDesc: "See Dublin from a unique angle along the Liffey",
        from: "From",
      },
      interest: {
        eyebrow: "Find your experience",
        title: "Explore Dublin by interest",
        history: "History & Culture",
        historyDesc: "Castles, museums and Irish legends",
        nature: "Nature & Outdoors",
        natureDesc: "Cliffs, parks and the wild coast",
        food: "Food & Pubs",
        foodDesc: "Pubs, whiskey and local cuisine",
        night: "Dublin by Night",
        nightDesc: "The city lit up by historic lanterns",
      },
      stats: {
        eyebrow: "Numbers that speak for themselves",
        title: "Creating unforgettable experiences in Dublin",
        satisfied: "Satisfied customers",
        recommend: "Recommend the tour",
        days: "Days of operation per year",
        stops: "Stops across Dublin city centre",
      },
      newsletter: {
        badge: "Exclusive offers for subscribers",
        title: "Get Dublin deals straight to your inbox",
        subtitle:
          "Exclusive discounts, new tours and travel tips to make the most of Dublin.",
        placeholder: "Your best email",
        button: "Sign me up",
        disclaimer: "No spam. Unsubscribe anytime. 🔒",
      },
    },
    toursSection: {
      title: "Our Tours",
      subtitle:
        "Choose the ideal experience to discover Dublin, with clear pricing and everything included.",
      reviews: "reviews",
      cta: "View details & book",
      from: "From",
    },
    categories: {
      all: "All",
      bus: "Bus",
      boat: "Boat",
      bike: "Bike",
      walking: "Walking",
      night: "Night",
      dayTrip: "Day Trips",
    },
    tourDetail: {
      breadcrumbHome: "Home",
      breadcrumbTours: "Tours",
      reviews: "reviews",
      about: "About this tour",
      included: "What's included",
      reviewsTitle: "Reviews",
      related: "Other recommended tours",
      from: "From",
      plansTitle: "Plans & prices",
      mostChosen: "Most chosen",
      perPerson: "/person",
      booking: {
        from: "From",
        perAdult: "per adult",
        date: "Tour date",
        adults: "Adults",
        children: "Children",
        freeUnder13: "Free under 13",
        total: "Total",
        bookNow: "Book Now",
        freeCancellation: "Free cancellation up to 24h before the tour",
        decreaseAdults: "Decrease adults",
        increaseAdults: "Increase adults",
        decreaseChildren: "Decrease children",
        increaseChildren: "Increase children",
      },
    },
    routeMap: {
      title: "Stop Map",
      subtitle:
        "Click a stop on the map or in the list to see details and the next departure.",
      nextDeparture: "Next departure",
    },
    social: {
      title: "What our visitors say",
      subtitle: "Real reviews from people who have already explored Dublin with us.",
      tripadvisor: "4.4/5 on Tripadvisor",
      google: "4.5/5 on Google",
    },
    packagesSection: {
      title: "Choose your ideal duration",
      subtitle:
        "Compare what's included in each package and get more value the longer you stay.",
      reserve: "Book",
    },
    bookingPage: {
      title: "Book Your Tour",
      subtitle:
        "Choose one of our tours below to see details, plans and prices before completing your booking.",
      from: "From",
      seeTour: "See tour",
    },
    ticketsPage: {
      title: "Tickets & Pricing",
      subtitle: "Compare our plans and choose the best option for your visit to Dublin.",
      mostChosen: "Most chosen",
      perPerson: "/person",
      choose: "Choose",
    },
    promo: {
      title: "Limited-time offer! Ends in:",
      days: "days",
      hours: "hours",
      minutes: "min",
      seconds: "sec",
    },
    footer: {
      newsletterTitle: "Get exclusive offers",
      newsletterText: "Dublin tips and tour promotions straight to your inbox.",
      newsletterSuccess: "Subscription confirmed! You'll receive our news soon.",
      about:
        "Explore Dublin at your own pace with our hop-on hop-off tours, bike rides, historic walking tours and much more.",
      toursTitle: "Tours",
      infoTitle: "Information",
      contactTitle: "Contact",
      rights: "All rights reserved.",
      demo: "Demo site — Redesign & Modernization",
    },
    chat: {
      title: "Chat with us",
      online: "Online now",
    },
    mobileBookBar: {
      cta: "Book now — from",
    },
    currency: {
      label: "Currency",
    },
  },
} satisfies Record<Locale, unknown>;

export type TranslationShape = typeof translations.pt;

export type Localized<T> = { en: T; pt: T };

export function localize<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}
