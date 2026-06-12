"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Globe, Bus } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/tours", label: "Tours" },
  { href: "/bus-stops", label: "Paradas" },
  { href: "/tickets", label: "Bilhetes" },
  { href: "/about", label: "Sobre" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-black/5">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-extrabold text-lg">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white">
            <Bus className="h-5 w-5" />
          </span>
          <span>
            City <span className="text-primary">Sightseeing</span> Dublin
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            <Globe className="h-4 w-4" />
            EN
          </button>
          <Button asChild size="sm">
            <Link href="/booking">Book Now</Link>
          </Button>
        </div>

        <button
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-black/10"
          onClick={() => setOpen((value) => !value)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-black/5 bg-white">
          <nav className="container-page flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-black/5 hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2 w-full">
              <Link href="/booking">Book Now</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
