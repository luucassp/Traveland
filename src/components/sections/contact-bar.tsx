import { MapPin, Phone, Mail } from "lucide-react";

export function ContactBar() {
  return (
    <section className="bg-[#1a1a1a] text-white">
      <div className="container-page grid gap-6 py-10 sm:grid-cols-3">
        <div className="flex items-start gap-3">
          <MapPin className="h-6 w-6 shrink-0 text-secondary" />
          <div>
            <p className="font-semibold">Ponto de partida</p>
            <p className="text-sm text-white/70">Upper O&apos;Connell Street, Dublin 1</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Phone className="h-6 w-6 shrink-0 text-secondary" />
          <div>
            <p className="font-semibold">Atendimento</p>
            <p className="text-sm text-white/70">+353 1 234 5678 · 08h às 19h</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Mail className="h-6 w-6 shrink-0 text-secondary" />
          <div>
            <p className="font-semibold">E-mail</p>
            <p className="text-sm text-white/70">info@citysightseeingdublin.ie</p>
          </div>
        </div>
      </div>
    </section>
  );
}
