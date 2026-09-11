"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "@phosphor-icons/react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  // Start as null so the icon isn't rendered until we know the real theme,
  // which keeps the server and first client render identical.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const current = (document.documentElement.dataset.theme as Theme) || "dark";
    setTheme(current);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private mode — the choice just won't persist */
    }
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme ? `Switch to ${theme === "dark" ? "light" : "dark"} mode` : "Switch theme"}
      title={theme === "dark" ? "light mode" : "dark mode"}
      className="fixed top-5 right-5 z-50 flex h-9 w-9 items-center justify-center border border-edge bg-surface text-subtle transition-all duration-300 hover:border-accent hover:text-accent focus-visible:border-accent focus-visible:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 md:top-8 md:right-8"
    >
      {theme === "light" ? (
        <Moon size={16} weight="bold" />
      ) : theme === "dark" ? (
        <Sun size={16} weight="bold" />
      ) : (
        <span className="h-4 w-4" />
      )}
    </button>
  );
}
