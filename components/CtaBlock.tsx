import { site } from "@/lib/site-config";

export function CtaBlock({
  title = "Aracınız için hemen fiyat alın",
  text = "Telefonda belirtiyi anlatın, gerçekçi bir ön değerlendirme yapalım. Önce fiyat, sonra işlem.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden rounded border border-steel-800 bg-steel-900 p-6 sm:p-8">
      {/* Hazard kenar — dikkat çizgisi */}
      <div aria-hidden className="hazard absolute inset-y-0 left-0 w-1.5" />
      <h2 className="font-display text-2xl font-bold uppercase text-steel-100">{title}</h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-steel-400">{text}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={site.telHref}
          data-cta="phone"
          className="tabular rounded bg-amber-500 px-5 py-3 font-display font-bold uppercase text-steel-950 transition-colors hover:bg-amber-300"
        >
          {site.phoneDisplay}
        </a>
        <a
          href={site.whatsappHref}
          data-cta="whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded border border-steel-700 px-5 py-3 font-display font-bold uppercase text-steel-100 transition-colors hover:border-amber-500 hover:text-amber-300"
        >
          WhatsApp&apos;tan yazın
        </a>
      </div>
    </section>
  );
}
