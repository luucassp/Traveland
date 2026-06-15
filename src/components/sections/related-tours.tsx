"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import type { Tour } from "@/lib/tours";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n/context";
import { useCurrency } from "@/lib/currency/context";

export function RelatedTours({ tours }: { tours: Tour[] }) {
  const { t } = useLanguage();
  const { format } = useCurrency();

  if (tours.length === 0) return null;

  return (
    <div>
      <h2 className="text-xl font-bold">{t.tourDetail.related}</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {tours.map((tour) => (
          <Link key={tour.slug} href={`/tours/${tour.slug}`}>
            <Card className="group h-full">
              <div className="relative h-32 w-full overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  sizes="33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent>
                <p className="font-semibold">{tour.name}</p>
                <div className="mt-1 flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1 text-text-secondary">
                    <Star className="h-4 w-4 fill-secondary text-secondary" />
                    {tour.rating}
                  </span>
                  <span className="font-bold text-primary">
                    {t.tourDetail.from} {format(tour.price)}
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
