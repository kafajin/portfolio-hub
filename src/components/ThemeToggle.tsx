"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const html = document.documentElement;
    setIsDark(html.classList.contains("dark"));
  }, []);

  function toggle() {
    const html = document.documentElement;
    const next = !isDark;
    setIsDark(next);
    if (next) html.classList.add("dark");
    else html.classList.remove("dark");
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="rounded-lg border px-3 py-1 text-sm opacity-70"
      >
        Theme
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="rounded-lg border px-3 py-1 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-900 transition"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? "Light" : "Dark"}
    </button>
  );
}
