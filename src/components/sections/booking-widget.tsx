"use client";

import { useMemo, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function BookingWidget({ price }: { price: number }) {
  const [date, setDate] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const total = useMemo(() => price * adults, [price, adults]);

  return (
    <Card className="sticky top-24 border-black/10">
      <CardContent>
        <p className="text-sm text-text-secondary">A partir de</p>
        <p className="text-3xl font-extrabold text-primary">€{price}</p>
        <p className="text-sm text-text-secondary">por adulto</p>

        <div className="mt-4 flex flex-col gap-3">
          <label className="text-sm font-semibold">
            Data do passeio
            <input
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 text-sm focus:border-primary focus:outline-none"
            />
          </label>

          <div className="flex items-center justify-between rounded-lg border border-black/10 px-3 py-2">
            <span className="text-sm font-semibold">Adultos</span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Diminuir adultos"
                onClick={() => setAdults((value) => Math.max(1, value - 1))}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 hover:bg-black/5"
              >
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="w-4 text-center text-sm font-semibold">{adults}</span>
              <button
                type="button"
                aria-label="Aumentar adultos"
                onClick={() => setAdults((value) => value + 1)}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 hover:bg-black/5"
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-black/10 px-3 py-2">
            <div>
              <span className="text-sm font-semibold">Crianças</span>
              <p className="text-xs text-text-secondary">Grátis até 13 anos</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Diminuir crianças"
                onClick={() => setChildren((value) => Math.max(0, value - 1))}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 hover:bg-black/5"
              >
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="w-4 text-center text-sm font-semibold">{children}</span>
              <button
                type="button"
                aria-label="Aumentar crianças"
                onClick={() => setChildren((value) => value + 1)}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 hover:bg-black/5"
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-4">
          <span className="text-sm font-semibold">Total</span>
          <span className="text-xl font-extrabold">€{total}</span>
        </div>

        <Button className="mt-4 w-full" size="lg">
          Reservar Agora
        </Button>
        <p className="mt-2 text-center text-xs text-text-secondary">
          Cancelamento gratuito até 24h antes do passeio
        </p>
      </CardContent>
    </Card>
  );
}
