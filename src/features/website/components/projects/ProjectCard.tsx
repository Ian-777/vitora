import {
  Card,
  Tag,
  Typography,
} from "@/shared/ui";

import { cn } from "@/shared/utils";

import { websiteContent } from "../../content/website-content";
import type { Project } from "../../types";

import { ProjectActions } from "./ProjectActions";
import { ProjectImage } from "./ProjectImage";
import { ProjectMeta } from "./ProjectMeta";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <Card
      className={cn(
        `
          relative
          flex
          h-full
          flex-col
          transition-all
          duration-500
          hover:-translate-y-1
        `,
        project.featured
          ? `
              hover:border-amber-400
              hover:shadow-[0_0_40px_rgba(251,191,36,0.18)]
            `
          : `
              hover:border-[var(--primary)]
              hover:shadow-xl
            `
      )}
    >
      {project.featured && (
        <div className="absolute right-5 top-5 rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 backdrop-blur-sm">
          <Typography
            variant="small"
            className="font-semibold text-amber-400"
          >
            ★ {websiteContent.projects.featuredBadge}
          </Typography>
        </div>
      )}

      <div className="mb-6 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--muted)]">
        <ProjectImage
          project={project}
          height="aspect-video"
          iconSize={36}
        />
      </div>

      <Typography variant="h3">
        {project.title}
      </Typography>

      <ProjectMeta
        period={project.period}
        status={project.status}
      />

      <Typography
        variant="body"
        className="mt-4 flex-1"
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

      <div className="mt-6 border-t border-[var(--border)] pt-5">
        <ProjectActions
          github={project.github}
          demo={project.demo}
        />
      </div>
    </Card>
  );
}