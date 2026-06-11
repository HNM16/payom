"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Send, BadgeCheck, Zap, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useT } from "@/i18n/I18nProvider";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const t = useT();

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid opacity-60" aria-hidden />
      <div
        className="absolute left-1/2 top-[-10rem] -z-10 h-[34rem] w-[58rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary/25 via-accent/20 to-transparent blur-3xl"
        aria-hidden
      />

      <Container className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <Badge>
              <span className="size-1.5 rounded-full bg-primary" />
              {t.hero.badge}
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
            className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            {t.hero.title}{" "}
            <span className="text-gradient">{t.hero.highlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="/register" size="lg">
              {t.hero.ctaPrimary}
              <ArrowRight className="size-4" />
            </Button>
            <Button href="/api" size="lg" variant="outline">
              {t.hero.ctaSecondary}
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted"
          >
            {t.hero.points.map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <Check className="size-4 text-primary" aria-hidden />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <HeroCard />
      </Container>
    </section>
  );
}

function HeroCard() {
  const t = useT();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease }}
      className="relative mx-auto w-full max-w-md"
    >
      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
              <Send className="size-5" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-semibold">Payom.tj</p>
              <p className="text-xs text-muted">SMS gateway</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-1 text-xs font-medium text-accent">
            <BadgeCheck className="size-3.5" aria-hidden /> Delivered
          </span>
        </div>

        {/* Chat bubbles */}
        <div className="mt-6 space-y-3">
          <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-sm text-primary-foreground">
            Payom: Ваш код подтверждения — 4821
          </div>
          <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-background px-4 py-2.5 text-sm">
            Скидка 20% только сегодня! Подробнее на payom.tj
          </div>
          <div className="ml-auto flex max-w-[80%] items-center justify-end gap-1.5 text-xs text-muted">
            <Check className="size-3.5 text-accent" aria-hidden /> 12 480 доставлено
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-border bg-background p-3">
            <p className="text-xs text-muted">{t.stats.items[0].label}</p>
            <p className="mt-1 text-lg font-bold">120M+</p>
          </div>
          <div className="rounded-xl border border-border bg-background p-3">
            <p className="text-xs text-muted">{t.stats.items[3].label}</p>
            <p className="mt-1 text-lg font-bold">99.9%</p>
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-5 -top-5 flex items-center gap-2 rounded-2xl border border-border bg-surface px-4 py-3 shadow-[var(--shadow-soft)]"
      >
        <span className="grid size-9 place-items-center rounded-full bg-primary/15 text-primary">
          <Zap className="size-5" aria-hidden />
        </span>
        <div className="text-xs">
          <p className="font-semibold">1000+ / sec</p>
          <p className="text-muted">throughput</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -bottom-5 -right-4 flex items-center gap-2 rounded-2xl border border-border bg-surface px-4 py-3 shadow-[var(--shadow-soft)]"
      >
        <span className="grid size-9 place-items-center rounded-full bg-accent/15 text-accent">
          <Users className="size-5" aria-hidden />
        </span>
        <div className="text-xs">
          <p className="font-semibold">4 500+</p>
          <p className="text-muted">{t.stats.items[1].label}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
