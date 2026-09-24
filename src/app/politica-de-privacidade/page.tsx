import type { Metadata } from "next";
import { clinic } from "@/config/clinic";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = { title: clinic.pages.privacy.metadataTitle, description: clinic.pages.privacy.metadataDescription, alternates: { canonical: "/politica-de-privacidade" } };

export default function PrivacyPage() {
  return <main><PageHeader breadcrumbs={[{ label: clinic.pages.breadcrumbs.home, href: "/" }, { label: clinic.pages.breadcrumbs.privacy }]} eyebrow={clinic.pages.privacy.eyebrow} title={clinic.pages.privacy.title} description={clinic.pages.privacy.description} /><Section className="pt-8"><Container><article className="mx-auto max-w-3xl"><p className="rounded-2xl bg-sage-soft p-6 font-medium text-brand">{clinic.pages.privacy.notice}</p><div className="mt-12 space-y-12">{clinic.pages.privacy.sections.map((section) => <section key={section.title}><h2 className="font-heading text-3xl tracking-[-0.025em]">{section.title}</h2><div className="mt-5 space-y-4 text-muted">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>)}</div><p className="mt-12 border-t border-divider pt-8 text-muted"><a href={`mailto:${clinic.email}`} className="font-semibold text-brand underline decoration-brand-border underline-offset-4">{clinic.email}</a></p></article></Container></Section></main>;
}
