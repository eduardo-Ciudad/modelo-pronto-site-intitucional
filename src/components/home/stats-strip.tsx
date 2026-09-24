import { clinic } from "@/config/clinic";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";

export function StatsStrip() {
  return (
    <section className="bg-sage-soft py-12 sm:py-14">
      <Container>
        <div className="grid grid-cols-2 gap-y-9 lg:grid-cols-4 lg:gap-y-0">
          {clinic.stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.06} className="px-2 text-center lg:border-l lg:border-divider lg:px-8 first:lg:border-l-0">
              <p className="font-heading text-4xl font-medium tracking-[-0.03em] text-accent sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
