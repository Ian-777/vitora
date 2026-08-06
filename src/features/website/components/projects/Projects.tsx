import {
  Section,
  SectionTitle,
} from "@/shared/ui";

import { websiteContent } from "../../content/website-content";
import { profile } from "../../profile.mock";

import { FeaturedProjectCard } from "./FeaturedProjectCard";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <Section>
      <SectionTitle
        {...websiteContent.projects}
      />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {profile.projects.map((project) =>
          project.featured ? (
            <div
              key={project.title}
              className="md:col-span-2"
            >
              <FeaturedProjectCard
                project={project}
              />
            </div>
          ) : (
            <ProjectCard
              key={project.title}
              project={project}
            />
          )
        )}
      </div>
    </Section>
  );
}