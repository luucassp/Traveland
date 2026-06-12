import { Check } from "lucide-react";
import Link from "next/link";
import { plans } from "@/lib/plans";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BASE_PRICE = 28;

export default function TicketsPage() {
  return (
    <div className="container-page py-12">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Bilhetes &amp; Preços</h1>
        <p className="mt-3 text-text-secondary">
          Compare nossos planos e escolha a melhor opção para a sua visita a Dublin.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {plans.map((plan) => {
          const price = Math.round(BASE_PRICE * plan.multiplier);
          return (
            <div
              key={plan.name}
              className={cn(
                "flex flex-col rounded-2xl border p-6",
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
              <h2 className="text-xl font-bold">{plan.name}</h2>
              <p className="mt-1 text-3xl font-extrabold">
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
              <Button asChild className="mt-6" variant={plan.highlight ? "primary" : "outline-dark"}>
                <Link href="/booking">Escolher {plan.name}</Link>
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
