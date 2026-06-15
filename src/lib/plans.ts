import type { Localized } from "@/lib/i18n/translations";

export type Plan = {
  name: string;
  multiplier: number;
  highlight?: boolean;
  features: Localized<string[]>;
};

export const plans: Plan[] = [
  {
    name: "Essential",
    multiplier: 1,
    features: {
      en: [
        "Access to the Hop-On Hop-Off tour for 24h",
        "Audio guide in 10 languages",
        "1 free child per paying adult",
      ],
      pt: [
        "Acesso ao tour Hop-On Hop-Off por 24h",
        "Áudio guia em 10 idiomas",
        "1 criança grátis por adulto pagante",
      ],
      es: [
        "Acceso al tour Hop-On Hop-Off durante 24h",
        "Audioguía en 10 idiomas",
        "1 niño gratis por adulto de pago",
      ],
      fr: [
        "Accès au tour Hop-On Hop-Off pendant 24h",
        "Audioguide en 10 langues",
        "1 enfant gratuit par adulte payant",
      ],
      it: [
        "Accesso al tour Hop-On Hop-Off per 24h",
        "Audioguida in 10 lingue",
        "1 bambino gratis per adulto pagante",
      ],
      de: [
        "Zugang zur Hop-On-Hop-Off-Tour für 24h",
        "Audioguide in 10 Sprachen",
        "1 kostenloses Kind pro zahlendem Erwachsenen",
      ],
    },
  },
  {
    name: "Premium",
    multiplier: 1.4,
    highlight: true,
    features: {
      en: [
        "Access to the Hop-On Hop-Off tour for 48h",
        "Audio guide in 10 languages",
        "1 free child per paying adult",
        "Free walking tour included",
      ],
      pt: [
        "Acesso ao tour Hop-On Hop-Off por 48h",
        "Áudio guia em 10 idiomas",
        "1 criança grátis por adulto pagante",
        "Tour a pé gratuito incluso",
      ],
      es: [
        "Acceso al tour Hop-On Hop-Off durante 48h",
        "Audioguía en 10 idiomas",
        "1 niño gratis por adulto de pago",
        "Walking tour gratuito incluido",
      ],
      fr: [
        "Accès au tour Hop-On Hop-Off pendant 48h",
        "Audioguide en 10 langues",
        "1 enfant gratuit par adulte payant",
        "Visite à pied gratuite incluse",
      ],
      it: [
        "Accesso al tour Hop-On Hop-Off per 48h",
        "Audioguida in 10 lingue",
        "1 bambino gratis per adulto pagante",
        "Walking tour gratuito incluso",
      ],
      de: [
        "Zugang zur Hop-On-Hop-Off-Tour für 48h",
        "Audioguide in 10 Sprachen",
        "1 kostenloses Kind pro zahlendem Erwachsenen",
        "Kostenlose Stadtführung inklusive",
      ],
    },
  },
  {
    name: "Supreme",
    multiplier: 1.9,
    features: {
      en: [
        "Unlimited access for 48h",
        "Audio guide in 10 languages",
        "1 free child per paying adult",
        "Walking tour + Liffey river cruise",
        "Discount at partner attractions",
      ],
      pt: [
        "Acesso ilimitado por 48h",
        "Áudio guia em 10 idiomas",
        "1 criança grátis por adulto pagante",
        "Tour a pé + cruzeiro pelo rio Liffey",
        "Desconto em atrações parceiras",
      ],
      es: [
        "Acceso ilimitado durante 48h",
        "Audioguía en 10 idiomas",
        "1 niño gratis por adulto de pago",
        "Walking tour + crucero por el río Liffey",
        "Descuento en atracciones asociadas",
      ],
      fr: [
        "Accès illimité pendant 48h",
        "Audioguide en 10 langues",
        "1 enfant gratuit par adulte payant",
        "Visite à pied + croisière sur la Liffey",
        "Réduction sur les attractions partenaires",
      ],
      it: [
        "Accesso illimitato per 48h",
        "Audioguida in 10 lingue",
        "1 bambino gratis per adulto pagante",
        "Walking tour + crociera sul fiume Liffey",
        "Sconto nelle attrazioni partner",
      ],
      de: [
        "Unbegrenzter Zugang für 48h",
        "Audioguide in 10 Sprachen",
        "1 kostenloses Kind pro zahlendem Erwachsenen",
        "Stadtführung + Liffey-Flusskreuzfahrt",
        "Rabatt bei Partnerattraktionen",
      ],
    },
  },
];
