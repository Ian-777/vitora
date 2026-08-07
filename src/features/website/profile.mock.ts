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

  experience: [
    {
      position: "Full Stack Developer",

      company: "Freelance",

      location: "Remote",

      startDate: "2025",

      endDate: undefined,

      current: true,

      description:
        "Designing and developing modern web applications with a focus on clean architecture, performance and user experience.",

      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
      ],
    },

    {
      position: "Frontend Developer",

      company: "Personal Projects",

      location: "Bogotá, Colombia",

      startDate: "2024",

      endDate: "2025",

      current: false,

      description:
        "Built responsive user interfaces and reusable component libraries while exploring modern frontend technologies.",

      technologies: [
        "React",
        "Tailwind CSS",
        "Firebase",
      ],
    },
  ],

    education: [
    {
      degree: "Software Engineering",

      institution: "Corporación Unificada Nacional de Educación Superior (CUN)",

      startDate: "2024",

      endDate: undefined,

      current: true,

      description:
        "Currently pursuing a Software Engineering degree while strengthening my knowledge in software architecture, databases and full stack web development.",

      subjects: [
        "Java",
        "SQL",
        "Software Engineering",
      ],
    },

    {
      degree: "Software Analysis and Development",

      institution: "SENA",

      startDate: "2017",

      endDate: "2019",

      current: false,

      description:
        "Completed technical education focused on software development fundamentals, databases and programming logic.",

      subjects: [
        "Java",
        "MySQL",
        "Programming Fundamentals",
      ],
    },
  ],

  projects: [
    {
      title: "Vitora",

      description:
        "Personal website builder with customizable templates, live preview and PDF export.",

      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
      ],

      github: "https://github.com/Ian-777/vitora",

      demo: "",

      image: "",

      featured: true,

      status: "In Progress",

      period: "2026",
    },

    {
      title: "Wetlands App",

      description:
        "Mobile application to explore Colombian wetlands through interactive maps and geolocation.",

      technologies: [
        "React Native",
        "Firebase",
      ],

      github: "",

      demo: "",

      image: "",

      featured: false,

      status: "Completed",

      period: "2026",
    },
  ],
};