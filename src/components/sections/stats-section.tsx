import { Users, ThumbsUp, CalendarCheck, Bus } from "lucide-react";

const stats = [
  { icon: Users, value: "200k+", label: "Clientes satisfeitos" },
  { icon: ThumbsUp, value: "94%", label: "Recomendam o tour" },
  { icon: CalendarCheck, value: "365", label: "Dias de operação por ano" },
  { icon: Bus, value: "14", label: "Paradas pelo centro de Dublin" },
];

export function StatsSection() {
  return (
    <section className="bg-primary text-white">
      <div className="container-page grid grid-cols-2 gap-8 py-12 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center">
            <stat.icon className="h-8 w-8 text-secondary" />
            <span className="mt-3 text-3xl font-extrabold sm:text-4xl">{stat.value}</span>
            <span className="mt-1 text-sm text-white/80">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
