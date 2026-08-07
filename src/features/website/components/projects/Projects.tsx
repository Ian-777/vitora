import {
  Section,
  SectionTitle,
} from "@/shared/ui";

import { websiteContent } from "../../content/website-content";
import { profile } from "../../profile.mock";

import { FeaturedProjectCard } from "./FeaturedProjectCard";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const featuredProject = profile.projects.find(
    (project) => project.featured
  );

  const regularProjects = profile.projects.filter(
    (project) => !project.featured
  );

  const hasSingleRegularProject =
    regularProjects.length === 1;

  return (
    <Section>
      <SectionTitle
        {...websiteContent.projects}
      />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {featuredProject && (
          <div className="md:col-span-2">
            <FeaturedProjectCard
              project={featuredProject}
            />
          </div>
        )}

        {regularProjects.map((project) => (
          <div
            key={project.title}
            className={
              hasSingleRegularProject
                ? "md:col-span-2 flex justify-center"
                : ""
            }
          >
            <div
              className={
                hasSingleRegularProject
                  ? "w-full max-w-lg"
                  : ""
              }
            >
              <ProjectCard project={project} />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}