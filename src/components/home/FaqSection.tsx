import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/motion/Reveal";
import { FAQS } from "@/lib/data";

export function FaqSection() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr]">
        <SectionHeading
          align="left"
          eyebrow="FAQ"
          title="Answers, before you ask"
          description="Can't find what you're looking for? Our team is one tap away, any time of day."
        />
        <Reveal>
          <Accordion items={FAQS.slice(0, 5)} />
          <p className="mt-6 text-sm text-muted">
            Still curious?{" "}
            <Link
              href="/contact"
              className="font-medium text-primary hover:underline"
            >
              Talk to our team →
            </Link>
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
