import { cn } from "@/shared/utils";
import { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  className?: string;
}

export function Tag({
  children,
  className,
}: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full",
        "border border-[var(--border)]",
        "bg-[var(--surface)]",
        "px-3 py-1",
        "text-sm",
        "transition-colors",
        "hover:border-[var(--primary)]",
        className,
      )}
    >
      {children}
    </span>
  );
}