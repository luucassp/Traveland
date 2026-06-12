import { Check } from "lucide-react";
import { plans } from "@/lib/plans";
import { cn } from "@/lib/utils";

export function PricingTable({ basePrice }: { basePrice: number }) {
  return (
    <div>
      <h2 className="text-xl font-bold">Planos e preços</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {plans.map((plan) => {
          const price = Math.round(basePrice * plan.multiplier);
          return (
            <div
              key={plan.name}
              className={cn(
                "flex flex-col rounded-2xl border p-5",
                plan.highlight
                  ? "border-primary shadow-md ring-1 ring-primary"
                  : "border-black/10"
              )}
            >
              {plan.highlight && (
                <span className="mb-2 inline-flex w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                  Mais escolhido
                </span>
              )}
              <h3 className="text-lg font-bold">{plan.name}</h3>
              <p className="mt-1 text-2xl font-extrabold">
                €{price}
                <span className="text-sm font-medium text-text-secondary"> /pessoa</span>
              </p>
              <ul className="mt-4 flex-1 space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="h-4 w-4 shrink-0 text-success" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
