import type { Metadata } from "next";
import {
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Send,
  Receipt,
  Wallet,
  TrendingUp,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  DASHBOARD_CARDS,
  TRANSACTIONS,
  SERVICES,
} from "@/lib/data";
import type { Transaction } from "@/lib/types";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Your Veltra dashboard — wallet balance, recent transactions, spending insights, and quick payments in one premium interface.",
};

const SPENDING = [
  { month: "Jan", value: 52 },
  { month: "Feb", value: 68 },
  { month: "Mar", value: 44 },
  { month: "Apr", value: 80 },
  { month: "May", value: 62 },
  { month: "Jun", value: 74 },
];

const QUICK_ACTIONS = SERVICES.filter((s) => s.popular).slice(0, 4);

export default function DashboardPage() {
  return (
    <div className="bg-background">
      <Container className="py-12 sm:py-16">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm text-muted">Welcome back,</p>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Alex Morgan
              </h1>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Send className="size-4" /> Transfer
              </Button>
              <Button size="sm">
                <Plus className="size-4" /> Add money
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Stat cards */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DASHBOARD_CARDS.map((card, i) => {
            const Icon = card.icon;
            const positive = card.change.startsWith("+");
            const neutral = !card.change.startsWith("+") && !card.change.startsWith("-");
            return (
              <Reveal key={card.label} delay={i * 0.05}>
                <div className="rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)]">
                  <div className="flex items-center justify-between">
                    <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span
                      className={cn(
                        "inline-flex items-center gap-0.5 text-xs font-medium",
                        neutral
                          ? "text-muted"
                          : positive
                            ? "text-emerald-500"
                            : "text-red-500",
                      )}
                    >
                      {!neutral &&
                        (positive ? (
                          <ArrowUpRight className="size-3.5" aria-hidden />
                        ) : (
                          <ArrowDownRight className="size-3.5" aria-hidden />
                        ))}
                      {card.change}
                    </span>
                  </div>
                  <p className="mt-4 text-2xl font-bold">{card.value}</p>
                  <p className="mt-1 text-sm text-muted">{card.label}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* Spending chart */}
          <Reveal className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)]">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-semibold">Spending overview</h2>
                  <p className="text-sm text-muted">Last 6 months</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-500">
                  <TrendingUp className="size-3.5" aria-hidden /> On track
                </span>
              </div>
              <div className="mt-8 flex h-48 items-end justify-between gap-3 sm:gap-5">
                {SPENDING.map((m) => (
                  <div
                    key={m.month}
                    className="flex flex-1 flex-col items-center gap-3"
                  >
                    <div className="flex w-full flex-1 items-end">
                      <div
                        className="w-full rounded-t-lg bg-gradient-to-t from-primary/50 to-accent transition-all duration-500 hover:from-primary hover:to-accent"
                        style={{ height: `${m.value}%` }}
                        aria-label={`${m.month}: ${m.value}% of budget`}
                      />
                    </div>
                    <span className="text-xs text-muted">{m.month}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Quick pay */}
          <Reveal delay={0.05}>
            <div className="h-full rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)]">
              <h2 className="font-semibold">Quick pay</h2>
              <p className="text-sm text-muted">Your most-used services</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {QUICK_ACTIONS.map((s) => {
                  const Icon = s.icon;
                  return (
                    <button
                      key={s.slug}
                      type="button"
                      className="flex flex-col items-center gap-2 rounded-xl border border-border bg-background p-4 text-center transition-all hover:-translate-y-0.5 hover:border-primary/40"
                    >
                      <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <span className="text-xs font-medium">{s.name}</span>
                    </button>
                  );
                })}
              </div>
              <Button href="/services" variant="outline" className="mt-5 w-full">
                <Wallet className="size-4" /> All services
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Transactions */}
        <Reveal>
          <div className="mt-6 rounded-2xl border border-border bg-surface shadow-[var(--shadow-soft)]">
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center gap-2">
                <Receipt className="size-5 text-primary" aria-hidden />
                <h2 className="font-semibold">Recent transactions</h2>
              </div>
              <button
                type="button"
                className="text-sm font-medium text-primary hover:underline"
              >
                View all
              </button>
            </div>

            {/* Table on larger screens */}
            <div className="hidden overflow-x-auto sm:block">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-y border-border text-left text-xs uppercase tracking-wide text-muted">
                    <th className="px-6 py-3 font-medium">Merchant</th>
                    <th className="px-6 py-3 font-medium">Category</th>
                    <th className="px-6 py-3 font-medium">Date</th>
                    <th className="px-6 py-3 font-medium">Status</th>
                    <th className="px-6 py-3 text-right font-medium">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {TRANSACTIONS.map((tx) => (
                    <tr
                      key={tx.id}
                      className="border-b border-border last:border-0 transition-colors hover:bg-foreground/[0.02]"
                    >
                      <td className="px-6 py-4 font-medium">{tx.merchant}</td>
                      <td className="px-6 py-4 text-muted">{tx.category}</td>
                      <td className="px-6 py-4 text-muted">{tx.date}</td>
                      <td className="px-6 py-4">
                        <StatusBadge status={tx.status} />
                      </td>
                      <td className="px-6 py-4 text-right font-semibold">
                        ${tx.amount.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Stacked list on mobile */}
            <ul className="divide-y divide-border sm:hidden">
              {TRANSACTIONS.map((tx) => (
                <li
                  key={tx.id}
                  className="flex items-center justify-between gap-3 px-6 py-4"
                >
                  <div>
                    <p className="font-medium">{tx.merchant}</p>
                    <p className="text-xs text-muted">
                      {tx.category} · {tx.date}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="font-semibold">${tx.amount.toFixed(2)}</span>
                    <StatusBadge status={tx.status} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}

function StatusBadge({ status }: { status: Transaction["status"] }) {
  const styles: Record<Transaction["status"], string> = {
    Completed: "bg-emerald-500/10 text-emerald-500",
    Pending: "bg-amber-500/10 text-amber-500",
    Failed: "bg-red-500/10 text-red-500",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        styles[status],
      )}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}
