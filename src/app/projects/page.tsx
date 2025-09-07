// src/app/projects/page.tsx
"use client";

import ProjectCard from "@/components/ProjectCard";
import { type Project } from "@/types/project";
import projects from "@/data/projects.json";
import FilterBar from "@/components/FilterBar";
import { useMemo, useState } from "react";

export default function ProjectsPage() {
  const all = useMemo(() => projects as Project[], []);
  const [list, setList] = useState<Project[]>(all);

  return (
    <section>
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
        Projects
      </h1>
      <p className="mt-2 opacity-80">Browse by type or search tech/title.</p>

      <div className="mt-4">
        <FilterBar all={all} onChange={setList} />
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>
    </section>
  );
}
