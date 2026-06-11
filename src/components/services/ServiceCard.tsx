import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/types";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services#${service.slug}`}
      id={service.slug}
      className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary scroll-mt-24"
    >
      <div
        className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />
      <div className="flex items-center justify-between">
        <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
          <Icon className="size-6" aria-hidden />
        </span>
        <ArrowUpRight className="size-5 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
      </div>
      <div>
        <h3 className="font-semibold">{service.name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">
          {service.description}
        </p>
      </div>
      <span className="mt-auto text-xs font-medium uppercase tracking-wide text-primary/70">
        {service.category}
      </span>
    </Link>
  );
}
