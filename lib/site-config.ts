/**
 * Tek merkezi yapılandırma — NAP (Name/Address/Phone) tutarlılığı buradan sağlanır.
 * Doldurulacak alanlar için PLAN.md sonundaki listeye bakın.
 */
export const site = {
  url: "https://muglatamirci.com",
  brand: "Muğla Tamirci",
  usta: "Gökhan Oto",
  /** Site başlıklarında marka eki */
  titleBrand: "Muğla Tamirci — Gökhan Oto",
  /** Schema `name` */
  schemaName: "Gökhan Oto — Muğla Tamirci",

  phoneDisplay: "0507 921 33 88",
  phoneE164: "+905079213388",
  telHref: "tel:+905079213388",
  whatsappHref:
    "https://wa.me/905079213388?text=" +
    encodeURIComponent(
      "Merhaba, aracım için bilgi almak istiyorum. Marka/model: "
    ),
  whatsappHrefEn:
    "https://wa.me/905079213388?text=" +
    encodeURIComponent("Hello, I need help with my car in Muğla."),
  whatsappHrefAcil:
    "https://wa.me/905079213388?text=" +
    encodeURIComponent("Yolda kaldım. Konumum ve aracım: "),

  address: {
    street: "Orhaniye Mah. 124. Sok. No: 33, Muğla Sanayi Sitesi",
    district: "Menteşe",
    city: "Muğla",
    postalCode: "48000",
    country: "TR",
  },
  addressFull:
    "Orhaniye Mah. 124. Sok. No: 33, Muğla Sanayi Sitesi, Menteşe / Muğla",
  geo: { lat: 37.2153, lng: 28.3636 },
  mapsUrl:
    "https://maps.google.com/?q=" +
    encodeURIComponent(
      "Orhaniye Mahallesi 124. Sokak No:33 Muğla Sanayi Sitesi Menteşe Muğla"
    ),

  // {{TECRUBE}} — geçici değer
  tecrube: "20",
  kurulus: 2005,

  // {{SAATLER}} — geçici değer
  hours: {
    text: "Pazartesi – Cumartesi 08:30 – 19:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:30",
    closes: "19:00",
  },

  priceRange: "₺₺",
  // {{MARKALAR}}
  markalar: "tüm marka ve modeller",
  // {{GBP_LINK}} — Google Business Profile linki eklenince sameAs'e girer
  sameAs: [] as string[],

  /** Ana sayfa sezon bandı — içerik buradan yönetilir */
  seasonBanner: {
    active: true,
    text: "Yaz sezonu: Tatile çıkmadan ücretsiz 10 nokta kontrol — arayın, randevunuzu ayıralım.",
  },
} as const;

export type Site = typeof site;
