"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success";

const TOPICS = ["General", "Billing", "Partnership", "Press"];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};

    if (!String(data.get("name") || "").trim()) next.name = "Please enter your name.";
    const email = String(data.get("email") || "").trim();
    if (!email) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email address.";
    if (String(data.get("message") || "").trim().length < 10)
      next.message = "Message should be at least 10 characters.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // Simulate an async submission (UI-only)
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      form.reset();
    }, 1100);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-surface p-10 text-center shadow-[var(--shadow-soft)]">
        <span className="grid size-14 place-items-center rounded-full bg-emerald-500/15 text-emerald-500">
          <CheckCircle2 className="size-7" aria-hidden />
        </span>
        <h2 className="text-xl font-semibold">Message sent</h2>
        <p className="max-w-sm text-sm text-muted">
          Thanks for reaching out. A member of our team will get back to you
          within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm font-medium text-primary hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)] sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Doe"
            className={inputClass(errors.name)}
          />
        </Field>
        <Field label="Email" name="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jane@example.com"
            className={inputClass(errors.email)}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Topic" name="topic">
          <select id="topic" name="topic" className={inputClass()}>
            {TOPICS.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Message" name="message" error={errors.message}>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="How can we help?"
            className={cn(inputClass(errors.message), "resize-y")}
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:bg-primary/90 disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden /> Sending…
          </>
        ) : (
          <>
            <Send className="size-4" aria-hidden /> Send message
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      {children}
      {error ? (
        <p className="mt-1.5 text-xs text-red-500" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function inputClass(error?: string) {
  return cn(
    "w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/30",
    error ? "border-red-400" : "border-border",
  );
}
