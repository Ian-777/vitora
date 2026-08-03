import { cn } from "@/shared/utils";

import type { ButtonProps } from "./Button.types";

const variants = {
  primary:
    "bg-[var(--primary)] text-white shadow-lg shadow-purple-900/20 hover:bg-[var(--primary-hover)] hover:shadow-purple-700/30",

  secondary:
    "border border-[var(--border)] bg-transparent hover:bg-[var(--surface)]",

  ghost:
    "hover:bg-[var(--surface)]",

  danger:
    "bg-[var(--danger)] text-white hover:opacity-90",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-base",
  lg: "h-14 px-6 text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
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
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-[var(--radius-md)] font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        sizes[size],
        variants[variant],
        className,
      )}
      {...props}
    >
      {!loading && leftIcon}

      <>
        {loading && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}

        {children}
      </>

      {!loading && rightIcon}
    </button>
  );
}