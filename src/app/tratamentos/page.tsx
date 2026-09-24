import type { Metadata } from "next";
import { clinic } from "@/config/clinic";
import { PageHeader } from "@/components/shared/page-header";
import { TreatmentCard } from "@/components/shared/treatment-card";
import { FaqSection } from "@/components/shared/faq-section";
import { FinalCta } from "@/components/shared/final-cta";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = { title: clinic.pages.treatments.metadataTitle, description: clinic.pages.treatments.metadataDescription, alternates: { canonical: "/tratamentos" } };

export default function TreatmentsPage() {
  return <main><PageHeader breadcrumbs={[{ label: clinic.pages.breadcrumbs.home, href: "/" }, { label: clinic.pages.breadcrumbs.treatments }]} eyebrow={clinic.pages.treatments.eyebrow} title={clinic.pages.treatments.title} description={clinic.pages.treatments.description} /><Section className="pt-8"><Container><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{clinic.treatments.map((treatment, index) => <Reveal key={treatment.slug} delay={(index % 3) * 0.06}><TreatmentCard treatment={treatment} /></Reveal>)}</div></Container></Section><FaqSection items={clinic.faq} eyebrow={clinic.home.faq.eyebrow} title={clinic.home.faq.title} description={clinic.home.faq.description} cta={clinic.home.faq.cta} /><Section><Container><FinalCta /></Container></Section></main>;
}
