"use client";

import dynamic from "next/dynamic";

export const LeafletMap = dynamic(
  () => import("@/components/sections/leaflet-map").then((mod) => mod.LeafletMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center bg-black/5 text-sm text-text-secondary">
        Carregando mapa...
      </div>
    ),
  }
);
