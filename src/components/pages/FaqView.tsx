"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/motion/Reveal";
import { useT } from "@/i18n/I18nProvider";

export function FaqView() {
  const t = useT();
  const p = t.pages.faq;

  return (
    <>
      <PageHeader eyebrow={t.nav.faq} title={p.title} description={p.subtitle} />

      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Accordion items={t.faq.items.map((f) => ({ question: f.q, answer: f.a }))} />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl border border-border bg-surface p-8 text-center shadow-[var(--shadow-soft)]">
              <span className="grid size-12 place-items-center rounded-full bg-primary/10 text-primary">
                <MessageCircle className="size-6" aria-hidden />
              </span>
              <p className="text-sm text-muted">{t.faq.subtitle}</p>
              <Link
                href="/contacts"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                {t.faq.more}
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </>
  );
}
