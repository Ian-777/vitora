import { Typography } from "@/shared/ui";

import { UiIcons } from "@/shared/icons";

import type { Project } from "../../types";

interface ProjectImageProps {
  project: Project;

  height?: string;

  iconSize?: number;
}

export function ProjectImage({
  project,
  height = "h-64",
  iconSize = 48,
}: ProjectImageProps) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className={`
          ${height}
          w-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        `}
      />
    );
  }

  return (
    <div
      className={`
        ${height}
        flex
        flex-col
        items-center
        justify-center
        gap-5
        bg-gradient-to-br
        from-[var(--muted)]
        to-[var(--card)]
        text-center
      `}
    >
      <UiIcons.image size={iconSize} />

      <div>
        <Typography variant="h3">
          {project.title}
        </Typography>

        <Typography
          variant="small"
          className="mt-2 text-[var(--muted-foreground)]"
        >
          Project Preview
        </Typography>
      </div>
    </div>
  );
}