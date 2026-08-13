import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { LeafletMap } from "@/components/sections/leaflet-map-loader";

export default function ContactPage() {
  return (
    <div className="container-page py-12">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Contato</h1>
        <p className="mt-3 text-text-secondary">
          Tem alguma dúvida, sugestão ou precisa de ajuda com sua reserva? Fale com a
          nossa equipe.
        </p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[3fr_2fr]">
        <div className="h-[360px] overflow-hidden rounded-2xl border border-black/5 shadow-sm">
          <LeafletMap />
        </div>

        <div className="grid gap-4">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-semibold">Endereço</p>
              <p className="text-sm text-text-secondary">
                Upper O&apos;Connell Street, Dublin 1, Irlanda
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-semibold">Telefone</p>
              <p className="text-sm text-text-secondary">+353 1 234 5678</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-semibold">E-mail</p>
              <p className="text-sm text-text-secondary">hello@traveland.ie</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-semibold">Horário de atendimento</p>
              <p className="text-sm text-text-secondary">Todos os dias, das 08h às 19h</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-2xl">
        <h2 className="text-xl font-bold">Envie uma mensagem</h2>
        <div className="mt-4">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
