"use client";

import { useState } from "react";
import Link from "next/link";

export function MobileMenu({ items }: { items: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobil-menu"
        aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded border border-steel-800"
      >
        <span
          className={`h-0.5 w-5 bg-steel-100 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
        />
        <span className={`h-0.5 w-5 bg-steel-100 ${open ? "opacity-0" : ""}`} />
        <span
          className={`h-0.5 w-5 bg-steel-100 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {open && (
        <nav
          id="mobil-menu"
          aria-label="Mobil menü"
          className="absolute inset-x-0 top-16 border-b border-steel-800 bg-steel-950 px-4 pb-4"
        >
          <ul>
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-steel-800/60 py-3 text-steel-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
