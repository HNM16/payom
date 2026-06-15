import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Payom.tj home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative grid size-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-[var(--shadow-glow)] transition-transform duration-300 group-hover:scale-105">
        <svg viewBox="0 0 24 24" className="size-5 text-white" fill="none" aria-hidden>
          <path
            d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9A1.5 1.5 0 0 1 18.5 16H9l-4 4v-4H5.5A1.5 1.5 0 0 1 4 14.5v-9Z"
            fill="currentColor"
            opacity="0.25"
          />
          <path
            d="M8 9.5h8M8 12.5h5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="text-lg font-bold tracking-tight">
        Payom<span className="text-primary">.tj</span>
      </span>
    </Link>
  );
}
