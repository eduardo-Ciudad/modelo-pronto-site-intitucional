import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { clinic } from "@/config/clinic";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { buttonClassName } from "@/components/ui/button";

const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.address)}`;

export function ContactDetails() {
  const hasValidMap = Boolean(clinic.mapsEmbedUrl && !clinic.mapsEmbedUrl.includes("placeholder"));
  const contactItems = [
    { label: clinic.home.contact.addressLabel, value: clinic.address, href: directionsUrl, icon: MapPin },
    { label: clinic.home.contact.phoneLabel, value: clinic.phone, href: `tel:${clinic.phoneInternational}`, icon: Phone },
    { label: clinic.home.contact.emailLabel, value: clinic.email, href: `mailto:${clinic.email}`, icon: Mail },
  ];
  return <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16"><Reveal><Eyebrow>{clinic.home.contact.eyebrow}</Eyebrow><h2 className="mt-4 font-heading text-[clamp(2rem,5vw,2.75rem)] leading-[1.12] tracking-[-0.025em]">{clinic.home.contact.title}</h2><p className="mt-5 max-w-xl text-muted">{clinic.home.contact.description}</p><div className="mt-9 grid gap-6 sm:grid-cols-2">{contactItems.map(({ label, value, href, icon: Icon }) => <div key={label} className="flex gap-3"><Icon size={20} className="mt-1 shrink-0 text-accent" aria-hidden="true" /><div><p className="text-sm font-semibold">{label}</p><a href={href} className="mt-1 block text-sm text-muted outline-none hover:text-brand focus-visible:text-brand">{value}</a></div></div>)}<div className="flex gap-3"><Clock size={20} className="mt-1 shrink-0 text-accent" aria-hidden="true" /><div><p className="text-sm font-semibold">{clinic.home.contact.hoursLabel}</p><p className="mt-1 text-sm text-muted">{clinic.hours.weekdays}<br />{clinic.hours.saturday}</p></div></div></div><Link href={directionsUrl} target="_blank" rel="noreferrer" className={buttonClassName("secondary", "mt-9")}>{clinic.home.contact.directionsCta}</Link></Reveal><Reveal className="min-h-80">{hasValidMap ? <iframe src={clinic.mapsEmbedUrl} loading="lazy" title={clinic.home.contact.mapTitle} className="h-full min-h-96 w-full rounded-3xl border-0" /> : <div className="flex h-full min-h-80 flex-col items-center justify-center rounded-3xl bg-sage-soft p-8 text-center"><MapPin size={38} className="text-brand" aria-hidden="true" /><p className="mt-5 max-w-sm font-heading text-2xl leading-snug">{clinic.address}</p></div>}</Reveal></div>;
}
