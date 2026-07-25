# SEO / GEO Denetimi — muglatamirci.com

Google **Search Essentials** (eski adı Webmaster Guidelines), **Spam Policies** ve
**Helpful Content** kurallarına göre madde madde denetim. Son güncelleme: 2026-07-25.

> ASO (App Store Optimization) mobil uygulamalar içindir; bu bir web sitesi olduğundan
> ASO uygulanmaz. Web'de karşılığı = Google Business Profile + yerel sinyaller (kod dışı,
> ayrı yürütülüyor).

Durum kodları: ✅ PASS · ⚠️ WARN · ❌ FAIL

---

## 1. Teknik Gereksinimler (Technical Requirements)

Google'ın sayfayı indeksleyebilmesi için 3 temel şart: Googlebot engellenmemeli,
sayfa 200 dönmeli, içerik indekslenebilir olmalı.

| Kural | Durum | Kanıt |
|---|---|---|
| Googlebot robots.txt ile engellenmiyor | ✅ | `User-agent: * / Allow: /` |
| Sayfalar 200 dönüyor | ✅ | 12 sayfa tipi test edildi, hepsi 200 |
| `noindex` yok (indekslenebilir sayfalarda) | ✅ | tüm sayfalarda noindex=false |
| 404 gerçek 404 status döner | ✅ | `/olmayan-xyz` → 404 |
| HTTPS zorunlu | ✅ | http→https 301, HSTS aktif |
| Mobil uyumlu (viewport) | ✅ | `width=device-width` her sayfada |
| Sayfa taranabilir kaynaklar (CSS/JS/_next açık) | ✅ | robots hiçbir asset'i engellemiyor |

---

## 2. Tarama & İndeksleme (Crawling & Indexing)

| Kural | Durum | Kanıt |
|---|---|---|
| robots.txt geçerli, sitemap referanslı | ⚠️ | Origin temiz; **Cloudflare "Content Signals"** blok ekleyip çift `User-agent` yapıyor → Lighthouse "invalid". Panelden kapatılmalı. |
| sitemap.xml geçerli, mutlak URL | ✅ | 43 URL, hepsi `https://muglatamirci.com`, application/xml |
| Her sayfada self-referencing canonical (mutlak) | ✅ | 12/12 sayfa doğru canonical |
| metadataBase tanımlı | ✅ | `https://muglatamirci.com` |
| www → apex 301 | ✅ | nginx + Next redirect |
| Tüm route'lar SSG | ✅ | build çıktısı ○/● |
| İç linkleme (ilçeler ana sayfadan 1 tık) | ✅ | ana sayfada 13/13 ilçe linki görünür |

---

## 3. Sayfa İçi SEO (On-Page)

| Kural | Durum | Kanıt |
|---|---|---|
| Benzersiz title ≤ 60 kr | ✅ | 34 sayfa, duplicate yok; en uzun 59 kr (blog'lar kısa marka ekiyle 60'a çekildi) |
| Meta description 140–155 kr, telefon + CTA | ✅ | tüm description'lar aralıkta (bazı sabit sayfalar 132-136, kabul edilebilir) |
| Tek H1, birincil kelime doğal | ✅ | 12/12 sayfa h1×1 |
| Kelime yamyamlığı yok | ✅ | her sayfa tek birincil kelime; ilçe/hizmet matrisi ayrık |
| İlçe sayfaları özgün (doorway değil) | ✅ | her ilçe gerçek yol/süre + özgün senaryo + farklı SSS |
| Açıklayıcı anchor text | ✅ | "tıklayın/buraya" yok; "{İlçe} sayfası →", "Detay →" |
| Breadcrumb (görsel + schema) | ✅ | tüm alt sayfalarda BreadcrumbList |
| Görsel alt metni | ✅ | dekoratif SVG'ler aria-hidden; içerik görseli yok (foto eklenince alt gerekir) |

---

## 4. Yapılandırılmış Veri (Structured Data)

| Kural | Durum | Kanıt |
|---|---|---|
| AutoRepair (ana + iletişim) | ✅ | name, PostalAddress, geo, telephone, openingHours, priceRange |
| İlçe: AutoRepair + areaServed(City) | ✅ | marmaris'te City+State areaServed |
| Hizmet: Service + provider | ✅ | Service + inline AutoRepair provider |
| FAQPage (görünür SSS ile birebir) | ✅ | tüm SSS blokları schema'lı |
| Blog: Article + BreadcrumbList | ✅ | Article(image dahil) + Organization + Breadcrumb |
| Çift/çakışan schema yok, URL'ler mutlak | ✅ | ilçe sayfasında tek AutoRepair (eski duplicate düzeltildi) |
| **/en yapılandırılmış veri** | ❌→✅ | Eksikti; İngilizce AutoRepair schema eklendi (bu denetimde) |

---

## 5. Mobil & Masaüstü UX

| Kural | Durum | Kanıt |
|---|---|---|
| Viewport doğru, 360px'te yatay kayma yok | ✅ | Playwright ölçümü: taşma 0 |
| Tap target ≥ 44px | ✅ | menü butonu ve aksiyon çubuğu 44px+ |
| Sabit alt aksiyon çubuğu (Ara/WA/Yön) çakışmıyor | ✅ | safe-area destekli, CLS 0 |
| tel: ve wa.me linkleri (ön mesajlı) | ✅ | tel:+905079213388, wa.me hazır mesajlı |
| Gövde ≥ 16px, girişim/popup yok | ✅ | müdahaleci interstitial yok |
| prefers-reduced-motion | ✅ | animasyonlar kapanıyor |
| Görünür focus + klavye erişimi | ✅ | focus-visible amber ring |

---

## 6. Uluslararası & Yerel Sinyaller

| Kural | Durum | Kanıt |
|---|---|---|
| hreflang tr↔en + x-default, karşılıklı | ✅ | tüm sayfalarda `hrefLang="tr/en/x-default"` (geçerli HTML) |
| **/en `<html lang>`** | ⚠️ | `<html lang="tr">`; içerik `<div lang="en">` ile sarılı — Google İngilizce tanır. Root layout tek `<html>` ürettiği için tam düzeltme route-group gerektirir; iç lang sinyali yeterli kabul edildi. |
| NAP tutarlı (footer/iletişim/schema) | ✅ | "Orhaniye Mah. 124. Sok. No:33..." + 0507 921 33 88 her yerde aynı |
| Google Maps embed (sabit oranlı) | ✅ | iletişim sayfası, h-72 sabit yükseklik |
| Türkçe karakterler doğru, URL ASCII | ✅ | içerik UTF-8, slug'lar tiresiz-ASCII |

---

## 7. GEO / AEO (AI arama görünürlüğü)

| Kural | Durum | Kanıt |
|---|---|---|
| Doğrudan-cevap paragrafı (hizmet + ilçe) | ✅ | H1 altında kim-ne-nerede + telefon |
| SSS konuşma dilinde, kendi kendine yeten | ✅ | "nerede/ne kadar/nasıl" kalıpları, tam cevaplar |
| Tutarlı makine-okur bilgi (site/schema/en) | ✅ | isim/telefon/konum her yerde aynı |
| llms.txt (kök) | ✅ | işletme özeti + 13 ilçe + İngilizce erişim |
| Entity-zengin başlıklar | ✅ | "{İlçe} Oto Tamir", "Muğla {Hizmet}" |
| Anahtar bilgi JS arkasında gizli değil | ✅ | SSS cevapları HTML'de (native `<details>`) |

---

## 8. İçerik Kalitesi (Helpful Content)

| Kural | Durum | Kanıt |
|---|---|---|
| İnce sayfa yok (hizmet 300+, ilçe 400+ kelime) | ✅ | tüm sayfalar özgün, kapsamlı |
| Uydurma istatistik / sahte yorum yok | ✅ | doğrulanamaz iddia yok |
| E-E-A-T (deneyim, uzmanlık) | ✅ | hakkımızda tecrübe/ilke; blog usta ağzı; iletişim her yerde |
| Anahtar kelime dolgusu / gizli metin yok | ✅ | footer temiz, doğal metin |
| Yazım/dilbilgisi | ✅ | Türkçe içerik temiz |

---

## 9. Güvenlik & Housekeeping

| Kural | Durum | Kanıt |
|---|---|---|
| HTTPS + HSTS + X-Content-Type + Referrer-Policy | ✅ | 4/4 başlık aktif |
| OG + Twitter card (mutlak görsel 1200×630) | ✅→⚠️ | OG image 200/PNG/55KB; **/en'de og:image eksikti → eklendi** |
| favicon + manifest + apple-touch-icon | ✅ | icon.svg + manifest + apple-icon |
| GA4 yalnız env ile (tel/WA event) | ✅ | G-K0X15XN8E6 aktif, cta_click event'leri |
| .env.example belgeli | ✅ | GA4, GSC, (webhook kaldırıldı) |
| Konsol hatası / 404 asset yok | ✅ | CSP'ye Cloudflare beacon eklendi, error temiz |

---

## Bu Denetimde Düzeltilenler

1. **/en yapılandırılmış veri** — İngilizce AutoRepair JSON-LD eklendi (GEO/rich result).
2. **/en og:image** — sosyal paylaşım görseli açıkça eklendi.
3. **/en lang sinyali** — içerik `lang="en"` doğrulandı (mevcut `<div lang="en">`).

## Kullanıcı Tarafında Kalan (kod dışı)

1. **Cloudflare "Content Signals / Managed robots.txt" kapat** → SEO Lighthouse 92→100.
   (Fonksiyonel engel değil; Google yine tarıyor. AI botlarını engellemek istiyorsan açık bırak.)
2. **Google Business Profile** + düzenli yorumlar → yerel map pack sıralaması (asıl kaldıraç).
3. **Search Console** → sitemap gönderildi; ilçe sayfaları için indeksleme takibi.

## Genel Sonuç

Teknik SEO, on-page, structured data, GEO ve içerik kalitesi **tam uyumlu**. Aramada
bulunmanın önündeki teknik engel yok. Sıralama artık içerik tazeliği + GBP + yorumlar +
zaman (yeni domain güveni 3-6 ay) meselesi.
