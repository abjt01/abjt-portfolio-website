"use client";
import { useState, useRef, useEffect } from "react";
import { ArrowDown } from "@phosphor-icons/react";

export default function AboutMe() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  function useIsBigScreen() {
    const [isBig, setIsBig] = useState(false);
    useEffect(() => {
      const check = () => setIsBig(window.innerWidth >= 768);
      check();
      window.addEventListener("resize", check);
      return () => window.removeEventListener("resize", check);
    }, []);
    return isBig;
  }


  const isBigScreen = useIsBigScreen();
  const collapsedHeight = isBigScreen ? "12rem" : "15.5rem";
  const [maxHeight, setMaxHeight] = useState<string>("0px");
  useEffect(() => {
    if (ref.current) setMaxHeight(`${ref.current.scrollHeight}px`);
  }, []);

  return (
    <section className="mx-auto mb-16 text-body text-sm md:text-base leading-relaxed">
      <div
        ref={ref}
        style={{
          maxHeight: open ? maxHeight : collapsedHeight,
          transition: "max-height 800ms cubic-bezier(0.22,1,0.36,1)",
          willChange: "max-height, opacity, transform"
        }}
        className="relative overflow-hidden"
      >
        <p className="transition-opacity duration-500 ease-out">
          <span className="font-grotesk font-bold text-accent">i don&apos;t fit neatly into a &apos;backend&apos; or &apos;frontend&apos; box — i just love building complete systems.</span><br />
          <br />
          hey, i&apos;m abhijeet yadav — a computer science &amp; business systems student at dayananda sagar college of engineering, bangalore. i&apos;m a developer who loves figuring out how things work under the hood. currently focused on devops and systems engineering.<br />
          <br />
          i have a habit of diving deep; instead of just using an API, i prefer to build the underlying protocol from scratch to understand how it truly works. what sets me apart is that i actually ship. i don&apos;t just experiment with code; i build end‑to‑end products because i refuse to be blocked by &apos;not my job&apos; technical challenges.<br />
          <br />
          i aspire to engineer the next generation of{" "}
          <span className="italic">&quot;infrastructure-as-tooling&quot;</span>
          , focusing on developer experience and mlops — building tools that empower teams to confidently operate complex kubernetes and ai workflows.<br />
          <br />
        </p>

        {!open && (
          <div
            className="
              pointer-events-none absolute inset-x-0 bottom-0
              h-20
              bg-gradient-to-b from-transparent via-surface/50 to-surface
              transition-opacity duration-500
            "
          />
        )}
        {!open && (
          <button
            onClick={() => setOpen(true)}
            aria-expanded={open}
            className="
              group absolute bottom-1 left-1/2 -translate-x-1/2 z-20
              px-4 py-1.5 text-muted text-xs font-medium
              border border-edge bg-surface hover:border-accent hover:text-accent
              transition-all duration-300 ease-out
              cursor-pointer
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30
              flex items-center gap-1
            "
          >
            <span>read more</span>
            <ArrowDown className="h-3 w-3 flex-shrink-0" />
          </button>
        )}
      </div>

      {open && (
        <button
          onClick={() => setOpen(false)}
          aria-expanded={open}
          className="
            group mx-auto mt-3 flex items-center gap-1 px-4 py-1.5
            text-muted text-xs font-medium cursor-pointer
            border border-edge bg-surface hover:border-accent hover:text-accent
            transition-all duration-300 ease-out
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30
          "
        >
          show less
          <ArrowDown className="rotate-180 h-3 w-3 flex-shrink-0" />
        </button>
      )}
    </section>
  );
}
