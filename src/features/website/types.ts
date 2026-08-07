export type ProjectStatus =
  | "Completed"
  | "In Progress";

export interface SocialLink {
  id: string;
  label: string;
  url: string;
}

export interface Experience {
  position: string;
  company: string;
  location: string;

  startDate: string;
  endDate?: string;

  current: boolean;

  description: string;

  technologies: string[];
}

export interface Project {
  title: string;

  description: string;

  technologies: string[];

  image?: string;

  github?: string;

  demo?: string;

  featured?: boolean;

  status: ProjectStatus;

  period: string;
}

export interface Profile {
  name: string;

  title: string;

  about: string;

  location: string;

  email: string;

  socials: SocialLink[];

  skills: string[];

  experience: Experience[];

  projects: Project[];
}