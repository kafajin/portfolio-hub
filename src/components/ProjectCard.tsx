import Link from "next/link";

export type Project = {
  slug: string;
  title: string;
  types: string[];
  status: "planned" | "in-progress" | "done" | string;
  tech: string[];
  repoUrl?: string;
  demoUrl?: string;
  images?: string[];
  summary?: string;
  features?: string[];
  started?: string;
  tags?: string[];
};

export default function ProjectCard({ p }: { p: Project }) {
  const img = p.images?.[0];

  return (
    <div className="group overflow-hidden rounded-2xl border border-neutral-200/70 dark:border-neutral-800 hover:shadow-sm transition">
      {img ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={img} alt={p.title} className="h-40 w-full object-cover" />
      ) : (
        <div className="h-40 w-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-sm opacity-60">
          No image
        </div>
      )}

      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold leading-tight">{p.title}</h3>
          <span className="text-[10px] uppercase tracking-wide rounded-full border px-2 py-0.5 opacity-80">
            {p.status}
          </span>
        </div>

        {p.summary && (
          <p className="text-sm opacity-80 line-clamp-2">{p.summary}</p>
        )}

        <div className="flex flex-wrap gap-1.5">
          {p.tech?.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-[10px] border rounded-full px-2 py-0.5 opacity-80"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="pt-2 flex gap-2">
          {p.demoUrl ? (
            <a
              target="_blank"
              href={p.demoUrl}
              className="text-sm rounded-lg border px-3 py-1 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
            >
              Demo
            </a>
          ) : null}
          {p.repoUrl ? (
            <a
              target="_blank"
              href={p.repoUrl}
              className="text-sm rounded-lg border px-3 py-1 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
            >
              Repo
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
