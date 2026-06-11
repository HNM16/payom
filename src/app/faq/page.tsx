import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { FAQS } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Veltra — pricing, security, supported billers, payment speed, refunds, and more.",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="Help center"
        title="Frequently asked questions"
        description="Everything you need to know about paying, security, and getting the most out of Veltra."
      />

      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Accordion items={FAQS} />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl border border-border bg-surface p-8 text-center shadow-[var(--shadow-soft)]">
              <span className="grid size-12 place-items-center rounded-full bg-primary/10 text-primary">
                <MessageCircle className="size-6" aria-hidden />
              </span>
              <div>
                <h2 className="text-lg font-semibold">Still have questions?</h2>
                <p className="mt-1 text-sm text-muted">
                  Our support team is available 24/7 and usually replies in
                  minutes.
                </p>
              </div>
              <Button href="/contact">Contact support</Button>
              <p className="text-xs text-muted">
                Prefer email?{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  Send us a message
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </>
  );
}
