export interface SocialLink {
  id: string;
  label: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
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