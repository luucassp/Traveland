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
    label: { en: "1 day", pt: "1 dia" },
    price: 28,
  },
  {
    duration: "48h",
    label: { en: "2 days", pt: "2 dias" },
    price: 33,
    highlight: { en: "Best value", pt: "Melhor custo-benefício" },
    popular: true,
  },
  {
    duration: "72h",
    label: { en: "3 days", pt: "3 dias" },
    price: 39,
  },
];

export type PackageFeature = {
  label: Localized<string>;
  included: [boolean, boolean, boolean]; // 24h, 48h, 72h
};

export const packageFeatures: PackageFeature[] = [
  {
    label: { en: "Unlimited Hop-On Hop-Off tour", pt: "Tour Hop-On Hop-Off ilimitado" },
    included: [true, true, true],
  },
  {
    label: { en: "Audio guide in 10 languages", pt: "Áudio guia em 10 idiomas" },
    included: [true, true, true],
  },
  {
    label: { en: "1 free child per adult", pt: "1 criança grátis por adulto" },
    included: [true, true, true],
  },
  {
    label: { en: "Live-guided Walking Tour", pt: "Walking Tour ao vivo com guia" },
    included: [false, true, true],
  },
  {
    label: { en: "River Cruise on the Liffey", pt: "River Cruise pelo Rio Liffey" },
    included: [false, true, true],
  },
  {
    label: { en: "Bike Tour included", pt: "Bike Tour incluído" },
    included: [false, false, true],
  },
  {
    label: { en: "Discounts at partner attractions", pt: "Descontos em atrações parceiras" },
    included: [false, false, true],
  },
];
