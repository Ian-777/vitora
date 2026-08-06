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

import { websiteContent } from "../../content/website-content";
import type { Project } from "../../profile/types";

interface FeaturedProjectCardProps {
  project: Project;
}

export function FeaturedProjectCard({
  project,
}: FeaturedProjectCardProps) {
  return (
    <Card
      className="
        group
        overflow-hidden
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-amber-400
        hover:shadow-[0_0_40px_rgba(251,191,36,0.18)]
      "
    >
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <div className="aspect-video overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--muted)]">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-[var(--muted-foreground)]">
              <UiIcons.image size={56} />

              <Typography variant="small">
                Project Preview
              </Typography>
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <div className="mb-5 inline-flex w-fit items-center rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1">
            <Typography
              variant="small"
              className="font-semibold text-amber-400"
            >
              ★ {websiteContent.projects.featuredBadge}
            </Typography>
          </div>

          <Typography variant="h2">
            {project.title}
          </Typography>

          <Typography
            variant="body"
            className="mt-4 flex-1"
          >
            {project.description}
          </Typography>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <Tag key={technology}>
                {technology}
              </Tag>
            ))}
          </div>

          {(project.github || project.demo) && (
            <div className="mt-8 flex flex-wrap gap-3">
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
        </div>
      </div>
    </Card>
  );
}