import Link from "next/link";
import { breadcrumbSchema, type Crumb } from "@/lib/schema";
import { SchemaScript } from "./SchemaScript";

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <>
      <SchemaScript data={breadcrumbSchema(crumbs)} />
      <nav aria-label="Sayfa konumu" className="text-sm text-steel-400">
        <ol className="flex flex-wrap items-center gap-1.5">
          {crumbs.map((c, i) => {
            const last = i === crumbs.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-1.5">
                {i > 0 && <span aria-hidden>›</span>}
                {last ? (
                  <span aria-current="page" className="text-steel-100">
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.href} className="hover:text-amber-300">
                    {c.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
