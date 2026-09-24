import type { Metadata } from "next";
import Image from "next/image";
import { Ear, MessagesSquare, Route } from "lucide-react";
import { clinic } from "@/config/clinic";
import { PageHeader } from "@/components/shared/page-header";
import { ProfessionalProfile } from "@/components/shared/professional-profile";
import { ProcessSection } from "@/components/shared/process-section";
import { FinalCta } from "@/components/shared/final-cta";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: clinic.pages.about.metadataTitle, description: clinic.pages.about.metadataDescription, alternates: { canonical: "/sobre" } };
const icons = { ear: Ear, message: MessagesSquare, path: Route };

export default function AboutPage() {
  return (
    <main>
      <PageHeader breadcrumbs={[{ label: clinic.pages.breadcrumbs.home, href: "/" }, { label: clinic.pages.breadcrumbs.about }]} eyebrow={clinic.pages.about.eyebrow} title={clinic.pages.about.title} description={clinic.pages.about.description} image={{ src: clinic.pages.about.headerImage, alt: clinic.pages.about.headerImageAlt }} />
      <ProfessionalProfile showAboutLink={false} />
      <Section><Container>
        <Reveal className="max-w-2xl"><Eyebrow>{clinic.pages.about.valuesEyebrow}</Eyebrow><h2 className="mt-4 font-heading text-[clamp(2rem,5vw,2.75rem)] tracking-[-0.025em]">{clinic.pages.about.valuesTitle}</h2><p className="mt-5 text-muted">{clinic.pages.about.valuesDescription}</p></Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">{clinic.pages.about.values.map((value, index) => { const Icon = icons[value.icon]; return <Reveal key={value.title} delay={index * 0.07}><article className="h-full rounded-2xl border border-border bg-card p-7"><span className="flex size-11 items-center justify-center rounded-full bg-sage-soft text-brand"><Icon size={20} aria-hidden="true" /></span><h3 className="mt-6 font-heading text-2xl">{value.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{value.text}</p></article></Reveal>; })}</div>
      </Container></Section>
      <Section className="bg-surface-alt"><Container>
        <Reveal><Eyebrow>{clinic.pages.about.galleryEyebrow}</Eyebrow><h2 className="mt-4 max-w-2xl font-heading text-[clamp(2rem,5vw,2.75rem)] tracking-[-0.025em]">{clinic.pages.about.galleryTitle}</h2></Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:grid-rows-[16rem_16rem]">
          {clinic.pages.about.gallery.map((image, index) => (
            <div key={image.src} className={cn("min-w-0", index === 0 && "col-span-2 lg:row-span-2", index === 3 && "lg:col-span-2", index === 4 && "lg:hidden")}>
              <Reveal delay={(index % 4) * 0.05} className="h-full">
                <div className={cn("relative overflow-hidden rounded-2xl bg-sage-soft lg:h-full", index === 0 ? "aspect-[16/10] lg:aspect-auto" : "aspect-square lg:aspect-auto")}>
                  <Image src={image.src} alt={image.alt} fill sizes={index === 0 ? "(max-width: 1023px) calc(100vw - 32px), 50vw" : index === 3 ? "(max-width: 1023px) calc(50vw - 24px), 50vw" : "(max-width: 1023px) calc(50vw - 24px), 25vw"} className="object-cover" />
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </Container></Section>
      <ProcessSection />
      <Section className="pt-0"><Container><FinalCta /></Container></Section>
    </main>
  );
}
