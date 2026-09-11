type Skill = { label: string; icon: string };
type Group = { label: string; skills: Skill[] };

const groups: Group[] = [
  {
    label: "languages",
    skills: [
      { label: "go", icon: "devicon-go-plain" },
      { label: "python", icon: "devicon-python-plain" },
      { label: "javascript", icon: "devicon-javascript-plain" },
      { label: "typescript", icon: "devicon-typescript-plain" },
      { label: "c", icon: "devicon-c-plain" },
      { label: "c++", icon: "devicon-cplusplus-plain" },
      { label: "bash", icon: "devicon-bash-plain" },
      { label: "solidity", icon: "devicon-solidity-plain" },
    ],
  },
  {
    label: "backend",
    skills: [
      { label: "node.js", icon: "devicon-nodejs-plain" },
      { label: "express", icon: "devicon-express-original" },
      { label: "fastapi", icon: "devicon-fastapi-plain" },
      { label: "nginx", icon: "devicon-nginx-original" },
    ],
  },
  {
    label: "frontend",
    skills: [
      { label: "react", icon: "devicon-react-original" },
      { label: "next.js", icon: "devicon-nextjs-original" },
      { label: "tailwind", icon: "devicon-tailwindcss-plain" },
      { label: "vite", icon: "devicon-vitejs-plain" },
      { label: "html5", icon: "devicon-html5-plain" },
      { label: "css3", icon: "devicon-css3-plain" },
    ],
  },
  {
    label: "data",
    skills: [
      { label: "postgresql", icon: "devicon-postgresql-plain" },
      { label: "mysql", icon: "devicon-mysql-plain" },
      { label: "mongodb", icon: "devicon-mongodb-plain" },
      { label: "redis", icon: "devicon-redis-plain" },
    ],
  },
  {
    label: "infra",
    skills: [
      { label: "docker", icon: "devicon-docker-plain" },
      { label: "kubernetes", icon: "devicon-kubernetes-plain" },
      { label: "linux", icon: "devicon-linux-plain" },
      { label: "aws", icon: "devicon-amazonwebservices-plain-wordmark" },
      { label: "gcp", icon: "devicon-googlecloud-plain" },
      { label: "git", icon: "devicon-git-plain" },
      { label: "github", icon: "devicon-github-original" },
    ],
  },
  {
    label: "tools",
    skills: [
      { label: "postman", icon: "devicon-postman-plain" },
      { label: "npm", icon: "devicon-npm-original-wordmark" },
      { label: "yaml", icon: "devicon-yaml-plain" },
    ],
  },
];

export default function SkillsGrid() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-grotesk font-bold mb-6 tracking-tight flex items-center gap-2">
        <span className="text-accent">&gt;</span> skills
      </h2>
      <div className="flex flex-col gap-5">
        {groups.map(({ label, skills }) => (
          <div key={label} className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4">
            <span className="w-20 shrink-0 pt-1.5 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-subtle">
              {label}
            </span>
            <div className="flex flex-wrap gap-2">
              {skills.map(({ label: name, icon }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 border border-edge px-3 py-1.5 text-sm text-muted transition-all duration-300 hover:border-accent hover:text-accent"
                >
                  <i className={`${icon} text-base`} title={name} />
                  <span className="font-mono">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
