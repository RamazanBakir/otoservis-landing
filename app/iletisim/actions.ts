"use server";

export interface FormState {
  ok: boolean;
  message: string;
}

export async function submitContact(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const isim = String(formData.get("isim") ?? "").trim();
  const telefon = String(formData.get("telefon") ?? "").trim();
  const arac = String(formData.get("arac") ?? "").trim();
  const mesaj = String(formData.get("mesaj") ?? "").trim();

  if (!isim || !telefon || !mesaj) {
    return { ok: false, message: "Lütfen isim, telefon ve sorun açıklamasını doldurun." };
  }
  if (!/^[0-9+\s()-]{10,}$/.test(telefon)) {
    return { ok: false, message: "Telefon numarası geçersiz görünüyor." };
  }

  const payload = { isim, telefon, arac, mesaj, tarih: new Date().toISOString() };

  // Basit webhook entegrasyonu: FORM_WEBHOOK_URL tanımlıysa POST edilir.
  // (E-posta için buraya Resend/SMTP entegrasyonu da eklenebilir.)
  const webhook = process.env.FORM_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      return {
        ok: false,
        message: "Mesaj gönderilemedi. Lütfen telefonla ulaşın: 0507 921 33 88.",
      };
    }
  } else {
    // Webhook tanımlı değilken kayıt logda kalır (Vercel logs).
    console.log("[iletisim-formu]", payload);
  }

  return {
    ok: true,
    message: "Mesajınız alındı. En kısa sürede sizi arayacağız — acilse: 0507 921 33 88.",
  };
}
