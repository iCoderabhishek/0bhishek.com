export const NAV_ITEMS = [
  { id: "stack", label: "Stack" },
  { id: "numbers", label: "Before·After" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "process", label: "Process" },
  { id: "writing", label: "Writing" },
] as const;

export const MARQUEE_ITEMS = [
  "AI agents",
  "Node.js",
  "PostgreSQL",
  "React",
  "React Native",
  "TypeScript",
  "Docker",
  "AWS",
  "Redis",
  "Schema to deploy",
];

export const RESUME_URL = process.env.NEXT_PUBLIC_RESUME_URL || null;

export const CONTACT_MAILTO =
  "mailto:connect@0bhishek.com?subject=" +
  encodeURIComponent("Role for Abhishek: full-time / contract");

export interface StackGroup {
  title: string;
  note: string;
  tools: string[];
}

export const STACK: StackGroup[] = [
  {
    title: "AI agents",
    note: "Agents that run on a schedule and stream every step live. My own ReAct loop with no framework, plus hard caps on steps and spend so a run can't loop forever or overspend.",
    tools: ["ReAct loop", "Tool use", "LLM APIs", "BullMQ cron", "Redis Streams", "Go", "Python"],
  },
  {
    title: "Backend",
    note: "APIs, queues and databases. Validated requests, one shared error shape and structured logs, so a production issue traces back to a request.",
    tools: ["Node.js", "Express", "Go", "Python", "PostgreSQL", "Redis", "BullMQ", "Prisma"],
  },
  {
    title: "Frontend",
    note: "Interfaces wired to real data. Heavy queries rewritten, repeat reads cached, and anything that doesn't need to load first is lazy-loaded.",
    tools: ["TypeScript", "React", "Next.js", "Tailwind", "Zustand"],
  },
  {
    title: "Mobile",
    note: "Onboarding, two-factor auth and screens that don't refetch everything on every visit. Profiled the slow ones and cut the re-renders.",
    tools: ["React Native", "React Native CLI", "Expo", "Formik", "Axios"],
  },
  {
    title: "Infra & tests",
    note: "Isolated Docker builds, rolling deploys on ECS Fargate, static sites on S3 + CloudFront. Jest unit and integration tests on the APIs I own.",
    tools: ["Docker", "AWS ECS", "S3 + CloudFront", "GitHub Actions", "Jest"],
  },
];

export interface Metric {
  label: string;
  source: string;
  before: string;
  after: string;
  unit?: string;
}

export const METRICS: Metric[] = [
  {
    label: "Upload traffic my server pays for",
    source: "Dropdesk · files go straight to S3",
    before: "100%",
    after: "0",
    unit: "%",
  },
  {
    label: "Most an AI run can cost",
    source: "Sutra AI · budget checked every step",
    before: "∞",
    after: "$0.25",
    unit: "cap",
  },
  {
    label: "Most steps an AI run can take",
    source: "Sutra AI · no runaway loops",
    before: "∞",
    after: "10",
    unit: "max",
  },
  {
    label: "Live progress kept if you reconnect",
    source: "Sutra AI · Redis Streams replay",
    before: "0%",
    after: "100",
    unit: "%",
  },
];

export const PROCESS = [
  { title: "Scope", note: "Agree on what we're building and what done looks like." },
  { title: "Core", note: "Data and backend first, so everything rests on something solid." },
  { title: "Screens", note: "Web or mobile, working with real data from day one." },
  { title: "Ship", note: "Tested, deployed, and watched after launch." },
];
