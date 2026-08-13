import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ChatWidget } from "@/components/layout/chat-widget";
import { MobileBookBar } from "@/components/layout/mobile-book-bar";
import { LanguageProvider } from "@/lib/i18n/context";
import { CurrencyProvider } from "@/lib/currency/context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Traveland | Dublin Hop-On Hop-Off Tours",
  description:
    "Explore Dublin with hop-on hop-off bus tours, bike tours, night tours and historical walking tours. Book online at the best prices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pb-16 sm:pb-0">
        <LanguageProvider>
          <CurrencyProvider>
            <TopBar />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ChatWidget />
            <MobileBookBar />
          </CurrencyProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
