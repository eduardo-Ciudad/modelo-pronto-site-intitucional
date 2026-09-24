import Image from "next/image";
import { clinic } from "@/config/clinic";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";

export function Audiences() {
  return (
    <Section className="bg-surface-alt">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>{clinic.home.audiences.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-heading text-[clamp(2rem,5vw,2.75rem)] leading-[1.12] tracking-[-0.025em]">{clinic.home.audiences.title}</h2>
          <p className="mt-5 text-muted">{clinic.home.audiences.description}</p>
        </Reveal>
        <div className="mt-12 grid gap-x-8 gap-y-12 lg:grid-cols-2 lg:gap-y-16">
          {clinic.audiences.map((audience, index) => (
            <Reveal key={audience.slug} delay={(index % 2) * 0.07}>
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-sage-soft"><Image src={audience.image} alt={audience.imageAlt} fill sizes="(max-width: 1023px) calc(100vw - 32px), calc(50vw - 56px)" className="object-cover" /></div>
              <h3 className="mt-6 font-heading text-[clamp(1.35rem,3vw,1.6rem)] tracking-[-0.015em]">{audience.title}</h3>
              <p className="mt-2 max-w-xl text-muted">{audience.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
