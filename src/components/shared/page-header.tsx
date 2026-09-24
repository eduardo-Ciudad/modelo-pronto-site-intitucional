import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { JsonLd } from "@/components/seo/json-ld";
import { clinic } from "@/config/clinic";

type Breadcrumb = { label: string; href?: string };

type PageHeaderProps = {
  breadcrumbs: Breadcrumb[];
  eyebrow: string;
  title: string;
  description: string;
  image?: { src: string; alt: string };
  action?: ReactNode;
};

export function PageHeader({ breadcrumbs, eyebrow, title, description, image, action }: PageHeaderProps) {
  const breadcrumbJsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: breadcrumbs.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.label, item: new URL(item.href ?? pathForLabel(item.label), clinic.siteUrl).toString() })) };
  return (
    <header className="bg-surface py-14 sm:py-18 lg:py-24">
      <JsonLd data={breadcrumbJsonLd} />
      <Container>
        <div className={image ? "grid items-center gap-10 lg:grid-cols-[1fr_.75fr] lg:gap-16" : "max-w-4xl"}>
          <div>
            <nav aria-label={clinicLabel(breadcrumbs)} className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted">
              {breadcrumbs.map((item, index) => <span key={`${item.label}-${index}`} className="flex items-center gap-2">{index > 0 && <span aria-hidden="true">/</span>}{item.href ? <Link href={item.href} className="outline-none hover:text-brand focus-visible:text-brand">{item.label}</Link> : <span aria-current="page">{item.label}</span>}</span>)}
            </nav>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-5 font-heading text-[clamp(2.5rem,6vw,4rem)] leading-[1.04] font-medium tracking-[-0.035em]">{title}</h1>
            <p className="mt-6 max-w-2xl text-muted">{description}</p>
            {action && <div className="mt-8">{action}</div>}
          </div>
          {image && <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-sage-soft lg:aspect-[4/5]"><Image src={image.src} alt={image.alt} fill priority sizes="(max-width: 1023px) calc(100vw - 32px), 520px" className="object-cover" /></div>}
        </div>
      </Container>
    </header>
  );
}

function clinicLabel(breadcrumbs: Breadcrumb[]) {
  return breadcrumbs.map((item) => item.label).join(" / ");
}

function pathForLabel(label: string) {
  const treatment = clinic.treatments.find((item) => item.title === label);
  if (treatment) return `/tratamentos/${treatment.slug}`;
  if (label === clinic.pages.breadcrumbs.treatments) return "/tratamentos";
  if (label === clinic.pages.breadcrumbs.about) return "/sobre";
  if (label === clinic.pages.breadcrumbs.contact) return "/contato";
  if (label === clinic.pages.breadcrumbs.privacy) return "/politica-de-privacidade";
  return "/";
}
