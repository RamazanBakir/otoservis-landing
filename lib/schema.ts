import { site } from "./site-config";
import type { Faq } from "./services";

type JsonLd = Record<string, unknown>;

const baseAutoRepair: JsonLd = {
  "@type": "AutoRepair",
  "@id": `${site.url}/#autorepair`,
  name: site.schemaName,
  url: site.url,
  telephone: site.phoneE164,
  priceRange: site.priceRange,
  image: `${site.url}/opengraph-image`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.district,
    addressRegion: site.address.city,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: site.hours.days,
      opens: site.hours.opens,
      closes: site.hours.closes,
    },
  ],
  ...(site.sameAs.length > 0 ? { sameAs: site.sameAs } : {}),
};

export function autoRepairSchema(extra?: {
  areaServedCity?: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    ...baseAutoRepair,
    ...(extra?.areaServedCity
      ? {
          areaServed: {
            "@type": "City",
            name: extra.areaServedCity,
            containedInPlace: { "@type": "State", name: "Muğla" },
          },
        }
      : {}),
  };
}

export function serviceSchema(name: string, description: string, url: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url,
    provider: { "@id": `${site.url}/#autorepair` },
    areaServed: { "@type": "State", name: "Muğla" },
  };
}

export function faqSchema(faqs: Faq[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema(post: {
  title: string;
  description: string;
  slug: string;
  date: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    author: { "@type": "Organization", name: site.schemaName, url: site.url },
    publisher: { "@type": "Organization", name: site.schemaName, url: site.url },
  };
}

export interface Crumb {
  name: string;
  href: string;
}

export function breadcrumbSchema(crumbs: Crumb[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${site.url}${c.href}`,
    })),
  };
}
