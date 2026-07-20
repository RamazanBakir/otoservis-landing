"use client";

import { useState } from "react";
import { site } from "@/lib/site-config";

const inputCls =
  "w-full rounded border border-steel-700 bg-steel-950 px-3 py-2.5 text-steel-100 placeholder:text-steel-400/60 focus:border-amber-500 focus:outline-none";

/**
 * Form sunucuya hiçbir veri göndermez: alanlardan WhatsApp mesajı oluşturur
 * ve wa.me sohbetine yönlendirir. Mail/webhook yok.
 */
export function ContactForm() {
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const data = new FormData(e.currentTarget);
    const isim = String(data.get("isim") ?? "").trim();
    const telefon = String(data.get("telefon") ?? "").trim();
    const arac = String(data.get("arac") ?? "").trim();
    const mesaj = String(data.get("mesaj") ?? "").trim();

    if (!isim || !mesaj) {
      setError("Lütfen isim ve sorun açıklamasını doldurun.");
      return;
    }

    const lines = [
      "Merhaba, web sitesinden yazıyorum.",
      `İsim: ${isim}`,
      telefon && `Telefon: ${telefon}`,
      arac && `Araç: ${arac}`,
      `Sorun: ${mesaj}`,
    ].filter(Boolean);

    const url = `https://wa.me/${site.phoneE164.replace("+", "")}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-steel-100">İsim *</span>
          <input name="isim" required autoComplete="name" className={inputCls} />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-steel-100">
            Telefon (isteğe bağlı)
          </span>
          <input
            name="telefon"
            type="tel"
            autoComplete="tel"
            placeholder="05xx xxx xx xx"
            className={inputCls}
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-1 block text-sm font-semibold text-steel-100">
          Araç marka / model
        </span>
        <input name="arac" placeholder="Örn. Ford Focus 1.6 TDCi 2018" className={inputCls} />
      </label>
      <label className="block">
        <span className="mb-1 block text-sm font-semibold text-steel-100">
          Sorun açıklaması *
        </span>
        <textarea
          name="mesaj"
          required
          rows={4}
          placeholder="Belirtiyi kısaca anlatın: ne zaman başladı, hangi durumda oluyor?"
          className={inputCls}
        />
      </label>

      <button
        type="submit"
        data-cta="whatsapp"
        className="flex items-center gap-2 rounded bg-amber-500 px-6 py-3 font-display font-bold uppercase text-steel-950 transition-colors hover:bg-amber-300"
      >
        WhatsApp&apos;ta Gönder
      </button>
      <p className="text-xs text-steel-400">
        Gönder&apos;e bastığınızda bilgileriniz hazır mesaj olarak WhatsApp sohbetine taşınır —
        mesaj sizin onayınızla, kendi WhatsApp&apos;ınızdan gider. Bu site üzerinden veri
        gönderilmez ve saklanmaz.
      </p>

      {error && (
        <p role="alert" className="text-sm font-semibold text-red-400">
          {error}
        </p>
      )}
    </form>
  );
}
