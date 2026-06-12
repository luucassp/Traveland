"use client";

import { useEffect, useState } from "react";
import { Star, Tag, ShieldCheck } from "lucide-react";

const messages = [
  {
    icon: Tag,
    text: "Promoção: até 20% OFF reservando online hoje",
  },
  {
    icon: Star,
    text: "4.4/5 com mais de 12.000 avaliações verificadas",
  },
  {
    icon: ShieldCheck,
    text: "Cancelamento gratuito até 24h antes do passeio",
  },
];

export function TopBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const Message = messages[index];

  return (
    <div className="bg-primary-dark text-white text-xs sm:text-sm">
      <div className="container-page flex h-9 items-center justify-center gap-2 text-center">
        <Message.icon className="h-4 w-4 shrink-0" />
        <span className="truncate">{Message.text}</span>
      </div>
    </div>
  );
}
