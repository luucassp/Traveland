import Image from "next/image";
import Link from "next/link";
import { Star, Clock, Languages } from "lucide-react";
import { tours } from "@/lib/tours";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function TourCards() {
  return (
    <section className="container-page py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Nossos Tours</h2>
        <p className="mt-3 text-text-secondary">
          Escolha a experiência ideal para conhecer Dublin, com preços claros e tudo
          incluído.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour) => (
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
                  <Badge variant="secondary">{tour.highlight}</Badge>
                </div>
              )}
              <div className="absolute bottom-3 right-3 rounded-full bg-white px-3 py-1 text-sm font-bold text-primary shadow">
                A partir de €{tour.price}
              </div>
            </div>

            <CardContent className="flex flex-1 flex-col">
              <h3 className="text-lg font-bold">{tour.name}</h3>
              <p className="mt-1 text-sm text-text-secondary line-clamp-2">
                {tour.tagline}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-text-secondary">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {tour.duration}
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
                  ({tour.reviewCount.toLocaleString("pt-BR")} avaliações)
                </span>
              </div>

              <Link
                href={`/tours/${tour.slug}`}
                className="mt-4 inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Ver detalhes e reservar
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
