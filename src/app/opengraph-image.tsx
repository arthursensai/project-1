import { ImageResponse } from "next/og";
import { copy } from "@/data/copy";
import { isPreview } from "@/lib/utils";

export const alt = copy.meta.ogAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#eeeae2",
          color: "#171613",
          padding: 72,
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 28, fontFamily: "sans-serif", letterSpacing: 2 }}>
          FÈS · AÏN CHKEF
        </div>
        <div style={{ display: "flex", fontSize: 200, lineHeight: 1 }}>
          <span>coup</span>
          <span style={{ color: "#9b3a22" }}>&apos;</span>
          <span style={{ fontWeight: 700 }}>ART</span>
        </div>
        <div style={{ fontSize: 28, fontFamily: "sans-serif" }}>
          {isPreview ? copy.preview.label : copy.meta.description}
        </div>
      </div>
    ),
    size,
  );
}
