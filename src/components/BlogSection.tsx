"use client";



type BlogItem = {
  slug: string;
  title: string;
  subtitle?: string;
};

const BLOGS: BlogItem[] = [
  {
    slug: "coming-soon",
    title: "blog posts coming soon",
    subtitle: "stay tuned for writeups on systems, hackathons & more."
  }
];

export default function Blogs() {
  return (
    <section className="mx-auto mb-16 max-w-3xl">
      <h2 className="text-2xl font-grotesk font-bold mb-6 tracking-tight flex items-center gap-2">
        <span className="text-accent">&gt;</span> writing
      </h2>

      <div className="space-y-0">
        {BLOGS.map((post) => (
          <div
            key={post.slug}
            className="
                flex items-center justify-between
                py-4 border-b border-edge
                cursor-default
                transition-all duration-300
              "
          >
            <div className="flex-1">
              <p className="text-base font-medium text-subtle transition-colors duration-300">
                {post.title}
              </p>
              {post.subtitle && (
                <p className="mt-1 text-sm text-subtle">
                  {post.subtitle}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
