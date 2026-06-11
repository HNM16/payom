import Link from "next/link";
import { SITE } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${SITE.name} home`}
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative grid size-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-[var(--shadow-glow)] transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 24 24"
          className="size-5 text-white"
          fill="none"
          aria-hidden
        >
          <path
            d="M5 5l5 14 4-9 5 14"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="text-lg font-bold tracking-tight">{SITE.name}</span>
    </Link>
  );
}
