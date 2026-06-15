"use client";

import Link from "next/link";
import { tours } from "@/lib/tours";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/context";
import { useCurrency } from "@/lib/currency/context";

export default function BookingPage() {
  const { t } = useLanguage();
  const { format } = useCurrency();

  return (
    <div className="container-page py-12">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-extrabold sm:text-4xl">{t.bookingPage.title}</h1>
        <p className="mt-3 text-text-secondary">{t.bookingPage.subtitle}</p>
      </div>

      <div className="mx-auto mt-10 flex max-w-xl flex-col gap-3">
        {tours.map((tour) => (
          <Link
            key={tour.slug}
            href={`/tours/${tour.slug}`}
            className="flex items-center justify-between rounded-2xl border border-black/10 bg-white p-4 transition-colors hover:border-primary"
          >
            <div>
              <p className="font-semibold">{tour.name}</p>
              <p className="text-sm text-text-secondary">
                {t.bookingPage.from} {format(tour.price)}
              </p>
            </div>
            <Button variant="outline-dark" size="sm" asChild>
              <span>{t.bookingPage.seeTour}</span>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
