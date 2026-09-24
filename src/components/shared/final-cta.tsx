import { clinic } from "@/config/clinic";
import { Eyebrow } from "@/components/ui/eyebrow";
import { buttonClassName } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { WhatsappLink } from "@/components/shared/whatsapp-link";

export function FinalCta() {
  return <Reveal className="rounded-3xl bg-dark p-8 text-on-dark sm:p-12 lg:p-16"><div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]"><div><Eyebrow tone="dark">{clinic.home.finalCta.eyebrow}</Eyebrow><h2 className="mt-5 max-w-3xl font-heading text-[clamp(2rem,5vw,2.75rem)] leading-[1.12] tracking-[-0.025em]">{clinic.home.finalCta.title}</h2><p className="mt-5 max-w-xl text-on-dark/70">{clinic.home.finalCta.description}</p></div><WhatsappLink location="final_cta" className={buttonClassName("primary", "bg-on-dark text-dark hover:bg-sage-soft focus-visible:ring-on-dark focus-visible:ring-offset-dark")}>{clinic.home.finalCta.button}</WhatsappLink></div></Reveal>;
}
