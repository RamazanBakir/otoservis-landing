import { site } from "@/lib/site-config";

/**
 * Mobil alt aksiyon çubuğu: Ara / WhatsApp / Yol Tarifi.
 * Tüm sayfalarda görünür (yalnızca mobil). /yolda-kaldim'da büyük varyant.
 */
export function MobileActionBar({ emphasized = false }: { emphasized?: boolean }) {
  const base =
    "flex flex-1 items-center justify-center gap-2 font-display font-bold uppercase tracking-wide";
  const h = emphasized ? "h-16 text-base" : "h-14 text-sm";

  return (
    <div
      className="safe-bottom fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-steel-800 bg-steel-900 lg:hidden"
      role="navigation"
      aria-label="Hızlı iletişim"
    >
      <a href={site.telHref} data-cta="phone" className={`${base} ${h} bg-amber-500 text-steel-950`}>
        <PhoneIcon />
        Ara
      </a>
      <a
        href={site.whatsappHref}
        data-cta="whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${h} text-steel-100`}
      >
        <WhatsAppIcon />
        WhatsApp
      </a>
      <a
        href={site.mapsUrl}
        data-cta="directions"
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${h} border-l border-steel-800 text-steel-100`}
      >
        <PinIcon />
        Yol Tarifi
      </a>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.2 14.2c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-2.7-.9-4.5-2.7-5.9-5.1-.5-.9-.9-2-.6-2.9.2-.5.8-1.3 1.3-1.3h.5c.2 0 .4 0 .6.5s.7 1.8.8 1.9c.1.2.1.4 0 .6l-.5.7c-.1.2-.3.4-.1.7.5.9 1.2 1.6 2 2.2.3.2.6.4.9.5.2.1.4.1.6-.1l.8-1c.2-.2.4-.2.6-.1l1.8.9c.2.1.4.2.4.4.1.2.1.6 0 1Z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
