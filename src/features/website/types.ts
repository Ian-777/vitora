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

export interface Profile {
  name: string;
  title: string;

  about: string;

  location: string;

  email: string;

  socials: SocialLink[];

  skills: string[];

  projects: Project[];
}