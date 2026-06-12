import Image from "next/image";
import { busStops } from "@/lib/tours";
import { LeafletMap } from "@/components/sections/leaflet-map-loader";

export function RouteMap() {
  return (
    <section className="container-page py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Mapa das Paradas</h2>
        <p className="mt-3 text-text-secondary">
          Clique em uma parada no mapa ou na lista para ver detalhes e o próximo horário.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[3fr_2fr]">
        <div className="h-[420px] overflow-hidden rounded-2xl border border-black/5 shadow-sm">
          <LeafletMap />
        </div>

        <div className="flex max-h-[420px] flex-col gap-3 overflow-y-auto pr-1">
          {busStops.map((stop) => (
            <div
              key={stop.number}
              className="flex gap-3 rounded-xl border border-black/5 bg-white p-3 shadow-sm"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                <Image src={stop.image} alt={stop.name} fill sizes="64px" className="object-cover" />
                <span className="absolute left-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  {stop.number}
                </span>
              </div>
              <div className="flex-1">
                <p className="font-semibold">{stop.name}</p>
                <p className="text-sm text-text-secondary line-clamp-2">
                  {stop.description}
                </p>
                <p className="mt-1 text-xs font-medium text-primary">
                  Próximo horário: {stop.nextDeparture}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
