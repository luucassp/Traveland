"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/context";
import { useCurrency } from "@/lib/currency/context";

export function HeroBanner() {
  const { t } = useLanguage();
  const { format } = useCurrency();

  return (
    <section className="relative isolate flex min-h-[640px] items-center overflow-hidden">
      <Image
        src="https://d2i7eq829tbbje.cloudfront.net/webp/Dublin-HOHO-main-pic1_P_60_70975efe-3076-4f53-a4de-8dd57650bcdc"
        alt="Ônibus turístico vermelho Hop-On Hop-Off com turistas em Dublin"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

      <div className="container-page relative z-10 py-24 text-white">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-black/30 px-4 py-2 text-sm backdrop-blur">
          <span className="flex items-center gap-1 text-secondary font-bold">
            <Star className="h-4 w-4 fill-secondary" />
            4.4/5
          </span>
          <span className="text-white/80">{t.hero.ratingSuffix}</span>
        </div>

        <h1 className="max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          {t.hero.title}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white/85">{t.hero.subtitle}</p>

        <div className="mt-6 flex items-baseline gap-2">
          <span className="text-sm text-white/70">{t.hero.from}</span>
          <span className="text-3xl font-extrabold text-secondary">{format(18)}</span>
          <span className="text-sm text-white/70">{t.hero.perPerson}</span>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href="/booking">{t.hero.bookNow}</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/tours">{t.hero.seeTours}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
