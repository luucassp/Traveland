export type Locale = "pt" | "es" | "fr" | "it" | "de";

export const locales: Locale[] = ["pt", "es", "fr", "it", "de"];

export const localeNames: Record<Locale, string> = {
  pt: "Português",
  es: "Español",
  fr: "Français",
  it: "Italiano",
  de: "Deutsch",
};

export const defaultLocale: Locale = "pt";

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
  es: {
    topBar: {
      seal1: "Líder mundial en tours Hop-On Hop-Off",
      seal2: "Cancelación gratuita",
      seal3: "Bonos flexibles: válidos durante 12 meses",
    },
    nav: {
      tours: "Tours",
      busStops: "Paradas",
      tickets: "Entradas",
      about: "Nosotros",
      blog: "Blog",
      faq: "Preguntas",
      contact: "Contacto",
      bookNow: "Reservar Ahora",
    },
    hero: {
      ratingSuffix: "· +12.000 reseñas verificadas",
      title: "Explora Dublín a tu propio ritmo",
      subtitle:
        "Tours hop-on hop-off, paseos en bicicleta, recorridos históricos a pie y mucho más. Sube y baja tantas veces como quieras en las principales atracciones de la ciudad.",
      from: "Desde",
      perPerson: "por persona",
      bookNow: "Reservar Ahora",
      seeTours: "Ver Tours",
    },
    promo: {
      title: "¡Oferta por tiempo limitado! Termina en:",
      days: "días",
      hours: "horas",
      minutes: "min",
      seconds: "seg",
    },
    footer: {
      newsletterTitle: "Recibe ofertas exclusivas",
      newsletterText: "Consejos de Dublín y promociones de nuestros tours directo a tu correo.",
      about:
        "Explora Dublín a tu propio ritmo con nuestros tours hop-on hop-off, paseos en bicicleta, recorridos históricos a pie y mucho más.",
      toursTitle: "Tours",
      infoTitle: "Información",
      contactTitle: "Contacto",
      rights: "Todos los derechos reservados.",
      demo: "Sitio demo — Rediseño y Modernización",
    },
    chat: {
      title: "Habla con nosotros",
      online: "En línea ahora",
    },
    mobileBookBar: {
      cta: "Reservar ahora — desde",
    },
    currency: {
      label: "Moneda",
    },
  },
  fr: {
    topBar: {
      seal1: "Leader mondial des tours Hop-On Hop-Off",
      seal2: "Annulation gratuite",
      seal3: "Bons flexibles : valables 12 mois",
    },
    nav: {
      tours: "Tours",
      busStops: "Arrêts",
      tickets: "Billets",
      about: "À propos",
      blog: "Blog",
      faq: "FAQ",
      contact: "Contact",
      bookNow: "Réserver",
    },
    hero: {
      ratingSuffix: "· +12 000 avis vérifiés",
      title: "Explorez Dublin à votre rythme",
      subtitle:
        "Tours hop-on hop-off, balades à vélo, visites historiques à pied et bien plus. Montez et descendez autant de fois que vous le souhaitez aux principales attractions de la ville.",
      from: "À partir de",
      perPerson: "par personne",
      bookNow: "Réserver",
      seeTours: "Voir les Tours",
    },
    promo: {
      title: "Offre à durée limitée ! Se termine dans :",
      days: "jours",
      hours: "heures",
      minutes: "min",
      seconds: "sec",
    },
    footer: {
      newsletterTitle: "Recevez des offres exclusives",
      newsletterText: "Astuces sur Dublin et promotions de nos tours directement dans votre boîte mail.",
      about:
        "Explorez Dublin à votre rythme avec nos tours hop-on hop-off, balades à vélo, visites historiques à pied et bien plus.",
      toursTitle: "Tours",
      infoTitle: "Informations",
      contactTitle: "Contact",
      rights: "Tous droits réservés.",
      demo: "Site de démonstration — Refonte & Modernisation",
    },
    chat: {
      title: "Discutez avec nous",
      online: "En ligne",
    },
    mobileBookBar: {
      cta: "Réserver maintenant — à partir de",
    },
    currency: {
      label: "Devise",
    },
  },
  it: {
    topBar: {
      seal1: "Leader mondiale nei tour Hop-On Hop-Off",
      seal2: "Cancellazione gratuita",
      seal3: "Voucher flessibili: validi 12 mesi",
    },
    nav: {
      tours: "Tour",
      busStops: "Fermate",
      tickets: "Biglietti",
      about: "Chi siamo",
      blog: "Blog",
      faq: "FAQ",
      contact: "Contatti",
      bookNow: "Prenota Ora",
    },
    hero: {
      ratingSuffix: "· +12.000 recensioni verificate",
      title: "Esplora Dublino al tuo ritmo",
      subtitle:
        "Tour hop-on hop-off, gite in bici, passeggiate storiche e molto altro. Sali e scendi quante volte vuoi nelle principali attrazioni della città.",
      from: "A partire da",
      perPerson: "a persona",
      bookNow: "Prenota Ora",
      seeTours: "Vedi i Tour",
    },
    promo: {
      title: "Offerta a tempo limitato! Termina in:",
      days: "giorni",
      hours: "ore",
      minutes: "min",
      seconds: "sec",
    },
    footer: {
      newsletterTitle: "Ricevi offerte esclusive",
      newsletterText: "Consigli su Dublino e promozioni dei nostri tour direttamente nella tua email.",
      about:
        "Esplora Dublino al tuo ritmo con i nostri tour hop-on hop-off, gite in bici, passeggiate storiche e molto altro.",
      toursTitle: "Tour",
      infoTitle: "Informazioni",
      contactTitle: "Contatti",
      rights: "Tutti i diritti riservati.",
      demo: "Sito demo — Redesign & Modernizzazione",
    },
    chat: {
      title: "Parla con noi",
      online: "Online ora",
    },
    mobileBookBar: {
      cta: "Prenota ora — a partire da",
    },
    currency: {
      label: "Valuta",
    },
  },
  de: {
    topBar: {
      seal1: "Weltweit führend bei Hop-On Hop-Off-Touren",
      seal2: "Kostenlose Stornierung",
      seal3: "Flexible Gutscheine: 12 Monate gültig",
    },
    nav: {
      tours: "Touren",
      busStops: "Haltestellen",
      tickets: "Tickets",
      about: "Über uns",
      blog: "Blog",
      faq: "FAQ",
      contact: "Kontakt",
      bookNow: "Jetzt Buchen",
    },
    hero: {
      ratingSuffix: "· +12.000 verifizierte Bewertungen",
      title: "Erlebe Dublin in deinem eigenen Tempo",
      subtitle:
        "Hop-On Hop-Off-Touren, Radtouren, historische Spaziergänge und mehr. Steige so oft du möchtest an den wichtigsten Attraktionen der Stadt ein und aus.",
      from: "Ab",
      perPerson: "pro Person",
      bookNow: "Jetzt Buchen",
      seeTours: "Touren Ansehen",
    },
    promo: {
      title: "Zeitlich begrenztes Angebot! Endet in:",
      days: "Tage",
      hours: "Std",
      minutes: "Min",
      seconds: "Sek",
    },
    footer: {
      newsletterTitle: "Exklusive Angebote erhalten",
      newsletterText: "Dublin-Tipps und Angebote für unsere Touren direkt in dein Postfach.",
      about:
        "Erlebe Dublin in deinem eigenen Tempo mit unseren Hop-On Hop-Off-Touren, Radtouren, historischen Spaziergängen und mehr.",
      toursTitle: "Touren",
      infoTitle: "Informationen",
      contactTitle: "Kontakt",
      rights: "Alle Rechte vorbehalten.",
      demo: "Demo-Website — Redesign & Modernisierung",
    },
    chat: {
      title: "Sprich mit uns",
      online: "Jetzt online",
    },
    mobileBookBar: {
      cta: "Jetzt buchen — ab",
    },
    currency: {
      label: "Währung",
    },
  },
} satisfies Record<Locale, unknown>;

export type TranslationShape = typeof translations.pt;
