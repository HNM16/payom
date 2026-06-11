"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { SearchCommand } from "./SearchCommand";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "glass border-b border-border shadow-[var(--shadow-soft)]"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <Container>
          <nav
            className="flex h-16 items-center justify-between gap-4"
            aria-label="Primary"
          >
            <Logo />

            <ul className="hidden items-center gap-1 md:flex">
              {NAV_ITEMS.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                        active
                          ? "text-primary"
                          : "text-foreground/70 hover:text-foreground",
                      )}
                    >
                      {item.label}
                      {active ? (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 -z-10 rounded-full bg-primary/10"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
                <SearchCommand />
              </div>
              <ThemeToggle />
              <div className="hidden md:block">
                <Button href="/dashboard" size="sm">
                  Dashboard
                </Button>
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen((o) => !o)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                className="grid size-10 place-items-center rounded-full border border-border bg-surface md:hidden"
              >
                {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </nav>
        </Container>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="glass overflow-hidden border-b border-border md:hidden"
          >
            <Container className="py-4">
              <div className="mb-4 sm:hidden">
                <SearchCommand />
              </div>
              <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                          active
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-foreground/5",
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-4">
                <Button href="/dashboard" className="w-full">
                  Open Dashboard
                </Button>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
