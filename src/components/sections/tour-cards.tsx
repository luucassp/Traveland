"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Clock, Languages } from "lucide-react";
import { tours, tourCategories, type TourCategory } from "@/lib/tours";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useCurrency } from "@/lib/currency/context";
import { useLanguage } from "@/lib/i18n/context";
import { localize } from "@/lib/i18n/translations";

export function TourCards() {
  const [active, setActive] = useState<TourCategory | "all">("all");
  const { format } = useCurrency();
  const { locale, t } = useLanguage();

  const visibleTours = useMemo(
    () =>
      active === "all" ? tours : tours.filter((tour) => tour.category === active),
    [active]
  );

  return (
    <section className="container-page py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl">{t.toursSection.title}</h2>
        <p className="mt-3 text-text-secondary">{t.toursSection.subtitle}</p>
      </div>

      {/* Filtros por categoria */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {tourCategories.map((category) => (
          <button
            key={category.value}
            onClick={() => setActive(category.value)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              active === category.value
                ? "bg-primary text-white"
                : "border border-black/10 text-text-secondary hover:border-primary hover:text-primary"
            )}
          >
            {localize(category.label, locale)}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleTours.map((tour) => (
          <Card key={tour.slug} className="group flex flex-col">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={tour.image}
                alt={tour.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {tour.highlight && (
                <div className="absolute left-3 top-3">
                  <Badge variant="secondary">{localize(tour.highlight, locale)}</Badge>
                </div>
              )}
              <div className="absolute bottom-3 right-3 rounded-full bg-white px-3 py-1 text-sm font-bold text-primary shadow">
                {t.toursSection.from} {format(tour.price)}
              </div>
            </div>

            <CardContent className="flex flex-1 flex-col">
              <h3 className="text-lg font-bold">{tour.name}</h3>
              <p className="mt-1 text-sm text-text-secondary line-clamp-2">
                {localize(tour.tagline, locale)}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-text-secondary">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {localize(tour.duration, locale)}
                </span>
                <span className="flex items-center gap-1">
                  <Languages className="h-3.5 w-3.5" />
                  {tour.languages.join(", ")}
                </span>
              </div>

              <div className="mt-2 flex items-center gap-1 text-sm">
                <Star className="h-4 w-4 fill-secondary text-secondary" />
                <span className="font-semibold">{tour.rating}</span>
                <span className="text-text-secondary">
                  ({tour.reviewCount.toLocaleString(locale === "en" ? "en-US" : "pt-BR")}{" "}
                  {t.toursSection.reviews})
                </span>
              </div>

              <Link
                href={`/tours/${tour.slug}`}
                className="mt-auto inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                {t.toursSection.cta}
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
