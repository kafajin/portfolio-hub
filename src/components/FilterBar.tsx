"use client";

import { useMemo, useState } from "react";
import { type Project } from "@/types/project";

type Props = {
  all: Project[];
  onChange: (filtered: Project[]) => void;
};

export default function FilterBar({ all, onChange }: Props) {
  const [q, setQ] = useState("");
  const [type, setType] = useState<string>("all");

  const types = useMemo(() => {
    const set = new Set<string>();
    all.forEach((p) => (p.types ?? []).forEach((t) => set.add(t)));
    return ["all", ...Array.from(set)];
  }, [all]);

  function apply(qVal = q, tVal = type) {
    const qLower = qVal.trim().toLowerCase();
    const filtered = all.filter((p) => {
      const okQ =
        !qLower ||
        p.title.toLowerCase().includes(qLower) ||
        (p.summary ?? "").toLowerCase().includes(qLower) ||
        (p.tech ?? []).some((t) => t.toLowerCase().includes(qLower));
      const okT = tVal === "all" || (p.types ?? []).includes(tVal);
      return okQ && okT;
    });
    onChange(filtered);
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
      <input
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          apply(e.target.value, type);
        }}
        placeholder="Search title, tech, summary…"
        className="w-full sm:w-72 rounded-lg border px-3 py-2 text-sm bg-transparent"
      />
      <select
        value={type}
        onChange={(e) => {
          setType(e.target.value);
          apply(q, e.target.value);
        }}
        className="rounded-lg border px-3 py-2 text-sm bg-transparent"
      >
        {types.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
    </div>
  );
}
