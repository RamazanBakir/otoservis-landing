import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { districts, getDistrict } from "@/lib/districts";
import { getService } from "@/lib/services";
import { getPost } from "@/lib/blog";
import { site } from "@/lib/site-config";
import { autoRepairSchema } from "@/lib/schema";
import { SchemaScript } from "@/components/SchemaScript";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { CtaBlock } from "@/components/CtaBlock";
import { ServiceIcon } from "@/components/ServiceIcon";

export const dynamicParams = false;

export function generateStaticParams() {
  return districts.map((d) => ({ ilce: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ilce: string }>;
}): Promise<Metadata> {
  const { ilce } = await params;
  const district = getDistrict(ilce);
  if (!district) return {};
  return {
    title: district.title,
    description: district.description,
    alternates: { canonical: `/bolgeler/${ilce}` },
  };
}

export default async function DistrictPage({
  params,
}: {
  params: Promise<{ ilce: string }>;
}) {
  const { ilce } = await params;
  const district = getDistrict(ilce);
  if (!district) notFound();

  const relatedServices = district.serviceSlugs
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const relatedPosts = district.blogSlugs
    .map((b) => getPost(b))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="mx-auto max-w-4xl space-y-12 px-4 py-10">
      <SchemaScript data={autoRepairSchema({ areaServedCity: district.name })} />
      <Breadcrumbs
        crumbs={[
          { name: "Ana Sayfa", href: "/" },
          { name: "Bölgeler", href: "/bolgeler" },
          { name: district.name, href: `/bolgeler/${ilce}` },
        ]}
      />

      <header>
        <p className="font-display text-xs font-bold uppercase tracking-widest text-amber-500">
          Hizmet Bölgesi · {district.ulasim.sure}
        </p>
        <h1 className="mt-1 font-display text-3xl font-bold uppercase leading-tight text-steel-100 sm:text-4xl">
          {district.h1}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-steel-400">{district.senaryo}</p>
      </header>

      {/* Ulaşım bloğu — gerçek yol ve süre */}
      <section className="rounded border border-steel-800 bg-steel-900 p-6">
        <h2 className="font-display text-xl font-bold uppercase text-steel-100">
          {district.name}&apos;den Atölyemize Ulaşım
        </h2>
        <dl className="mt-4 grid gap-4 sm:grid-cols-3">
          <div>
            <dt className="text-xs uppercase tracking-wider text-steel-400">Güzergah</dt>
            <dd className="mt-1 font-semibold text-steel-100">{district.ulasim.yol}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-steel-400">Mesafe</dt>
            <dd className="tabular mt-1 font-semibold text-steel-100">{district.ulasim.km}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-steel-400">Süre</dt>
            <dd className="tabular mt-1 font-semibold text-steel-100">{district.ulasim.sure}</dd>
          </div>
        </dl>
        <p className="mt-4 text-sm leading-relaxed text-steel-400">{district.ulasim.tarif}</p>
        <a
          href={site.mapsUrl}
          data-cta="directions"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded border border-amber-500 px-4 py-2 font-display text-sm font-bold uppercase text-amber-500 transition-colors hover:bg-amber-500 hover:text-steel-950"
        >
          Google Maps ile yol tarifi al
        </a>
      </section>

      {district.nedenGelinir && (
        <section className="rounded border-l-4 border-amber-500 bg-steel-900 p-6">
          <h2 className="font-display text-lg font-bold uppercase text-amber-300">
            {district.name}&apos;den gelmeye değer mi?
          </h2>
          <p className="mt-2 leading-relaxed text-steel-100">{district.nedenGelinir}</p>
        </section>
      )}

      <section>
        <h2 className="font-display text-2xl font-bold uppercase text-steel-100">
          {district.name} Araçları İçin Öne Çıkan Hizmetler
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {relatedServices.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/hizmetler/${s.slug}`}
                className="flex h-full items-center gap-3 rounded border border-steel-800 p-4 text-sm font-semibold text-steel-100 transition-colors hover:border-amber-500"
              >
                <span className="shrink-0 text-amber-500">
                  <ServiceIcon slug={s.slug} size={22} />
                </span>
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <FaqSection
        faqs={district.faqs}
        title={`${district.name} — Sık Sorulan Sorular`}
      />

      {relatedPosts.length > 0 && (
        <section>
          <h2 className="font-display text-xl font-bold uppercase text-steel-100">
            {district.name} Sürücüleri İçin Ustadan Notlar
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {relatedPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="rounded border border-steel-800 p-4 transition-colors hover:border-amber-500"
              >
                <h3 className="font-semibold leading-snug text-steel-100">{p.title}</h3>
                <p className="mt-1.5 text-sm text-steel-400">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CtaBlock
        title={`${district.name}'den arayın, planlayalım`}
        text="Telefonda belirtiyi dinler, gelmenize değip değmeyeceğini dürüstçe söyleriz. Gerekirse parçanız gelmeden hazır olur."
      />
    </div>
  );
}
