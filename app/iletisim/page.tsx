import type { Metadata } from "next";
import { site } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "./ContactForm";
import { SchemaScript } from "@/components/SchemaScript";
import { autoRepairSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "İletişim ve Yol Tarifi",
  description:
    "Gökhan Oto Muğla iletişim: Muğla Sanayi Sitesi, Menteşe. Telefon 0507 921 33 88, WhatsApp ve yol tarifi. Pazartesi-Cumartesi açığız.",
  alternates: { canonical: "/iletisim" },
};

export default function IletisimPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-10">
      <SchemaScript data={autoRepairSchema()} />
      <Breadcrumbs
        crumbs={[
          { name: "Ana Sayfa", href: "/" },
          { name: "İletişim", href: "/iletisim" },
        ]}
      />

      <header>
        <h1 className="font-display text-3xl font-bold uppercase text-steel-100 sm:text-4xl">
          İletişim ve Yol Tarifi
        </h1>
        <p className="mt-3 max-w-2xl text-steel-400">
          En hızlı yol telefon: belirtiyi anlatın, gerçekçi ön değerlendirme alın. Yazmayı
          tercih ederseniz aşağıdaki formu doldurun — bilgileriniz hazır mesaj olarak
          WhatsApp&apos;a taşınır.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-2">
        <section className="space-y-6">
          <div className="rounded border border-steel-800 bg-steel-900 p-6">
            <h2 className="font-display text-lg font-bold uppercase text-steel-100">
              {site.schemaName}
            </h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-wider text-steel-400">Adres</dt>
                <dd className="mt-0.5 text-steel-100">{site.addressFull}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-steel-400">Telefon / WhatsApp</dt>
                <dd className="mt-0.5">
                  <a href={site.telHref} data-cta="phone" className="tabular font-display text-xl font-bold text-amber-500 hover:text-amber-300">
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-steel-400">Çalışma saatleri</dt>
                <dd className="mt-0.5 text-steel-100">{site.hours.text}</dd>
              </div>
            </dl>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={site.whatsappHref}
                data-cta="whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-steel-700 px-4 py-2 text-sm font-bold uppercase text-steel-100 hover:border-amber-500"
              >
                WhatsApp
              </a>
              <a
                href={site.mapsUrl}
                data-cta="directions"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-steel-700 px-4 py-2 text-sm font-bold uppercase text-steel-100 hover:border-amber-500"
              >
                Yol Tarifi (Google Maps)
              </a>
            </div>
          </div>

          {/* Harita: iframe embed — koordinat netleşince plus-code ile güncellenebilir */}
          <div className="overflow-hidden rounded border border-steel-800">
            <iframe
              title="Atölye konumu — Muğla Sanayi Sitesi"
              src={`https://www.google.com/maps?q=${site.geo.lat},${site.geo.lng}&z=15&output=embed`}
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold uppercase text-steel-100">
            Formu doldurun, WhatsApp&apos;tan gönderin
          </h2>
          <div className="mt-4">
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  );
}
