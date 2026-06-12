import { CheckCircle2 } from "lucide-react";
import type { Tour } from "@/lib/tours";

export function TourDetails({ tour }: { tour: Tour }) {
  return (
    <div>
      <h2 className="text-xl font-bold">Sobre este tour</h2>
      <p className="mt-2 text-text-secondary leading-relaxed">{tour.description}</p>

      <h3 className="mt-6 text-lg font-bold">O que está incluído</h3>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {tour.includes.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
