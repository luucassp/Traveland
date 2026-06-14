import Link from "next/link";
import { Check, Minus } from "lucide-react";
import { durationPackages, packageFeatures } from "@/lib/packages";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PackageComparison() {
  return (
    <section className="bg-[#fafafa] py-16">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Escolha a duração ideal
          </h2>
          <p className="mt-3 text-text-secondary">
            Compare o que está incluído em cada pacote e aproveite mais quanto mais
            tempo você fica.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
          {/* Cabeçalho dos pacotes */}
          <div className="grid grid-cols-[1.6fr_repeat(3,1fr)] border-b border-black/10">
            <div className="hidden p-4 sm:block" />
            {durationPackages.map((pkg) => (
              <div
                key={pkg.duration}
                className={cn(
                  "relative p-4 text-center",
                  pkg.popular && "bg-primary/5"
                )}
              >
                {pkg.highlight && (
                  <span className="absolute inset-x-0 top-0 bg-primary py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                    {pkg.highlight}
                  </span>
                )}
                <p className={cn("text-2xl font-extrabold", pkg.highlight && "mt-4")}>
                  {pkg.duration}
                </p>
                <p className="text-xs text-text-secondary">{pkg.label}</p>
                <p className="mt-2 text-lg font-bold text-primary">€{pkg.price}</p>
              </div>
            ))}
          </div>

          {/* Linhas de features */}
          {packageFeatures.map((feature, rowIndex) => (
            <div
              key={feature.label}
              className={cn(
                "grid grid-cols-[1.6fr_repeat(3,1fr)] items-center border-b border-black/5 last:border-0",
                rowIndex % 2 === 1 && "bg-black/[0.015]"
              )}
            >
              <div className="p-4 text-sm font-medium">{feature.label}</div>
              {feature.included.map((included, colIndex) => (
                <div
                  key={colIndex}
                  className={cn(
                    "flex justify-center p-4",
                    durationPackages[colIndex].popular && "bg-primary/5"
                  )}
                >
                  {included ? (
                    <Check className="h-5 w-5 text-success" />
                  ) : (
                    <Minus className="h-5 w-5 text-black/20" />
                  )}
                </div>
              ))}
            </div>
          ))}

          {/* CTAs */}
          <div className="grid grid-cols-[1.6fr_repeat(3,1fr)] border-t border-black/10 bg-white">
            <div className="hidden p-4 sm:block" />
            {durationPackages.map((pkg) => (
              <div
                key={pkg.duration}
                className={cn("p-4", pkg.popular && "bg-primary/5")}
              >
                <Button
                  asChild
                  size="sm"
                  variant={pkg.popular ? "primary" : "outline-dark"}
                  className="w-full"
                >
                  <Link href="/booking">Reservar</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
