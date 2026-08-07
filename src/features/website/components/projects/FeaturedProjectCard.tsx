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
        relative
        overflow-hidden
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-amber-400
        hover:shadow-[0_0_45px_rgba(251,191,36,0.18)]
      "
    >
      <div className="absolute right-6 top-6 z-10 rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 backdrop-blur-sm">
        <Typography
          variant="small"
          className="font-semibold text-amber-400"
        >
          ★ {websiteContent.projects.featuredBadge}
        </Typography>
      </div>

      <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--muted)]">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="
                h-[420px]
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />
          ) : (
            <div className="flex h-[420px] flex-col items-center justify-center gap-4 text-[var(--muted-foreground)]">
              <UiIcons.image size={72} />

              <Typography variant="body">
                Project Preview
              </Typography>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center">
          <Typography
            variant="h1"
            className="leading-tight"
          >
            {project.title}
          </Typography>

          <Typography
            variant="body"
            className="mt-6 max-w-prose text-[var(--muted-foreground)]"
          >
            {project.description}
          </Typography>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <Tag key={technology}>
                {technology}
              </Tag>
            ))}
          </div>

          {(project.github || project.demo) && (
            <div className="mt-10 flex flex-wrap gap-3">
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