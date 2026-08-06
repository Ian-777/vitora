import {
  Card,
  Tag,
  Typography,
} from "@/shared/ui";

import type { Project } from "../../profile/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <Card
      className="
        flex
        h-full
        flex-col
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[var(--primary)]
        hover:shadow-xl
      "
    >
      <Typography variant="h3">
        {project.title}
      </Typography>

      <Typography
        variant="body"
        className="mt-3 flex-1"
      >
        {project.description}
      </Typography>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <Tag key={technology}>
            {technology}
          </Tag>
        ))}
      </div>
    </Card>
  );
}