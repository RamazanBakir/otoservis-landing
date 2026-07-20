/**
 * Hero görseli: lift üzerinde araç — teknik çizim / blueprint stili.
 * Inline SVG: ağ isteği yok, CLS yok. Dekoratif (aria-hidden).
 * Renkler tema tokenlarından (CSS değişkenleri).
 */
export function HeroIllustration({ className = "" }: { className?: string }) {
  const steel = "var(--color-steel-700)";
  const light = "var(--color-steel-400)";
  const amber = "var(--color-amber-500)";

  return (
    <svg
      viewBox="0 0 520 380"
      fill="none"
      aria-hidden
      className={className}
      role="img"
    >
      {/* Blueprint ızgara */}
      <defs>
        <pattern id="bp-grid" width="26" height="26" patternUnits="userSpaceOnUse">
          <path d="M26 0H0v26" stroke={steel} strokeOpacity="0.25" strokeWidth="1" fill="none" />
        </pattern>
      </defs>
      <rect width="520" height="380" fill="url(#bp-grid)" />

      {/* Ölçü çizgileri (teknik resim hissi) */}
      <g stroke={light} strokeOpacity="0.6" strokeWidth="1">
        <path d="M70 40v18M450 40v18M70 49h380" strokeDasharray="4 4" />
        <path d="M70 45 64 49l6 4M450 45l6 4-6 4" fill="none" />
      </g>
      <text x="260" y="40" textAnchor="middle" fill={light} fontSize="11" fontFamily="monospace" opacity="0.8">
        4.420 mm
      </text>

      {/* Araç gövdesi — sedan silueti */}
      <g stroke={amber} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
        <path d="M84 208c0-8 6-14 14-14h34l40-44c6-7 15-11 24-11h116c9 0 18 4 24 11l38 44h44c10 0 18 8 18 18v26c0 6-5 11-11 11h-17" fill="none" />
        <path d="M148 249h-42c-12 0-22-8-22-18v-23" fill="none" />
        <path d="M214 249h92" fill="none" />
        {/* Camlar */}
        <path d="M182 194l32-36c4-5 10-7 16-7h42v43h-90Zm104-43h34c6 0 12 3 16 7l31 36h-81v-43Z" fill="none" strokeWidth="2" />
        {/* Kapı çizgisi + kulp */}
        <path d="M283 194v55M296 204h14" strokeWidth="2" />
      </g>

      {/* Tekerlekler */}
      <g stroke={amber} strokeWidth="2.5">
        <circle cx="181" cy="249" r="30" fill="var(--color-steel-950)" />
        <circle cx="181" cy="249" r="12" />
        <circle cx="339" cy="249" r="30" fill="var(--color-steel-950)" />
        <circle cx="339" cy="249" r="12" />
      </g>
      {/* Jant kolları */}
      <g stroke={amber} strokeWidth="1.6">
        <path d="M181 237v-9m0 42v-9m12-12h9m-42 0h9m18-9 6-6m-30 36 6-6m24 0 6 6m-36-36 6 6" />
        <path d="M339 237v-9m0 42v-9m12-12h9m-42 0h9m18-9 6-6m-30 36 6-6m24 0 6 6m-36-36 6 6" />
      </g>

      {/* Lift platformu */}
      <g stroke={light} strokeWidth="2.5" strokeLinecap="round">
        <path d="M60 292h400" />
        <path d="M96 292v22m328-22v22M84 336h48m296-44v22m-24 22h48m-344-22h320" strokeWidth="2" />
        {/* Makas kolları */}
        <path d="m110 314 36 22m0-22-36 22m264-22 36 22m0-22-36 22" strokeWidth="2" />
      </g>

      {/* Callout: fren */}
      <g stroke={light} strokeWidth="1" strokeDasharray="3 3" opacity="0.9">
        <path d="M181 279v38h48" fill="none" />
        <circle cx="181" cy="279" r="2.5" fill={amber} stroke="none" />
      </g>
      <text x="234" y="321" fill={light} fontSize="11" fontFamily="monospace">
        fren: 11.8 mm ✓
      </text>

      {/* Callout: motor */}
      <g stroke={light} strokeWidth="1" strokeDasharray="3 3" opacity="0.9">
        <path d="M132 178H96v-62h30" fill="none" />
        <circle cx="132" cy="178" r="2.5" fill={amber} stroke="none" />
      </g>
      <text x="96" y="108" fill={light} fontSize="11" fontFamily="monospace">
        motor: OK ✓
      </text>

      {/* Callout: teşhis cihazı */}
      <g stroke={light} strokeWidth="1" strokeDasharray="3 3" opacity="0.9">
        <path d="M352 170h74v-48h-12" fill="none" />
        <circle cx="352" cy="170" r="2.5" fill={amber} stroke="none" />
      </g>
      <text x="360" y="108" fill={light} fontSize="11" fontFamily="monospace">
        OBD: 0 hata
      </text>

      {/* Damga */}
      <g transform="rotate(-8 448 348)">
        <rect x="404" y="332" width="92" height="30" rx="4" fill="none" stroke={amber} strokeWidth="1.8" opacity="0.9" />
        <text x="450" y="351" textAnchor="middle" fill={amber} fontSize="11" fontWeight="bold" fontFamily="monospace" opacity="0.95">
          KONTROL EDİLDİ
        </text>
      </g>
    </svg>
  );
}
