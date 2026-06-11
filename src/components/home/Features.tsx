import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { FEATURES } from "@/lib/data";

export function Features() {
  return (
    <Section className="bg-surface">
      <SectionHeading
        eyebrow="Why Veltra"
        title="Built for the way money moves today"
        description="A payment experience engineered around speed, trust, and clarity — without the clutter of traditional banking."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <Reveal key={feature.title} delay={(i % 3) * 0.06}>
              <div className="group h-full rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]">
                <span className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
