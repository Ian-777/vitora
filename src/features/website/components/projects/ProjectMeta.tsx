import { Typography } from "@/shared/ui";

import type { ProjectStatus } from "../../types";

interface ProjectMetaProps {
  period: string;
  status: ProjectStatus;
}

export function ProjectMeta({
  period,
  status,
}: ProjectMetaProps) {
  return (
    <div className="mt-3 flex items-center gap-3">
      <Typography
        variant="small"
        className="text-[var(--muted-foreground)]"
      >
        {period}
      </Typography>

      <span className="h-1 w-1 rounded-full bg-[var(--muted-foreground)]" />

      <span
        className={[
          "rounded-full border px-2.5 py-1 text-xs font-medium",

          status === "Completed"
            ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
            : "border-amber-500/30 bg-amber-500/10 text-amber-400",
        ].join(" ")}
      >
        {status}
      </span>
    </div>
  );
}