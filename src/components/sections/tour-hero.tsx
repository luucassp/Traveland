import Image from "next/image";
import { Star, Clock, Languages } from "lucide-react";
import type { Tour } from "@/lib/tours";

export function TourHero({ tour }: { tour: Tour }) {
  return (
    <section className="container-page pt-8">
      <nav className="text-sm text-text-secondary">
        <span>Home</span> <span className="mx-1">/</span>{" "}
        <span>Tours</span> <span className="mx-1">/</span>{" "}
        <span className="text-foreground font-medium">{tour.name}</span>
      </nav>

      <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">{tour.name}</h1>
      <p className="mt-2 max-w-2xl text-text-secondary">{tour.tagline}</p>

      <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
        <span className="flex items-center gap-1 font-semibold">
          <Star className="h-4 w-4 fill-secondary text-secondary" />
          {tour.rating} ({tour.reviewCount.toLocaleString("pt-BR")} avaliações)
        </span>
        <span className="flex items-center gap-1 text-text-secondary">
          <Clock className="h-4 w-4" />
          {tour.duration}
        </span>
        <span className="flex items-center gap-1 text-text-secondary">
          <Languages className="h-4 w-4" />
          {tour.languages.join(", ")}
        </span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
        <div className="relative col-span-2 row-span-2 h-56 overflow-hidden rounded-2xl sm:h-80">
          <Image
            src={tour.gallery[0]}
            alt={tour.name}
            fill
            priority
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        {tour.gallery.slice(1).map((image, index) => (
          <div key={image} className="relative h-28 overflow-hidden rounded-2xl sm:h-[9.5rem]">
            <Image
              src={image}
              alt={`${tour.name} ${index + 2}`}
              fill
              sizes="25vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
