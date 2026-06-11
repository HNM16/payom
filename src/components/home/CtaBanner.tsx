"use client";

import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { useT } from "@/i18n/I18nProvider";

export function CtaBanner() {
  const t = useT();
  return (
    <section className="pb-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent px-6 py-16 text-center text-white sm:px-16">
            <div className="absolute inset-0 bg-grid opacity-10" aria-hidden />
            <div
              className="absolute -bottom-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-white/20 blur-3xl"
              aria-hidden
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                {t.cta.title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-white/85">
                {t.cta.subtitle}
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  href="/register"
                  size="lg"
                  className="bg-white text-primary shadow-none hover:bg-white/90"
                >
                  {t.cta.button}
                  <ArrowRight className="size-4" />
                </Button>
                <Button
                  href="/#pricing"
                  size="lg"
                  className="border border-white/40 bg-transparent text-white shadow-none hover:bg-white/10"
                >
                  {t.cta.secondary}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
