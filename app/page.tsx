import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site-config";
import { services } from "@/lib/services";
import { districts } from "@/lib/districts";
import { blogPosts } from "@/lib/blog";
import { FisCard } from "@/components/FisCard";
import { HeroIllustration } from "@/components/HeroIllustration";
import { TrustStrip } from "@/components/TrustStrip";
import { ServiceLine } from "@/components/ServiceLine";
import { CtaBlock } from "@/components/CtaBlock";
import { FaqSection } from "@/components/FaqSection";
import { SchemaScript } from "@/components/SchemaScript";
import { autoRepairSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: `Muğla Oto Tamir ve Servis | ${site.titleBrand}`,
  },
  description:
    "Muğla oto tamir ve servis: Sanayi Sitesi'nde bakım, arıza tespiti, motor ve fren işleri. 20 yıllık tecrübe. Arayın: 0507 921 33 88.",
  alternates: {
    canonical: "/",
    languages: { tr: "/", en: "/en", "x-default": "/" },
  },
};

const homeFaqs = [
  {
    q: "Muğla'da oto tamir için neden Gökhan Oto?",
    a: "Çünkü işleyişimiz nettir: arıza ölçülür, fiyat işlemden önce söylenir, değişen her parça size gösterilir. 20 yıldır Muğla Sanayi Sitesi'nde aynı yerdeyiz; müşterimizin çoğu tavsiyeyle gelir.",
  },
  {
    q: "Hangi marka araçlara bakıyorsunuz?",
    a: "Binek ve hafif ticari tüm marka ve modellere bakıyoruz. Diagnostik cihazlarımız yaygın tüm markaları destekler.",
  },
  {
    q: "İlçelerden gelenler için randevu nasıl işliyor?",
    a: "Telefonla arıza ön dinlemesi yapılır, gerekli parça önceden hazırlanır ve geldiğinizde araç bekletilmeden işleme alınır. Uzak ilçeden gelen müşteriye aynı gün teslim hedefiyle çalışırız.",
  },
  {
    q: "Fiyat bilgisini önceden alabilir miyim?",
    a: "Evet — telefonda belirtiye göre gerçekçi bir aralık, araç görüldükten sonra net fiyat verilir. Onayınız olmadan hiçbir işlem yapılmaz.",
  },
];

export default function HomePage() {
  return (
    <>
      <SchemaScript data={autoRepairSchema()} />
      {/* Sezon bandı — içerik site-config'ten */}
      {site.seasonBanner.active && (
        <p className="border-b border-amber-500/30 bg-amber-500/10 px-4 py-2 text-center text-sm text-amber-300">
          {site.seasonBanner.text}
        </p>
      )}

      {/* Hero — tez cümlesi */}
      <section className="hero-grid">
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-14 sm:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
        <p className="font-display text-sm font-bold uppercase tracking-widest text-amber-500">
          Muğla Sanayi Sitesi · Menteşe
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold uppercase leading-tight text-steel-100 sm:text-6xl">
          Muğla&apos;da oto tamir ve servis:{" "}
          <span className="text-amber-500">{site.tecrube} yıldır</span> aracınız güvende
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-steel-400">
          Motor, fren, elektrik, klima ve periyodik bakım — Muğla oto tamircisi arayan herkes
          için tek atölye. Menteşe merkezli, 13 ilçeye hizmet. Gökhan Oto ustalığı ile.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={site.telHref}
            data-cta="phone"
            className="tabular rounded bg-amber-500 px-6 py-3.5 font-display text-lg font-bold uppercase text-steel-950 transition-colors hover:bg-amber-300"
          >
            {site.phoneDisplay}
          </a>
          <a
            href={site.whatsappHref}
            data-cta="whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-steel-700 px-6 py-3.5 font-display text-lg font-bold uppercase text-steel-100 transition-colors hover:border-amber-500 hover:text-amber-300"
          >
            WhatsApp
          </a>
        </div>

        </div>

        {/* Teknik çizim: lift üzerinde araç — inline SVG, istek yok */}
        <HeroIllustration className="hero-defer mt-2 w-full max-w-md justify-self-center lg:mt-0 lg:max-w-lg" />
        </div>

        {/* Stat bandı — endüstriyel tabular rakamlar */}
        <dl className="mt-10 grid max-w-xl grid-cols-3 gap-px overflow-hidden rounded border border-steel-800 bg-steel-800">
          {[
            [`${site.tecrube}+`, "yıl tecrübe"],
            ["13", "ilçeye hizmet"],
            ["1", "günde çoğu teslim"],
          ].map(([num, label]) => (
            <div key={label} className="bg-steel-950/80 px-4 py-3">
              <dt className="sr-only">{label}</dt>
              <dd className="tabular font-display text-2xl font-bold text-amber-500">{num}</dd>
              <dd className="text-xs uppercase tracking-wider text-steel-400">{label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12">
          <ServiceLine />
        </div>
      </div>
      </section>

      <div className="mx-auto max-w-6xl px-4">
        <TrustStrip />
      </div>

      {/* Hizmetler — iş emri fişleri */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="font-display text-xs font-bold uppercase tracking-widest text-amber-500">
          İş Emri Açıyoruz
        </p>
        <h2 className="mt-1 font-display text-3xl font-bold uppercase text-steel-100">
          Muğla Oto Servis Hizmetlerimiz
        </h2>
        <p className="mt-2 max-w-2xl text-steel-400">
          Her iş, iş emri fişiyle kayıt altına alınır: yapılan işlem, kullanılan parça ve fiyat
          yazılıdır. Sözle değil, kayıtla çalışırız.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s, i) => (
            <FisCard
              key={s.slug}
              no={i + 1}
              title={s.name}
              text={s.intro.split(".")[0] + "."}
              href={`/hizmetler/${s.slug}`}
              iconSlug={s.slug}
            />
          ))}
        </div>
        <p className="mt-6">
          <Link href="/hizmetler" className="font-display font-bold uppercase text-amber-500 hover:text-amber-300">
            Tüm hizmetleri gör →
          </Link>
        </p>
      </section>

      {/* Hizmet bölgeleri — tüm ilçelere görünür iç link */}
      <section className="border-y border-steel-800 bg-steel-900">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="font-display text-xs font-bold uppercase tracking-widest text-amber-500">
            Nereden Gelirseniz Gelin
          </p>
          <h2 className="mt-1 font-display text-3xl font-bold uppercase text-steel-100">
            Hizmet Bölgelerimiz: Muğla&apos;nın 13 İlçesi
          </h2>
          <p className="mt-2 max-w-2xl text-steel-400">
            Atölyemiz Menteşe&apos;de; müşterimiz tüm Muğla&apos;da. Her ilçe için ulaşım,
            süre ve o bölgeye özgü servis notlarını hazırladık.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {districts.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/bolgeler/${d.slug}`}
                  className="flex items-baseline justify-between rounded border border-steel-800 bg-steel-950 px-4 py-3 transition-colors hover:border-amber-500"
                >
                  <span className="font-display font-bold uppercase text-steel-100">{d.name}</span>
                  <span className="tabular text-xs text-steel-400">{d.ulasim.sure}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Acil + Muayene yönlendirme */}
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-2">
        <Link
          href="/yolda-kaldim"
          className="rounded border-2 border-amber-500 bg-amber-500/10 p-6 transition-colors hover:bg-amber-500/20"
        >
          <h2 className="font-display text-2xl font-bold uppercase text-amber-300">
            Yolda mı kaldınız?
          </h2>
          <p className="mt-2 text-sm text-steel-100">
            Telefonla ön teşhis + çekici yönlendirmesi. Tatil yolunda, D400&apos;de, nerede
            olursanız olun: tek numara.
          </p>
          <p className="tabular mt-4 font-display text-xl font-bold text-amber-500">
            {site.phoneDisplay}
          </p>
        </Link>
        <Link
          href="/muayene-oncesi-kontrol"
          className="rounded border border-steel-800 bg-steel-900 p-6 transition-colors hover:border-amber-500"
        >
          <h2 className="font-display text-2xl font-bold uppercase text-steel-100">
            Muayene mi yaklaşıyor?
          </h2>
          <p className="mt-2 text-sm text-steel-400">
            TÜVTÜRK öncesi 12 nokta kontrol: eksikler aynı gün giderilir, muayeneye tek
            seferde geçmek için gidersiniz.
          </p>
          <p className="mt-4 font-display font-bold uppercase text-amber-500">Detaylı bilgi →</p>
        </Link>
      </section>

      {/* Blog önizleme */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <p className="font-display text-xs font-bold uppercase tracking-widest text-amber-500">
          Blog
        </p>
        <h2 className="mt-1 font-display text-3xl font-bold uppercase text-steel-100">
          Ustadan Notlar
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[...blogPosts]
            .sort((a, b) => (a.date < b.date ? 1 : -1))
            .slice(0, 3)
            .map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="rounded border border-steel-800 p-5 transition-colors hover:border-amber-500"
            >
              <h3 className="font-display font-bold uppercase leading-snug text-steel-100">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-steel-400">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-16 px-4 pb-20">
        <FaqSection faqs={homeFaqs} />
        <CtaBlock />
      </div>
    </>
  );
}
