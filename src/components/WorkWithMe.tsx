export default function WorkWithMe() {
  return (
    <section className="mx-auto mb-16">
      <h2 className="text-2xl font-grotesk font-bold mb-6 tracking-tight flex items-center gap-2">
        <span className="text-accent">&gt;</span> work
      </h2>
      <p className="text-body mb-3 text-sm">
        open to:
      </p>
      <ul className="mb-4 space-y-1 text-muted text-sm">
        <li className="flex items-start gap-2">
          <span className="text-accent">★</span>
          <span>backend engineering, systems design &amp; devops roles</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-accent">★</span>
          <span>open source contributions &amp; collaborative builds</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-accent">★</span>
          <span>hackathons, collaborative builds &amp; ambitious side projects</span>
        </li>
      </ul>
      <p className="text-muted text-sm">
        if you have an opportunity you think i&apos;d be interested in or want to build something ambitious,{" "}
        <a
          href="#reachout"
          className="text-accent hover:underline transition-colors duration-300"
        >
          reach out
        </a>
        .
      </p>
    </section>
  );
}