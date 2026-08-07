import { IconButton } from "@/shared/ui";

import {
  BrandIcons,
  UiIcons,
} from "@/shared/icons";

interface ProjectActionsProps {
  github?: string;
  demo?: string;
}

export function ProjectActions({
  github,
  demo,
}: ProjectActionsProps) {
  if (!github && !demo) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-3">
      {github && (
        <IconButton
          href={github}
          icon={<BrandIcons.github size={18} />}
        >
          GitHub
        </IconButton>
      )}

      {demo && (
        <IconButton
          href={demo}
          icon={<UiIcons.externalLink size={18} />}
        >
          Live Demo
        </IconButton>
      )}
    </div>
  );
}