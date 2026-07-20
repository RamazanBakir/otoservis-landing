import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getService } from "@/lib/services";
import { site } from "@/lib/site-config";
import { serviceSchema } from "@/lib/schema";
import { SchemaScript } from "@/components/SchemaScript";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { CtaBlock } from "@/components/CtaBlock";
import { TrustStrip } from "@/components/TrustStrip";
import { ServiceIcon } from "@/components/ServiceIcon";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/hizmetler/${slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.related
    .map((r) => getService(r))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <div className="mx-auto max-w-4xl space-y-12 px-4 py-10">
      <SchemaScript
        data={serviceSchema(service.name, service.description, `${site.url}/hizmetler/${slug}`)}
      />
      <Breadcrumbs
        crumbs={[
          { name: "Ana Sayfa", href: "/" },
          { name: "Hizmetler", href: "/hizmetler" },
          { name: service.name, href: `/hizmetler/${slug}` },
        ]}
      />

      <header>
        <span className="mb-4 inline-flex rounded border border-steel-800 bg-steel-900 p-3 text-amber-500">
          <ServiceIcon slug={service.slug} size={32} />
        </span>
        <p className="font-display text-xs font-bold uppercase tracking-widest text-amber-500">
          Hizmet · İş Emri Açılır
        </p>
        <h1 className="mt-1 font-display text-3xl font-bold uppercase leading-tight text-steel-100 sm:text-4xl">
          {service.h1}
        </h1>
        {/* Doğrudan cevap — AI/featured snippet için kim-ne-nerede */}
        <p className="mt-4 leading-relaxed text-steel-100">
          {service.name} hizmeti, Muğla Sanayi Sitesi&apos;ndeki (Menteşe) Gökhan Oto
          atölyesinde verilir; Muğla&apos;nın 13 ilçesinden müşteri kabul edilir. Randevu ve
          fiyat için:{" "}
          <a href={site.telHref} data-cta="phone" className="tabular font-semibold text-amber-500">
            {site.phoneDisplay}
          </a>
          .
        </p>
        <p className="mt-3 text-lg leading-relaxed text-steel-400">{service.intro}</p>
      </header>

      <TrustStrip />

      <section>
        <h2 className="font-display text-2xl font-bold uppercase text-steel-100">
          Bu kapsamda neler yapılır?
        </h2>
        <ul className="mt-4 space-y-2.5">
          {service.scope.map((item) => (
            <li key={item} className="flex gap-3 text-steel-100">
              <span aria-hidden className="mt-0.5 text-amber-500">▸</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded border-l-4 border-amber-500 bg-steel-900 p-6">
        <h2 className="font-display text-lg font-bold uppercase text-amber-300">
          Atölye taahhüdümüz
        </h2>
        <p className="mt-2 leading-relaxed text-steel-100">{service.why}</p>
      </section>

      <FaqSection faqs={service.faqs} />

      {related.length > 0 && (
        <section>
          <h2 className="font-display text-xl font-bold uppercase text-steel-100">
            İlgili Hizmetler
          </h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/hizmetler/${r.slug}`}
                  className="block rounded border border-steel-800 px-4 py-2 text-sm text-steel-100 transition-colors hover:border-amber-500"
                >
                  {r.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <CtaBlock
        title={`${service.name} için fiyat alın`}
        text="Telefonda aracınızı ve belirtiyi anlatın; gerçekçi bir ön değerlendirme ve fiyat aralığı verelim."
      />
    </div>
  );
}
