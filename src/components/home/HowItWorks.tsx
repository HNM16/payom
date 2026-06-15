"use client";

import { UserPlus, Wallet, Upload, Send, type LucideIcon } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { useT } from "@/i18n/I18nProvider";

const ICONS: LucideIcon[] = [UserPlus, Wallet, Upload, Send];

export function HowItWorks() {
  const t = useT();
  return (
    <Section id="how" className="bg-surface scroll-mt-16">
      <SectionHeading
        eyebrow={t.nav.how}
        title={t.how.title}
        description={t.how.subtitle}
      />
      <div className="relative mt-16">
        <div
          className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
          aria-hidden
        />
        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {t.how.steps.map((step, i) => {
            const Icon = ICONS[i] ?? Send;
            return (
              <Reveal as="li" key={step.title} delay={i * 0.08} className="relative">
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <span className="relative grid size-14 place-items-center rounded-2xl border border-border bg-background text-primary shadow-[var(--shadow-soft)]">
                    <Icon className="size-6" aria-hidden />
                    <span className="absolute -right-2 -top-2 grid size-6 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
