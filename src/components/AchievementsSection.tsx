type Achievement = {
  title: string;
  subtitle: string;
  date: string;
  prize?: string;
};

const achievements: Achievement[] = [
  {
    title: "Winner, AI/ML Track — NMIT Hacks",
    subtitle: "48 hours, against 7,100+ registrations and 4,400+ submitted ideas",
    date: "2026",
  },
  {
    title: "First Runner-Up — Asymmetric Hackathon",
    subtitle: "48-hour hackathon at CIT Chennai, 300+ teams applied, 20 shortlisted",
    date: "2026",

  },
  {
    title: "2nd Runner-Up — NMIT Hackathon",
    subtitle: "built a multi-agent llm hallucination solver with sympy-backed triple validation",
    date: "2025",
  },
  {
    title: "3rd Place — HackaPhasia 2025",
    subtitle: "ai-enabled virtual health assistant for refugees, organized by BMSCE",
    date: "2025",
  },
  {
    title: "DevOps & SRE Certification — Linux Foundation",
    subtitle: "introduction to devops and site reliability engineering (LFS162)",
    date: "2026",
  },
  {
    title: "MongoDB Node.js Developer Path",
    subtitle: "mongodb certified node.js developer path completion",
    date: "2025",
  },
];

export default function AchievementsSection() {
  return (
    <section className="w-full max-w-3xl mb-16">
      <h2 className="text-2xl font-grotesk font-bold mb-6 tracking-tight flex items-center gap-2">
        <span className="text-accent">&gt;</span> achievements
      </h2>
      <div className="flex flex-col gap-6">
        {achievements.map(({ title, subtitle, date, prize }) => (
          <div
            key={title}
            className="group border-l-2 border-edge pl-6 hover:border-accent transition-all duration-300"
          >
            <div className="flex items-baseline gap-3 mb-1">
              <h3 className="text-base font-grotesk font-bold text-fg group-hover:text-accent transition-colors duration-300">
                {title}
              </h3>
              {prize && (
                <span className="text-sm font-mono text-accent">· {prize}</span>
              )}
              <span className="text-xs text-subtle font-mono">{date}</span>
            </div>
            <p className="text-sm text-muted font-mono">{subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
