import { clinic } from "@/config/clinic";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { buttonClassName } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { WhatsappLink } from "@/components/shared/whatsapp-link";

export function ProcessSection() {
  return <Section><Container><Reveal className="max-w-2xl"><Eyebrow>{clinic.home.process.eyebrow}</Eyebrow><h2 className="mt-4 font-heading text-[clamp(2rem,5vw,2.75rem)] leading-[1.12] tracking-[-0.025em]">{clinic.home.process.title}</h2><p className="mt-5 text-muted">{clinic.home.process.description}</p></Reveal><div className="relative mt-14 before:absolute before:bottom-4 before:left-[1.18rem] before:top-4 before:w-px before:bg-divider lg:grid lg:grid-cols-4 lg:gap-8 lg:before:left-0 lg:before:right-0 lg:before:top-7 lg:before:h-px lg:before:w-auto">{clinic.home.process.steps.map((step, index) => <Reveal key={step.number} delay={index * 0.07} className="relative grid grid-cols-[2.5rem_1fr] gap-5 pb-10 last:pb-0 lg:block lg:bg-surface lg:pb-0"><span className="relative z-10 flex size-10 items-center justify-center rounded-full bg-surface font-heading text-2xl font-medium text-accent lg:size-14 lg:justify-start">{step.number}</span><div className="lg:mt-6"><h3 className="font-heading text-xl tracking-[-0.015em]">{step.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{step.text}</p></div></Reveal>)}</div><Reveal className="mt-12"><WhatsappLink location="process" className={buttonClassName("secondary")}>{clinic.home.process.cta}</WhatsappLink></Reveal></Container></Section>;
}
