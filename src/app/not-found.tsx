import Link from "next/link";
import type { Metadata } from "next";
import { clinic } from "@/config/clinic";
import { Container } from "@/components/layout/container";
import { buttonClassName } from "@/components/ui/button";

export const metadata: Metadata = { title: clinic.pages.notFound.title, description: clinic.pages.notFound.description };

export default function NotFound() {
  return <main className="flex min-h-[65vh] items-center py-20"><Container><div className="mx-auto max-w-2xl text-center"><h1 className="font-heading text-[clamp(2.5rem,6vw,4rem)] leading-[1.04] tracking-[-0.035em]">{clinic.pages.notFound.title}</h1><p className="mt-6 text-muted">{clinic.pages.notFound.description}</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/" className={buttonClassName("primary")}>{clinic.pages.notFound.homeButton}</Link><Link href="/tratamentos" className={buttonClassName("secondary")}>{clinic.pages.notFound.treatmentsButton}</Link></div></div></Container></main>;
}
