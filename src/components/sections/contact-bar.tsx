"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export function ContactBar() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#1a1a1a] text-white">
      <div className="container-page grid gap-6 py-10 sm:grid-cols-3">
        <div className="flex items-start gap-3">
          <MapPin className="h-6 w-6 shrink-0 text-secondary" />
          <div>
            <p className="font-semibold">{t.contactBar.startingPoint}</p>
            <p className="text-sm text-white/70">{t.contactBar.startingPointAddress}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Phone className="h-6 w-6 shrink-0 text-secondary" />
          <div>
            <p className="font-semibold">{t.contactBar.support}</p>
            <p className="text-sm text-white/70">{t.contactBar.supportHours}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Mail className="h-6 w-6 shrink-0 text-secondary" />
          <div>
            <p className="font-semibold">{t.contactBar.email}</p>
            <p className="text-sm text-white/70">info@citysightseeingdublin.ie</p>
          </div>
        </div>
      </div>
    </section>
  );
}
