import Link from "next/link";
import { Mail, Phone, Hash, Briefcase, Camera, Code2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { SITE, FOOTER_LINKS } from "@/lib/data";

// Lucide removed dedicated brand glyphs, so we use neutral icons as stand-ins.
const SOCIALS = [
  { label: "X", href: "https://x.com", icon: Hash },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Briefcase },
  { label: "Instagram", href: "https://instagram.com", icon: Camera },
  { label: "GitHub", href: "https://github.com", icon: Code2 },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted">
              {SITE.description}
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 text-muted transition-colors hover:text-primary"
              >
                <Mail className="size-4" aria-hidden />
                {SITE.email}
              </a>
              <a
                href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`}
                className="inline-flex items-center gap-2 text-muted transition-colors hover:text-primary"
              >
                <Phone className="size-4" aria-hidden />
                {SITE.phone}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {FOOTER_LINKS.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold">{group.title}</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <ul className="flex items-center gap-2">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid size-10 place-items-center rounded-full border border-border text-muted transition-colors hover:border-primary/60 hover:text-primary"
                >
                  <s.icon className="size-4" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
