export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "top-10-atracoes-dublin",
    title: "Top 10 atrações imperdíveis em Dublin",
    excerpt:
      "Do Trinity College ao Guinness Storehouse, conheça os pontos turísticos que não podem faltar no seu roteiro.",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800&auto=format&fit=crop",
    date: "2026-05-12",
    category: "Roteiros",
  },
  {
    slug: "melhor-epoca-visitar-dublin",
    title: "Qual a melhor época para visitar Dublin?",
    excerpt:
      "Descubra o clima, eventos sazonais e dicas para aproveitar a cidade em qualquer estação do ano.",
    image:
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=800&auto=format&fit=crop",
    date: "2026-04-28",
    category: "Dicas de Viagem",
  },
  {
    slug: "gastronomia-irlandesa",
    title: "Guia de gastronomia irlandesa para turistas",
    excerpt:
      "Pratos típicos, pubs históricos e onde provar o melhor fish and chips da cidade.",
    image:
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=800&auto=format&fit=crop",
    date: "2026-04-10",
    category: "Gastronomia",
  },
  {
    slug: "howth-passeio-de-um-dia",
    title: "Howth: o passeio de um dia perfeito a partir de Dublin",
    excerpt:
      "Falésias, frutos do mar e trilhas costeiras a poucos minutos do centro da cidade.",
    image:
      "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=800&auto=format&fit=crop",
    date: "2026-03-22",
    category: "Roteiros",
  },
];
