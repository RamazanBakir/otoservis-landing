import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Blog — Ustadan Notlar",
  description:
    "Araç bakımı, muayene hazırlığı, klima, fren ve Muğla yolları üzerine usta anlatımıyla pratik rehberler. Uydurma bilgi yok, tezgah tecrübesi var.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="mx-auto max-w-4xl space-y-10 px-4 py-10">
      <Breadcrumbs crumbs={[{ name: "Ana Sayfa", href: "/" }, { name: "Blog", href: "/blog" }]} />

      <header>
        <h1 className="font-display text-4xl font-bold uppercase text-steel-100">
          Ustadan Notlar
        </h1>
        <p className="mt-3 max-w-2xl text-steel-400">
          Tezgahta her gün karşılaştığımız soruların yazılı halleri. Kısa, net, uydurmasız.
        </p>
      </header>

      <div className="space-y-5">
        {posts.map((p) => (
          <article key={p.slug} className="rounded border border-steel-800 p-5 transition-colors hover:border-amber-500">
            <p className="tabular text-xs uppercase tracking-wider text-steel-400">
              {new Date(p.date).toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" })}
              {!p.full && " · yakında"}
            </p>
            <h2 className="mt-1.5 font-display text-xl font-bold uppercase leading-snug text-steel-100">
              <Link href={`/blog/${p.slug}`} className="hover:text-amber-300">
                {p.title}
              </Link>
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-steel-400">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
