import type { Metadata } from "next";
import { site } from "@/lib/site-config";
import { MobileActionBar } from "@/components/MobileActionBar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { getService } from "@/lib/services";

export const metadata: Metadata = {
  title: "Yolda mı Kaldınız? Muğla Oto Kurtarma",
  description:
    "Muğla'da yolda kaldınız mı? Tek arama: telefonla ön teşhis + çekici yönlendirmesi + öncelikli onarım. 0507 921 33 88 — kaydedin, aramaya bir dokunuş uzaktasınız.",
  alternates: { canonical: "/yolda-kaldim" },
};

/** Acil sayfa: dekoratif hiçbir şey yok — ilk ekranda aranabilirlik. */
export default function YoldaKaldimPage() {
  const kurtarma = getService("oto-kurtarma");

  return (
    <>
      <div className="mx-auto max-w-3xl space-y-10 px-4 py-8 pb-28">
        <Breadcrumbs
          crumbs={[
            { name: "Ana Sayfa", href: "/" },
            { name: "Yolda Kaldım", href: "/yolda-kaldim" },
          ]}
        />

        <header>
          <h1 className="font-display text-3xl font-bold uppercase leading-tight text-steel-100 sm:text-5xl">
            Yolda mı kaldınız? <span className="text-amber-500">Önce bizi arayın.</span>
          </h1>

          {/* Büyük tıkla-ara — ilk ekranın merkezi */}
          <a
            href={site.telHref}
            data-cta="phone"
            className="tabular mt-6 flex items-center justify-center rounded bg-amber-500 px-6 py-6 font-display text-3xl font-bold text-steel-950 transition-colors hover:bg-amber-300 sm:text-4xl"
          >
            {site.phoneDisplay}
          </a>
          <p className="mt-3 text-center text-sm text-steel-400">
            Çalışma saatleri: {site.hours.text} · Mesai dışında WhatsApp&apos;a konum bırakın
          </p>
        </header>

        <section className="rounded border border-steel-800 bg-steel-900 p-5">
          <h2 className="font-display text-lg font-bold uppercase text-steel-100">
            WhatsApp&apos;tan konum gönderin
          </h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-steel-400">
            <li>Aşağıdaki butonla WhatsApp sohbetini açın.</li>
            <li>Ataç (+) → Konum → &quot;Mevcut konumu gönder&quot; deyin.</li>
            <li>Kısaca yazın: araç marka/model + belirti (ör. &quot;hararet yaptı, durdum&quot;).</li>
          </ol>
          <a
            href={site.whatsappHrefAcil}
            data-cta="whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block rounded border border-amber-500 py-3 text-center font-display font-bold uppercase text-amber-500 transition-colors hover:bg-amber-500 hover:text-steel-950"
          >
            WhatsApp&apos;ta konum paylaş
          </a>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold uppercase text-steel-100">
            Çekici hizmet alanı ve tahmini süreler
          </h2>
          <ul className="mt-3 divide-y divide-steel-800 border-y border-steel-800 text-sm">
            {[
              ["Menteşe ve çevresi", "15-30 dk"],
              ["Ula, Yatağan, Gökova kavşağı", "30-45 dk"],
              ["Köyceğiz, Milas yönü", "40-60 dk"],
              ["Marmaris, Ortaca, Kavaklıdere", "50-75 dk"],
              ["Bodrum, Dalaman, Fethiye, Datça", "koordinasyonla — arayın"],
            ].map(([bolge, sure]) => (
              <li key={bolge} className="flex items-center justify-between py-2.5">
                <span className="text-steel-100">{bolge}</span>
                <span className="tabular text-steel-400">{sure}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-steel-400">
            Süreler yol ve yoğunluğa göre değişir; telefonla net bilgi verilir. Çekici ücreti
            kurtarıcı tarifesidir — üstüne komisyon eklenmez.
          </p>
        </section>

        <section className="rounded border border-steel-800 p-5 text-sm leading-relaxed text-steel-400">
          <h2 className="font-display text-lg font-bold uppercase text-steel-100">
            Beklerken güvenliğiniz için
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Dörtlüleri yakın, aracı mümkünse banketin dışına alın.</li>
            <li>Reflektörü aracın en az 30 metre gerisine koyun.</li>
            <li>Otoyol/bölünmüş yolda araç içinde beklemeyin; bariyer arkasına geçin.</li>
            <li>Kaskonuz varsa poliçedeki yol yardımı da aranabilir — yönlendiririz.</li>
          </ul>
        </section>

        {kurtarma && <FaqSection faqs={kurtarma.faqs} title="Yolda Kalma — Sık Sorulanlar" />}
      </div>

      {/* Acil sayfada baskın aksiyon çubuğu */}
      <MobileActionBar emphasized />
    </>
  );
}
