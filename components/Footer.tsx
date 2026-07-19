import Link from "next/link";
import { site } from "@/lib/site-config";
import { services } from "@/lib/services";
import { districts } from "@/lib/districts";

export function Footer() {
  return (
    <footer className="border-t border-steel-800 bg-steel-900 pb-24 lg:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-bold uppercase text-steel-100">
            Muğla<span className="text-amber-500">Tamirci</span>
          </p>
          <p className="mt-1 text-sm text-steel-400">Gökhan Oto</p>
          <address className="mt-4 text-sm not-italic leading-relaxed text-steel-400">
            {site.addressFull}
            <br />
            <a href={site.telHref} data-cta="phone" className="tabular text-steel-100 hover:text-amber-300">
              {site.phoneDisplay}
            </a>
            <br />
            {site.hours.text}
          </address>
        </div>

        <nav aria-label="Hizmetler">
          <p className="font-display text-sm font-bold uppercase tracking-wider text-steel-100">
            Hizmetler
          </p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link href={`/hizmetler/${s.slug}`} className="text-steel-400 hover:text-amber-300">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/muayene-oncesi-kontrol" className="text-steel-400 hover:text-amber-300">
                Muayene Öncesi Kontrol
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Hizmet bölgeleri">
          <p className="font-display text-sm font-bold uppercase tracking-wider text-steel-100">
            Bölgeler
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-x-2 gap-y-1.5 text-sm">
            {districts.map((d) => (
              <li key={d.slug}>
                <Link href={`/bolgeler/${d.slug}`} className="text-steel-400 hover:text-amber-300">
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Site">
          <p className="font-display text-sm font-bold uppercase tracking-wider text-steel-100">
            Site
          </p>
          <ul className="mt-3 space-y-1.5 text-sm">
            <li><Link href="/yolda-kaldim" className="text-amber-300 hover:text-amber-500">Yolda mı kaldınız?</Link></li>
            <li><Link href="/hakkimizda" className="text-steel-400 hover:text-amber-300">Hakkımızda</Link></li>
            <li><Link href="/blog" className="text-steel-400 hover:text-amber-300">Blog</Link></li>
            <li><Link href="/iletisim" className="text-steel-400 hover:text-amber-300">İletişim</Link></li>
            <li><Link href="/en" className="text-steel-400 hover:text-amber-300">English</Link></li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-steel-800">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-steel-400">
          © {new Date().getFullYear()} {site.schemaName} · muglatamirci.com — Muğla oto tamir,
          bakım ve servis. Tüm ilçelere hizmet verilir.
        </p>
      </div>
    </footer>
  );
}
