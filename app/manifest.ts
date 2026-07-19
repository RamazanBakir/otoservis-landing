import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Muğla Tamirci — Gökhan Oto",
    short_name: "MuğlaTamirci",
    description: "Muğla oto tamir, bakım ve servis — Sanayi Sitesi, Menteşe.",
    start_url: "/",
    display: "browser",
    background_color: "#15181c",
    theme_color: "#15181c",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
