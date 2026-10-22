import { LearningItem } from "@/types";

export const LEARNING_DATA: LearningItem[] = [
  {
    title: "My agent saw the price change and still didn't tell anyone",
    date: "Oct 2026",
    note: "In Sutra's real-model eval, a small free model correctly spotted a price change on a page, then skipped the alert and never saved it to memory. The code was fine; the model just dropped steps. That's why the evals now separate code bugs from model mistakes, and why the important rules (allowed tools, fixed recipients, step and cost caps) live in code instead of the prompt.",
    tags: ["AI Agents", "Evals", "Guardrails"],
    link: "https://github.com/iCoderabhishek/Sutra-AI",
  },
  {
    title: "Pub/Sub forgets, Streams don't",
    date: "Oct 2026",
    note: "Sutra streams every agent step to the terminal. With Redis Pub/Sub, anything published before the client subscribes is just gone, and a run can start before the terminal connects. Redis Streams replay from the start, so nothing is lost. The cost is memory, so every stream gets a TTL.",
    tags: ["Redis Streams", "SSE", "Trade-offs"],
    link: "https://github.com/iCoderabhishek/Sutra-AI",
  },
  {
    title: "Files shouldn't go through your server",
    date: "June 2026",
    note: "Routing uploads through a Node API means the server pays for every byte and large files tie it up. In Dropdesk the server only signs a presigned S3 URL and records the metadata; the browser uploads straight to S3. The trade-off is that an upload can now fail somewhere the server never sees, so the database has to cope with files that were promised but never arrived.",
    tags: ["AWS S3", "Presigned URLs", "Node.js"],
    link: "https://github.com/iCoderabhishek/Dropdesk",
  },
  {
    title: "Redis is fast, not loyal",
    date: "June 2026",
    note: "Dropdesk caches reads in Redis, which makes it tempting to start treating Redis as a database. But Redis is memory first; depending on how persistence is set up, a restart can lose recent writes. So Postgres stays the source of truth and Redis only holds things I can rebuild. I wrote up the longer version.",
    tags: ["Redis", "PostgreSQL", "Caching"],
    link: "https://dev.to/mrcssdev/redis-is-fast-not-loyal-why-it-should-never-be-your-main-db-2o46",
  },
];
