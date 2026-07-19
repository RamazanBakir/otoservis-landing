# PLAN — muglatamirci.com

Muğla / Menteşe oto tamir atölyesi için sıfırdan, SEO-first, %100 statik Next.js sitesi.
Her faz bittiğinde bu dosyada `✅ TAMAMLANDI` işaretlenir.

---

## FAZ 7 (öne alındı) — Tasarım Planı: "Dürüst Atölye"

### Konsept
Kurumsal SaaS estetiği değil; gerçek tamirhane dünyası. Metal, iş emri fişi, damga,
torkmetre. Tek cesur imza öğesi + disiplinli sakin geri kalan.

### Renk tokenları (Tailwind theme)
| Token | Hex | Kullanım |
|---|---|---|
| `steel-950` | `#15181c` | Ana zemin (koyu antrasit) |
| `steel-900` | `#1d2126` | Kart/section zemini |
| `steel-800` | `#2a2f36` | Çizgi, ayraç, hover zemin |
| `steel-400` | `#8b939e` | İkincil metin |
| `steel-100` | `#e8eaed` | Birincil metin (koyu zeminde) |
| `amber-500` | `#f59e0b` → özel: `#ff9f1c` | Vurgu: CTA, uyarı lambası turuncusu |
| `amber-300` | `#ffd166` | Vurgu hover / damga sarısı |
| `paper` | `#f3efe7` | "Fiş" kartlarının kağıt zemini (açık blok) |

Koyu zemin ağırlıklı site; "iş emri fişi" kartları açık `paper` renginde kontrast blok.

### Tipografi (self-hosted, next/font)
- Display: **Archivo Condensed / Archivo Expanded ailesi (Archivo)** — mekanik, condensed başlık hissi, `font-stretch` varyantları
- Gövde: **Inter** — yüksek okunabilirlik
- Rakamlar: `font-variant-numeric: tabular-nums` utility (`​.tabular`) — fiyat/süre/plaka hissi

### İmza öğesi (TEK): İş Emri Fişi
Hizmet kartları gerçek servis iş emri fişi gibi: kağıt zemin, üst kenarda perfore
(dashed-border + radial-gradient delikler, saf CSS), köşede "GÖKHAN OTO — MUĞLA" damga
rozeti, fiş numarası (`İŞ EMRİ #001` gibi tabular rakam), alt kısımda "tıkla-ara" şerit.
Başka dekoratif sistem yok; geri kalan layout sakin grid.

### Layout konsepti
- Hero: koyu zemin, büyük condensed tez cümlesi, tek satır alt vaat, iki CTA (Ara / WhatsApp).
  Sağda/altta dekor yok — sadece ince amber "servis hattı" çizgisi (tek orkestre animasyon,
  `prefers-reduced-motion` ile kapanır).
- Mobil alt aksiyon çubuğu: Ara / WhatsApp / Yol Tarifi — yalnızca mobil, tüm sayfalarda.
  `/yolda-kaldim` sayfasında daha büyük ve amber zeminli.
- Breadcrumb tüm alt sayfalarda görsel + schema.
- Güven şeridi: "Değişen parça size gösterilir · Önce fiyat, sonra işlem · Tüm marka-model".

---

## FAZ 1-2 — Mimari + Kelime Matrisi

URL yapısı ve kelime hedefleri proje promptundaki tabloyla birebir (tek birincil kelime /
sayfa, yamyamlık yok). Route'lar:

```
/, /hizmetler, /hizmetler/[slug] (10), /bolgeler, /bolgeler/[ilce] (13),
/yolda-kaldim, /muayene-oncesi-kontrol, /hakkimizda, /iletisim,
/blog, /blog/[slug] (10 iskelet, 3 tam), /en, /404
```

Title kalıbı: `{Kelime} | Muğla Tamirci — Gökhan Oto` (≤60 kr).
Description: 140–155 kr, telefon + güven öğesi + CTA.

---

## Teknik Kararlar (FAZ 0)

- Next.js 15 (App Router) + TypeScript strict + Tailwind CSS v4
- `output: 'export'` YOK (Vercel statik SSG yeterli; tüm sayfalar `generateStaticParams`
  ile statik, dynamic route'larda `dynamicParams = false`)
- Client component SADECE: MobileMenu, FaqAccordion, ContactForm, (WhatsApp butonu düz link
  olduğu için server'da kalır)
- Görsel: gerçek foto YOK → CSS/SVG tabanlı görsel dil, `next/image` sadece OG için değil;
  foto yerine tasarımsal bloklar. Placeholder img kullanılmayacak → sıfır layout shift.
- Font: `next/font` (Archivo + Inter, build-time self-host, CDN isteği yok)
- Güvenlik başlıkları `next.config.ts` headers(): HSTS, X-Content-Type-Options,
  Referrer-Policy, CSP taslağı
- `.env.example`: `NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_GSC_VERIFICATION`, `FORM_WEBHOOK_URL`
- favicon.svg ("MT" anahtar motifi) + manifest.webmanifest + apple-touch-icon

## Veri Katmanı (içerik koddan ayrık)

```
lib/site-config.ts   → NAP, telefon, saatler, sosyal, sezon bandı içeriği
lib/services.ts      → 10 hizmet: slug, title, meta, H1, içerik blokları, SSS
lib/districts.ts     → 13 ilçe: slug, ulaşım (yol+süre), senaryo paragrafı,
                       "neden gelinir", 4-5 özgün SSS, ilgili blog slugları
content/blog/*.mdx→ değil; lib/blog.ts + content/ altında TSX/MD hibrit:
                       10 yazı meta + 3 tam içerik (react node değil, düz veri)
lib/schema.ts        → JSON-LD üreticileri (AutoRepair, Service, FAQPage, Article, Breadcrumb)
```

## Uygulama Sırası

- [x] FAZ P — PLAN.md yazıldı ✅ TAMAMLANDI
- [x] FAZ 0 — Scaffold: Next 16 + Tailwind v4, next/font (Archivo+Inter self-hosted), güvenlik
        başlıkları + www→apex 301 (`next.config.ts`), `.env.example`, icon.svg + manifest ✅ TAMAMLANDI
- [x] FAZ V — Veri dosyaları: `lib/site-config.ts`, `lib/services.ts` (10 hizmet + SSS),
        `lib/districts.ts` (13 ilçe, gerçek ulaşım + özgün senaryo + farklı SSS'ler),
        `lib/blog.ts` (10 yazı, 3 tam) ✅ TAMAMLANDI
- [x] FAZ C — Bileşenler: Header, MobileMenu (client), Footer, MobileActionBar, Breadcrumbs,
        FisCard (imza öğesi: perfore iş emri fişi), FaqSection (native `<details>` — JS'siz),
        CtaBlock, TrustStrip, ServiceLine (hero animasyonu), SchemaScript ✅ TAMAMLANDI
- [x] FAZ S — Sayfalar: /, /hizmetler (+10 detay), /bolgeler (+13 ilçe), /yolda-kaldim (acil,
        büyük varyant aksiyon çubuğu), /muayene-oncesi-kontrol, /hakkimizda, /iletisim
        (server action form + webhook slotu), /blog (+11 yazı sayfası), /en (hreflang tr↔en),
        not-found ✅ TAMAMLANDI
- [x] FAZ T — Teknik SEO: sitemap.ts (tüm route'lar), robots.ts, canonical her sayfada,
        hreflang tr↔en, OG şablonu (`opengraph-image.tsx`), AutoRepair/Service/FAQPage/
        Article/BreadcrumbList JSON-LD, GA4 + data-cta click event delegasyonu ✅ TAMAMLANDI
- [x] FAZ K — Kontrol: `npm run build` hatasız, 50 sayfa tamamı statik (○/●), dev server
        ayakta (localhost:3003 — 3000 başka projede), tüm rotalar 200, 404 çalışıyor,
        schema/canonical/hreflang HTML çıktısında doğrulandı ✅ TAMAMLANDI
- [x] Doldurulacaklar listesi raporu (aşağıda) ✅ TAMAMLANDI

## Revizyon Turu (paket + CSP + SEO + tasarım) ✅ TAMAMLANDI

- Paketler güncellendi: react 19.2.7, @types/node 26, TS 6.0.3, postcss override (0 zafiyet).
  eslint 10 + TS 7, eslint-config-next 16.2.10 gömülü plugin'leriyle kırıldığı için beklemede.
- CSP: dev'de `unsafe-eval` koşullu eklendi (React dev gereksinimi), prod CSP sıkı kaldı.
- SEO: viewport/themeColor export, hreflang `x-default`, /en `og:locale=en_US` düzeltildi.
  Render stratejisi doğrulandı: 50 sayfa tamamı SSG — bu site için doğru; ISR/SSR gereksiz.
- Tasarım: hazard şeridi (header + CTA kenarı), hero teknik ızgara + stat bandı,
  fiş kartlarında kağıt dokusu + hover kaldırma, aktif nav göstergesi (NavLinks client),
  bölüm eyebrow etiketleri, mobil çubukta iPhone safe-area, ::selection marka rengi.

## Responsive Denetim + İçerik Tamamlama Turu ✅ TAMAMLANDI

- Playwright ile 13 sayfa 390px mobil viewport'ta tarandı: yatay taşma SIFIR, görsel
  inceleme temiz (ekran görüntüleri scratchpad/shots altında). Fix gerekmedi.
- Blog: kalan 8 iskelet yazı tam içerikle dolduruldu — 11/11 yazı yayında.
  (periyodik bakım km tablosu, triger, sanayi rehberi, viraj/fren, kiralık araç
  +İngilizce özet, motor yağı, kış bakımı, uzun yol). Ana sayfa blog önizlemesi
  son 3 yazıyla sınırlandı.

## Title/H1 benzersizlik notu

Tüm title ve H1'ler veri dosyalarından üretilir; her hizmet/ilçe/yazı kendi benzersiz
title-description-H1 üçlüsünü taşır (services.ts / districts.ts / blog.ts alanları).
Kelime hedefleri FAZ 2 tablosuyla birebir; iki sayfa aynı birincil kelimeyi hedeflemez.

## Doldurulacak Placeholder'lar (kullanıcıdan)

`{{ADRES}}`, `{{TECRUBE}}`, `{{SAATLER}}`, `{{MARKALAR}}`, `{{GBP_LINK}}`, gerçek fotoğraflar,
GA4 ID, GSC doğrulama kodu, form webhook URL.
Kod içinde placeholder değil, makul geçici değerler + `site-config.ts` üzerinden tek noktadan
değiştirilebilir yapı kullanılacak (TECRUBE → "20+ yıl" geçici, ADRES → "Muğla Sanayi Sitesi,
Menteşe/Muğla" genel hali, SAATLER → Pzt-Cmt 08:30–19:00 geçici).
