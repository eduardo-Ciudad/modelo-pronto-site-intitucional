import { clinic } from "@/config/clinic";
import { FaqSection } from "@/components/shared/faq-section";

export function Faq() {
  return <FaqSection includeJsonLd items={clinic.faq} eyebrow={clinic.home.faq.eyebrow} title={clinic.home.faq.title} description={clinic.home.faq.description} cta={clinic.home.faq.cta} />;
}
