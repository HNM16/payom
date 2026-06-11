"use client";

import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/motion/Reveal";
import { useT } from "@/i18n/I18nProvider";

export function Faq() {
  const t = useT();
  return (
    <Section id="faq" className="bg-surface scroll-mt-16">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr]">
        <SectionHeading
          align="left"
          eyebrow="FAQ"
          title={t.faq.title}
          description={t.faq.subtitle}
        />
        <Reveal>
          <Accordion items={t.faq.items.map((f) => ({ question: f.q, answer: f.a }))} />
          <p className="mt-6 text-sm text-muted">
            <Link href="/#contacts" className="font-medium text-primary hover:underline">
              {t.faq.more} →
            </Link>
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
