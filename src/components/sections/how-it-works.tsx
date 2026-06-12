import { Ticket, MapPin, Bus as BusIcon } from "lucide-react";

const steps = [
  {
    icon: Ticket,
    title: "1. Compre seu bilhete",
    description: "Escolha o tour ideal e reserve online em poucos cliques, com confirmação imediata.",
  },
  {
    icon: MapPin,
    title: "2. Embarque em qualquer parada",
    description: "Vá até qualquer uma das 14 paradas espalhadas pelo centro de Dublin.",
  },
  {
    icon: BusIcon,
    title: "3. Suba e desça quantas vezes quiser",
    description: "Explore as atrações no seu próprio ritmo durante 24h ou 48h.",
  },
];

export function HowItWorks() {
  return (
    <section className="container-page py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Como funciona</h2>
        <p className="mt-3 text-text-secondary">
          Simples, rápido e sem complicação. Veja como aproveitar Dublin em 3 passos.
        </p>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-3">
        {steps.map((step) => (
          <div key={step.title} className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <step.icon className="h-8 w-8" />
            </div>
            <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
