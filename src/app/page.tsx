import { Hero } from "@/components/home/hero";
import { StatsStrip } from "@/components/home/stats-strip";
import { Treatments } from "@/components/home/treatments";
import { Audiences } from "@/components/home/audiences";
import { Process } from "@/components/home/process";
import { Professional } from "@/components/home/professional";
import { Testimonials } from "@/components/home/testimonials";
import { Faq } from "@/components/home/faq";
import { Contact } from "@/components/home/contact";

export const metadata: Metadata = { title: { absolute: clinic.seo.homeTitle }, description: clinic.seo.homeDescription, alternates: { canonical: "/" } };

export default function HomePage() {
  return <main><Hero /><StatsStrip /><Treatments /><Audiences /><Process /><Professional /><Testimonials /><Faq /><Contact /></main>;
}
import type { Metadata } from "next";
import { clinic } from "@/config/clinic";
