import { site } from "@/lib/site-config";

/**
 * Sabit WhatsApp balonu + sohbet baloncuğu.
 * Saf CSS animasyon (gecikmeli belirir), JS yok. Mobilde aksiyon
 * çubuğunun üstünde konumlanır.
 */
export function WhatsAppBubble() {
  return (
    <div className="fixed bottom-20 right-4 z-40 flex flex-col items-end gap-2 lg:bottom-6 lg:right-6">
      {/* Sohbet baloncuğu */}
      <div className="wa-balon relative max-w-[220px] rounded-lg rounded-br-none bg-paper px-3.5 py-2.5 text-xs leading-relaxed text-ink shadow-lg">
        <p className="font-bold">Usta hattı açık 👋</p>
        <p className="mt-0.5 text-ink/70">
          Aracınızın derdini yazın, fotoğraf/video da atabilirsiniz — kısa sürede dönüyoruz.
        </p>
        <span
          aria-hidden
          className="absolute -bottom-1.5 right-0 h-0 w-0 border-l-[10px] border-t-[8px] border-l-transparent border-t-paper"
        />
      </div>

      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        data-cta="whatsapp"
        aria-label="WhatsApp'tan yazın"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-105"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.2 14.2c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-2.7-.9-4.5-2.7-5.9-5.1-.5-.9-.9-2-.6-2.9.2-.5.8-1.3 1.3-1.3h.5c.2 0 .4 0 .6.5s.7 1.8.8 1.9c.1.2.1.4 0 .6l-.5.7c-.1.2-.3.4-.1.7.5.9 1.2 1.6 2 2.2.3.2.6.4.9.5.2.1.4.1.6-.1l.8-1c.2-.2.4-.2.6-.1l1.8.9c.2.1.4.2.4.4.1.2.1.6 0 1Z" />
        </svg>
      </a>
    </div>
  );
}
