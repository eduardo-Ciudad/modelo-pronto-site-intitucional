import Image from "next/image";
import type { Metadata } from "next";
import { ArrowUpRight, Check, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { clinic } from "@/config/clinic";

export const metadata: Metadata = { title: clinic.seo.styleguideTitle, description: clinic.seo.styleguideDescription, robots: { index: false, follow: false } };

const colors = [
  ["surface", "bg-surface", "Fundo principal"], ["surface-alt", "bg-surface-alt", "Seções alternadas"],
  ["card", "bg-card", "Cards e formulários"], ["sage-soft", "bg-sage-soft", "Destaque suave"],
  ["dark", "bg-dark", "CTA e rodapé"], ["primary", "bg-primary", "Títulos e texto"],
  ["muted", "bg-muted", "Texto secundário"], ["on-dark", "bg-on-dark", "Texto sobre escuro"],
  ["brand", "bg-brand", "Ações, links e ícones"], ["brand-hover", "bg-brand-hover", "Hover de ação"],
  ["brand-light", "bg-brand-light", "Fundos sutis"], ["brand-border", "bg-brand-border", "Bordas de marca"],
  ["accent", "bg-accent", "Detalhes pontuais"], ["border", "bg-border", "Bordas discretas"],
  ["divider", "bg-divider", "Linhas decorativas"],
] as const;

const contrasts = [
  ["bg-surface text-primary", "primary / surface", "13,5:1", "Movimento com segurança começa por uma escuta cuidadosa."],
  ["bg-surface text-muted", "muted / surface", "5,2:1", "Um plano terapêutico pensado para a sua rotina."],
  ["bg-surface-alt text-muted", "muted / surface-alt", "4,7:1", "Acompanhamento próximo em cada fase da recuperação."],
  ["bg-brand text-card", "card / brand", "7,4:1", "Agende sua avaliação"],
  ["bg-surface text-brand", "brand / surface", "6,7:1", "Conheça nossos tratamentos"],
  ["bg-dark text-on-dark", "on-dark / dark", "10,7:1", "Volte a fazer o que move você."],
] as const;

export default function StyleguidePage() {
  return (
    <main>
      <Section className="border-b border-border pb-16 sm:pb-20">
        <Container>
          <Eyebrow>CiudadLab · fundação visual</Eyebrow>
          <h1 className="mt-5 max-w-4xl font-heading text-[clamp(2.5rem,7vw,4rem)] leading-[1.04] font-medium tracking-[-0.035em]">
            Cuidado que devolve movimento à vida.
          </h1>
          <p className="mt-7 max-w-2xl text-muted">Um sistema visual calmo, humano e confiável para clínicas de fisioterapia. Esta página valida as decisões fundamentais antes da construção do site.</p>
          <div className="mt-12 flex items-center gap-4 text-sm font-medium text-brand"><span className="h-px w-12 bg-divider" />Versão 01 · Styleguide</div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>01 · Paleta</Eyebrow>
          <h2 className="mt-3 font-heading text-[clamp(2rem,5vw,2.75rem)] leading-tight tracking-[-0.025em]">Cor com intenção terapêutica</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {colors.map(([name, swatchClass, use]) => (
              <div key={name} className="rounded-2xl border border-border bg-card p-3">
                <div className={`h-28 rounded-xl border border-border ${swatchClass}`} />
                <div className="px-1 pb-1 pt-4"><p className="font-semibold">{name}</p><p className={`token-value token-value-${name} text-sm text-muted`} /><p className="mt-2 text-sm text-muted">{use}</p></div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-alt">
        <Container>
          <Eyebrow>02 · Contraste</Eyebrow>
          <h2 className="mt-3 font-heading text-[clamp(2rem,5vw,2.75rem)] leading-tight tracking-[-0.025em]">Leitura confortável, sempre</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {contrasts.map(([classes, pair, ratio, copy]) => (
              <div key={pair} className={`${classes} flex min-h-52 flex-col justify-between rounded-2xl border border-border p-7`}>
                <p className="text-lg font-medium">{copy}</p><div className="flex items-center justify-between border-t border-current/10 pt-4 text-sm"><span>{pair}</span><span className="font-semibold">AA · {ratio}</span></div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>03 · Tipografia</Eyebrow>
          <div className="mt-12 divide-y divide-border border-y border-border">
            <div className="grid gap-5 py-10 lg:grid-cols-[10rem_1fr]"><span className="text-sm text-muted">H1 · Fraunces</span><p className="font-heading text-[clamp(2.5rem,7vw,4rem)] leading-[1.04] font-medium tracking-[-0.035em]">Recupere sua liberdade de movimento.</p></div>
            <div className="grid gap-5 py-10 lg:grid-cols-[10rem_1fr]"><span className="text-sm text-muted">H2 · Fraunces</span><h2 className="font-heading text-[clamp(2rem,5vw,2.75rem)] leading-[1.12] tracking-[-0.025em]">Tratamento que entende o seu ritmo.</h2></div>
            <div className="grid gap-5 py-10 lg:grid-cols-[10rem_1fr]"><span className="text-sm text-muted">H3 · Fraunces</span><h3 className="font-heading text-[clamp(1.35rem,3vw,1.6rem)] leading-snug tracking-[-0.015em]">Fisioterapia ortopédica</h3></div>
            <div className="grid gap-5 py-10 lg:grid-cols-[10rem_1fr]"><span className="text-sm text-muted">Corpo · DM Sans</span><p className="max-w-3xl text-muted">Cada corpo tem uma história. Por isso, avaliamos com atenção, explicamos cada etapa e construímos um plano de cuidado que respeita seus objetivos e a sua rotina.</p></div>
            <div className="grid gap-5 py-10 lg:grid-cols-[10rem_1fr]"><span className="text-sm text-muted">Eyebrow</span><Eyebrow>Especialidades da clínica</Eyebrow></div>
          </div>
        </Container>
      </Section>

      <Section className="bg-sage-soft">
        <Container>
          <Eyebrow>04 · Ações</Eyebrow>
          <h2 className="mt-3 font-heading text-[clamp(2rem,5vw,2.75rem)] tracking-[-0.025em]">Botões e estados</h2>
          <div className="mt-12 overflow-x-auto rounded-2xl border border-brand-border bg-surface p-6 sm:p-8">
            <div className="grid min-w-[680px] grid-cols-[8rem_repeat(4,1fr)] items-center gap-4 text-sm">
              <span /><span className="text-muted">Normal</span><span className="text-muted">Hover</span><span className="text-muted">Focus</span><span className="text-muted">Disabled</span>
              {(["primary", "secondary", "ghost"] as const).map((variant) => <div className="contents" key={variant}><span className="font-semibold capitalize">{variant}</span><Button variant={variant}>Saiba mais</Button><Button variant={variant} className={variant === "primary" ? "bg-brand-hover" : "bg-sage-soft"}>Saiba mais</Button><Button variant={variant} className="ring-2 ring-brand ring-offset-3 ring-offset-surface">Saiba mais</Button><Button variant={variant} disabled>Saiba mais</Button></div>)}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>05 · Componentes</Eyebrow>
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <Card>
              <div className="relative aspect-[4/3] overflow-hidden"><Image src="/img/tratamentos/clinical-pilates.jpg" alt="Paciente realizando exercício de pilates clínico com acompanhamento" fill sizes="(max-width: 1024px) calc(100vw - 32px), 560px" className="object-cover transition-transform duration-500 hover:scale-[1.025]" /></div>
              <div className="p-6 sm:p-8"><div className="flex items-center justify-between"><Eyebrow>Mobilidade</Eyebrow><span className="flex size-9 items-center justify-center rounded-full bg-brand-light text-brand"><ArrowUpRight size={18} /></span></div><h3 className="mt-4 font-heading text-[clamp(1.35rem,3vw,1.6rem)] tracking-[-0.015em]">Pilates clínico</h3><p className="mt-3 text-muted">Força, controle e confiança para seus movimentos do dia a dia.</p></div>
            </Card>
            <div><Eyebrow>Card de tratamento</Eyebrow><h2 className="mt-4 font-heading text-[clamp(2rem,5vw,2.75rem)] leading-tight tracking-[-0.025em]">Poucos elementos.<br />Mais clareza.</h2><ul className="mt-8 space-y-4 text-muted">{["Imagem com proporção estável", "Hierarquia curta e escaneável", "Interação discreta e intencional"].map((item) => <li className="flex items-center gap-3" key={item}><Check size={18} className="text-accent" />{item}</li>)}</ul></div>
          </div>
        </Container>
      </Section>

      <Section className="bg-dark text-on-dark">
        <Container>
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div><Eyebrow>Pronto para recomeçar?</Eyebrow><h2 className="mt-5 max-w-3xl font-heading text-[clamp(2rem,5vw,2.75rem)] leading-tight tracking-[-0.025em]">Seu movimento merece um cuidado feito para você.</h2><p className="mt-5 max-w-xl text-on-dark/75">Converse com nossa equipe e descubra o caminho mais seguro para a sua recuperação.</p></div>
            <Button className="bg-on-dark text-dark hover:bg-sage-soft">Agendar avaliação <MoveRight size={18} className="ml-3" /></Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
