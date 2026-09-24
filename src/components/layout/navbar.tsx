"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { clinic } from "@/config/clinic";
import { WhatsappLink } from "@/components/shared/whatsapp-link";
import { cn } from "@/lib/utils";
import { buttonClassName } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

const mainLinks = [
  { label: clinic.navigation.about, href: "/sobre" },
  { label: clinic.navigation.contact, href: "/contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const pathname = usePathname();
  const treatmentsActive = pathname.startsWith("/tratamentos");

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setTreatmentsOpen(false);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={cn("sticky top-0 z-50 border-b border-transparent bg-surface/95 backdrop-blur-md transition-colors", scrolled && "border-border")}>
      <Container className="flex h-20 items-center justify-between gap-8">
        <Link href="/" className="rounded-sm font-heading text-xl font-medium tracking-[-0.025em] outline-none focus-visible:ring-2 focus-visible:ring-brand" onClick={closeMenu}>
          {clinic.name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label={clinic.navigation.mainMenu}>
          <div
            className="relative"
            onMouseEnter={() => setTreatmentsOpen(true)}
            onMouseLeave={() => setTreatmentsOpen(false)}
            onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setTreatmentsOpen(false); }}
          >
            <div className={cn("flex items-center rounded-sm text-sm font-medium", treatmentsActive && "text-brand")}><Link href="/tratamentos" aria-current={treatmentsActive ? "page" : undefined} className="py-2 outline-none hover:text-brand focus-visible:ring-2 focus-visible:ring-brand">{clinic.navigation.treatments}</Link><button type="button" className="ml-0.5 rounded-sm p-2 outline-none hover:text-brand focus-visible:ring-2 focus-visible:ring-brand" aria-label={clinic.navigation.treatmentsMenu} aria-expanded={treatmentsOpen} aria-haspopup="menu" onClick={() => setTreatmentsOpen((open) => !open)}><ChevronDown size={15} className={cn("transition-transform", treatmentsOpen && "rotate-180")} /></button></div>
            {treatmentsOpen && (
              <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3">
                <div className="rounded-2xl border border-border bg-card p-2 shadow-card" role="menu">
                  {clinic.treatments.map((treatment) => (
                    <Link key={treatment.slug} href={`/tratamentos/${treatment.slug}`} role="menuitem" className="block rounded-xl px-4 py-2.5 text-sm outline-none transition-colors hover:bg-sage-soft focus-visible:bg-sage-soft" onClick={() => setTreatmentsOpen(false)}>
                      {treatment.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {mainLinks.map((link) => { const active = pathname === link.href; return <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} className={cn("rounded-sm py-2 text-sm font-medium outline-none transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-brand", active && "text-brand")}>{link.label}</Link>; })}
          <WhatsappLink location="navbar" className={buttonClassName("primary", "min-h-11 px-5 py-2.5")}>{clinic.navigation.schedule}</WhatsappLink>
        </nav>

        <button type="button" className="flex size-11 items-center justify-center rounded-full text-brand outline-none hover:bg-sage-soft focus-visible:ring-2 focus-visible:ring-brand lg:hidden" aria-label={menuOpen ? clinic.navigation.closeMenu : clinic.navigation.openMenu} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </Container>

      {menuOpen && (
        <div className="fixed inset-x-0 top-20 flex h-[calc(100dvh-5rem)] flex-col overflow-y-auto bg-surface lg:hidden">
          <Container className="flex flex-1 flex-col py-8">
            <nav className="flex flex-col" aria-label={clinic.navigation.mainMenu}>
              <div className="flex items-center border-b border-border"><Link href="/tratamentos" aria-current={treatmentsActive ? "page" : undefined} className={cn("flex-1 py-5 font-heading text-3xl outline-none focus-visible:text-brand", treatmentsActive && "text-brand")} onClick={closeMenu}>{clinic.navigation.treatments}</Link><button type="button" className="p-4 text-brand outline-none focus-visible:ring-2 focus-visible:ring-brand" aria-label={clinic.navigation.treatmentsMenu} aria-expanded={treatmentsOpen} onClick={() => setTreatmentsOpen((open) => !open)}><ChevronDown size={22} className={cn("transition-transform", treatmentsOpen && "rotate-180")} /></button></div>
              {treatmentsOpen && <div className="border-b border-border bg-surface-alt px-4 py-3">{clinic.treatments.map((treatment) => <Link key={treatment.slug} href={`/tratamentos/${treatment.slug}`} className="block rounded-lg py-2.5 text-sm outline-none focus-visible:text-brand" onClick={closeMenu}>{treatment.title}</Link>)}</div>}
              {mainLinks.map((link) => { const active = pathname === link.href; return <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} className={cn("border-b border-border py-5 font-heading text-3xl outline-none focus-visible:text-brand", active && "text-brand")} onClick={closeMenu}>{link.label}</Link>; })}
            </nav>
            <WhatsappLink location="navbar" className={buttonClassName("primary", "mt-auto w-full")} onClick={closeMenu}>{clinic.navigation.schedule}</WhatsappLink>
          </Container>
        </div>
      )}
    </header>
  );
}
