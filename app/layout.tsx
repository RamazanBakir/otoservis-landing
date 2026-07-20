import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { site } from "@/lib/site-config";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { WhatsAppBubble } from "@/components/WhatsAppBubble";

// next/font: build sırasında indirilir, self-hosted servis edilir — CDN isteği yok.
const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  variable: "--font-archivo",
  weight: ["700"],
  // "optional": fallback ölçüleri Next tarafından eşlenir (CLS 0), yavaş
  // bağlantıda font swap'ı LCP'yi geciktirmez.
  display: "optional",
  adjustFontFallback: true,
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const GA_ID = process.env.NEXT_PUBLIC_GA4_ID;
const GSC = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

export const viewport: Viewport = {
  themeColor: "#15181c",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Muğla Oto Tamir ve Servis | ${site.titleBrand}`,
    template: `%s | ${site.titleBrand}`,
  },
  description:
    "Muğla Sanayi Sitesi'nde oto tamir, bakım ve arıza tespiti. 20 yıllık tecrübe, önce fiyat sonra işlem. Hemen arayın: 0507 921 33 88.",
  ...(GSC ? { verification: { google: GSC } } : {}),
  // og:image dosya konvansiyonuyla gelir: app/opengraph-image.tsx
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: site.titleBrand,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${archivo.variable} ${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileActionBar />
        <WhatsAppBubble />

        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');
              // Tıkla-ara / WhatsApp / yol tarifi event'leri (data-cta delegasyonu)
              document.addEventListener('click',function(e){var a=e.target&&e.target.closest&&e.target.closest('[data-cta]');if(a){gtag('event','cta_click',{cta_type:a.getAttribute('data-cta'),page_path:location.pathname});}});`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
