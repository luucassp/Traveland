"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Currency = "EUR" | "USD" | "GBP";

export const currencies: Currency[] = ["EUR", "USD", "GBP"];

export const currencySymbols: Record<Currency, string> = {
  EUR: "€",
  USD: "$",
  GBP: "£",
};

// Taxas de conversão aproximadas a partir do EUR (preços base do site)
export const exchangeRates: Record<Currency, number> = {
  EUR: 1,
  USD: 1.08,
  GBP: 0.85,
};

type CurrencyContextValue = {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  convert: (eurAmount: number) => number;
  format: (eurAmount: number) => string;
};

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

const STORAGE_KEY = "csd-currency";

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>("EUR");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Currency | null;
    if (stored && stored in exchangeRates) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from localStorage on mount
      setCurrencyState(stored);
    }
  }, []);

  function setCurrency(next: Currency) {
    setCurrencyState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  function convert(eurAmount: number) {
    return eurAmount * exchangeRates[currency];
  }

  function format(eurAmount: number) {
    const value = convert(eurAmount);
    const rounded = Number.isInteger(value) ? value : value.toFixed(2);
    return `${currencySymbols[currency]}${rounded}`;
  }

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convert, format }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}
