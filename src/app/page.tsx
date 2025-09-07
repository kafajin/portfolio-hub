import Link from "next/link";
import Studies from "@/components/Studies";
import { ArrowRight, Github } from "lucide-react";

export default function HomePage() {
  return (
    <section className="space-y-14">
      {/* Hero */}
      <div className="pt-4">
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs opacity-80">
          Open to opportunities — Graduation June 2026
        </div>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          Building clean, reliable{" "}
          <span className="text-neutral-500 dark:text-neutral-400">
            full-stack apps
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-700 dark:text-neutral-300">
          I’m Nora Kafaji — a developer focused on delightful UX, robust APIs,
          and shipping polished products. This hub curates selected projects,
          skills, and education.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
          >
            View Projects <ArrowRight size={16} />
          </Link>
          <a
            href="https://github.com/kafajin"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-xl font-semibold">Skills</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {[
            "TypeScript",
            "React/Next.js",
            "Node.js",
            "Express",
            "MongoDB",
            "Postgres",
            "Tailwind",
            "REST/GraphQL",
            "Testing",
          ].map((s) => (
            <li
              key={s}
              className="text-xs border rounded-full px-3 py-1 opacity-90"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>

      {/* Studies */}
      <Studies />
    </section>
  );
}
