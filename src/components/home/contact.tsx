import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ContactDetails } from "@/components/shared/contact-details";
import { FinalCta } from "@/components/shared/final-cta";

export function Contact() {
  return <Section><Container><ContactDetails /><div className="mt-20"><FinalCta /></div></Container></Section>;
}
