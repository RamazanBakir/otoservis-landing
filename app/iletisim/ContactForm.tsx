"use client";

import { useActionState } from "react";
import { submitContact, type FormState } from "./actions";

const initial: FormState = { ok: false, message: "" };

const inputCls =
  "w-full rounded border border-steel-700 bg-steel-950 px-3 py-2.5 text-steel-100 placeholder:text-steel-400/60 focus:border-amber-500 focus:outline-none";

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);

  return (
    <form action={action} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-steel-100">İsim *</span>
          <input name="isim" required autoComplete="name" className={inputCls} />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-steel-100">Telefon *</span>
          <input
            name="telefon"
            type="tel"
            required
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
        disabled={pending}
        className="rounded bg-amber-500 px-6 py-3 font-display font-bold uppercase text-steel-950 transition-colors hover:bg-amber-300 disabled:opacity-60"
      >
        {pending ? "Gönderiliyor…" : "Gönder"}
      </button>

      {state.message && (
        <p
          role="status"
          className={`text-sm font-semibold ${state.ok ? "text-amber-300" : "text-red-400"}`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
