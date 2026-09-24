import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { clinic } from "@/config/clinic";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function TreatmentOpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = clinic.treatments.find((item) => item.slug === slug);
  if (!treatment) notFound();
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#F7F3EE", color: "#2B2622", padding: "72px 80px", fontFamily: "DM Sans" }}><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><div style={{ color: "#3E5C4A", fontSize: 25, fontWeight: 600 }}>{clinic.name}</div><div style={{ width: 220, height: 18, borderRadius: 999, background: "#DCE5DC" }} /></div><div style={{ display: "flex", flexDirection: "column", maxWidth: 1000 }}><div style={{ color: "#9A6A4C", fontSize: 22, textTransform: "uppercase", letterSpacing: "3px" }}>{treatment.category}</div><div style={{ marginTop: 20, fontFamily: "Fraunces", fontSize: 72, lineHeight: 1.05, letterSpacing: "-2px" }}>{treatment.title}</div><div style={{ marginTop: 24, color: "#6E655C", fontSize: 28 }}>{clinic.city} · {clinic.state}</div></div></div>, size);
}
