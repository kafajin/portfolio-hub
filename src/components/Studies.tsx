import Link from "next/link";
import edu from "@/data/education.json";

export default function Studies() {
  const e = edu as any;
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
        Studies
      </h2>

      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 space-y-4 bg-white dark:bg-neutral-900">
        <div className="text-sm text-neutral-700 dark:text-neutral-300">
          {e.university} • {e.location}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="font-semibold text-neutral-900 dark:text-neutral-100">
            {e.program}
          </span>
          <span className="text-xs rounded-full border px-2 py-1 bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100 border-neutral-300 dark:border-neutral-700">
            {e.period}
          </span>
          <span className="text-xs rounded-full border px-2 py-1 bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100 border-neutral-300 dark:border-neutral-700">
            Graduation: {e.graduation}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          {e.overview}
        </p>

        <ul className="list-disc pl-5 text-sm leading-relaxed space-y-1 text-neutral-700 dark:text-neutral-300">
          {e.goals.map((g: string) => (
            <li key={g}>{g}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-1">
          <span className="text-xs rounded-full border px-2 py-1 bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100 border-neutral-300 dark:border-neutral-700">
            {e.language}
          </span>
          <span className="text-xs rounded-full border px-2 py-1 bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100 border-neutral-300 dark:border-neutral-700">
            {e.thesis}
          </span>
        </div>

        <Link
          href="/education"
          className="inline-flex text-sm mt-2 underline text-blue-600 dark:text-blue-400 hover:opacity-90"
        >
          Full education details →
        </Link>
      </div>
    </section>
  );
}
