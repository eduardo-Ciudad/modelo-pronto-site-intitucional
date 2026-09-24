"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { clinic } from "@/config/clinic";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { buttonClassName } from "@/components/ui/button";
import { WhatsappLink } from "@/components/shared/whatsapp-link";
import { cn } from "@/lib/utils";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const showVideo = desktop && !reduceMotion;

  return (
    <section className="flex min-h-[calc(100svh-5rem)] items-center py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,.78fr)] lg:gap-16 xl:gap-24">
          <div>
            <Eyebrow>{clinic.home.hero.locationLabel}</Eyebrow>
            <h1 className="mt-5 max-w-3xl font-heading text-[clamp(2.5rem,6vw,4rem)] leading-[1.04] font-medium tracking-[-0.035em]">{clinic.home.hero.title}</h1>
            <p className="mt-7 max-w-xl text-muted">{clinic.home.hero.description}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsappLink location="hero" className={buttonClassName("primary")}>{clinic.home.hero.primaryCta}</WhatsappLink>
              <Link href="#tratamentos" className={buttonClassName("secondary")}>{clinic.home.hero.secondaryCta}</Link>
            </div>
            <div className="mt-7 flex items-start gap-2.5 text-sm text-muted"><ShieldCheck size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" /><span>{clinic.home.hero.trustText} · {clinic.professional.registration}</span></div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-sage-soft lg:aspect-[4/5]">
            <Image src={clinic.home.hero.poster} alt={clinic.home.hero.mediaAlt} fill priority sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1279px) 42vw, 500px" className="object-cover" />
            {showVideo && <HeroVideo />}
          </div>
        </div>
      </Container>
    </section>
  );
}

function HeroVideo() {
  const [playing, setPlaying] = useState(false);
  return <video className={cn("absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500", playing && "opacity-100")} autoPlay muted loop playsInline preload="auto" aria-label={clinic.home.hero.mediaAlt} onPlaying={() => setPlaying(true)}><source src={clinic.home.hero.video} type="video/mp4" /></video>;
}
