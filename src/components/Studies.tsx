import Link from "next/link";
import { Card } from "@/components/ui/card";
import edu from "@/data/education.json";

export default function Studies() {
  const e = edu as any;
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Studies</h2>
      <Card className="p-4 space-y-2">
        <div className="text-sm opacity-80">
          {e.university} • {e.location}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-medium">{e.program}</span>
          <span className="text-xs rounded-full border px-2 py-0.5">
            {e.period}
          </span>
          <span className="text-xs rounded-full border px-2 py-0.5">
            Graduation: {e.graduation}
          </span>
        </div>
        <p className="text-sm opacity-90">{e.overview}</p>
        <ul className="mt-1 list-disc pl-5 text-sm">
          {e.goals.slice(0, 3).map((g: string) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="text-xs rounded-full border px-2 py-0.5">
            {e.language}
          </span>
          <span className="text-xs rounded-full border px-2 py-0.5">
            {e.thesis}
          </span>
        </div>
        <Link href="/education" className="inline-flex text-sm underline mt-2">
          Full education details →
        </Link>
      </Card>
    </section>
  );
}
