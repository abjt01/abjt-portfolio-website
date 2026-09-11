"use client";

import { LinkSimple } from "@phosphor-icons/react";

const socials = [
  {
    href: "https://github.com/abjt01",
    label: "GitHub",
    icon: "devicon-github-original",
    useDevicon: true,
  },
  {
    href: "https://www.linkedin.com/in/abhijeetyadav-/",
    label: "LinkedIn",
    icon: "devicon-linkedin-plain",
    useDevicon: true,
  },
  {
    href: "https://linktr.ee/abjt01",
    label: "Linktree",
    useDevicon: false,
  },
];

export default function SocialLinks() {
  return (
    <section className="flex justify-start gap-6 mb-6">
      {socials.map(({ href, label, icon, useDevicon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className="text-subtle hover:text-accent transition-all duration-300"
        >
          {useDevicon ? (
            <i className={`${icon} text-2xl`} title={label}></i>
          ) : (
            <LinkSimple size={24} weight="bold" />
          )}
        </a>
      ))}
    </section>
  );
}
