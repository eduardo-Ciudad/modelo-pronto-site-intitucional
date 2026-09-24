import { ImageResponse } from "next/og";
import { clinic } from "@/config/clinic";

export const alt = clinic.seo.homeTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#F7F3EE", color: "#2B2622", padding: "72px 80px", fontFamily: "DM Sans" }}><div style={{ display: "flex", width: "100%", height: 18, borderRadius: 999, background: "#DCE5DC" }} /><div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}><div style={{ fontFamily: "Fraunces", fontSize: 78, lineHeight: 1.05, letterSpacing: "-2px" }}>{clinic.name}</div><div style={{ marginTop: 28, color: "#3E5C4A", fontSize: 32, lineHeight: 1.35 }}>{clinic.tagline}</div></div><div style={{ display: "flex", alignItems: "center", gap: 16, color: "#6E655C", fontSize: 22 }}><div style={{ width: 48, height: 2, background: "#9A6A4C" }} />{clinic.city} · {clinic.state}</div></div>, size);
}
