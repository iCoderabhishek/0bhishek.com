import { PROJECTS_DATA } from "@/data/projects";
import { EXPERIENCE_DATA } from "@/data/experience";
import { BLOG_DATA } from "@/data/blogs";
import { LEARNING_DATA } from "@/data/learn";
import { STACK } from "@/data/site";

export const dynamic = "force-static";

const BASE_URL = "https://0bhishek.com";

export function GET() {
  const lines: string[] = [
    "# Abhishek Jha",
    "",
    "> Full stack engineer in Kolkata, India. Builds backends, web apps, mobile apps and AI agents, and ships them end to end. Built Lonch, a deploy platform on AWS, and Sutra AI, scheduled AI agents. Open to full-time and contract full stack roles, remote or relocating.",
    "",
    "- Email: connect@0bhishek.com",
    "- GitHub: https://github.com/iCoderabhishek",
    "- LinkedIn: https://www.linkedin.com/in/0bhishek",
    "- X: https://x.com/0bhishek",
    "- Writing: https://dev.to/mrcssdev",
    "",
    "## Pages",
    "",
    `- [Home](${BASE_URL}/): summary, stack, experience, selected work`,
    `- [Projects](${BASE_URL}/projects): all ${PROJECTS_DATA.length} projects with demos`,
    `- [Writing](${BASE_URL}/blogs): articles and engineering notes`,
    "",
    "## Experience",
    "",
    ...EXPERIENCE_DATA.flatMap((job) => [
      `### ${job.role}, ${job.company} (${job.date}, ${job.location})`,
      "",
      job.summary,
      "",
      ...job.bullets.map((b) => `- ${b}`),
      "",
    ]),
    "## Projects",
    "",
    ...PROJECTS_DATA.map((p) => {
      const links = [p.liveUrl && `live: ${p.liveUrl}`, p.githubUrl && `code: ${p.githubUrl}`]
        .filter(Boolean)
        .join(", ");
      return `- **${p.title}** (${p.date}): ${p.description} Built with ${p.tags.join(", ")}.${links ? ` (${links})` : ""}`;
    }),
    "",
    "## Skills",
    "",
    ...STACK.map((g) => `- **${g.title}**: ${g.tools.join(", ")}. ${g.note}`),
    "",
    "## Articles",
    "",
    ...BLOG_DATA.map((b) => `- [${b.title}](${b.url}) (${b.date}): ${b.description.trim()}`),
    "",
    "## Engineering notes",
    "",
    ...LEARNING_DATA.map((n) => `- **${n.title}** (${n.date}): ${n.note}`),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
