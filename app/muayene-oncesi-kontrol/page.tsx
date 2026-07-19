import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { CtaBlock } from "@/components/CtaBlock";
import { SchemaScript } from "@/components/SchemaScript";
import { serviceSchema } from "@/lib/schema";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Muğla Muayene Öncesi Kontrol — TÜVTÜRK Hazırlık",
  description:
    "TÜVTÜRK muayenesinden kalmayın: Muğla'da 12 nokta muayene öncesi kontrol, eksikler aynı gün giderilir. Randevu: 0507 921 33 88.",
  alternates: { canonical: "/muayene-oncesi-kontrol" },
};

const kontrolListesi = [
  "Fren ölçümü ve sağ-sol denge kontrolü (frenometre öncesi hazırlık)",
  "El freni verimi, halat ve arka balata kontrolü",
  "Tüm dış aydınlatma ve far ayar kontrolü",
  "Egzoz emisyon ön testi (yaşlı araçlarda en sık kalma nedeni)",
  "Alt takım boşluk kontrolü: rotil, rot başı, salıncak",
  "Lastik diş derinliği (yasal sınır 1,6 mm) ve yedek dahil",
  "Cam çatlağı, silecek ve yıkama sistemi",
  "Emniyet kemerleri ve korna",
  "Gösterge lambaları: motor arıza, ABS, airbag sönük olmalı",
  "Yağ ve hidrolik kaçak kontrolü",
  "Plaka ve reflektör/ilk yardım seti kontrolü",
  "Diagnostik hata taraması (muayeneyi etkileyen kayıtlar)",
];

const faqs = [
  {
    q: "Muayene öncesi kontrol ne kadar sürer?",
    a: "Yaklaşık 40-60 dakika. Eksik çıkarsa çoğu aynı gün giderilir; büyük iş çıkarsa muayene randevunuza göre birlikte planlarız.",
  },
  {
    q: "Muayeneden kalırsam tekrar ücret öder miyim?",
    a: "TÜVTÜRK'te ağır kusurda 1 ay içinde ücretsiz tekrar hakkınız var; ancak süre kaçarsa ücret yenilenir. Kontrolle ilk seferde geçmek her durumda daha ekonomiktir.",
  },
  {
    q: "Emisyondan kalmamak için ne yapılabilir?",
    a: "Tıkalı hava filtresi, yorgun oksijen sensörü ve bakımsız motor emisyonu bozar. Ön testte değerler sınırdaysa nedeni bulunur; çoğu zaman filtre ve bakım kalemiyle çözülür.",
  },
  {
    q: "TÜVTÜRK Muğla istasyonuna uzak mısınız?",
    a: "Hayır — atölyemiz Muğla Sanayi Sitesi'nde, istasyona birkaç dakika mesafede. Kontrol ve muayeneyi aynı güne planlamak mümkün.",
  },
  {
    q: "Randevusuz gelebilir miyim?",
    a: "Gelebilirsiniz ama muayene tarihiniz yaklaştıysa riske atmayın: telefonla randevu alın, sıra beklemeden işleme başlayalım.",
  },
];

export default function MuayenePage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12 px-4 py-10">
      <SchemaScript
        data={serviceSchema(
          "Muayene Öncesi Kontrol",
          "TÜVTÜRK araç muayenesi öncesi 12 nokta kontrol ve eksik giderme hizmeti.",
          `${site.url}/muayene-oncesi-kontrol`
        )}
      />
      <Breadcrumbs
        crumbs={[
          { name: "Ana Sayfa", href: "/" },
          { name: "Muayene Öncesi Kontrol", href: "/muayene-oncesi-kontrol" },
        ]}
      />

      <header>
        <h1 className="font-display text-3xl font-bold uppercase leading-tight text-steel-100 sm:text-4xl">
          Muğla&apos;da Muayene Öncesi Kontrol: Muayeneden Kalmayın
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-steel-400">
          TÜVTÜRK randevunuzdan önce aracınızı 12 noktada kontrol ediyoruz. Yanmayan bir plaka
          lambası bile kusur puanı demek — çıkan eksikler aynı gün giderilir, muayeneye tek
          seferde geçmek için gidersiniz.
        </p>
      </header>

      <section>
        <h2 className="font-display text-2xl font-bold uppercase text-steel-100">
          12 Nokta Kontrol Listesi
        </h2>
        <ol className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {kontrolListesi.map((item, i) => (
            <li key={item} className="flex gap-3 rounded border border-steel-800 bg-steel-900 p-3 text-sm text-steel-100">
              <span className="tabular font-display font-bold text-amber-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item}
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-steel-400">
          Listenin ayrıntılı anlatımı için:{" "}
          <Link href="/blog/muayeneden-kalmamak-12-nokta" className="font-semibold text-amber-500 hover:text-amber-300">
            Muayeneden kalmamak için 12 nokta
          </Link>
        </p>
      </section>

      <FaqSection faqs={faqs} />

      <CtaBlock
        title="Muayene tarihiniz yaklaştıysa bekletmeyin"
        text="Telefonla muayene tarihinizi söyleyin; kontrol randevunuzu ona göre, eksik giderme payı bırakarak planlayalım."
      />
    </div>
  );
}
