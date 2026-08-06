import { Tag, Typography } from "@/shared/ui";

import type { Experience } from "../../profile/types";

interface ExperienceItemProps {
  experience: Experience;
  isLast: boolean;
}

export function ExperienceItem({
  experience,
  isLast,
}: ExperienceItemProps) {
  return (
    <div className="relative flex gap-6">
      <div className="flex flex-col items-center">
        <div className="h-4 w-4 rounded-full bg-[var(--primary)]" />

        {!isLast && (
          <div className="mt-2 h-full w-px bg-[var(--border)]" />
        )}
      </div>

      <div className="flex-1 pb-8">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Typography variant="h3">
            {experience.position}
          </Typography>

          <Typography variant="small">
            {experience.current
              ? `${experience.startDate} — Present`
              : `${experience.startDate} — ${experience.endDate}`}
          </Typography>
        </div>

        <Typography
          variant="muted"
          className="mt-1"
        >
          {experience.company} • {experience.location}
        </Typography>

        <Typography
          variant="body"
          className="mt-4"
        >
          {experience.description}
        </Typography>

        <div className="mt-5 flex flex-wrap gap-2">
          {experience.technologies.map((technology) => (
            <Tag key={technology}>
              {technology}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
}