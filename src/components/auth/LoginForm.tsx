"use client";

import { useState } from "react";
import Link from "next/link";
import { LogIn, Loader2 } from "lucide-react";
import { useT } from "@/i18n/I18nProvider";
import { cn } from "@/lib/utils";

export function LoginForm() {
  const t = useT().auth.login;
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    if (!String(data.get("email") || "").trim()) next.email = "•";
    if (!String(data.get("password") || "").trim()) next.password = "•";
    setErrors(next);
    if (Object.keys(next).length) return;
    setLoading(true);
    setTimeout(() => setLoading(false), 1000); // UI-only demo
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
          {t.email}
        </label>
        <input
          id="email"
          name="email"
          type="text"
          autoComplete="username"
          className={inputClass(errors.email)}
        />
      </div>
      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium">
            {t.password}
          </label>
          <a href="#" className="text-xs font-medium text-primary hover:underline">
            {t.forgot}
          </a>
        </div>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          className={inputClass(errors.password)}
        />
      </div>

      <label className="flex items-center gap-2 text-sm text-muted">
        <input
          type="checkbox"
          name="remember"
          className="size-4 rounded border-border accent-primary"
        />
        {t.remember}
      </label>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:bg-primary/90 disabled:opacity-70"
      >
        {loading ? (
          <Loader2 className="size-4 animate-spin" aria-hidden />
        ) : (
          <LogIn className="size-4" aria-hidden />
        )}
        {t.submit}
      </button>

      <p className="text-center text-sm text-muted">
        {t.noAccount}{" "}
        <Link href="/register" className="font-medium text-primary hover:underline">
          {t.registerLink}
        </Link>
      </p>
    </form>
  );
}

function inputClass(error?: string) {
  return cn(
    "w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30",
    error ? "border-red-400" : "border-border",
  );
}
