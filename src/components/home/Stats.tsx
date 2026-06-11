import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { STATS } from "@/lib/data";

export function Stats() {
  return (
    <section className="py-16">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary px-6 py-12 text-white sm:px-12">
          <div
            className="absolute inset-0 -z-0 bg-grid opacity-10"
            aria-hidden
          />
          <div
            className="absolute -right-20 -top-20 -z-0 size-72 rounded-full bg-primary/30 blur-3xl"
            aria-hidden
          />
          <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08} className="text-center">
                <p className="text-4xl font-bold tracking-tight sm:text-5xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </p>
                <p className="mt-2 text-sm text-white/70">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
