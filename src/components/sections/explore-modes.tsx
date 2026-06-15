"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { useCurrency } from "@/lib/currency/context";
import { getTourBySlug } from "@/lib/tours";

export function ExploreModes() {
  const { t } = useLanguage();
  const { format } = useCurrency();

  const bus = getTourBySlug("bus-tour");
  const bike = getTourBySlug("bike-tour");
  const boat = getTourBySlug("river-cruise");

  if (!bus || !bike || !boat) {
    return null;
  }

  const modes = [
    { title: t.home.explore.busTitle, desc: t.home.explore.busDesc, tour: bus },
    { title: t.home.explore.bikeTitle, desc: t.home.explore.bikeDesc, tour: bike },
    { title: t.home.explore.boatTitle, desc: t.home.explore.boatDesc, tour: boat },
  ];

  return (
    <section className="py-14 bg-gradient-to-b from-white to-[#fef8f0]">
      <div className="container-page">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
            {t.home.explore.eyebrow}
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900">{t.home.explore.title}</h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-amber-400 to-red-500" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {modes.map((mode) => (
            <Link
              key={mode.title}
              href={`/tours/${mode.tour.slug}`}
              className="group relative overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 min-h-[260px]"
            >
              <Image
                src={mode.tour.image}
                alt={mode.title}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">{mode.title}</h3>
                <p className="text-sm text-white/80 mt-1">{mode.desc}</p>
                <span className="inline-block mt-3 text-xs font-semibold text-amber-400 uppercase tracking-wide">
                  {t.home.explore.from} {format(mode.tour.price)} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
