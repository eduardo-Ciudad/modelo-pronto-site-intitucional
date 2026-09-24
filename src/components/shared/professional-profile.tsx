import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Check } from "lucide-react";
import { clinic } from "@/config/clinic";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";

export function ProfessionalProfile({ showAboutLink = true }: { showAboutLink?: boolean }) {
  return (
    <Section className="overflow-hidden bg-surface-alt"><Container><div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20 xl:gap-28">
      <Reveal className="relative lg:pb-12 lg:pr-12"><div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-sage-soft"><Image src={clinic.professional.image} alt={clinic.professional.imageAlt} fill sizes="(max-width: 1023px) calc(100vw - 32px), 520px" className="object-cover" /></div><div className="absolute bottom-0 right-0 hidden aspect-[3/2] w-[48%] overflow-hidden rounded-2xl border-8 border-surface-alt bg-sage-soft lg:block"><Image src={clinic.professional.secondaryImage} alt={clinic.professional.secondaryImageAlt} fill sizes="260px" className="object-cover" /></div></Reveal>
      <Reveal><Eyebrow>{clinic.home.professional.eyebrow}</Eyebrow><h2 className="mt-4 font-heading text-[clamp(2rem,5vw,2.75rem)] leading-[1.12] tracking-[-0.025em]">{clinic.professional.name}</h2><p className="mt-5 inline-flex items-center gap-2 rounded-full bg-sage-soft px-4 py-2 text-sm font-medium text-brand"><BadgeCheck size={17} aria-hidden="true" />{clinic.professional.registration}</p><div className="mt-7 space-y-4 text-muted">{clinic.professional.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.15em] text-primary">{clinic.home.professional.specialtiesTitle}</h3><ul className="mt-4 space-y-3">{clinic.professional.specialties.map((specialty) => <li key={specialty} className="flex items-start gap-3 text-sm text-muted"><Check size={17} className="mt-1 shrink-0 text-accent" aria-hidden="true" />{specialty}</li>)}</ul>{showAboutLink && <Link href="/sobre" className="mt-9 inline-flex items-center gap-2 rounded-sm font-semibold text-brand underline decoration-brand-border underline-offset-8 outline-none transition-colors hover:text-brand-hover focus-visible:ring-2 focus-visible:ring-brand">{clinic.home.professional.aboutLink}<ArrowRight size={18} aria-hidden="true" /></Link>}</Reveal>
    </div></Container></Section>
  );
}
