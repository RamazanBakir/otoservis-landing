/**
 * Hero'daki "servis hattı": arıza → teşhis → onarım → teslim.
 * Sayfa yüklenirken çizilir (tek orkestre animasyon, reduced-motion'da statik).
 */
const steps = ["Arıza", "Teşhis", "Onay & Fiyat", "Onarım", "Teslim"];

export function ServiceLine() {
  return (
    <figure aria-label="Servis süreci: arıza, teşhis, onay ve fiyat, onarım, teslim">
      <svg
        className="servis-hatti w-full"
        viewBox="0 0 1000 60"
        fill="none"
        role="img"
        aria-hidden
      >
        <path
          d="M0 30 H1000"
          stroke="var(--color-steel-800)"
          strokeWidth="2"
        />
        <path
          d="M0 30 H1000"
          stroke="var(--color-amber-500)"
          strokeWidth="2"
          pathLength={1000}
        />
        {steps.map((_, i) => (
          <circle
            key={i}
            cx={60 + (i * 880) / (steps.length - 1)}
            cy="30"
            r="6"
            fill="var(--color-steel-950)"
            stroke="var(--color-amber-500)"
            strokeWidth="2"
          />
        ))}
      </svg>
      <figcaption className="grid grid-cols-5 text-center">
        {steps.map((s) => (
          <span
            key={s}
            className="font-display text-[10px] font-bold uppercase tracking-wider text-steel-400 sm:text-xs"
          >
            {s}
          </span>
        ))}
      </figcaption>
    </figure>
  );
}
