/**
 * Hizmet başına çizgi ikon — inline SVG, tek renk (currentColor), dekoratif.
 * Ağ isteği yok; fiş kartları ve listelerde kullanılır.
 */
const paths: Record<string, React.ReactNode> = {
  "motor-tamiri": (
    // Motor bloğu
    <>
      <rect x="4" y="8" width="13" height="10" rx="1.5" />
      <path d="M7 8V5h6v3M17 11h3v4h-3M7 18v2m6-2v2M4 12H2" />
    </>
  ),
  "periyodik-bakim": (
    // Yağ damlası + kontrol tiki
    <>
      <path d="M12 3s-5.5 6-5.5 10a5.5 5.5 0 0 0 11 0C17.5 9 12 3 12 3Z" />
      <path d="m9.5 13.5 2 2 3.5-4" />
    </>
  ),
  "fren-tamiri": (
    // Fren diski
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 5v2m0 10v2m7-7h-2M7 12H5m11.5-4.5-1.4 1.4M8.9 15.1l-1.4 1.4m0-9 1.4 1.4m6.2 6.2 1.4 1.4" />
    </>
  ),
  "oto-elektrik": (
    // Şimşek
    <path d="M13 2 5 13.5h5.5L10 22l8-11.5h-5.5L13 2Z" />
  ),
  "oto-klima": (
    // Kar tanesi
    <>
      <path d="M12 2v20M4 6l16 12M4 18 20 6" />
      <path d="m12 5-2-2m2 2 2-2m-2 16-2 2m2-2 2 2M6.2 7.6 3.5 7l.6-2.7m13.7 12.1 2.7.6-.6 2.7M6.2 16.4l-2.7.6.6 2.7M17.8 7.6l2.7-.6-.6-2.7" />
    </>
  ),
  "triger-degisimi": (
    // Kayış + dişliler
    <>
      <circle cx="7" cy="8" r="3.5" />
      <circle cx="17" cy="14" r="3.5" />
      <path d="M9.5 5.5 20 10.5M4.5 10.5 15 19.5" />
    </>
  ),
  "sanziman-debriyaj": (
    // Vites şeması (H-pattern)
    <>
      <path d="M5 5v14M12 5v14M19 5v7M5 12h14" />
      <circle cx="5" cy="5" r="1.6" />
      <circle cx="12" cy="5" r="1.6" />
      <circle cx="19" cy="5" r="1.6" />
      <circle cx="5" cy="19" r="1.6" />
      <circle cx="12" cy="19" r="1.6" />
    </>
  ),
  "ariza-tespiti": (
    // Diagnostik: büyüteç + nabız
    <>
      <circle cx="10" cy="10" r="7" />
      <path d="m15.5 15.5 5 5M6.5 10h2l1.5-3 2 6 1.5-3h2" />
    </>
  ),
  "yedek-parca": (
    // Parça kutusu
    <>
      <path d="M3 8.5 12 4l9 4.5v7L12 20l-9-4.5v-7Z" />
      <path d="M3 8.5 12 13l9-4.5M12 13v7" />
    </>
  ),
  "oto-kurtarma": (
    // Çekici kancası
    <>
      <path d="M12 3v9a4 4 0 0 1-8 0v-1" />
      <circle cx="12" cy="3" r="1.5" />
      <path d="M4 21h16M7 21v-3m10 3v-3" />
    </>
  ),
  muayene: (
    // Kontrol panosu
    <>
      <rect x="5" y="4" width="14" height="17" rx="1.5" />
      <path d="M9 4V2h6v2M8.5 10l1.5 1.5L13 8.5m-4.5 7 1.5 1.5 3-3" />
    </>
  ),
};

export function ServiceIcon({
  slug,
  size = 26,
  className = "",
}: {
  slug: string;
  size?: number;
  className?: string;
}) {
  const p = paths[slug];
  if (!p) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      {p}
    </svg>
  );
}
