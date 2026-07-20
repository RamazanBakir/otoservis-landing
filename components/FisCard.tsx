import Link from "next/link";
import { site } from "@/lib/site-config";
import { ServiceIcon } from "./ServiceIcon";

/**
 * İmza öğesi: hizmet kartı "iş emri fişi" gibi — perfore üst kenar,
 * fiş numarası, hizmet ikonu, damga rozeti, alt tıkla-ara şeridi.
 */
export function FisCard({
  no,
  title,
  text,
  href,
  iconSlug,
}: {
  no: number;
  title: string;
  text: string;
  href: string;
  iconSlug?: string;
}) {
  return (
    <article className="fis-perfore fis-kagit relative flex flex-col bg-paper text-ink shadow-lg">
      <div className="flex items-start justify-between px-5 pt-6">
        <p className="tabular font-display text-xs font-bold uppercase tracking-widest text-ink/50">
          İş Emri #{String(no).padStart(3, "0")}
        </p>
        <span
          className="damga rounded border-2 border-amber-500/70 px-1.5 py-0.5 font-display text-[10px] font-bold uppercase tracking-wider text-amber-500/90"
          aria-hidden
        >
          Gökhan Oto · Muğla
        </span>
      </div>

      <div className="flex items-start gap-3 px-5 pt-2">
        {iconSlug && (
          <span className="mt-0.5 shrink-0 rounded border border-ink/15 bg-ink/5 p-2 text-amber-500">
            <ServiceIcon slug={iconSlug} size={24} />
          </span>
        )}
        <h3 className="font-display text-xl font-bold uppercase leading-tight">
          <Link href={href} className="hover:text-amber-500">
            {title}
          </Link>
        </h3>
      </div>

      <p className="flex-1 px-5 pb-5 pt-2 text-sm leading-relaxed text-ink/70">{text}</p>

      <div className="flex items-center justify-between border-t border-dashed border-ink/25 px-5 py-3">
        <Link
          href={href}
          className="font-display text-sm font-bold uppercase tracking-wide text-ink hover:text-amber-500"
        >
          Detay →
        </Link>
        <a href={site.telHref} data-cta="phone" className="tabular text-sm font-semibold text-ink/70 hover:text-amber-500">
          {site.phoneDisplay}
        </a>
      </div>
    </article>
  );
}
