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
