import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 36, background: "#F7F3EE", color: "#3E5C4A", fontFamily: "Fraunces", fontSize: 112, fontWeight: 600 }}>A</div>, size);
}
