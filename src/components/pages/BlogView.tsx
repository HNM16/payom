"use client";

import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { useT } from "@/i18n/I18nProvider";

export function BlogView() {
  const t = useT();
  const p = t.pages.blog;

  return (
    <>
      <PageHeader eyebrow={t.nav.blog} title={p.title} description={p.subtitle} />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {p.posts.map((post, i) => (
            <Reveal key={post.title} delay={(i % 2) * 0.06}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div className="relative h-44 overflow-hidden bg-gradient-to-br from-primary/20 via-accent/15 to-primary/10">
                  <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
                  <span className="absolute left-4 top-4 rounded-full bg-surface/90 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <time className="text-xs text-muted">{post.date}</time>
                  <h2 className="mt-2 text-lg font-semibold leading-snug transition-colors group-hover:text-primary">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    {t.common.readMore}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
