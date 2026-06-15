"use client";

import { Boxes, Code2, LayoutDashboard, Webhook, type LucideIcon } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { useT } from "@/i18n/I18nProvider";

const ICONS: LucideIcon[] = [Boxes, Code2, LayoutDashboard, Webhook];

export function Integrations() {
  const t = useT();
  return (
    <Section id="integrations" className="scroll-mt-16">
      <SectionHeading
        eyebrow={t.integrations.title}
        title={t.integrations.title}
        description={t.integrations.subtitle}
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {t.integrations.items.map((item, i) => {
          const Icon = ICONS[i] ?? Boxes;
          return (
            <Reveal key={item.title} delay={(i % 4) * 0.05}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)]">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
