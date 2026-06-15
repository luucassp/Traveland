import type { Localized } from "@/lib/i18n/translations";

export type DurationPackage = {
  duration: string;
  label: Localized<string>;
  price: number;
  highlight?: Localized<string>;
  popular?: boolean;
};

export const durationPackages: DurationPackage[] = [
  {
    duration: "24h",
    label: { en: "1 day", pt: "1 dia", es: "1 día", fr: "1 jour", it: "1 giorno", de: "1 Tag" },
    price: 28,
  },
  {
    duration: "48h",
    label: { en: "2 days", pt: "2 dias", es: "2 días", fr: "2 jours", it: "2 giorni", de: "2 Tage" },
    price: 33,
    highlight: {
      en: "Best value",
      pt: "Melhor custo-benefício",
      es: "Mejor relación calidad-precio",
      fr: "Meilleur rapport qualité-prix",
      it: "Miglior rapporto qualità-prezzo",
      de: "Bestes Preis-Leistungs-Verhältnis",
    },
    popular: true,
  },
  {
    duration: "72h",
    label: { en: "3 days", pt: "3 dias", es: "3 días", fr: "3 jours", it: "3 giorni", de: "3 Tage" },
    price: 39,
  },
];

export type PackageFeature = {
  label: Localized<string>;
  included: [boolean, boolean, boolean]; // 24h, 48h, 72h
};

export const packageFeatures: PackageFeature[] = [
  {
    label: {
      en: "Unlimited Hop-On Hop-Off tour",
      pt: "Tour Hop-On Hop-Off ilimitado",
      es: "Tour Hop-On Hop-Off ilimitado",
      fr: "Tour Hop-On Hop-Off illimité",
      it: "Tour Hop-On Hop-Off illimitato",
      de: "Unbegrenzte Hop-On-Hop-Off-Tour",
    },
    included: [true, true, true],
  },
  {
    label: {
      en: "Audio guide in 10 languages",
      pt: "Áudio guia em 10 idiomas",
      es: "Audioguía en 10 idiomas",
      fr: "Audioguide en 10 langues",
      it: "Audioguida in 10 lingue",
      de: "Audioguide in 10 Sprachen",
    },
    included: [true, true, true],
  },
  {
    label: {
      en: "1 free child per adult",
      pt: "1 criança grátis por adulto",
      es: "1 niño gratis por adulto",
      fr: "1 enfant gratuit par adulte",
      it: "1 bambino gratis per adulto",
      de: "1 kostenloses Kind pro Erwachsenem",
    },
    included: [true, true, true],
  },
  {
    label: {
      en: "Live-guided Walking Tour",
      pt: "Walking Tour ao vivo com guia",
      es: "Walking Tour en vivo con guía",
      fr: "Visite à pied avec guide en direct",
      it: "Walking Tour dal vivo con guida",
      de: "Geführte Stadtführung live",
    },
    included: [false, true, true],
  },
  {
    label: {
      en: "River Cruise on the Liffey",
      pt: "River Cruise pelo Rio Liffey",
      es: "Crucero por el río Liffey",
      fr: "Croisière sur la rivière Liffey",
      it: "Crociera sul fiume Liffey",
      de: "Flusskreuzfahrt auf dem Liffey",
    },
    included: [false, true, true],
  },
  {
    label: {
      en: "Bike Tour included",
      pt: "Bike Tour incluído",
      es: "Tour en bici incluido",
      fr: "Tour à vélo inclus",
      it: "Tour in bici incluso",
      de: "Fahrradtour inklusive",
    },
    included: [false, false, true],
  },
  {
    label: {
      en: "Discounts at partner attractions",
      pt: "Descontos em atrações parceiras",
      es: "Descuentos en atracciones asociadas",
      fr: "Réductions sur les attractions partenaires",
      it: "Sconti nelle attrazioni partner",
      de: "Rabatte bei Partnerattraktionen",
    },
    included: [false, false, true],
  },
];
