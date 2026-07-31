import { cn } from "@/shared/utils";

import type { ButtonProps } from "./Button.types";

const variants = {
  primary:
    "bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)]",

  secondary:
    "border border-[var(--border)] bg-transparent hover:bg-[var(--surface)]",

  ghost:
    "hover:bg-[var(--surface)]",

  danger:
    "bg-[var(--danger)] text-white hover:opacity-90",
};

export function Button({
  children,
  variant = "primary",
  loading = false,
  leftIcon,
  rightIcon,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-[var(--radius-md)] px-5 font-medium transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    >
      {!loading && leftIcon}

      {loading ? "Loading..." : children}

      {!loading && rightIcon}
    </button>
  );
}