"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-success/30 bg-success/10 p-6 text-center">
        <p className="font-semibold text-success">Mensagem enviada com sucesso!</p>
        <p className="mt-1 text-sm text-text-secondary">
          Em breve nossa equipe entrará em contato com você.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold">
          Nome
          <input
            required
            type="text"
            name="name"
            className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 text-sm focus:border-primary focus:outline-none"
          />
        </label>
        <label className="text-sm font-semibold">
          E-mail
          <input
            required
            type="email"
            name="email"
            className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 text-sm focus:border-primary focus:outline-none"
          />
        </label>
      </div>
      <label className="text-sm font-semibold">
        Assunto
        <input
          required
          type="text"
          name="subject"
          className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 text-sm focus:border-primary focus:outline-none"
        />
      </label>
      <label className="text-sm font-semibold">
        Mensagem
        <textarea
          required
          name="message"
          rows={5}
          className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 text-sm focus:border-primary focus:outline-none"
        />
      </label>
      <Button type="submit" size="lg" className="w-full sm:w-fit">
        Enviar mensagem
      </Button>
    </form>
  );
}
