import { Star, Quote } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  return (
    <Section className="bg-surface">
      <SectionHeading
        eyebrow="Loved by customers"
        title="Trusted by millions, every single day"
        description="Real stories from people who replaced a drawer full of apps with one calm, fast wallet."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={(i % 3) * 0.06}>
            <figure className="flex h-full flex-col rounded-2xl border border-border bg-background p-7">
              <Quote className="size-7 text-primary/30" aria-hidden />
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed">
                “{t.quote}”
              </blockquote>
              <div
                className="mt-5 flex gap-0.5"
                aria-label={`${t.rating} out of 5 stars`}
              >
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star
                    key={s}
                    className="size-4 fill-amber-400 text-amber-400"
                    aria-hidden
                  />
                ))}
              </div>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-5">
                <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-semibold text-white">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
