import type { Faq } from "@/lib/services";
import { faqSchema } from "@/lib/schema";
import { SchemaScript } from "./SchemaScript";

/** Native <details> akordiyon — client JS gerektirmez. FAQPage schema dahil. */
export function FaqSection({ faqs, title = "Sık Sorulan Sorular" }: { faqs: Faq[]; title?: string }) {
  return (
    <section aria-label={title}>
      <SchemaScript data={faqSchema(faqs)} />
      <h2 className="font-display text-2xl font-bold uppercase text-steel-100">{title}</h2>
      <div className="mt-5 divide-y divide-steel-800 border-y border-steel-800">
        {faqs.map((f) => (
          <details key={f.q} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-steel-100 [&::-webkit-details-marker]:hidden">
              {f.q}
              <span
                aria-hidden
                className="shrink-0 font-display text-amber-500 transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="pt-3 text-sm leading-relaxed text-steel-400">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
