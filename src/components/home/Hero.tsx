"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Wallet,
  Smartphone,
  Wifi,
  Tv,
  ArrowRight,
  Check,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-60" aria-hidden />
      <div
        className="absolute left-1/2 top-[-10rem] -z-10 h-[34rem] w-[58rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary/25 via-accent/20 to-transparent blur-3xl"
        aria-hidden
      />

      <Container className="grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <Badge>
              <span className="size-1.5 rounded-full bg-primary" />
              Trusted by 2.4M+ people
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
            className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Pay for everything,{" "}
            <span className="text-gradient">in seconds.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted"
          >
            Bills, top-ups, transfers, and subscriptions — all in one elegant
            wallet. Veltra makes every payment instant, secure, and effortless.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="/dashboard" size="lg">
              Get started free
              <ArrowRight className="size-4" />
            </Button>
            <Button href="/services" size="lg" variant="outline">
              Explore services
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted"
          >
            {["No hidden fees", "Cancel anytime", "Bank-grade security"].map(
              (item) => (
                <li key={item} className="inline-flex items-center gap-1.5">
                  <Check className="size-4 text-primary" aria-hidden />
                  {item}
                </li>
              ),
            )}
          </motion.ul>
        </div>

        <HeroCard />
      </Container>
    </section>
  );
}

function HeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease }}
      className="relative mx-auto w-full max-w-md"
    >
      {/* Main wallet card */}
      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted">Total balance</p>
            <p className="mt-1 text-3xl font-bold">$4,820.50</p>
          </div>
          <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
            <Wallet className="size-5" aria-hidden />
          </span>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            { icon: Smartphone, label: "Mobile" },
            { icon: Wifi, label: "Internet" },
            { icon: Tv, label: "Streaming" },
          ].map((q) => (
            <div
              key={q.label}
              className="flex flex-col items-center gap-2 rounded-xl border border-border bg-background/60 py-3 text-xs text-muted"
            >
              <q.icon className="size-5 text-primary" aria-hidden />
              {q.label}
            </div>
          ))}
        </div>

        <div className="mt-5 space-y-3">
          {[
            { name: "Skyline Mobile", amt: "-$24.00", time: "Just now" },
            { name: "BrightGrid Power", amt: "-$86.50", time: "2 days ago" },
          ].map((tx) => (
            <div key={tx.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-full bg-primary/10">
                  <Zap className="size-4 text-primary" aria-hidden />
                </span>
                <div className="text-sm">
                  <p className="font-medium">{tx.name}</p>
                  <p className="text-xs text-muted">{tx.time}</p>
                </div>
              </div>
              <p className="text-sm font-semibold">{tx.amt}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating badge — secure */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-5 -top-5 flex items-center gap-2 rounded-2xl border border-border bg-surface px-4 py-3 shadow-[var(--shadow-soft)]"
      >
        <span className="grid size-9 place-items-center rounded-full bg-emerald-500/15 text-emerald-500">
          <ShieldCheck className="size-5" aria-hidden />
        </span>
        <div className="text-xs">
          <p className="font-semibold">Secured</p>
          <p className="text-muted">256-bit encrypted</p>
        </div>
      </motion.div>

      {/* Floating badge — instant */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -bottom-5 -right-4 flex items-center gap-2 rounded-2xl border border-border bg-surface px-4 py-3 shadow-[var(--shadow-soft)]"
      >
        <span className="grid size-9 place-items-center rounded-full bg-primary/15 text-primary">
          <Zap className="size-5" aria-hidden />
        </span>
        <div className="text-xs">
          <p className="font-semibold">Instant</p>
          <p className="text-muted">Settled in 0.4s</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
