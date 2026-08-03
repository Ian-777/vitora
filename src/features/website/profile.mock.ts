import type { Profile } from "./types";

export const profile: Profile = {
  name: "Ian Fernando",

  title: "Full Stack Developer",

  about:
    "I build modern web applications focused on performance, user experience and clean architecture.",

  location: "Bogotá, Colombia",

  email: "ian@example.com",

  socials: [
    {
      id: "github",
      label: "GitHub",
      url: "https://github.com/Ian-777",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      url: "https://linkedin.com/in/ian",
    },
    {
      id: "website",
      label: "Website",
      url: "https://vitora.app",
    },
  ],

  skills: [
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Firebase",
    "Tailwind CSS",
  ],

  projects: [
    {
      title: "Vitora",
      description:
        "Personal website builder with CV export and shareable profile.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      url: "https://vitora.app",
    },
    {
      title: "Wetlands App",
      description:
        "Mobile application to explore Colombian wetlands using interactive maps.",
      technologies: ["React Native", "Firebase"],
      url: "",
    },
  ],
};