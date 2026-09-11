'use client';
import { GithubLogo, LinkSimple } from "@phosphor-icons/react";

type Project = {
  title: string;
  desc: string;
  href?: string;
  hrefLabel?: string;
  date?: string;
  github?: string;
  stack?: string[];
};

const projects: Project[] = [
  {
    title: "go backend services",
    desc: "an http load balancer over a pool of reverse proxies — round-robin through an atomic counter, backend state behind an rwmutex, and a 10s health-check goroutine that drops and restores backends without a restart. plus a rest api on httprouter and the mongodb driver, a bulk mx/spf/dmarc checker, and an aes-256-gcm encryption cli.",
    github: "https://github.com/abjt01/golang-projs.",
    href: "https://github.com/abjt01/crypt-tool",
    stack: ["Go", "net/http", "httprouter", "MongoDB", "goquery", "Docker"],
    date: "2026",
  },
  {
    title: "wayfinder",
    desc: "turns a goal written in plain language into a sequenced learning path. runs end to end with no api key on a deterministic local engine, and round-robins a pool of provider keys when one gets rate limited — a 429 puts that key on its retry-after cooldown and the request reissues on the next.",
    github: "https://github.com/abjt01/wayfinder",
    stack: ["Next.js", "React", "TypeScript", "Docker", "GitHub Actions"],
    date: "2026",
  },
  {
    title: "mirage",
    desc: "a state-aware security layer for ml apis. scores every caller on a weighted mix of rolling request rate and cosine similarity between consecutive query embeddings, then escalates through three response tiers instead of a flat allow-or-block. six-page operator console for sessions, logs and audit.",
    github: "https://github.com/abjt01/mirage",
    stack: ["React", "Recharts", "FastAPI", "Python", "SQLite"],
    date: "2026",
  },
  {
    title: "asyncMCP",
    desc: "an mcp server in node.js speaking json-rpc 2.0 over stdio — initialize, tools/list, tools/call — so llm clients discover and invoke local tools with no python in the stack. dispatcher, protocol, validator and sandbox are separate layers, with rate-limiting middleware and a redactor over tool output.",
    github: "https://github.com/abjt01/asyncMCP",
    stack: ["Node.js", "Express.js", "JSON-RPC 2.0", "MCP", "JavaScript"],
    date: "2025",
  },
  {
    title: "limitra",
    desc: "a dependency-free python rate-limiting library published on pypi. five algorithms — token bucket, leaky bucket, fixed window, sliding window, sliding log — behind one interface, with concurrency and benchmark tests.",
    github: "https://github.com/abjt01/Limitra",
    href: "https://pypi.org/project/abjt-limitter/",
    stack: ["Python", "PyPI", "pytest"],
    date: "2026",
  },
  {
    title: "ayuniq",
    desc: "platform mapping ayurvedic (namaste) and who icd-11 terminologies into fhir r4 bundles for healthcare interoperability and insurance workflows. multi-service architecture combining a node.js backend with fastapi claim-processing microservices, containerized via docker compose.",
    github: "https://github.com/abjt01/Ayuniq",
    stack: ["Node.js", "Express.js", "React", "FastAPI", "MongoDB", "Docker"],
    date: "2025",
  },
  {
    title: "credpulse",
    desc: "an agentic ai credit risk solution for msmes. built a full risk-graph engine and autonomous financing agents in under 24 hours at mumbai hacks, aimed at fragmented financial data and slow underwriting.",
    href: "https://drive.google.com/file/d/157sSCk-lppX_HBSP79HsUjZzjbAx7w9g/view",
    stack: ["Python", "Agentic AI", "FastAPI", "React", "Next.js"],
    date: "2025",
  },
];

export default function ProjectsSection() {
  return (
    <section className="w-full max-w-3xl mb-16">
      <h2 className="text-2xl font-grotesk font-bold mb-6 tracking-tight flex items-center gap-2">
        <span className="text-accent">&gt;</span> projects
      </h2>
      <div className="flex flex-col gap-8">
        {projects.map(({ title, desc, href, date, github, stack }) => (
          <div
            key={title}
            className="group border-l-2 border-edge pl-6 hover:border-accent transition-all duration-300"
          >
            <div className="flex flex-row items-start justify-between gap-4 mb-2">
              <div className="flex items-baseline gap-3">
                <h3 className="text-xl font-grotesk font-bold text-fg group-hover:text-accent transition-colors duration-300">
                  {title}
                </h3>
                {date && (
                  <span className="text-xs text-subtle font-mono">{date}</span>
                )}
              </div>
              <span className="flex items-center gap-3 shrink-0">
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} on GitHub`}
                    className="text-subtle hover:text-accent focus-visible:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 transition-colors duration-300"
                  >
                    <GithubLogo size={20} weight="regular" />
                  </a>
                )}
                {href && (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} — related link`}
                    className="text-subtle hover:text-accent focus-visible:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 transition-colors duration-300"
                  >
                    <LinkSimple size={20} weight="bold" />
                  </a>
                )}
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed">{desc}</p>
            {stack && stack.length > 0 && (
              <p className="mt-3 font-mono text-[0.7rem] text-subtle tracking-wide">
                {stack.join("  ·  ")}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
