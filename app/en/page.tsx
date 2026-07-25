import type { Metadata } from "next";
import { site } from "@/lib/site-config";
import { SchemaScript } from "@/components/SchemaScript";
import { autoRepairSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Car Repair in Muğla, Türkiye — Breakdown Help | Gökhan Oto",
  },
  description:
    "Car repair service in Muğla, Türkiye: breakdown assistance for tourists and rental cars, AC repair, diagnostics. English spoken. Call or WhatsApp +90 507 921 33 88.",
  alternates: {
    canonical: "/en",
    languages: { tr: "/", en: "/en", "x-default": "/" },
  },
  // og:image dosya konvansiyonundan gelir; locale'i İngilizce'ye çevir.
  openGraph: {
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

export default function EnglishPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-10 px-4 py-12" lang="en">
      <SchemaScript data={autoRepairSchema()} />
      <header>
        <p className="font-display text-sm font-bold uppercase tracking-widest text-amber-500">
          Muğla Industrial Zone (Sanayi Sitesi) · Menteşe
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold uppercase leading-tight text-steel-100 sm:text-5xl">
          Car repair service in Muğla — breakdown assistance for tourists &amp; rental cars
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-steel-400">
          Broke down on your way to Bodrum, Marmaris, Fethiye or Dalaman Airport? We are a
          full-service auto repair workshop in central Muğla with {site.tecrube}+ years of
          experience. Basic English spoken — WhatsApp works great with translation apps too.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={site.telHref}
            data-cta="phone"
            className="tabular rounded bg-amber-500 px-6 py-3.5 font-display text-lg font-bold uppercase text-steel-950 hover:bg-amber-300"
          >
            +90 507 921 33 88
          </a>
          <a
            href={site.whatsappHrefEn}
            data-cta="whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-steel-700 px-6 py-3.5 font-display text-lg font-bold uppercase text-steel-100 hover:border-amber-500"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <section>
        <h2 className="font-display text-2xl font-bold uppercase text-steel-100">
          What we do
        </h2>
        <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {[
            "Breakdown diagnosis & repair",
            "Engine, brakes, clutch & gearbox",
            "Air conditioning repair & regas",
            "Auto electrics & computer diagnostics",
            "Pre-trip / long-drive checks",
            "Tow truck coordination across Muğla",
          ].map((item) => (
            <li key={item} className="flex gap-3 rounded border border-steel-800 bg-steel-900 p-3 text-sm text-steel-100">
              <span aria-hidden className="text-amber-500">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded border-l-4 border-amber-500 bg-steel-900 p-6">
        <h2 className="font-display text-lg font-bold uppercase text-amber-300">
          Driving a rental car?
        </h2>
        <p className="mt-2 leading-relaxed text-steel-100">
          Call your rental company first — repairs usually need their approval. Then call or
          WhatsApp us: we regularly work with rental agencies, can speak to them in Turkish
          on your behalf, and invoice the company directly. You get back on the road; the
          paperwork is our problem.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-steel-400">
        <h2 className="font-display text-2xl font-bold uppercase text-steel-100">
          Broke down on the road?
        </h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Move the car to a safe spot, hazard lights on, warning triangle out.</li>
          <li>Send us your live location on WhatsApp with the car make/model.</li>
          <li>We arrange a trusted tow truck and prioritise your car at the workshop.</li>
        </ol>
        <p>
          Location: {site.addressFull} — 5 minutes from Muğla city centre, on the main
          D400/D330 junction between Marmaris, Bodrum and Fethiye roads. Working hours:
          Monday–Saturday 08:30–19:00; out of hours, leave a WhatsApp message.
        </p>
      </section>
    </div>
  );
}
