"use client";

import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { useT } from "@/i18n/I18nProvider";
import { cn } from "@/lib/utils";

export function Pricing() {
  const t = useT();
  return (
    <Section id="pricing" className="scroll-mt-16">
      <SectionHeading
        eyebrow={t.nav.pricing}
        title={t.pricing.title}
        description={t.pricing.subtitle}
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {t.pricing.plans.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 0.06}>
            <div
              className={cn(
                "relative flex h-full flex-col rounded-3xl border p-8",
                plan.popular
                  ? "border-primary bg-surface shadow-[var(--shadow-glow)]"
                  : "border-border bg-surface shadow-[var(--shadow-soft)]",
              )}
            >
              {plan.popular ? (
                <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  ★
                </span>
              ) : null}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-sm text-muted">{plan.unit}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{plan.desc}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                href="/register"
                variant={plan.popular ? "primary" : "outline"}
                className="mt-8 w-full"
              >
                {plan.cta}
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-muted">{t.pricing.note}</p>
    </Section>
  );
}
