import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileWhatsAppButton } from "@/components/MobileWhatsAppButton";

const siteUrl = "https://www.monartmimarlik.com";
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MONART İnşaat ve Mimarlık",
  alternateName: "Monart Mimarlık",
  url: siteUrl,
  email: "monartyapimimarlik@gmail.com",
  telephone: "+90 543 960 71 46",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Çeliktepe Mahallesi Buhara Sokak No: 11/8",
    addressLocality: "Kağıthane",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  sameAs: ["https://instagram.com/monart.mimarlik"],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MONART İnşaat ve Mimarlık | Modern Mimari Çözümler",
    template: "%s | MONART İnşaat ve Mimarlık",
  },
  description: "MONART Mimarlık, mimari tasarım, uygulama ve proje yönetimi alanlarında 2021'den bu yana hizmet vermektedir. Konut, renovasyon ve anahtar teslim projeler.",
  keywords: "mimarlık, inşaat, renovasyon, anahtar teslim, İstanbul, MONART",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MONART İnşaat ve Mimarlık | Modern Mimari Çözümler",
    description:
      "MONART Mimarlık; mimari tasarım, uygulama ve proje yönetimi alanlarında hizmet verir.",
    url: siteUrl,
    siteName: "MONART Mimarlik",
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
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
