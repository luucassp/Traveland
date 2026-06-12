import { notFound } from "next/navigation";
import { getTourBySlug, tours } from "@/lib/tours";
import { TourHero } from "@/components/sections/tour-hero";
import { TourDetails } from "@/components/sections/tour-details";
import { PricingTable } from "@/components/sections/pricing-table";
import { BookingWidget } from "@/components/sections/booking-widget";
import { Reviews } from "@/components/sections/reviews";
import { RelatedTours } from "@/components/sections/related-tours";

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export default async function TourPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  const related = tours.filter((item) => item.slug !== tour.slug).slice(0, 3);

  return (
    <>
      <TourHero tour={tour} />

      <section className="container-page mt-10 grid gap-10 pb-16 lg:grid-cols-[2fr_1fr]">
        <div className="flex flex-col gap-10">
          <TourDetails tour={tour} />
          <PricingTable basePrice={tour.price} />
          <Reviews reviews={tour.reviews} />
          <RelatedTours tours={related} />
        </div>

        <div>
          <BookingWidget price={tour.price} />
        </div>
      </section>
    </>
  );
}
