"use client";

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
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-label="Ônibus turístico vermelho Hop-On Hop-Off com turistas em Dublin"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/4003023/4003023-hd_1920_1080_30fps.mp4"
          type="video/mp4"
        />
      </video>
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
