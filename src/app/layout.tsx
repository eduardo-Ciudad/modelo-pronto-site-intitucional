import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { clinic } from "@/config/clinic";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsappFloat } from "@/components/layout/whatsapp-float";
import { JsonLd } from "@/components/seo/json-ld";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(clinic.siteUrl),
  title: { default: clinic.name, template: `%s | ${clinic.name}` },
  description: clinic.description,
  openGraph: { title: clinic.name, description: clinic.description, locale: "pt_BR", type: "website" },
  twitter: { card: "summary_large_image", title: clinic.name, description: clinic.description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const sameAs = [clinic.social.instagram].filter((url) => url !== "#");
  const clinicJsonLd = {
    "@context": "https://schema.org",
    "@type": "Physiotherapy",
    "@id": `${clinic.siteUrl}/#clinica`,
    name: clinic.name,
    description: clinic.description,
    url: clinic.siteUrl,
    telephone: clinic.phoneInternational,
    email: clinic.email,
    image: new URL(clinic.pages.about.headerImage, clinic.siteUrl).toString(),
    address: { "@type": "PostalAddress", ...clinic.addressDetails },
    openingHoursSpecification: clinic.openingHours.map((item) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: item.days, opens: item.opens, closes: item.closes })),
    areaServed: { "@type": "City", name: clinic.city },
    ...(sameAs.length ? { sameAs } : {}),
  };
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body><JsonLd data={clinicJsonLd} /><Navbar /><div className="min-h-[45vh]">{children}</div><Footer /><WhatsappFloat /><GoogleAnalytics /></body>
    </html>
  );
}
