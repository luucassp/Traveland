"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

export function MobileBookBar() {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.06)] sm:hidden">
      <Link
        href="/booking"
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-white"
      >
        {t.mobileBookBar.cta}
        <span className="font-normal text-white/80">€18</span>
      </Link>
    </div>
  );
}
