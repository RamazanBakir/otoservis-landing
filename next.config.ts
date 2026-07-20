import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    // CSP taslağı: GA4 aktif edildiğinde googletagmanager zaten listede.
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Dev modda React/Turbopack eval() kullanır; prod CSP'sinde unsafe-eval YOK.
      // Cloudflare Web Analytics beacon'ı (edge tarafından enjekte edilir) izinli.
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://static.cloudflareinsights.com`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https://www.google-analytics.com",
      "font-src 'self'",
      "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://cloudflareinsights.com",
      "frame-src https://www.google.com",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // Vercel'de SSG; başka statik hosting gerekirse `output: "export"` açılır
  // (o durumda headers/redirects hosting katmanında verilmeli).
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      // www → apex 301 (Vercel domain ayarında apex primary seçilmeli)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.muglatamirci.com" }],
        destination: "https://muglatamirci.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
