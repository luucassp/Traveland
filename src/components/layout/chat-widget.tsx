"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

const quickReplies = [
  "Como funciona o tour?",
  "Posso cancelar a reserva?",
  "Qual o idioma do guia?",
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      {/* Botão flutuante — fica acima da barra de reserva no mobile */}
      <button
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Fechar chat" : "Abrir chat ao vivo"}
        className="fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        {!open && (
          <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-success" />
          </span>
        )}
      </button>

      {open && (
        <div className="fixed bottom-36 right-4 z-50 flex w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl sm:bottom-24 sm:right-6">
          <div className="flex items-center gap-3 bg-primary p-4 text-white">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
              <MessageCircle className="h-5 w-5" />
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-primary bg-success" />
            </div>
            <div>
              <p className="text-sm font-semibold">{t.chat.title}</p>
              <p className="text-xs text-white/80">{t.chat.online} · responde em minutos</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 bg-[#fafafa] p-4">
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-sm shadow-sm">
              Olá! 👋 Como podemos ajudar com a sua visita a Dublin?
            </div>

            <div className="flex flex-wrap gap-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  className="rounded-full border border-primary/30 bg-white px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/5"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 border-t border-black/10 p-3">
            <input
              type="text"
              placeholder="Escreva sua mensagem..."
              className="flex-1 rounded-full border border-black/10 px-3 py-2 text-sm focus:border-primary focus:outline-none"
            />
            <button
              aria-label="Enviar mensagem"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white hover:bg-primary-dark"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
