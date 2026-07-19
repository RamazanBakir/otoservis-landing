const taahhutler = [
  "Değişen parça size gösterilir",
  "Önce fiyat, sonra işlem",
  "Tüm marka ve modeller",
  "Yazılı arıza tespit raporu",
];

export function TrustStrip() {
  return (
    <ul className="grid grid-cols-2 gap-px overflow-hidden rounded border border-steel-800 bg-steel-800 sm:grid-cols-4">
      {taahhutler.map((t) => (
        <li
          key={t}
          className="flex items-center gap-2 bg-steel-900 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-steel-100"
        >
          <span aria-hidden className="text-amber-500">✓</span>
          {t}
        </li>
      ))}
    </ul>
  );
}
