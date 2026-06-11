import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Veltra team. We're available 24/7 by chat, email, and phone for support, partnerships, and press.",
};

const DETAILS = [
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  {
    icon: Phone,
    label: "Phone",
    value: SITE.phone,
    href: `tel:${SITE.phone.replace(/[^+\d]/g, "")}`,
  },
  { icon: MapPin, label: "Office", value: "128 Harbor Street, Suite 900" },
  { icon: Clock, label: "Support hours", value: "24/7 — every day of the year" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We'd love to hear from you"
        description="Questions, feedback, or partnership ideas — reach out and a real human will get back to you fast."
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="flex flex-col gap-4">
              {DETAILS.map((d) => {
                const content = (
                  <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-soft)] transition-colors hover:border-primary/40">
                    <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                      <d.icon className="size-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm text-muted">{d.label}</p>
                      <p className="font-medium">{d.value}</p>
                    </div>
                  </div>
                );
                return d.href ? (
                  <a key={d.label} href={d.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={d.label}>{content}</div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </>
  );
}
