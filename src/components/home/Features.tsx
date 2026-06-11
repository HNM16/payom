"use client";

import {
  Megaphone,
  Code2,
  ShieldCheck,
  Users,
  BarChart3,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { useT } from "@/i18n/I18nProvider";

const ICONS: LucideIcon[] = [Megaphone, Code2, ShieldCheck, Users, BarChart3, Zap];

export function Features() {
  const t = useT();
  return (
    <Section id="features" className="scroll-mt-16">
      <SectionHeading
        eyebrow={t.nav.features}
        title={t.features.title}
        description={t.features.subtitle}
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.features.items.map((feature, i) => {
          const Icon = ICONS[i] ?? Zap;
          return (
            <Reveal key={feature.title} delay={(i % 3) * 0.06}>
              <div className="group h-full rounded-2xl border border-border bg-surface p-7 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <span className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.desc}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
