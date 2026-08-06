import {
  Card,
  IconButton,
  Tag,
  Typography,
} from "@/shared/ui";

import {
  BrandIcons,
  UiIcons,
} from "@/shared/icons";

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
      <div className="mb-6 aspect-video overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--muted)]">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-[var(--muted-foreground)]">
            <UiIcons.image size={36} />

            <Typography variant="small">
              Project Preview
            </Typography>
          </div>
        )}
      </div>

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

      {(project.github || project.demo) && (
        <div className="mt-6 flex gap-3 border-t border-[var(--border)] pt-5">
          {project.github && (
            <IconButton
              href={project.github}
              icon={<BrandIcons.github size={18} />}
            >
              GitHub
            </IconButton>
          )}

          {project.demo && (
            <IconButton
              href={project.demo}
              icon={<UiIcons.externalLink size={18} />}
            >
              Live Demo
            </IconButton>
          )}
        </div>
      )}
    </Card>
  );
}