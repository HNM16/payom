"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Hash, Briefcase, Camera, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { useT } from "@/i18n/I18nProvider";

const SOCIALS = [
  { label: "Channel", href: "#", icon: Send },
  { label: "Updates", href: "#", icon: Hash },
  { label: "Business", href: "#", icon: Briefcase },
  { label: "Media", href: "#", icon: Camera },
];

const CONTACT = {
  email: "info@payom.tj",
  phone: "+992 44 600 00 00",
  address: "Dushanbe, Tajikistan",
};

export function Footer() {
  const t = useT();

  return (
    <footer id="contacts" className="border-t border-border bg-surface scroll-mt-20">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted">
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 text-muted transition-colors hover:text-primary"
              >
                <Mail className="size-4" aria-hidden />
                {CONTACT.email}
              </a>
              <a
                href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`}
                className="inline-flex items-center gap-2 text-muted transition-colors hover:text-primary"
              >
                <Phone className="size-4" aria-hidden />
                {CONTACT.phone}
              </a>
              <span className="inline-flex items-center gap-2 text-muted">
                <MapPin className="size-4" aria-hidden />
                {CONTACT.address}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {t.footer.columns.map((group) => (
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
            © {new Date().getFullYear()} Payom.tj. {t.footer.rights}
          </p>
          <ul className="flex items-center gap-2">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
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
