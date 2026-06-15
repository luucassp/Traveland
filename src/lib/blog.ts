export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  content: string[];
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
    content: [
      "Dublin é uma cidade compacta, mas repleta de história, cultura e boa comida — o que faz dela um destino perfeito para quem tem poucos dias e quer aproveitar ao máximo.",
      "1. Trinity College e a Long Room da Old Library, casa do famoso Livro de Kells.",
      "2. Guinness Storehouse, onde você aprende sobre a história da cervejaria mais famosa da Irlanda e termina com uma pint no Gravity Bar, com vista 360° da cidade.",
      "3. Castelo de Dublin, antigo centro do poder britânico na Irlanda, hoje aberto para visitas guiadas.",
      "4. Temple Bar, o bairro cultural mais animado da cidade, com música ao vivo, pubs históricos e galerias de arte.",
      "5. Catedral de St. Patrick, a maior igreja da Irlanda e um marco da arquitetura gótica.",
      "6. Phoenix Park, um dos maiores parques urbanos da Europa, com cervos selvagens e o Zoológico de Dublin.",
      "7. EPIC The Irish Emigration Museum, uma experiência interativa sobre a diáspora irlandesa.",
      "8. Ha'penny Bridge, a ponte pedonal mais fotografada sobre o rio Liffey.",
      "9. Grafton Street, a principal rua de compras, sempre animada com músicos de rua.",
      "10. Croke Park, o estádio histórico do esporte gaélico, com tour pelos bastidores.",
      "Com o nosso tour Hop-On Hop-Off você passa por praticamente todas essas atrações, podendo descer e explorar no seu próprio ritmo.",
    ],
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
    content: [
      "Dublin tem um clima temperado o ano todo, sem grandes extremos — mas cada estação oferece uma experiência diferente.",
      "Primavera (março a maio): dias mais longos, parques floridos e menos turistas. Ótima época para caminhar por Phoenix Park e St. Stephen's Green.",
      "Verão (junho a agosto): a alta temporada, com festivais ao ar livre, dias com até 18 horas de luz e o clima mais quente do ano (em torno de 18-20°C).",
      "Outono (setembro a novembro): cores lindas nos parques, preços mais baixos e a cidade ainda movimentada com eventos culturais.",
      "Inverno (dezembro a fevereiro): mercados de Natal, pubs aconchegantes e a chance de ver Dublin sob uma luz completamente diferente — com menos multidões nas atrações.",
      "Independente da estação, leve sempre um guarda-chuva: a chuva passageira é praticamente uma tradição local!",
      "Nossos tours funcionam durante o ano todo, com horários ajustados conforme a estação.",
    ],
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
    content: [
      "A gastronomia irlandesa vai muito além do estereótipo de batata cozida — Dublin tem uma cena culinária vibrante, que mistura tradição e modernidade.",
      "Irish stew: o clássico ensopado de carne de cordeiro ou vaca com batatas, cenouras e cebolas, perfeito para os dias mais frios.",
      "Fish and chips: peixe empanado e fritas, tradicionalmente servidos em jornal — encontrados em quase todos os pubs do centro.",
      "Boxty: uma espécie de panqueca de batata, recheada com diversos ingredientes, típica do norte da Irlanda.",
      "Soda bread: pão denso e levemente adocicado, perfeito para acompanhar sopas e ensopados.",
      "Guinness e queijos locais: combine uma pint da cervejaria mais famosa do país com queijos artesanais irlandeses para uma experiência completa.",
      "Dica: o Temple Bar é ótimo para a experiência turística, mas para preços mais justos e comida igualmente boa, explore os pubs em torno de Capel Street e Stoneybatter.",
    ],
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
    content: [
      "A vila costeira de Howth fica a apenas 30 minutos do centro de Dublin e é um dos passeios de um dia mais recompensadores da região.",
      "Cliff Walk: a trilha costeira de cerca de 6 km oferece vistas espetaculares do Mar da Irlanda, da Ilha de Ireland's Eye e, em dias claros, até do País de Gales.",
      "Porto de pesca: prove frutos do mar fresquíssimos direto dos barcos locais, em restaurantes à beira-mar.",
      "Farol de Howth: um marco histórico que vale a foto, especialmente ao pôr do sol.",
      "Castelo de Howth: cercado por jardins históricos, com vista para a baía.",
      "Nosso Howth Coastal Tour combina transporte confortável com tempo livre para explorar a vila, a trilha e o porto no seu próprio ritmo.",
    ],
  },
  {
    slug: "guia-bairros-dublin",
    title: "Guia de bairros de Dublin: onde ficar e o que esperar",
    excerpt:
      "De Temple Bar a Ranelagh, descubra a personalidade de cada região da cidade antes de planejar sua estadia.",
    image:
      "https://images.unsplash.com/photo-1549918864-48ac978761a4?q=80&w=800&auto=format&fit=crop",
    date: "2026-06-02",
    category: "Sobre Dublin",
    content: [
      "Dublin é dividida pelo rio Liffey em margem norte (Northside) e margem sul (Southside), e cada bairro tem sua própria identidade.",
      "Temple Bar: o coração turístico e cultural, com pubs históricos, música ao vivo e galerias — ótimo para visitar, mas costuma ser mais caro para se hospedar.",
      "St. Stephen's Green / Grafton Street: zona central elegante, perfeita para compras, parques e fácil acesso a pé às principais atrações.",
      "Docklands (Silicon Docks): o distrito moderno e tecnológico de Dublin, com arquitetura contemporânea à beira do rio.",
      "Ranelagh e Portobello: bairros residenciais charmosos, com cafés descolados e uma vida noturna mais tranquila — ótimos para quem busca uma experiência mais local.",
      "Smithfield e Stoneybatter: ao norte do rio, áreas em ascensão com pubs autênticos, mercados e preços mais acessíveis.",
      "Howth e Dún Laoghaire: vilas costeiras a poucos minutos de trem (DART) do centro, ideais para um dia mais tranquilo à beira-mar.",
      "Seja qual for o bairro escolhido, o tour Hop-On Hop-Off conecta os principais pontos da cidade, facilitando a locomoção entre eles.",
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
