import { Logo } from "@/components/Logo";
import { Container } from "@/components/Container";
import { NAV_LINKS, CONTACT_EMAIL } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-ivory-alt">
      <Container className="py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-stone-600">
              Fractional recruiting and talent acquisition support for Seed–Series A
              healthcare and SaaS companies.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2 sm:flex sm:gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-stone-600 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="text-sm text-stone-600">
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-ink">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-stone-200 pt-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Just Genius Recruitment Solutions. All rights reserved.</p>
          <p>Seed–Series A healthcare &amp; SaaS recruiting, fractional by design.</p>
        </div>
      </Container>
    </footer>
  );
}
