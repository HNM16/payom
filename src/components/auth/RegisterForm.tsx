"use client";

import { useState } from "react";
import Link from "next/link";
import { UserPlus, Loader2, CheckCircle2 } from "lucide-react";
import { useT } from "@/i18n/I18nProvider";
import { cn } from "@/lib/utils";

export function RegisterForm() {
  const t = useT().auth.register;
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    if (!String(data.get("name") || "").trim()) next.name = "•";
    const email = String(data.get("email") || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "•";
    if (String(data.get("password") || "").length < 6) next.password = "•";
    if (!data.get("agree")) next.agree = "•";
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("loading");
    setTimeout(() => setStatus("done"), 1100); // UI-only demo
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="grid size-14 place-items-center rounded-full bg-accent/15 text-accent">
          <CheckCircle2 className="size-7" aria-hidden />
        </span>
        <h2 className="text-xl font-semibold">{t.success}</h2>
        <p className="max-w-sm text-sm text-muted">{t.successDesc}</p>
        <Link
          href="/login"
          className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          {t.loginLink}
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="name" label={t.name} error={errors.name} autoComplete="name" />
        <Field id="company" label={t.company} autoComplete="organization" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="email" label={t.email} type="email" error={errors.email} autoComplete="email" />
        <Field id="phone" label={t.phone} type="tel" autoComplete="tel" />
      </div>
      <Field
        id="password"
        label={t.password}
        type="password"
        error={errors.password}
        autoComplete="new-password"
      />

      <label className="flex items-start gap-2 text-sm text-muted">
        <input
          type="checkbox"
          name="agree"
          className={cn(
            "mt-0.5 size-4 rounded border accent-primary",
            errors.agree ? "border-red-400" : "border-border",
          )}
        />
        <span>{t.agree}</span>
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:bg-primary/90 disabled:opacity-70"
      >
        {status === "loading" ? (
          <Loader2 className="size-4 animate-spin" aria-hidden />
        ) : (
          <UserPlus className="size-4" aria-hidden />
        )}
        {t.submit}
      </button>

      <p className="text-center text-sm text-muted">
        {t.hasAccount}{" "}
        <Link href="/login" className="font-medium text-primary hover:underline">
          {t.loginLink}
        </Link>
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  error,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  error?: string;
  autoComplete?: string;
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
        autoComplete={autoComplete}
        className={cn(
          "w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30",
          error ? "border-red-400" : "border-border",
        )}
      />
    </div>
  );
}
