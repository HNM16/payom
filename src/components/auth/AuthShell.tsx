"use client";

import Link from "next/link";
import { ShieldCheck, Zap, Globe } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { useT } from "@/i18n/I18nProvider";

export function AuthShell({
  variant,
  children,
}: {
  variant: "login" | "register";
  children: React.ReactNode;
}) {
  const t = useT();
  const { title, subtitle } = variant === "login" ? t.auth.login : t.auth.register;
  const points = [
    { icon: Zap, text: t.hero.points[1] },
    { icon: ShieldCheck, text: t.api.note },
    { icon: Globe, text: t.operators.title },
  ];

  return (
    <div className="grid min-h-[calc(100vh-4rem)] lg:grid-cols-2">
      {/* Form side */}
      <div className="flex items-center justify-center px-5 py-12 sm:px-8">
        <div className="w-full max-w-md">
          <div className="mb-8 lg:hidden">
            <Logo />
          </div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1>
          <p className="mt-2 text-sm text-muted">{subtitle}</p>
          <div className="mt-8">{children}</div>
        </div>
      </div>

      {/* Brand side */}
      <div className="relative hidden overflow-hidden bg-secondary lg:block">
        <div className="absolute inset-0 bg-grid opacity-10" aria-hidden />
        <div
          className="absolute -right-24 top-1/3 size-96 rounded-full bg-primary/30 blur-3xl"
          aria-hidden
        />
        <div className="relative flex h-full flex-col justify-between p-12 text-white">
          <Link href="/" className="text-lg font-bold">
            Payom<span className="text-accent">.tj</span>
          </Link>
          <div>
            <p className="text-2xl font-semibold leading-snug">{t.cta.title}</p>
            <ul className="mt-8 space-y-4">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/10">
                    <p.icon className="size-5" aria-hidden />
                  </span>
                  <span className="text-sm leading-relaxed">{p.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-white/50">{t.footer.madeIn}</p>
        </div>
      </div>
    </div>
  );
}
