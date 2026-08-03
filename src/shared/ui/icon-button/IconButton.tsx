import { ReactNode } from "react";

import { Button } from "@/shared/ui";
import { cn } from "@/shared/utils";

interface IconButtonProps {
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}

export function IconButton({
  icon,
  children,
  className,
}: IconButtonProps) {
  return (
    <Button
      variant="secondary"
      className={cn("gap-2", className)}
    >
      {icon}
      {children}
    </Button>
  );
}