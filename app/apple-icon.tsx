import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch icon — marka rengi zemin + MT monogram. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#15181c",
          borderRadius: 36,
        }}
      >
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700, color: "#ff9f1c" }}>MT</div>
        <div style={{ display: "flex", fontSize: 18, color: "#e8eaed", letterSpacing: 2 }}>
          GÖKHAN OTO
        </div>
      </div>
    ),
    size
  );
}
