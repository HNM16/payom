import type { Metadata } from "next";
import {
  ShieldCheck,
  Zap,
  CreditCard,
  Banknote,
  Smartphone,
  QrCode,
  Lock,
  RefreshCw,
  Globe,
  Check,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Payments",
  description:
    "See how Veltra payments work — instant settlement, multiple payment methods, transparent pricing, and bank-grade security on every transaction.",
};

const METHODS = [
  { icon: CreditCard, label: "Cards", note: "Visa, Mastercard, Amex" },
  { icon: Banknote, label: "Bank transfer", note: "ACH & SEPA" },
  { icon: Smartphone, label: "Mobile money", note: "Wallet to wallet" },
  { icon: QrCode, label: "QR & links", note: "Scan or share to pay" },
];

const SECURITY = [
  {
    icon: Lock,
    title: "End-to-end encryption",
    text: "Every payment is protected with 256-bit TLS and tokenized card data.",
  },
  {
    icon: ShieldCheck,
    title: "Real-time fraud checks",
    text: "Machine-learning models score each transaction before it clears.",
  },
  {
    icon: RefreshCw,
    title: "Automatic refunds",
    text: "Failed or duplicate payments are reversed to your wallet in minutes.",
  },
  {
    icon: Globe,
    title: "Global compliance",
    text: "PCI-DSS Level 1 certified and regionally regulated where we operate.",
  },
];

const PLANS = [
  {
    name: "Personal",
    price: "$0",
    cadence: "forever",
    description: "Everything you need to pay bills and top up — on us.",
    features: [
      "Unlimited bill payments",
      "Instant settlement",
      "1,200+ billers",
      "Cashback rewards",
      "24/7 support",
    ],
    cta: "Get started",
    href: "/dashboard",
    featured: false,
  },
  {
    name: "Plus",
    price: "$6",
    cadence: "per month",
    description: "For power users who want insights, limits, and lower fees.",
    features: [
      "Everything in Personal",
      "Zero-fee international transfers",
      "Advanced spending insights",
      "Scheduled & recurring payments",
      "Priority support",
    ],
    cta: "Start free trial",
    href: "/dashboard",
    featured: true,
  },
  {
    name: "Business",
    price: "Custom",
    cadence: "let's talk",
    description: "Multi-user payments, reconciliation, and an API for your team.",
    features: [
      "Everything in Plus",
      "Team roles & permissions",
      "Payments API & webhooks",
      "Bulk & batch payments",
      "Dedicated account manager",
    ],
    cta: "Contact sales",
    href: "/contact",
    featured: false,
  },
];

export default function PaymentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Payments"
        title="Payments that just clear"
        description="One flow for every payment — fast to start, instant to settle, and secure from end to end."
      />

      {/* Flow + methods */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto w-full max-w-md rounded-3xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)]">
              <div className="flex items-center justify-between">
                <Badge>Checkout</Badge>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-500">
                  <ShieldCheck className="size-4" aria-hidden /> Secure
                </span>
              </div>
              <div className="mt-6 rounded-2xl bg-background p-5">
                <p className="text-sm text-muted">You're paying</p>
                <p className="mt-1 text-3xl font-bold">$86.50</p>
                <p className="mt-1 text-sm text-muted">BrightGrid Power · Electricity</p>
              </div>
              <div className="mt-4 space-y-2.5">
                {["Amount", "Service fee", "Total"].map((row, i) => (
                  <div
                    key={row}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-muted">{row}</span>
                    <span className={i === 2 ? "font-semibold" : ""}>
                      {i === 0 ? "$86.50" : i === 1 ? "Free" : "$86.50"}
                    </span>
                  </div>
                ))}
              </div>
              <Button className="mt-6 w-full">
                <Zap className="size-4" /> Pay now
              </Button>
              <p className="mt-3 text-center text-xs text-muted">
                Settles instantly · Receipt saved automatically
              </p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Payment methods"
              title="Pay your way"
              description="Connect a card, your bank, or a mobile wallet. Switch between them any time — Veltra remembers your preference."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {METHODS.map((m, i) => (
                <Reveal key={m.label} delay={i * 0.05}>
                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-4">
                    <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                      <m.icon className="size-5" aria-hidden />
                    </span>
                    <div>
                      <p className="font-semibold">{m.label}</p>
                      <p className="text-sm text-muted">{m.note}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Security */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow="Security"
          title="Protection on every transaction"
          description="Security isn't a feature you toggle on — it's built into every layer of how Veltra moves money."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SECURITY.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-background p-6">
                <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          description="Start free and upgrade when you're ready. No surprise fees, ever."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.06}>
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-8 ${
                  plan.featured
                    ? "border-primary bg-surface shadow-[var(--shadow-glow)]"
                    : "border-border bg-surface shadow-[var(--shadow-soft)]"
                }`}
              >
                {plan.featured ? (
                  <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Most popular
                  </span>
                ) : null}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm text-muted">/ {plan.cadence}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {plan.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  href={plan.href}
                  variant={plan.featured ? "primary" : "outline"}
                  className="mt-8 w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
