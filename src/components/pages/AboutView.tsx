"use client";

import { ShieldCheck, Zap, Headphones, Eye, type LucideIcon } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { useT } from "@/i18n/I18nProvider";

const VALUE_ICONS: LucideIcon[] = [ShieldCheck, Zap, Headphones, Eye];
const STAT_VALUES = [
  { value: 120, suffix: "M+", decimals: 0 },
  { value: 4500, suffix: "+", decimals: 0 },
  { value: 4, suffix: "+", decimals: 0 },
  { value: 99.9, suffix: "%", decimals: 1 },
];

export function AboutView() {
  const t = useT();
  const p = t.pages.about;

  return (
    <>
      <PageHeader eyebrow={t.nav.about} title={p.title} description={p.subtitle} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">
              {p.lead}
            </h2>
            <div className="mt-6 space-y-4">
              {p.body.map((para) => (
                <p key={para} className="text-pretty leading-relaxed text-muted">
                  {para}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {t.stats.items.map((stat, i) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-surface p-6 text-center shadow-[var(--shadow-soft)]"
                >
                  <p className="text-3xl font-bold">
                    <AnimatedCounter
                      value={STAT_VALUES[i].value}
                      suffix={STAT_VALUES[i].suffix}
                      decimals={STAT_VALUES[i].decimals}
                    />
                  </p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <section className="bg-surface py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {p.values.map((value, i) => {
              const Icon = VALUE_ICONS[i] ?? ShieldCheck;
              return (
                <Reveal key={value.title} delay={(i % 4) * 0.06}>
                  <div className="h-full rounded-2xl border border-border bg-background p-7">
                    <span className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary">
                      <Icon className="size-6" aria-hidden />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {value.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
