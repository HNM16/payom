"use client";

import Link from "next/link";
import { Mail, Send, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { useT } from "@/i18n/I18nProvider";
import { SITE_CONTACT } from "@/lib/site";

export function Footer() {
  const t = useT();

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1.4fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted">
              {t.footer.tagline}
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="text-sm font-semibold">{t.footer.nav.title}</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {t.footer.nav.links.map((link) => (
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

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold">{t.footer.contact.title}</h3>
            <p className="mt-4 text-sm text-muted">{t.footer.contact.telegramText}</p>
            <a
              href={SITE_CONTACT.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:bg-primary/90 hover:-translate-y-0.5"
            >
              <Send className="size-4" aria-hidden />
              {t.footer.contact.openChat}
            </a>
            <a
              href={`mailto:${SITE_CONTACT.email}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
            >
              <Mail className="size-4" aria-hidden />
              {SITE_CONTACT.email}
            </a>
          </div>
        </div>

        {/* Legal documents + legal data */}
        <div className="mt-12 grid gap-8 border-t border-border pt-10 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold">{t.footer.legalDocs.title}</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {t.footer.legalDocs.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex items-start gap-2 text-sm text-muted transition-colors hover:text-primary"
                  >
                    <FileText className="mt-0.5 size-4 shrink-0" aria-hidden />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">{t.footer.legalData.title}</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {t.footer.legalData.lines.map((line) => (
                <li key={line} className="text-sm text-muted">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Payom.tj. {t.footer.rights}
          </p>
          <p className="text-sm text-muted">{t.footer.madeIn}</p>
        </div>
      </Container>
    </footer>
  );
}
