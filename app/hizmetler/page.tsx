import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { FisCard } from "@/components/FisCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBlock } from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Oto Tamir ve Bakım Hizmetleri",
  description:
    "Muğla'da oto tamir hizmetlerimiz: motor, fren, elektrik, klima, triger, şanzıman ve daha fazlası. 20 yıllık tecrübe. Arayın: 0507 921 33 88.",
  alternates: { canonical: "/hizmetler" },
};

export default function HizmetlerPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-10">
      <Breadcrumbs crumbs={[{ name: "Ana Sayfa", href: "/" }, { name: "Hizmetler", href: "/hizmetler" }]} />

      <header>
        <h1 className="font-display text-4xl font-bold uppercase text-steel-100">
          Muğla Oto Tamir ve Bakım Hizmetlerimiz
        </h1>
        <p className="mt-3 max-w-2xl text-steel-400">
          Aşağıdaki her iş kalemi atölyemizde ustası tarafından yapılır. Hangi işi
          yaptırırsanız yaptırın kural aynı: önce fiyat, sonra işlem; değişen parça size
          gösterilir.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
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

      <p className="text-steel-400">
        Aracınızın muayenesi mi yaklaşıyor?{" "}
        <Link href="/muayene-oncesi-kontrol" className="font-semibold text-amber-500 hover:text-amber-300">
          Muayene öncesi kontrol paketimize
        </Link>{" "}
        göz atın.
      </p>

      <CtaBlock />
    </div>
  );
}
