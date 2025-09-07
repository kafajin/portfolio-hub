"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // init: läs lagrat tema eller systempreferens
  useEffect(() => {
    const root = document.documentElement;
    const stored =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialDark = stored ? stored === "dark" : prefersDark;
    setIsDark(initialDark);
    root.classList.toggle("dark", initialDark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    const root = document.documentElement;
    root.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      className="rounded-xl border px-3 py-1 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {isDark ? "Dark" : "Light"}
    </button>
  );
}
