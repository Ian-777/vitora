import { ReactNode } from "react";
import { cn } from "@/shared/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)]",
        "border border-[var(--border)]",
        "bg-[var(--card)]",
        "p-6",
        "transition-all duration-200",
        "hover:-translate-y-1",
        "hover:border-[var(--primary)]",
        className,
      )}
    >
      {children}
    </div>
  );
}