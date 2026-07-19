import Link from "next/link";
import { site } from "@/lib/site-config";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-start px-4 py-24">
      <p className="tabular font-display text-7xl font-bold text-amber-500">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold uppercase text-steel-100">
        Bu parça depoda yok
      </h1>
      <p className="mt-3 max-w-md text-steel-400">
        Aradığınız sayfa taşınmış ya da hiç olmamış olabilir. Aracınızla ilgili bir sorunuz
        varsa sayfa aramaktan hızlısı var:
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={site.telHref}
          data-cta="phone"
          className="tabular rounded bg-amber-500 px-5 py-3 font-display font-bold uppercase text-steel-950 hover:bg-amber-300"
        >
          {site.phoneDisplay}
        </a>
        <Link
          href="/"
          className="rounded border border-steel-700 px-5 py-3 font-display font-bold uppercase text-steel-100 hover:border-amber-500"
        >
          Ana sayfa
        </Link>
        <Link
          href="/hizmetler"
          className="rounded border border-steel-700 px-5 py-3 font-display font-bold uppercase text-steel-100 hover:border-amber-500"
        >
          Hizmetler
        </Link>
      </div>
    </div>
  );
}
