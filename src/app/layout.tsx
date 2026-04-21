import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileWhatsAppButton } from "@/components/MobileWhatsAppButton";

export const metadata: Metadata = {
  title: "MONART İnşaat ve Mimarlık | Modern Mimari Çözümler",
  description: "MONART Mimarlık, mimari tasarım, uygulama ve proje yönetimi alanlarında 2021'den bu yana hizmet vermektedir. Konut, renovasyon ve anahtar teslim projeler.",
  keywords: "mimarlık, inşaat, renovasyon, anahtar teslim, İstanbul, MONART",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <MobileWhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
