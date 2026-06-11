import { Container } from "./Container";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-2xl text-center items-center" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-pretty text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
