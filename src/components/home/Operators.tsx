"use client";

import { Container } from "@/components/ui/Container";
import { useT } from "@/i18n/I18nProvider";

// Mobile operators in Tajikistan (factual network names shown as wordmarks).
const OPERATORS = ["Tcell", "MegaFon", "Babilon-M", "ZET-Mobile"];

export function Operators() {
  const t = useT();
  return (
    <section className="border-y border-border bg-surface py-10">
      <Container>
        <p className="text-center text-sm font-medium text-muted">
          {t.operators.title}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {OPERATORS.map((name) => (
            <span
              key={name}
              className="text-lg font-bold tracking-tight text-foreground/45 transition-colors hover:text-foreground/70"
            >
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
