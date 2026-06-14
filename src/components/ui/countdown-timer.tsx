"use client";

import { useEffect, useState } from "react";
import { Timer } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

function getMidnight() {
  const target = new Date();
  target.setHours(24, 0, 0, 0);
  return target;
}

function getTimeLeft() {
  const diff = getMidnight().getTime() - Date.now();
  const totalSeconds = Math.max(0, Math.floor(diff / 1000));

  return {
    hours: Math.floor(totalSeconds / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function pad(value: number) {
  return value.toString().padStart(2, "0");
}

export function CountdownTimer() {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number } | null>(
    null
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- initialize timer value after mount to avoid SSR/client time mismatch
    setTimeLeft(getTimeLeft());
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) {
    return null;
  }

  return (
    <div className="inline-flex items-center gap-3 rounded-full bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
      <Timer className="h-4 w-4" />
      <span>{t.promo.title}</span>
      <span className="flex items-center gap-1 font-mono tabular-nums">
        <span className="rounded bg-primary px-1.5 py-0.5 text-white">{pad(timeLeft.hours)}</span>:
        <span className="rounded bg-primary px-1.5 py-0.5 text-white">{pad(timeLeft.minutes)}</span>:
        <span className="rounded bg-primary px-1.5 py-0.5 text-white">{pad(timeLeft.seconds)}</span>
      </span>
    </div>
  );
}
