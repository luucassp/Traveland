"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";

export function ExploreInterests() {
  const { t } = useLanguage();

  const interests = [
    {
      title: t.home.interest.history,
      desc: t.home.interest.historyDesc,
      image:
        "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: t.home.interest.nature,
      desc: t.home.interest.natureDesc,
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: t.home.interest.food,
      desc: t.home.interest.foodDesc,
      image:
        "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: t.home.interest.night,
      desc: t.home.interest.nightDesc,
      image:
        "https://d2i7eq829tbbje.cloudfront.net/webp/Dublin%20Night%20Tour%20Card_P_4791_972dc684-9687-4e47-b7f8-31f4618bab76",
    },
  ];

  return (
    <section className="py-14 bg-white">
      <div className="container-page">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            {t.home.interest.eyebrow}
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900">{t.home.interest.title}</h2>
          <div className="mt-3 mx-auto w-14 h-1 rounded-full bg-gradient-to-r from-amber-500 to-red-500" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {interests.map((interest) => (
            <div
              key={interest.title}
              className="group relative overflow-hidden rounded-3xl min-h-[200px]"
            >
              <Image
                src={interest.image}
                alt={interest.title}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <h3 className="text-lg font-extrabold text-white mb-1">{interest.title}</h3>
                <p className="text-sm text-white/85">{interest.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
