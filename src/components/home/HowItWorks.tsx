import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { STEPS } from "@/lib/data";

export function HowItWorks() {
  return (
    <Section>
      <SectionHeading
        eyebrow="How it works"
        title="From sign-up to settled in four steps"
        description="No paperwork, no waiting rooms. Veltra gets you paying in minutes."
      />

      <div className="relative mt-16">
        {/* Connecting line on desktop */}
        <div
          className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
          aria-hidden
        />
        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal as="li" key={step.title} delay={i * 0.08} className="relative">
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <span className="relative grid size-14 place-items-center rounded-2xl border border-border bg-surface text-primary shadow-[var(--shadow-soft)]">
                    <Icon className="size-6" aria-hidden />
                    <span className="absolute -right-2 -top-2 grid size-6 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
