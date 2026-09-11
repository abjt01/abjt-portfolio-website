'use client';
import { GithubLogo, LinkedinLogo, Envelope, LinkSimple } from "@phosphor-icons/react";

const socials = [
  {
    href: "https://github.com/abjt01",
    label: "GitHub",
    icon: GithubLogo,
  },
  {
    href: "https://www.linkedin.com/in/abhijeetyadav-/",
    label: "LinkedIn",
    icon: LinkedinLogo,
  },
  {
    href: "https://linktr.ee/abjt01",
    label: "Linktree",
    icon: LinkSimple,
  },
  {
    href: "mailto:abhijeetyadav0851@gmail.com",
    label: "Email",
    icon: Envelope,
  },
];

export default function ReachOut() {
  return (
    <section id="reachout" className="mx-auto mb-16">
      <h2 className="text-2xl font-grotesk font-bold mb-6 tracking-tight flex items-center gap-2">
        <span className="text-accent">&gt;</span> contact
      </h2>
      <p className="text-muted mb-6 text-sm">
        want to connect, collaborate, or just say hi?
        reach out anytime, i&apos;m always open to new ideas and conversations.
      </p>
      <div className="flex flex-row gap-5">
        {socials.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="text-subtle hover:text-accent transition-all duration-300"
          >
            <Icon size={24} weight="regular" />
          </a>
        ))}
      </div>
    </section>
  );
}
