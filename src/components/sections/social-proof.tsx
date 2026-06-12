import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { tours } from "@/lib/tours";

const testimonials = tours.flatMap((tour) => tour.reviews).slice(0, 3);

export function SocialProof() {
  return (
    <section className="bg-[#fff5f5] py-16">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            O que nossos visitantes dizem
          </h2>
          <p className="mt-3 text-text-secondary">
            Avaliações reais de quem já explorou Dublin com a gente.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-sm">
              <Star className="h-4 w-4 fill-secondary text-secondary" />
              4.4/5 no Tripadvisor
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-sm">
              <Star className="h-4 w-4 fill-secondary text-secondary" />
              4.5/5 no Google
            </span>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {testimonials.map((review) => (
            <Card key={review.name}>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image src={review.avatar} alt={review.name} fill sizes="48px" className="object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-xs text-text-secondary">{review.country}</p>
                  </div>
                </div>
                <div className="mt-3 flex gap-0.5">
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
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
