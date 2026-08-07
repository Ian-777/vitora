import {
  Tag,
  Typography,
} from "@/shared/ui";

import { UiIcons } from "@/shared/icons";

import type { Education } from "../../types";

interface EducationItemProps {
  education: Education;
  isLast: boolean;
}

export function EducationItem({
  education,
  isLast,
}: EducationItemProps) {
  return (
    <div className="group relative flex gap-6">
      <div className="flex flex-col items-center">
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-[var(--primary)]/30
            bg-[var(--primary)]/10
            text-[var(--primary)]
            transition-all
            duration-300
            group-hover:scale-110
          "
        >
          <UiIcons.graduationCap size={18} />
        </div>

        {!isLast && (
          <div className="mt-3 h-full w-px bg-[var(--border)]" />
        )}
      </div>

      <div className="flex-1 pb-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <Typography variant="h3">
              {education.degree}
            </Typography>

            <Typography
              variant="muted"
              className="mt-1 font-medium"
            >
              {education.institution}
            </Typography>
          </div>

          <span
            className="
              rounded-full
              border
              border-[var(--border)]
              bg-[var(--muted)]
              px-3
              py-1
              text-sm
              text-[var(--text-secondary)]
            "
          >
            {education.startDate} —{" "}
            {education.current
              ? "Present"
              : education.endDate}
          </span>
        </div>

        <Typography
          variant="body"
          className="mt-5"
        >
          {education.description}
        </Typography>

        {education.subjects.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {education.subjects.map((subject) => (
              <Tag key={subject}>
                {subject}
              </Tag>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}