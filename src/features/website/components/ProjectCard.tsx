import { Card, Tag, Typography } from "@/shared/ui";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  url: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <Card>
      <Typography variant="h2">
        {project.title}
      </Typography>

      <Typography
        variant="body"
        className="mt-3"
      >
        {project.description}
      </Typography>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Tag key={tech}>
            {tech}
          </Tag>
        ))}
      </div>
    </Card>
  );
}