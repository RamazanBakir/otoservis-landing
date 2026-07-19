import { ImageResponse } from "next/og";

export const alt = "Muğla Tamirci — Gökhan Oto | Muğla Oto Tamir ve Servis";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Tek OG şablonu — tüm sayfalarda kullanılır. */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#15181c",
          padding: 64,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 30, color: "#ff9f1c", fontWeight: 700, textTransform: "uppercase", letterSpacing: 4 }}>
            Muğla Sanayi Sitesi · Menteşe
          </div>
          <div style={{ display: "flex", fontSize: 84, color: "#e8eaed", fontWeight: 700, marginTop: 20, lineHeight: 1.05 }}>
            Muğla Oto Tamir ve Servis
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 40, color: "#e8eaed", fontWeight: 700 }}>
              MuğlaTamirci <span style={{ color: "#ff9f1c", marginLeft: 14 }}>Gökhan Oto</span>
            </div>
            <div style={{ display: "flex", fontSize: 28, color: "#8b939e", marginTop: 8 }}>
              muglatamirci.com
            </div>
          </div>
          <div
            style={{
              display: "flex",
              background: "#ff9f1c",
              color: "#15181c",
              fontSize: 40,
              fontWeight: 700,
              padding: "18px 36px",
              borderRadius: 10,
            }}
          >
            0507 921 33 88
          </div>
        </div>
      </div>
    ),
    size
  );
}
