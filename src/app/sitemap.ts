import type { MetadataRoute } from "next";
import { clinic } from "@/config/clinic";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    { url: clinic.siteUrl, priority: 1 },
    { url: `${clinic.siteUrl}/tratamentos`, priority: 0.9 },
    ...clinic.treatments.map((treatment) => ({ url: `${clinic.siteUrl}/tratamentos/${treatment.slug}`, priority: 0.6 })),
    { url: `${clinic.siteUrl}/sobre`, priority: 0.6 },
    { url: `${clinic.siteUrl}/contato`, priority: 0.6 },
    { url: `${clinic.siteUrl}/politica-de-privacidade`, priority: 0.6 },
  ];
  return entries;
}
