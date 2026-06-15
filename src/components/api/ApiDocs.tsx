"use client";

import { KeyRound, Send, FileJson } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { CodeTabs } from "@/components/ui/CodeTabs";
import { Reveal } from "@/components/motion/Reveal";
import { SEND_SAMPLES, RESPONSE_SAMPLE } from "@/lib/codeSamples";
import { useT } from "@/i18n/I18nProvider";

export function ApiDocs() {
  const t = useT().apiPage;

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-grid opacity-50" aria-hidden />
        <div
          className="absolute left-1/2 top-[-12rem] -z-10 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl"
          aria-hidden
        />
        <Container className="py-16 text-center sm:py-20">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
            <Badge>SMS API · v1</Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              {t.title}
            </h1>
            <p className="text-pretty text-lg leading-relaxed text-muted">
              {t.subtitle}
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Auth */}
          <Reveal>
            <DocBlock icon={KeyRound} title={t.authTitle} desc={t.authDesc}>
              <div className="overflow-hidden rounded-2xl border border-border bg-secondary p-5 text-[13px] text-slate-100">
                <code>Authorization: Bearer YOUR_API_KEY</code>
              </div>
            </DocBlock>
          </Reveal>

          {/* Send */}
          <Reveal>
            <DocBlock icon={Send} title={t.sendTitle} desc={t.sendDesc}>
              <div className="mb-4 flex flex-wrap items-center gap-2 text-sm">
                <span className="rounded-md bg-accent/15 px-2 py-1 font-semibold text-accent">
                  POST
                </span>
                <code className="rounded-md bg-foreground/5 px-2 py-1">
                  /v1/sms/send
                </code>
              </div>
              <CodeTabs samples={SEND_SAMPLES} />
            </DocBlock>
          </Reveal>

          {/* Params */}
          <Reveal>
            <h2 className="text-xl font-semibold">{t.paramsTitle}</h2>
            <div className="mt-5 overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface text-xs uppercase tracking-wide text-muted">
                  <tr>
                    <th className="px-5 py-3 font-medium">Parameter</th>
                    <th className="px-5 py-3 font-medium">Type</th>
                    <th className="px-5 py-3 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {t.params.map((p) => (
                    <tr key={p.name} className="border-t border-border">
                      <td className="px-5 py-3 font-mono font-medium text-primary">
                        {p.name}
                      </td>
                      <td className="px-5 py-3 text-muted">{p.type}</td>
                      <td className="px-5 py-3 text-muted">{p.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          {/* Response */}
          <Reveal>
            <DocBlock icon={FileJson} title={t.responseTitle} desc={t.responseDesc}>
              <div className="overflow-hidden rounded-2xl border border-border bg-secondary">
                <pre className="overflow-x-auto p-5 text-[13px] leading-relaxed text-slate-100">
                  <code>{RESPONSE_SAMPLE}</code>
                </pre>
              </div>
            </DocBlock>
          </Reveal>
        </div>
      </Container>
    </>
  );
}

function DocBlock({
  icon: Icon,
  title,
  desc,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
          <Icon className="size-5" aria-hidden />
        </span>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{desc}</p>
      <div className="mt-5">{children}</div>
    </div>
  );
}
