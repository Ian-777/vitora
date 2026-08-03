import { Typography } from "@/shared/ui";

import { profile } from "../profile.mock";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section className="mt-8">
      <Typography variant="h2">
        Projects
      </Typography>

      <div className="mt-6 space-y-4">
        {profile.projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}