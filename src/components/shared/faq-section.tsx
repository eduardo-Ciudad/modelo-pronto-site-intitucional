"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import type { FaqItem } from "@/config/types";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { buttonClassName } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/seo/json-ld";
import { WhatsappLink } from "@/components/shared/whatsapp-link";

type FaqSectionProps = { items: FaqItem[]; eyebrow: string; title: string; description: string; cta: string; className?: string; includeJsonLd?: boolean; whatsappLocation?: string };

export function FaqSection({ items, eyebrow, title, description, cta, className = "bg-surface-alt", includeJsonLd = false, whatsappLocation = "faq" }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const jsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };
  return <Section className={className}>{includeJsonLd && <JsonLd data={jsonLd} />}<Container><div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20"><Reveal><Eyebrow>{eyebrow}</Eyebrow><h2 className="mt-4 font-heading text-[clamp(2rem,5vw,2.75rem)] leading-[1.12] tracking-[-0.025em]">{title}</h2><p className="mt-5 max-w-md text-muted">{description}</p><WhatsappLink location={whatsappLocation} className={buttonClassName("secondary", "mt-8")}>{cta}</WhatsappLink></Reveal><Reveal><div className="border-t border-divider">{items.map((item, index) => { const open = openIndex === index; const panelId = `faq-panel-${index}-${items.length}`; const buttonId = `faq-button-${index}-${items.length}`; return <div key={item.question} className="border-b border-divider"><button id={buttonId} type="button" aria-expanded={open} aria-controls={panelId} onClick={() => setOpenIndex(open ? -1 : index)} className="flex w-full items-center justify-between gap-6 py-6 text-left font-semibold outline-none focus-visible:text-brand"><span>{item.question}</span><Plus size={20} className={cn("shrink-0 text-brand transition-transform duration-300", open && "rotate-45")} aria-hidden="true" /></button><AnimatePresence initial={false}>{open && <motion.div id={panelId} role="region" aria-labelledby={buttonId} initial={reduceMotion ? false : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.28, ease: "easeOut" }} className="overflow-hidden"><p className="max-w-2xl pb-6 pr-10 text-muted">{item.answer}</p></motion.div>}</AnimatePresence></div>; })}</div></Reveal></div></Container></Section>;
}
