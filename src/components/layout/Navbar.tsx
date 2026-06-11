"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useT } from "@/i18n/I18nProvider";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
  const t = useT();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: t.nav.features, href: "/#features" },
    { label: t.nav.how, href: "/#how" },
    { label: t.nav.api, href: "/api" },
    { label: t.nav.pricing, href: "/#pricing" },
    { label: t.nav.contacts, href: "/#contacts" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

            <ul className="hidden items-center gap-1 lg:flex">
              {links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
                <LanguageSwitcher />
              </div>
              <ThemeToggle />
              <div className="hidden items-center gap-2 lg:flex">
                <Button href="/login" variant="ghost" size="sm">
                  {t.nav.login}
                </Button>
                <Button href="/register" size="sm">
                  {t.nav.register}
                </Button>
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen((o) => !o)}
                aria-label={t.nav.menu}
                aria-expanded={menuOpen}
                className="grid size-10 place-items-center rounded-full border border-border bg-surface lg:hidden"
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
            className="glass overflow-hidden border-b border-border lg:hidden"
          >
            <Container className="py-4">
              <ul className="flex flex-col gap-1">
                {links.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-foreground/5"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center justify-between gap-3">
                <LanguageSwitcher />
                <div className="flex flex-1 items-center gap-2">
                  <Button href="/login" variant="outline" size="sm" className="flex-1">
                    {t.nav.login}
                  </Button>
                  <Button href="/register" size="sm" className="flex-1">
                    {t.nav.register}
                  </Button>
                </div>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
