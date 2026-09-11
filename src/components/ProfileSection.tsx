import Image from "next/image";

export default function ProfileSection() {
  return (
    <section className="flex flex-col md:flex-row items-start gap-10 mb-12">
      <Image
        src="/pfp.png"
        alt="Abhijeet Yadav"
        width={140}
        height={140}
        className="rounded-sm object-cover transition-all duration-300"
        priority
      />
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl md:text-6xl font-grotesk font-bold tracking-tight leading-none">
          abhijeet yadav
        </h1>
        <p className="text-muted text-base md:text-lg font-mono">
          cse 28&apos; | backend dev | 4× hackathon podium
        </p>
        <p className="text-body text-sm md:text-base max-w-2xl leading-relaxed">
          less UI, more infrastructure.
        </p>
      </div>
    </section>
  );
}
