import { ExperienceItem } from "@/types";

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "Code Samdevx Pvt. Ltd.",
    location: "Mumbai, India",
    date: "Nov 2025 — July 2026",
    bullets: [
      "Owned end-to-end delivery of full-stack features — from database schema design and REST API development to frontend and deployment.",
      "Built Node.js/Express APIs with PostgreSQL, implementing validation, error handling middleware, and structured logging.",
      "Reduced page load times by 35% via query optimization, lazy loading, and caching; shipped in agile sprints with CI/CD.",
      "Wrote unit and integration tests with Jest, conducted code reviews, and maintained technical documentation.",
    ],
    tags: ["Node.js", "Express", "PostgreSQL", "REST APIs", "CI/CD", "Jest"],
  },

  {
    role: "Full Stack Mobile Developer",
    company: "DealzUp Technologies",
    location: "Toronto, Canada",
    date: "Apr 2025 — Nov 2025",
    bullets: [
      "Built vendor-side features including two-factor auth, onboarding flows, and backend-connected authentication.",
      "Integrated REST APIs with local caching and data sync using React Native CLI, Axios, and Formik.",
      "Improved app responsiveness by 25% through performance profiling, lazy rendering, and optimized state management.",
    ],
    tags: ["React Native CLI", "REST APIs", "Axios", "Formik", "Performance Profiling"],
  },
  {
    role: "Freelance React Native Engineer",
    company: "GARS Technology",
    location: "Remote",
    date: "Mar 2026 — Apr 2026",
    bullets: [
      "Shipped cross-platform mobile features for consumer and provider apps using React Native, serving active users.",
      "Built reusable custom hooks for API fetching, caching, and error handling, reducing boilerplate across 8+ screens.",
      "Resolved critical UI rendering bugs and memory leaks, improving crash-free rate by ~15%.",
      "Contributed to sprint planning, PR reviews, and daily stand-ups in a distributed Agile team.",
    ],
    tags: [
      "React Native",
      "TypeScript",
      "REST APIs",
      "Axios",
      "Custom Hooks",
      "Agile",
      "Git",
      "Cross-platform",
    ],
  },
];
