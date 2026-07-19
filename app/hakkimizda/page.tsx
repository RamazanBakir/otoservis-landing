import type { Metadata } from "next";
import { site } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TrustStrip } from "@/components/TrustStrip";
import { CtaBlock } from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Hakkımızda — Gökhan Oto Muğla",
  description:
    "Gökhan Oto Muğla: Sanayi Sitesi'nde 20 yıllık usta tecrübesi. Değişen parça gösterilir, önce fiyat sonra işlem. Tanışmak için: 0507 921 33 88.",
  alternates: { canonical: "/hakkimizda" },
};

export default function HakkimizdaPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12 px-4 py-10">
      <Breadcrumbs
        crumbs={[
          { name: "Ana Sayfa", href: "/" },
          { name: "Hakkımızda", href: "/hakkimizda" },
        ]}
      />

      <header>
        <h1 className="font-display text-3xl font-bold uppercase leading-tight text-steel-100 sm:text-4xl">
          Gökhan Oto: Muğla Sanayi&apos;de {site.tecrube} Yıllık Usta Tecrübesi
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-steel-400">
          &quot;Gökhan oto Muğla&quot; diye soran eski müşterilerimiz de,
          muglatamirci.com&apos;dan bulan yeni müşterilerimiz de aynı atölyeye gelir: Muğla
          Sanayi Sitesi&apos;ndeki tezgahımıza. {site.kurulus} yılından beri bu işin
          içindeyiz; çırak olarak başladığımız sanayide bugün kendi atölyemizde, kendi
          adımızla çalışıyoruz.
        </p>
      </header>

      <section className="space-y-4 leading-relaxed text-steel-100">
        <h2 className="font-display text-2xl font-bold uppercase">İşleyişimiz</h2>
        <p>
          Bu atölyenin üç kuralı var ve üçü de pazarlama cümlesi değil, günlük işleyiş:
        </p>
        <ol className="list-decimal space-y-3 pl-5 text-steel-400">
          <li>
            <strong className="text-steel-100">Önce fiyat, sonra işlem.</strong> Araç
            görülmeden kesin fiyat verilmez ama görüldükten sonra verilen fiyat da sonradan
            şişmez. Ek iş çıkarsa telefon açılır, onayınız alınır.
          </li>
          <li>
            <strong className="text-steel-100">Değişen parça size gösterilir.</strong> Sökülen
            her parça aracın bagajına konur ya da tezgahta gösterilir. &quot;Değişti&quot;
            dediğimiz her şeyin kanıtı elinizdedir.
          </li>
          <li>
            <strong className="text-steel-100">Ölçmediğimiz parçayı değiştirmeyiz.</strong>{" "}
            Tahminle parça değiştirme turu bu atölyede yoktur. Teşhis cihazla ve ölçüyle
            yapılır; gerekirse yazılı rapor verilir.
          </li>
        </ol>
      </section>

      <TrustStrip />

      <section className="space-y-4 leading-relaxed text-steel-400">
        <h2 className="font-display text-2xl font-bold uppercase text-steel-100">Atölye</h2>
        <p>
          {site.addressFull} adresindeyiz — TÜVTÜRK istasyonuna birkaç dakika, şehir
          merkezine beş dakika. Lift, diagnostik cihazlar, klima dolum ünitesi ve fren
          ölçüm ekipmanı atölyede mevcut. Binek ve hafif ticari {site.markalar} ile
          çalışıyoruz.
        </p>
        <p>
          Muğla&apos;nın 13 ilçesinden müşterimiz var; uzaktan gelenler için telefonla ön
          teşhis ve parça ön hazırlığı standart uygulamamızdır. Çalışma saatlerimiz:{" "}
          {site.hours.text}.
        </p>
      </section>

      <CtaBlock
        title="Tanışalım"
        text="Aracınızla ilgili aklınızdaki soruyu arayıp sorun — satış konuşması değil, usta cevabı alırsınız."
      />
    </div>
  );
}
