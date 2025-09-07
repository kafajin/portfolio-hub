import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-10">
      <div className="pt-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Hi, I’m{" "}
          <span className="text-neutral-500 dark:text-neutral-400">
            Nora Kafaji
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-700 dark:text-neutral-300">
          Fullstack developer focusing on clean UX, solid APIs, and useful apps.
          This is my central hub where I showcase selected projects, skills, and
          experience.
        </p>
        <div className="mt-6 flex gap-3">
          <Link
            href="/projects"
            className="rounded-xl border px-4 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
          >
            View Projects
          </Link>
          <a
            href="https://github.com/kafajin"
            target="_blank"
            className="rounded-xl border px-4 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
          >
            GitHub
          </a>
        </div>
      </div>

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
    </section>
  );
}
