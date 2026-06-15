"use client";

import { useState } from "react";
import { Send, Mail, Phone, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { useT } from "@/i18n/I18nProvider";
import { SITE_CONTACT } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ContactsView() {
  const t = useT();
  const p = t.pages.contacts;

  return (
    <>
      <PageHeader eyebrow={t.nav.contacts} title={p.title} description={p.subtitle} />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="flex flex-col gap-4">
              {/* Telegram highlight */}
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
                <span className="grid size-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <Send className="size-5" aria-hidden />
                </span>
                <h2 className="mt-4 font-semibold">{p.telegramTitle}</h2>
                <p className="mt-1 text-sm text-muted">{p.telegramDesc}</p>
                <a
                  href={SITE_CONTACT.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:bg-primary/90 hover:-translate-y-0.5"
                >
                  <Send className="size-4" aria-hidden />
                  {p.openChat}
                </a>
              </div>

              <ContactRow icon={Mail} title={p.emailTitle} value={SITE_CONTACT.email} href={`mailto:${SITE_CONTACT.email}`} />
              <ContactRow icon={Phone} title={p.phoneTitle} value={SITE_CONTACT.phone} href={`tel:${SITE_CONTACT.phone.replace(/[^+\d]/g, "")}`} />
              <ContactRow icon={MapPin} title={p.addressTitle} value={p.address} />
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

function ContactRow({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-soft)] transition-colors hover:border-primary/40">
      <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon className="size-5" aria-hidden />
      </span>
      <div>
        <p className="text-sm text-muted">{title}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}

function ContactForm() {
  const p = useT().pages.contacts;
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};
    if (!String(data.get("name") || "").trim()) next.name = "•";
    const email = String(data.get("email") || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "•";
    if (String(data.get("message") || "").trim().length < 10) next.message = "•";
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("done");
      form.reset();
    }, 1100);
  }

  if (status === "done") {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4 rounded-3xl border border-border bg-surface p-10 text-center shadow-[var(--shadow-soft)]">
        <span className="grid size-14 place-items-center rounded-full bg-accent/15 text-accent">
          <CheckCircle2 className="size-7" aria-hidden />
        </span>
        <h2 className="text-xl font-semibold">{p.formSuccess}</h2>
        <p className="max-w-sm text-sm text-muted">{p.formSuccessDesc}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm font-medium text-primary hover:underline"
        >
          {p.formSubmit}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)] sm:p-8"
    >
      <h2 className="text-lg font-semibold">{p.formTitle}</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field id="name" label={p.formName} error={errors.name} />
        <Field id="email" label={p.formEmail} type="email" error={errors.email} />
      </div>
      <div className="mt-4">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          {p.formMessage}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={cn(
            "w-full resize-y rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30",
            errors.message ? "border-red-400" : "border-border",
          )}
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:bg-primary/90 disabled:opacity-70"
      >
        {status === "loading" ? (
          <Loader2 className="size-4 animate-spin" aria-hidden />
        ) : (
          <Send className="size-4" aria-hidden />
        )}
        {p.formSubmit}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  error,
}: {
  id: string;
  label: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        className={cn(
          "w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30",
          error ? "border-red-400" : "border-border",
        )}
      />
    </div>
  );
}
