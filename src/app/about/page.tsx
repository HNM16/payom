import type { Metadata } from "next";
import { Target, Heart, Sparkles, Users, Leaf, Shield } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { STATS } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Veltra is on a mission to make everyday payments instant, fair, and beautifully simple for everyone. Meet the team and the values behind the product.",
};

const VALUES = [
  {
    icon: Target,
    title: "Clarity over complexity",
    text: "We strip away jargon and hidden fees so people always know exactly what they're paying.",
  },
  {
    icon: Shield,
    title: "Trust by default",
    text: "Security and privacy aren't upsells. They're the foundation everything else is built on.",
  },
  {
    icon: Heart,
    title: "People first",
    text: "Every decision starts with the person on the other side of the screen, not the spreadsheet.",
  },
  {
    icon: Sparkles,
    title: "Craft in the details",
    text: "Speed, polish, and delight in the small moments add up to a product people love.",
  },
  {
    icon: Users,
    title: "Built in the open",
    text: "We listen, ship in public, and let our community shape what comes next.",
  },
  {
    icon: Leaf,
    title: "Built to last",
    text: "We optimize for the long-term health of our users and the planet, not quarterly vanity metrics.",
  },
];

const TEAM = [
  { name: "Mara Devlin", role: "Co-founder & CEO", initials: "MD" },
  { name: "Theo Alvarez", role: "Co-founder & CTO", initials: "TA" },
  { name: "Nadia Rahman", role: "Head of Design", initials: "NR" },
  { name: "Jonas Keller", role: "Head of Security", initials: "JK" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Money should move at the speed of life"
        description="We started Veltra because paying for everyday essentials still felt stuck in the past. So we rebuilt it — fast, fair, and human."
      />

      {/* Mission */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Our mission"
              title="Make every payment feel effortless"
              description="Hundreds of millions of people lose hours every month juggling logins, queues, and clunky portals just to pay for the basics. Veltra brings all of it into one calm, instant experience — so paying becomes a moment, not a chore."
            />
            <p className="mt-6 text-pretty leading-relaxed text-muted">
              From our first transaction to billions in payments processed, our
              north star hasn't changed: remove friction, earn trust, and give
              people back their time.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-surface p-6 text-center shadow-[var(--shadow-soft)]"
                >
                  <p className="text-3xl font-bold">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                    />
                  </p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow="Our values"
          title="The principles we build by"
          description="Six ideas that guide how we design, decide, and treat the people who trust us with their money."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-background p-7">
                <span className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary">
                  <v.icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section>
        <SectionHeading
          eyebrow="Our team"
          title="The people behind Veltra"
          description="A small, senior team of builders obsessed with payments, design, and security."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.06}>
              <div className="flex flex-col items-center rounded-2xl border border-border bg-surface p-7 text-center shadow-[var(--shadow-soft)]">
                <span className="grid size-20 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-xl font-bold text-white">
                  {member.initials}
                </span>
                <h3 className="mt-4 font-semibold">{member.name}</h3>
                <p className="text-sm text-muted">{member.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
