import ProjectCard, { type Project } from "@/components/ProjectCard";
// JSON ligger i src/data efter flytten
import projects from "@/data/projects.json";

export default function ProjectsPage() {
  const list = projects as Project[];

  return (
    <section>
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
        Projects
      </h1>
      <p className="mt-2 opacity-80">
        A curated list of my work — click any card for repo or live demo.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>
    </section>
  );
}
