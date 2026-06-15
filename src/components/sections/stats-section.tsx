"use client";

import { Users, ThumbsUp, CalendarCheck, Bus } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export function StatsSection() {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: "200k+", label: t.home.stats.satisfied },
    { icon: ThumbsUp, value: "94%", label: t.home.stats.recommend },
    { icon: CalendarCheck, value: "365", label: t.home.stats.days },
    { icon: Bus, value: "14", label: t.home.stats.stops },
  ];

  return (
    <section
      className="py-20 text-white"
      style={{ background: "linear-gradient(135deg, #e63946 0%, #c1121f 60%, #9d0208 100%)" }}
    >
      <div className="container-page">
        <div className="text-center mb-12">
          <p className="text-white/70 text-xs uppercase tracking-widest font-semibold mb-2">
            {t.home.stats.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold">{t.home.stats.title}</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-white/35" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-amber-400" />
              </div>
              <div className="text-5xl font-black text-amber-400 leading-none">{stat.value}</div>
              <div className="text-sm text-white/75 mt-2 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
