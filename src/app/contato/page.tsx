import type { Metadata } from "next";
import { clinic } from "@/config/clinic";
import { PageHeader } from "@/components/shared/page-header";
import { ContactDetails } from "@/components/shared/contact-details";
import { FaqSection } from "@/components/shared/faq-section";
import { FinalCta } from "@/components/shared/final-cta";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = { title: clinic.pages.contact.metadataTitle, description: clinic.pages.contact.metadataDescription, alternates: { canonical: "/contato" } };

export default function ContactPage() {
  return <main><PageHeader breadcrumbs={[{ label: clinic.pages.breadcrumbs.home, href: "/" }, { label: clinic.pages.breadcrumbs.contact }]} eyebrow={clinic.pages.contact.eyebrow} title={clinic.pages.contact.title} description={clinic.pages.contact.description} /><Section className="pt-8"><Container><ContactDetails /></Container></Section><FaqSection items={clinic.faq} eyebrow={clinic.home.faq.eyebrow} title={clinic.home.faq.title} description={clinic.home.faq.description} cta={clinic.home.faq.cta} /><Section><Container><FinalCta /></Container></Section></main>;
}
