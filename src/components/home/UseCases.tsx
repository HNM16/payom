"use client";

import { Megaphone, KeyRound, Bell, Workflow, type LucideIcon } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { useT } from "@/i18n/I18nProvider";

const ICONS: LucideIcon[] = [Megaphone, KeyRound, Bell, Workflow];

export function UseCases() {
  const t = useT();
  return (
    <Section id="use-cases" className="bg-surface scroll-mt-16">
      <SectionHeading
        eyebrow={t.useCases.title}
        title={t.useCases.title}
        description={t.useCases.subtitle}
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {t.useCases.items.map((item, i) => {
          const Icon = ICONS[i] ?? Megaphone;
          return (
            <Reveal key={item.title} delay={(i % 4) * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
