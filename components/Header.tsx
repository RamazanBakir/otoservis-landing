import Link from "next/link";
import { site } from "@/lib/site-config";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";

const nav = [
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/bolgeler", label: "Bölgeler" },
  { href: "/muayene-oncesi-kontrol", label: "Muayene Kontrolü" },
  { href: "/blog", label: "Blog" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-steel-800 bg-steel-950/95 backdrop-blur">
      {/* Hazard şeridi — imza aksan */}
      <div aria-hidden className="hazard h-1" />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-baseline gap-2" aria-label="Muğla Tamirci ana sayfa">
          <span className="font-display text-xl font-bold uppercase tracking-tight text-steel-100">
            Muğla<span className="text-amber-500">Tamirci</span>
          </span>
          <span className="hidden text-xs uppercase tracking-widest text-steel-400 sm:inline">
            Gökhan Oto
          </span>
        </Link>

        <nav aria-label="Ana menü" className="hidden items-center gap-6 lg:flex">
          <NavLinks items={nav} />
          <a
            href={site.telHref}
            data-cta="phone"
            className="tabular rounded bg-amber-500 px-4 py-2 font-display text-sm font-bold text-steel-950 transition-colors hover:bg-amber-300"
          >
            {site.phoneDisplay}
          </a>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={site.telHref}
            data-cta="phone"
            className="rounded bg-amber-500 px-3 py-1.5 font-display text-sm font-bold text-steel-950"
          >
            Ara
          </a>
          <MobileMenu items={nav} />
        </div>
      </div>
    </header>
  );
}
