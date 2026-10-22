import { ExperienceItem } from "@/types";

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "Code Samdevx Pvt. Ltd.",
    location: "Mumbai, India",
    date: "Nov 2025 — July 2026",
    summary: "Shipped whole features on a product team, from the database to the screen, every sprint.",
    highlights: ["Features end to end", "Faster slow pages", "Tested what I built"],
    bullets: [
      "Took features from database schema to API to UI to deploy, shipping in sprints through the team's CI/CD pipeline.",
      "Wrote Node.js/Express APIs on PostgreSQL, with request validation, a shared error-handling middleware, and structured logs so production issues could be traced.",
      "Fixed slow pages by rewriting the heavy queries, caching repeat reads, and lazy-loading the parts of the UI that didn't need to load first.",
      "Wrote Jest unit and integration tests for the APIs I owned, reviewed teammates' PRs, and kept the API docs current.",
    ],
    tags: ["Node.js", "Express", "PostgreSQL", "REST APIs", "CI/CD", "Jest"],
  },
  {
    role: "Full Stack Mobile Developer",
    company: "DealzUp Technologies",
    location: "Toronto, Canada",
    date: "Apr 2025 — Nov 2025",
    summary: "Built the vendor side of the mobile app, from sign-up to the screens vendors use every day.",
    highlights: ["Vendor onboarding", "Two-factor login", "Smoother screens"],
    bullets: [
      "Built the vendor side of the app: onboarding, two-factor auth, and the login flow wired to the backend.",
      "Connected screens to REST APIs with Axios and Formik, with local caching and data sync so screens didn't refetch everything on every visit.",
      "Profiled the slow screens, then cut unnecessary re-renders by restructuring state and lazy-rendering what wasn't on screen yet.",
    ],
    tags: ["React Native CLI", "REST APIs", "Axios", "Formik", "Performance"],
  },
];
