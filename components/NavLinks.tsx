"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks({ items }: { items: { href: string; label: string }[] }) {
  const pathname = usePathname();

  return (
    <>
      {items.map((item) => {
        const active = pathname === item.href || pathname.startsWith(item.href + "/");
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`relative py-1 text-sm transition-colors ${
              active
                ? "font-semibold text-amber-300 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-amber-500"
                : "text-steel-400 hover:text-steel-100"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}
