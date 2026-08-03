import { ReactNode } from "react";

import { Button } from "@/shared/ui";
import { cn } from "@/shared/utils";

interface IconButtonProps {
  icon: ReactNode;
  children: ReactNode;
  href?: string;
  className?: string;
}

export function IconButton({
  icon,
  children,
  href,
  className,
}: IconButtonProps) {
  const content = (
    <Button
      variant="secondary"
      className={cn("gap-2", className)}
    >
      {icon}
      {children}
    </Button>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return content;
}