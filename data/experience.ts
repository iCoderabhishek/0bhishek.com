import { ExperienceItem } from "@/types";

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Software Developer",
    company: "Code Samdevx Pvt. Ltd.",
    location: "Mumbai, India",
    date: "Nov 2025 — July 2026",
    bullets: [
      "Built RESTful APIs using Node.js/Express and FastAPI with JWT, RBAC, validation, and error handling.",
      "Designed PostgreSQL schemas with SQLAlchemy, optimizing queries and database migrations.",
      "Developed responsive React/TypeScript apps with code-splitting and API integrations.",
      "Containerized apps with Docker and automated testing/deployment via GitHub Actions.",
      "Integrated AWS S3, payment gateways, and SMS/email notifications into backend services.",
    ],
    tags: ["React", "TypeScript", "Node.js", "Express", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "AWS S3", "GitHub Actions"],
  },

  {
    role: "Full Stack Mobile Developer",
    company: "DealzUp Technologies",
    location: "Toronto, Canada",
    date: "Apr 2025 — Nov 2026",
    bullets: [
      "Built vendor-side mobile app with OTP 2FA, onboarding flows, and profiles using React Native CLI.",
      "Implemented offline caching with AsyncStorage and automated background data sync.",
      "Developed multi-step forms with Formik/Yup validation and Axios API integrations.",
      "Participated in Agile sprints, PR reviews, and CI/CD deployment pipelines.",
    ],
    tags: ["React Native CLI", "TypeScript", "Axios", "Formik", "REST APIs", "AsyncStorage", "CI/CD"],
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
