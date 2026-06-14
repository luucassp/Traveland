"use client";

import { useEffect, useState } from "react";
import { Award, ShieldCheck, CalendarClock } from "lucide-react";

const seals = [
  {
    icon: Award,
    text: "Líder mundial em tours Hop-On Hop-Off",
  },
  {
    icon: ShieldCheck,
    text: "Cancelamento gratuito",
  },
  {
    icon: CalendarClock,
    text: "Vouchers flexíveis: válidos por 12 meses",
  },
];

export function TopBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % seals.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const Seal = seals[index];

  return (
    <div className="bg-primary-dark text-white text-xs sm:text-sm">
      {/* Mobile: rotaciona um selo por vez */}
      <div className="container-page flex h-9 items-center justify-center gap-2 text-center sm:hidden">
        <Seal.icon className="h-4 w-4 shrink-0" />
        <span className="truncate">{Seal.text}</span>
      </div>

      {/* Desktop: três selos lado a lado */}
      <div className="container-page hidden h-10 items-center justify-center gap-8 sm:flex">
        {seals.map((seal) => (
          <div key={seal.text} className="flex items-center gap-2">
            <seal.icon className="h-4 w-4 shrink-0 text-secondary" />
            <span className="font-medium">{seal.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
