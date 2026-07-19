import type { Metadata } from "next";
import Link from "next/link";
import { districts } from "@/lib/districts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBlock } from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Hizmet Bölgeleri — Muğla'nın 13 İlçesi",
  description:
    "Muğla'nın 13 ilçesine oto tamir hizmeti: Menteşe, Bodrum, Marmaris, Fethiye, Milas ve tümü. Ulaşım süreleri ve bölge notları. Tel: 0507 921 33 88.",
  alternates: { canonical: "/bolgeler" },
};

export default function BolgelerPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-10">
      <Breadcrumbs crumbs={[{ name: "Ana Sayfa", href: "/" }, { name: "Bölgeler", href: "/bolgeler" }]} />

      <header>
        <h1 className="font-display text-4xl font-bold uppercase text-steel-100">
          Hizmet Bölgelerimiz: Muğla&apos;nın 13 İlçesi
        </h1>
        <p className="mt-3 max-w-2xl text-steel-400">
          Atölyemiz Menteşe&apos;de, Muğla Sanayi Sitesi&apos;nde — il yollarının kavşak
          noktasında. Her ilçenin araç profili farklı: sayfalarda ulaşım bilgisi, bölgeye özgü
          servis notları ve sık sorulan soruları bulursunuz.
        </p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {districts.map((d) => (
          <Link
            key={d.slug}
            href={`/bolgeler/${d.slug}`}
            className="rounded border border-steel-800 bg-steel-900 p-5 transition-colors hover:border-amber-500"
          >
            <div className="flex items-baseline justify-between">
              <h2 className="font-display text-xl font-bold uppercase text-steel-100">{d.name}</h2>
              <span className="tabular text-xs text-steel-400">
                {d.ulasim.km} · {d.ulasim.sure}
              </span>
            </div>
            <p className="mt-2 text-sm text-steel-400">{d.senaryo.split(":")[0].split(".")[0]}.</p>
            <p className="mt-3 text-sm font-semibold uppercase text-amber-500">
              {d.name} sayfası →
            </p>
          </Link>
        ))}
      </div>

      <CtaBlock
        title="İlçenizden gelmeden önce arayın"
        text="Uzaktan gelen müşteriye kuralımız: telefonda ön teşhis, parça ön hazırlığı, randevu saatinde başlangıç. Boşa yol yaptırmayız."
      />
    </div>
  );
}
