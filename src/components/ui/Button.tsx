import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-[var(--shadow-glow)] hover:bg-primary/90 hover:-translate-y-0.5",
  secondary:
    "bg-secondary text-white hover:bg-secondary/90 hover:-translate-y-0.5 dark:bg-white dark:text-secondary",
  outline:
    "border border-border bg-surface text-foreground hover:border-primary/60 hover:text-primary hover:-translate-y-0.5",
  ghost: "text-foreground hover:bg-foreground/5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:translate-y-0 active:scale-[0.98] cursor-pointer";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

type ButtonProps = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

type LinkProps = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

export function Button(props: ButtonProps | LinkProps) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (typeof rest.href === "string") {
    const { href, ...anchorProps } = rest as Omit<LinkProps, keyof BaseProps>;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as Omit<ButtonProps, keyof BaseProps>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
