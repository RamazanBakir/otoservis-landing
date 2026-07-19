import type { MetadataRoute } from "next";
import { site } from "@/lib/site-config";
import { services } from "@/lib/services";
import { districts } from "@/lib/districts";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { path: "", priority: 1.0 },
    { path: "/hizmetler", priority: 0.9 },
    { path: "/bolgeler", priority: 0.9 },
    { path: "/yolda-kaldim", priority: 0.9 },
    { path: "/muayene-oncesi-kontrol", priority: 0.8 },
    { path: "/hakkimizda", priority: 0.6 },
    { path: "/iletisim", priority: 0.7 },
    { path: "/blog", priority: 0.7 },
    { path: "/en", priority: 0.6 },
  ].map((p) => ({
    url: `${site.url}${p.path}`,
    lastModified: now,
    priority: p.priority,
  }));

  const servicePages = services.map((s) => ({
    url: `${site.url}/hizmetler/${s.slug}`,
    lastModified: now,
    priority: 0.8,
  }));

  const districtPages = districts.map((d) => ({
    url: `${site.url}/bolgeler/${d.slug}`,
    lastModified: now,
    priority: 0.8,
  }));

  const blogPages = blogPosts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...districtPages, ...blogPages];
}
