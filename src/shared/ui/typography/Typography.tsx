import { cn } from "@/shared/utils";
import type { TypographyProps } from "./Typography.types";

const variants = {
  h1: "text-5xl font-bold tracking-tight",
  h2: "text-4xl font-semibold",
  h3: "text-2xl font-semibold",
  body: "text-base text-[var(--text)]",
  muted: "text-base text-[var(--text-secondary)]",
  small: "text-sm text-[var(--text-secondary)]",
};

export function Typography({
  variant = "body",
  className,
  children,
  ...props
}: TypographyProps) {
  const Component =
    variant === "h1"
      ? "h1"
      : variant === "h2"
      ? "h2"
      : variant === "h3"
      ? "h3"
      : "p";

  return (
    <Component
      className={cn(
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}