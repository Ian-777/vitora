import { ReactNode } from "react";

import { cn } from "@/shared/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({
  children,
  className,
}: SectionProps) {
  return (
    <section
      className={cn("mt-8", className)}
    >
      {children}
    </section>
  );
}