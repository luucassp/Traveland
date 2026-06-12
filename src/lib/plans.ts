export type Plan = {
  name: string;
  multiplier: number;
  highlight?: boolean;
  features: string[];
};

export const plans: Plan[] = [
  {
    name: "Essential",
    multiplier: 1,
    features: [
      "Acesso ao tour Hop-On Hop-Off por 24h",
      "Áudio guia em 10 idiomas",
      "1 criança grátis por adulto pagante",
    ],
  },
  {
    name: "Premium",
    multiplier: 1.4,
    highlight: true,
    features: [
      "Acesso ao tour Hop-On Hop-Off por 48h",
      "Áudio guia em 10 idiomas",
      "1 criança grátis por adulto pagante",
      "Tour a pé gratuito incluso",
    ],
  },
  {
    name: "Supreme",
    multiplier: 1.9,
    features: [
      "Acesso ilimitado por 48h",
      "Áudio guia em 10 idiomas",
      "1 criança grátis por adulto pagante",
      "Tour a pé + cruzeiro pelo rio Liffey",
      "Desconto em atrações parceiras",
    ],
  },
];
