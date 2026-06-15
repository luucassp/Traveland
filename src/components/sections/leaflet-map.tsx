"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { busStops } from "@/lib/tours";
import { useLanguage } from "@/lib/i18n/context";
import { localize } from "@/lib/i18n/translations";

const stopIcon = L.divIcon({
  className: "",
  html: `<div style="display:flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:9999px;background:#D32F2F;color:white;font-weight:700;font-size:12px;border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.3);">●</div>`,
  iconSize: [28, 28],
  iconAnchor: [14, 14],
});

export function LeafletMap() {
  const center: [number, number] = [53.347, -6.273];
  const { locale, t } = useLanguage();

  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {busStops.map((stop) => (
        <Marker key={stop.number} position={[stop.lat, stop.lng]} icon={stopIcon}>
          <Popup>
            <strong>
              {stop.number}. {stop.name}
            </strong>
            <br />
            {localize(stop.description, locale)}
            <br />
            {t.routeMap.nextDeparture}: {stop.nextDeparture}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
