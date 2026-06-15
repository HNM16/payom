"use client";

import { ArrowRight, KeyRound } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CodeTabs } from "@/components/ui/CodeTabs";
import { Reveal } from "@/components/motion/Reveal";
import { SEND_SAMPLES } from "@/lib/codeSamples";
import { useT } from "@/i18n/I18nProvider";

export function ApiSection() {
  const t = useT();
  return (
    <Section id="api-preview">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow={t.api.subtitle}
            title={t.api.title}
            description={t.api.desc}
          />
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-border bg-surface p-4">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
              <KeyRound className="size-5" aria-hidden />
            </span>
            <p className="text-sm leading-relaxed text-muted">{t.api.note}</p>
          </div>
          <div className="mt-6">
            <Button href="/api">
              {t.api.cta}
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>

        <Reveal>
          <CodeTabs samples={SEND_SAMPLES} />
        </Reveal>
      </div>
    </Section>
  );
}
