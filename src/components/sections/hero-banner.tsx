import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  return (
    <section className="relative isolate flex min-h-[640px] items-center overflow-hidden">
      <Image
        src="https://d3hrj27b4bz3ky.cloudfront.net/webp/large/0cd433228-fe73-4496-a024-ec509ff7f483"
        alt="Vista aérea de Dublin"
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
          <span className="text-white/80">· +12.000 avaliações verificadas</span>
        </div>

        <h1 className="max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          Explore Dublin no seu próprio ritmo
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white/85">
          Tours hop-on hop-off, passeios de bike, caminhadas históricas e muito mais.
          Suba e desça quantas vezes quiser nas principais atrações da cidade.
        </p>

        <div className="mt-6 flex items-baseline gap-2">
          <span className="text-sm text-white/70">A partir de</span>
          <span className="text-3xl font-extrabold text-secondary">€18</span>
          <span className="text-sm text-white/70">por pessoa</span>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href="/booking">Reservar Agora</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/tours">Ver Tours</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
