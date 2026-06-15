"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export function NewsletterSection() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      className="relative overflow-hidden py-20 px-6"
      style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)" }}
    >
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[rgba(230,57,70,0.15)] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-[rgba(230,57,70,0.2)] border border-[rgba(230,57,70,0.4)] px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-red-400 text-xs font-semibold uppercase tracking-wide">
            {t.home.newsletter.badge}
          </span>
        </div>
        <h2 className="text-4xl font-extrabold text-white leading-tight mb-4">
          {t.home.newsletter.title}
        </h2>
        <p className="text-white/60 mb-8">{t.home.newsletter.subtitle}</p>

        {submitted ? (
          <p className="flex items-center justify-center gap-2 text-sm text-success">
            <Check className="h-4 w-4" />
            {t.footer.newsletterSuccess}
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto flex-wrap justify-center">
            <input
              required
              type="email"
              name="email"
              placeholder={t.home.newsletter.placeholder}
              className="flex-1 min-w-[220px] px-5 py-3 rounded-full border-2 border-white/15 bg-white/10 text-white outline-none backdrop-blur placeholder:text-white/40 focus:border-primary"
            />
            <button
              type="submit"
              className="px-7 py-3 rounded-full bg-primary hover:bg-[#c1121f] text-white font-bold transition-colors"
            >
              {t.home.newsletter.button}
            </button>
          </form>
        )}
        <p className="text-white/35 text-xs mt-4">{t.home.newsletter.disclaimer}</p>
      </div>
    </section>
  );
}
