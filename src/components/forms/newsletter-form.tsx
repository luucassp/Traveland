"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="mt-4 flex items-center gap-2 text-sm text-success">
        <Check className="h-4 w-4" />
        Inscrição confirmada! Em breve você receberá nossas novidades.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
      <input
        required
        type="email"
        name="email"
        placeholder="Seu melhor e-mail"
        className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-secondary focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Inscrever-se na newsletter"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-dark"
      >
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
