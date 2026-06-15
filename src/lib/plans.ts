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
    },
  },
];
