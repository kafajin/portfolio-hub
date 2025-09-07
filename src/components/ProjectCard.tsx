import { ExternalLink } from "lucide-react";

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
};

export default function ProjectCard({ p }: { p: Project }) {
  const img = p.images?.[0];

  return (
    <div className="group relative overflow-hidden rounded-2xl card-surface transition">
      <div className="aspect-[16/9] w-full overflow-hidden">
        {img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={img}
            alt={p.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-sm">
            No image
          </div>
        )}
      </div>

      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold leading-tight">{p.title}</h3>
          <span className="text-[10px] uppercase tracking-wide rounded-full border px-2 py-0.5">
            {p.status}
          </span>
        </div>

        {p.summary && (
          <p className="text-sm text-neutral-700 dark:text-neutral-300 whitespace-pre-wrap break-words leading-relaxed">
            {p.summary}
          </p>
        )}

        <div className="flex flex-wrap gap-1.5">
          {p.tech?.map((t) => (
            <span
              key={t}
              className="text-[10px] border rounded-full px-2 py-0.5"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="pt-2 flex flex-wrap gap-2">
          {p.demoUrl ? (
            <a
              target="_blank"
              href={p.demoUrl}
              className="text-sm inline-flex items-center gap-1 rounded-lg border px-3 py-1 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
            >
              Live <ExternalLink size={14} />
            </a>
          ) : null}
          {p.repoUrl ? (
            <a
              target="_blank"
              href={p.repoUrl}
              className="text-sm inline-flex items-center gap-1 rounded-lg border px-3 py-1 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
            >
              Repo <ExternalLink size={14} />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
