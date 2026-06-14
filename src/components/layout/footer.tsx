import Link from "next/link";
import { Bus, Share2, Camera, AtSign, MapPin, Phone, Mail, Mailbox } from "lucide-react";
import { NewsletterForm } from "@/components/forms/newsletter-form";

const columns = [
  {
    title: "Tours",
    links: [
      { href: "/tours/bus-tour", label: "Hop-On Hop-Off" },
      { href: "/tours/river-cruise", label: "Liffey River Cruise" },
      { href: "/tours/bike-tour", label: "Bike Tour" },
      { href: "/tours/howth-tour", label: "Howth Coastal Tour" },
      { href: "/tours/evening-tour", label: "Dublin by Night" },
      { href: "/tours/walking-tour", label: "Walking Tour" },
    ],
  },
  {
    title: "Informações",
    links: [
      { href: "/bus-stops", label: "Paradas do Bus" },
      { href: "/tickets", label: "Bilhetes & Preços" },
      { href: "/faq", label: "Perguntas Frequentes" },
      { href: "/about", label: "Sobre Nós" },
      { href: "/blog", label: "Blog" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="container-page flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/20 text-secondary">
              <Mailbox className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold">Receba ofertas exclusivas</h3>
              <p className="text-sm text-white/60">
                Dicas de Dublin e promoções dos nossos tours direto no seu e-mail.
              </p>
            </div>
          </div>
          <div className="w-full md:max-w-sm">
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="container-page grid gap-10 py-12 md:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2 font-extrabold text-lg">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white">
              <Bus className="h-5 w-5" />
            </span>
            <span>
              City <span className="text-secondary">Sightseeing</span> Dublin
            </span>
          </Link>
          <p className="mt-4 text-sm text-white/60 leading-relaxed">
            Explore Dublin no seu próprio ritmo com nossos tours hop-on hop-off,
            passeios de bike, caminhadas históricas e muito mais.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors"
            >
              <Share2 className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors"
            >
              <Camera className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors"
            >
              <AtSign className="h-4 w-4" />
            </a>
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="font-semibold text-white">{column.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-secondary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="font-semibold text-white">Contato</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
              <span>Upper O&apos;Connell Street, Dublin 1, Irlanda</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-secondary" />
              <span>+353 1 234 5678</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-secondary" />
              <span>info@citysightseeingdublin.ie</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-2 py-4 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} City Sightseeing Dublin. Todos os direitos reservados.</p>
          <p>Demo site — Redesign &amp; Modernização</p>
        </div>
      </div>
    </footer>
  );
}
