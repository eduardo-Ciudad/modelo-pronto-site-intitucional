import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Treatment } from "@/config/types";
import { Eyebrow } from "@/components/ui/eyebrow";

export function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <Link href={`/tratamentos/${treatment.slug}`} className="group block h-full overflow-hidden rounded-2xl border border-border bg-card shadow-card outline-none transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card-hover focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-3 focus-visible:ring-offset-surface">
      <div className="relative aspect-[4/3] overflow-hidden bg-sage-soft"><Image src={treatment.image} alt={treatment.imageAlt} fill sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(50vw - 36px), 380px" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div>
      <div className="p-6 sm:p-7"><div className="flex items-start justify-between gap-4"><Eyebrow>{treatment.category}</Eyebrow><ArrowUpRight size={19} className="shrink-0 text-brand transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" /></div><h3 className="mt-4 font-heading text-[clamp(1.35rem,3vw,1.6rem)] leading-snug tracking-[-0.015em]">{treatment.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{treatment.summary}</p></div>
    </Link>
  );
}
