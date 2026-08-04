import { Typography } from "@/shared/ui";
import { cn } from "@/shared/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn("mb-8", className)}>
      <Typography
        variant="h3"
        className="font-bold uppercase tracking-[0.12em] text-[var(--foreground)]"
      >
        {title}
      </Typography>

      {subtitle && (
        <Typography
          variant="muted"
          className="mt-3 max-w-2xl leading-relaxed"
        >
          {subtitle}
        </Typography>
      )}

      <div className="mt-5 flex items-center">
        <div className="h-1 w-20 rounded-l-full bg-[var(--primary)]" />
        <div className="h-px flex-1 bg-[var(--border)]" />
      </div>
    </div>
  );
}