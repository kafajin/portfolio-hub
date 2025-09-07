import { notFound } from "next/navigation";
import projects from "@/data/projects.json";
import { type Project } from "@/types/project";
import Link from "next/link";
import ProjectHero from "@/components/ProjectHero";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // Next 15: params är en Promise
  const list = projects as Project[];
  const p = list.find((x) => x.slug === slug);
  if (!p) return notFound();

  return (
    <section className="space-y-6">
      <Link href="/projects" className="text-sm opacity-80 hover:opacity-100">
        &larr; Back to projects
      </Link>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="md:w-1/2 w-full">
          <ProjectHero src={p.images?.[0]} title={p.title} />
        </div>

        <div className="md:w-1/2 w-full space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            {p.title}
          </h1>
          {p.summary && <p className="opacity-80">{p.summary}</p>}

          <div className="flex flex-wrap gap-2">
            {(p.tech ?? []).map((t) => (
              <span
                key={t}
                className="text-[10px] border rounded-full px-2 py-0.5 opacity-80"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-2 pt-2">
            {p.demoUrl && (
              <a
                target="_blank"
                href={p.demoUrl}
                className="rounded-lg border px-3 py-1 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900"
              >
                Live demo
              </a>
            )}
            {p.repoUrl && (
              <a
                target="_blank"
                href={p.repoUrl}
                className="rounded-lg border px-3 py-1 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900"
              >
                Repository
              </a>
            )}
            <span className="ml-auto text-[10px] uppercase rounded-full border px-2 py-0.5 opacity-80">
              {p.status}
            </span>
          </div>

          {p.features?.length ? (
            <div>
              <h2 className="text-sm font-semibold mt-2">Features</h2>
              <ul className="list-disc ml-5 mt-1 space-y-1 text-sm">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
