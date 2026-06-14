export type DurationPackage = {
  duration: string;
  label: string;
  price: number;
  highlight?: string;
  popular?: boolean;
};

export const durationPackages: DurationPackage[] = [
  {
    duration: "24h",
    label: "1 dia",
    price: 28,
  },
  {
    duration: "48h",
    label: "2 dias",
    price: 33,
    highlight: "Melhor custo-benefício",
    popular: true,
  },
  {
    duration: "72h",
    label: "3 dias",
    price: 39,
  },
];

export type PackageFeature = {
  label: string;
  included: [boolean, boolean, boolean]; // 24h, 48h, 72h
};

export const packageFeatures: PackageFeature[] = [
  { label: "Tour Hop-On Hop-Off ilimitado", included: [true, true, true] },
  { label: "Áudio guia em 10 idiomas", included: [true, true, true] },
  { label: "1 criança grátis por adulto", included: [true, true, true] },
  { label: "Walking Tour ao vivo com guia", included: [false, true, true] },
  { label: "River Cruise pelo Rio Liffey", included: [false, true, true] },
  { label: "Bike Tour incluído", included: [false, false, true] },
  { label: "Descontos em atrações parceiras", included: [false, false, true] },
];
