import { clinic } from "@/config/clinic";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";

export function Testimonials() {
  const hasExamples = clinic.home.testimonials.items.some((item) => item.isExample);
  return (
    <Section>
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>{clinic.home.testimonials.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-heading text-[clamp(2rem,5vw,2.75rem)] leading-[1.12] tracking-[-0.025em]">{clinic.home.testimonials.title}</h2>
          <p className="mt-5 text-muted">{clinic.home.testimonials.description}</p>
        </Reveal>
        <div className="-mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-5 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0">
          {clinic.home.testimonials.items.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.07} className="min-w-0 basis-[85%] shrink-0 snap-start sm:basis-[60%] lg:basis-auto">
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 sm:p-8">
                <span className="font-heading text-6xl leading-none text-accent" aria-hidden="true">“</span>
                <blockquote className="mt-2 flex-1 text-primary">{testimonial.text}</blockquote>
                <footer className="mt-8 border-t border-border pt-5"><p className="font-semibold">{testimonial.name}</p><p className="mt-1 text-sm text-muted">{testimonial.context}</p></footer>
              </article>
            </Reveal>
          ))}
        </div>
        {hasExamples && <Reveal><p className="mt-6 text-xs text-muted">{clinic.home.testimonials.exampleNote}</p></Reveal>}
      </Container>
    </Section>
  );
}
