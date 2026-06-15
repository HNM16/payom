"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { useT } from "@/i18n/I18nProvider";

export function LegalView({ doc }: { doc: "offer" | "privacy" }) {
  const t = useT();
  const data = t.pages.legal[doc];

  return (
    <>
      <PageHeader title={data.title} description={t.pages.legal.updated} />

      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-8">
          {data.sections.map((section, i) => (
            <Reveal key={section.heading} delay={(i % 4) * 0.04}>
              <section>
                <h2 className="text-lg font-semibold">{section.heading}</h2>
                <p className="mt-2 text-pretty leading-relaxed text-muted">
                  {section.body}
                </p>
              </section>
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  );
}
