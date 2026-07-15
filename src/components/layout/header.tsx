"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Globe, Check, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/context";
import { locales, localeNames, type Locale } from "@/lib/i18n/translations";
import { useCurrency } from "@/lib/currency/context";
import { currencies, type Currency } from "@/lib/currency/context";

export function Header() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();
  const { currency, setCurrency } = useCurrency();

  const navLinks = [
    { href: "/tours", label: t.nav.tours },
    { href: "/bus-stops", label: t.nav.busStops },
    { href: "/tickets", label: t.nav.tickets },
    { href: "/about", label: t.nav.about },
    { href: "/blog", label: t.nav.blog },
    { href: "/faq", label: t.nav.faq },
    { href: "/contact", label: t.nav.contact },
  ];

  function selectLocale(value: Locale) {
    setLocale(value);
    setLangOpen(false);
  }

  function selectCurrency(value: Currency) {
    setCurrency(value);
    setCurrencyOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-black/5">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://bucket-static-files.city-sightseeing.com/static-images/webp/logo-city-sightseeing.png"
            alt="City Sightseeing Dublin"
            width={180}
            height={44}
            priority
            className="h-10 w-auto"
          />
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
          <div className="relative">
            <button
              onClick={() => setLangOpen((value) => !value)}
              className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
            >
              <Globe className="h-4 w-4" />
              {locale.toUpperCase()}
            </button>
            {langOpen && (
              <ul
                role="listbox"
                className="absolute right-0 top-full mt-2 w-44 rounded-lg border border-black/10 bg-white py-1 text-sm shadow-lg"
              >
                {locales.map((value) => (
                  <li key={value}>
                    <button
                      onClick={() => selectLocale(value)}
                      className="flex w-full items-center justify-between gap-2 px-3 py-2 text-left hover:bg-black/5"
                    >
                      <span>{localeNames[value]}</span>
                      {value === locale && <Check className="h-4 w-4 text-primary" />}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => setCurrencyOpen((value) => !value)}
              className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              aria-haspopup="listbox"
              aria-expanded={currencyOpen}
              aria-label={t.currency.label}
            >
              <Coins className="h-4 w-4" />
              {currency}
            </button>
            {currencyOpen && (
              <ul
                role="listbox"
                className="absolute right-0 top-full mt-2 w-28 rounded-lg border border-black/10 bg-white py-1 text-sm shadow-lg"
              >
                {currencies.map((value) => (
                  <li key={value}>
                    <button
                      onClick={() => selectCurrency(value)}
                      className="flex w-full items-center justify-between gap-2 px-3 py-2 text-left hover:bg-black/5"
                    >
                      <span>{value}</span>
                      {value === currency && <Check className="h-4 w-4 text-primary" />}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Button asChild size="sm">
            <Link href="/booking">{t.nav.bookNow}</Link>
          </Button>
        </div>

        <button
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-black/10"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
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
            <div className="mt-2 flex flex-wrap gap-2 px-3">
              {locales.map((value) => (
                <button
                  key={value}
                  onClick={() => selectLocale(value)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    value === locale
                      ? "bg-primary text-white"
                      : "border border-black/10 text-text-secondary"
                  }`}
                >
                  {value.toUpperCase()}
                </button>
              ))}
            </div>
            <div className="mt-2 flex flex-wrap gap-2 px-3">
              {currencies.map((value) => (
                <button
                  key={value}
                  onClick={() => selectCurrency(value)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    value === currency
                      ? "bg-primary text-white"
                      : "border border-black/10 text-text-secondary"
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
            <Button asChild className="mt-2 w-full">
              <Link href="/booking">{t.nav.bookNow}</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
