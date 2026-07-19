import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPost } from "@/lib/blog";
import { getService } from "@/lib/services";
import { getDistrict } from "@/lib/districts";
import { articleSchema } from "@/lib/schema";
import { SchemaScript } from "@/components/SchemaScript";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBlock } from "@/components/CtaBlock";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { type: "article", publishedTime: post.date },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const relServices = post.relatedServices
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const relDistricts = post.relatedDistricts
    .map((d) => getDistrict(d))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

  return (
    <article className="mx-auto max-w-3xl space-y-10 px-4 py-10">
      <SchemaScript data={articleSchema(post)} />
      <Breadcrumbs
        crumbs={[
          { name: "Ana Sayfa", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${slug}` },
        ]}
      />

      <header>
        <p className="tabular text-xs uppercase tracking-wider text-steel-400">
          {new Date(post.date).toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" })}
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold uppercase leading-tight text-steel-100 sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-steel-400">{post.excerpt}</p>
      </header>

      {post.full ? (
        <div className="space-y-8">
          {post.sections.map((s) => (
            <section key={s.h2}>
              <h2 className="font-display text-2xl font-bold uppercase leading-snug text-steel-100">
                {s.h2}
              </h2>
              {s.paragraphs?.map((p) => (
                <p key={p.slice(0, 40)} className="mt-3 leading-relaxed text-steel-400">
                  {p}
                </p>
              ))}
              {s.list && (
                <ul className="mt-3 space-y-2.5">
                  {s.list.map((item) => (
                    <li key={item.slice(0, 40)} className="flex gap-3 leading-relaxed text-steel-400">
                      <span aria-hidden className="mt-0.5 shrink-0 text-amber-500">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      ) : (
        <div className="rounded border border-steel-800 bg-steel-900 p-6">
          <p className="text-steel-100">
            Bu yazı hazırlanıyor. Planlanan bölümler:
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-steel-400">
            {post.sections.map((s) => (
              <li key={s.h2} className="flex gap-2">
                <span aria-hidden className="text-amber-500">▸</span>
                {s.h2}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-steel-400">
            Bu konuda şimdi bilgi almak isterseniz arayın:{" "}
            <a href="tel:+905079213388" data-cta="phone" className="tabular font-semibold text-amber-500">
              0507 921 33 88
            </a>
          </p>
        </div>
      )}

      {(relServices.length > 0 || relDistricts.length > 0) && (
        <footer className="border-t border-steel-800 pt-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-steel-400">
            İlgili sayfalar
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2.5">
            {relServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/hizmetler/${s.slug}`}
                  className="block rounded border border-steel-800 px-3 py-1.5 text-sm text-steel-100 hover:border-amber-500"
                >
                  {s.name}
                </Link>
              </li>
            ))}
            {relDistricts.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/bolgeler/${d.slug}`}
                  className="block rounded border border-steel-800 px-3 py-1.5 text-sm text-steel-100 hover:border-amber-500"
                >
                  {d.name} oto tamir
                </Link>
              </li>
            ))}
          </ul>
        </footer>
      )}

      <CtaBlock />
    </article>
  );
}
