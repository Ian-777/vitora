import {
  Section,
  SectionTitle,
} from "@/shared/ui";

import { profile } from "../../profile.mock";
import { sectionContent } from "../../section-content";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <Section>
      <SectionTitle
        {...sectionContent.projects}
      />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {profile.projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </Section>
  );
}