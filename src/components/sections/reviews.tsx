"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import type { Review } from "@/lib/tours";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n/context";
import { localize } from "@/lib/i18n/translations";

export function Reviews({ reviews }: { reviews: Review[] }) {
  const { locale, t } = useLanguage();

  return (
    <div>
      <h2 className="text-xl font-bold">{t.tourDetail.reviewsTitle}</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {reviews.map((review) => (
          <Card key={review.name}>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={review.avatar} alt={review.name} fill sizes="40px" className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{review.name}</p>
                  <p className="text-xs text-text-secondary">{review.country}</p>
                </div>
              </div>
              <div className="mt-2 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={`h-4 w-4 ${
                      index < review.rating
                        ? "fill-secondary text-secondary"
                        : "text-black/10"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                &ldquo;{localize(review.comment, locale)}&rdquo;
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
