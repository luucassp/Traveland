"use client";

import { useLanguage } from "@/lib/i18n/context";

export function ExploreInterests() {
  const { t } = useLanguage();

  const interests = [
    {
      title: t.home.interest.history,
      desc: t.home.interest.historyDesc,
      emoji: "🏰",
      gradient: "from-amber-500 to-amber-600",
    },
    {
      title: t.home.interest.nature,
      desc: t.home.interest.natureDesc,
      emoji: "🌿",
      gradient: "from-green-500 to-green-600",
    },
    {
      title: t.home.interest.food,
      desc: t.home.interest.foodDesc,
      emoji: "🍺",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      title: t.home.interest.night,
      desc: t.home.interest.nightDesc,
      emoji: "🌙",
      gradient: "from-red-500 to-red-800",
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
              className={`relative rounded-3xl overflow-hidden min-h-[200px] bg-gradient-to-br ${interest.gradient}`}
            >
              <div className="p-7 h-full flex flex-col justify-between">
                <span className="text-4xl">{interest.emoji}</span>
                <div>
                  <h3 className="text-lg font-extrabold text-white mb-1">{interest.title}</h3>
                  <p className="text-sm text-white/85">{interest.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
