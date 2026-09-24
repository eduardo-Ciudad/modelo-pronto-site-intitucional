import Link from "next/link";
import { clinic } from "@/config/clinic";
import { Container } from "@/components/layout/container";

export function Footer() {
  return (
    <footer className="bg-dark py-16 text-on-dark sm:py-20">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1.15fr_.8fr] lg:gap-10">
          <div>
            <Link href="/" className="font-heading text-2xl font-medium tracking-[-0.025em] outline-none focus-visible:ring-2 focus-visible:ring-on-dark">{clinic.name}</Link>
            <p className="mt-5 max-w-xs text-sm text-on-dark/70">{clinic.tagline}</p>
            <p className="mt-4 text-sm text-on-dark/70">{clinic.professional.name}<br />{clinic.professional.registration}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em]">{clinic.footer.treatmentsTitle}</h2>
            <ul className="mt-5 space-y-3 text-sm text-on-dark/70">{clinic.treatments.map((treatment) => <li key={treatment.slug}><Link href={`/tratamentos/${treatment.slug}`} className="outline-none transition-colors hover:text-on-dark focus-visible:text-on-dark">{treatment.title}</Link></li>)}</ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em]">{clinic.footer.contactTitle}</h2>
            <address className="mt-5 space-y-3 text-sm not-italic text-on-dark/70">
              <p>{clinic.address}</p><p><a href={`tel:${clinic.phoneInternational}`} className="hover:text-on-dark">{clinic.phone}</a><br /><a href={`mailto:${clinic.email}`} className="hover:text-on-dark">{clinic.email}</a></p><p>{clinic.hours.weekdays}<br />{clinic.hours.saturday}</p>
            </address>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em]">{clinic.footer.linksTitle}</h2>
            <ul className="mt-5 space-y-3 text-sm text-on-dark/70">
              <li><Link href="/sobre" className="hover:text-on-dark">{clinic.navigation.about}</Link></li><li><Link href="/contato" className="hover:text-on-dark">{clinic.navigation.contact}</Link></li><li><Link href="/politica-de-privacidade" className="hover:text-on-dark">{clinic.footer.privacy}</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-on-dark/15 pt-6 text-xs text-on-dark/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {clinic.name}</p>
          <p>{clinic.footer.creditsPrefix} <a href="https://ciudadlab.com.br" target="_blank" rel="noreferrer" className="text-on-dark underline decoration-divider underline-offset-4">{clinic.footer.creditsName}</a></p>
        </div>
      </Container>
    </footer>
  );
}
