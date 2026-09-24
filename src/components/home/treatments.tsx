import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clinic } from "@/config/clinic";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { TreatmentCard } from "@/components/shared/treatment-card";

export function Treatments() {
  return (
    <Section id="tratamentos">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>{clinic.home.treatments.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-heading text-[clamp(2rem,5vw,2.75rem)] leading-[1.12] tracking-[-0.025em]">{clinic.home.treatments.title}</h2>
          <p className="mt-5 text-muted">{clinic.home.treatments.description}</p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clinic.treatments.map((treatment, index) => (
            <Reveal key={treatment.slug} delay={(index % 3) * 0.06}>
              <TreatmentCard treatment={treatment} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 flex justify-center">
          <Link href="/tratamentos" className="inline-flex items-center gap-2 rounded-sm font-semibold text-brand underline decoration-brand-border underline-offset-8 outline-none transition-colors hover:text-brand-hover focus-visible:ring-2 focus-visible:ring-brand">{clinic.home.treatments.allLink}<ArrowRight size={18} aria-hidden="true" /></Link>
        </Reveal>
      </Container>
    </Section>
  );
}
