import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, ShieldCheck } from "lucide-react";
import { clinic } from "@/config/clinic";
import { PageHeader } from "@/components/shared/page-header";
import { TreatmentCard } from "@/components/shared/treatment-card";
import { FaqSection } from "@/components/shared/faq-section";
import { FinalCta } from "@/components/shared/final-cta";
import { WhatsappLink } from "@/components/shared/whatsapp-link";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { buttonClassName } from "@/components/ui/button";
import { treatmentWhatsappMessage } from "@/lib/whatsapp";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return clinic.treatments.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = clinic.treatments.find((item) => item.slug === slug);
  if (!treatment) return {};
  const description = `${treatment.summary} em ${clinic.city}.`.slice(0, 155);
  return { title: `${treatment.title} em ${clinic.city}`, description, alternates: { canonical: `/tratamentos/${treatment.slug}` } };
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const treatment = clinic.treatments.find((item) => item.slug === slug);
  if (!treatment) notFound();
  const scheduleLabel = `${clinic.pages.treatmentDetail.schedulePrefix} ${treatment.title}`;
  const message = treatmentWhatsappMessage(treatment.title);
  const trackingLocation = `treatment:${treatment.slug}`;
  const otherTreatments = clinic.treatments.filter((item) => item.slug !== treatment.slug).slice(0, 3);
  const medicalTherapyJsonLd = { "@context": "https://schema.org", "@type": "MedicalTherapy", name: treatment.title, description: treatment.summary, provider: { "@id": `${clinic.siteUrl}/#clinica` } };

  return (
    <main>
      <JsonLd data={medicalTherapyJsonLd} />
      <PageHeader breadcrumbs={[{ label: clinic.pages.breadcrumbs.home, href: "/" }, { label: clinic.pages.breadcrumbs.treatments, href: "/tratamentos" }, { label: treatment.title }]} eyebrow={treatment.category} title={treatment.title} description={treatment.summary} image={{ src: treatment.image, alt: treatment.imageAlt }} action={<WhatsappLink location={trackingLocation} message={message} className={buttonClassName("primary")}>{scheduleLabel}</WhatsappLink>} />
      <Section className="pt-8"><Container><div className="grid gap-12 lg:grid-cols-[1fr_22rem] lg:gap-20">
        <article className="min-w-0">
          <div className="space-y-5 text-muted">{treatment.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          <div className="mt-12"><h2 className="font-heading text-[clamp(2rem,5vw,2.75rem)] tracking-[-0.025em]">{clinic.pages.treatmentDetail.conditionsTitle}</h2><ul className="mt-6 grid gap-3 sm:grid-cols-2">{treatment.conditions.map((condition) => <li key={condition} className="flex items-start gap-3"><Check size={18} className="mt-1 shrink-0 text-accent" aria-hidden="true" /><span>{condition}</span></li>)}</ul></div>
          <div className="mt-12"><h2 className="font-heading text-[clamp(2rem,5vw,2.75rem)] tracking-[-0.025em]">{clinic.pages.treatmentDetail.howTitle}</h2><ol className="mt-7 space-y-6">{treatment.howItWorks.map((step, index) => <li key={step} className="grid grid-cols-[2.5rem_1fr] items-start gap-4"><span className="font-heading text-2xl text-accent">{String(index + 1).padStart(2, "0")}</span><span className="pt-1">{step}</span></li>)}</ol></div>
          <div className="mt-12 rounded-2xl bg-sage-soft p-7"><h2 className="font-heading text-2xl tracking-[-0.02em]">{clinic.pages.treatmentDetail.durationTitle}</h2><p className="mt-3 text-muted">{treatment.averageSessions}</p></div>
        </article>
        <aside className="h-fit rounded-2xl border border-border bg-card p-7 shadow-card lg:sticky lg:top-28"><Eyebrow>{clinic.pages.treatmentDetail.summaryTitle}</Eyebrow><p className="mt-5 text-muted">{treatment.summary}</p><div className="mt-6 flex items-start gap-3 border-t border-border pt-6"><ShieldCheck size={20} className="mt-1 shrink-0 text-brand" aria-hidden="true" /><div><p className="text-sm text-muted">{clinic.pages.treatmentDetail.professionalLabel}</p><p className="mt-1 font-semibold">{clinic.professional.name}</p><p className="text-sm text-muted">{clinic.professional.registration}</p></div></div><WhatsappLink location={trackingLocation} message={message} className={buttonClassName("primary", "mt-7 w-full px-4 text-center")}>{scheduleLabel}</WhatsappLink></aside>
      </div></Container></Section>
      <FaqSection includeJsonLd whatsappLocation={trackingLocation} items={treatment.faq} eyebrow={clinic.home.faq.eyebrow} title={clinic.home.faq.title} description={clinic.home.faq.description} cta={clinic.home.faq.cta} />
      <Section><Container><Eyebrow>{clinic.pages.treatmentDetail.otherEyebrow}</Eyebrow><h2 className="mt-4 font-heading text-[clamp(2rem,5vw,2.75rem)] tracking-[-0.025em]">{clinic.pages.treatmentDetail.otherTitle}</h2><div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{otherTreatments.map((item) => <TreatmentCard key={item.slug} treatment={item} />)}</div><div className="mt-20"><FinalCta /></div></Container></Section>
    </main>
  );
}
