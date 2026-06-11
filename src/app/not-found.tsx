"use client";

import Link from "next/link";
import { Home } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useT } from "@/i18n/I18nProvider";

export default function NotFound() {
  const t = useT().notFound;
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <div className="relative">
        <div
          className="absolute inset-0 -z-10 mx-auto size-64 rounded-full bg-gradient-to-tr from-primary/25 to-accent/25 blur-3xl"
          aria-hidden
        />
        <p className="text-gradient text-8xl font-bold tracking-tight sm:text-9xl">
          404
        </p>
      </div>
      <h1 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
        {t.title}
      </h1>
      <p className="mt-3 max-w-md text-pretty text-muted">{t.desc}</p>
      <Link
        href="/"
        className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:bg-primary/90"
      >
        <Home className="size-4" aria-hidden />
        {t.home}
      </Link>
    </Container>
  );
}
