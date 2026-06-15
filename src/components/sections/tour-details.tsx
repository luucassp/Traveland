"use client";

import { CheckCircle2 } from "lucide-react";
import type { Tour } from "@/lib/tours";
import { useLanguage } from "@/lib/i18n/context";
import { localize } from "@/lib/i18n/translations";

export function TourDetails({ tour }: { tour: Tour }) {
  const { locale, t } = useLanguage();

  return (
    <div>
      <h2 className="text-xl font-bold">{t.tourDetail.about}</h2>
      <p className="mt-2 text-text-secondary leading-relaxed">
        {localize(tour.description, locale)}
      </p>

      <h3 className="mt-6 text-lg font-bold">{t.tourDetail.included}</h3>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {localize(tour.includes, locale).map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
