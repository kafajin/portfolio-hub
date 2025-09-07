import edu from "@/data/education.json";
import { Card } from "@/components/ui/card";

export default function EducationPage() {
  const e = edu as any;
  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Education</h1>
        <p className="opacity-80">{e.university} • {e.location}</p>
        <p className="text-sm opacity-90">
          {e.program} — {e.period} • <strong>Graduation: {e.graduation}</strong>
        </p>
      </header>

      <Card className="p-5 space-y-3">
        <h2 className="text-lg font-semibold">Overview & Goals</h2>
        <p className="opacity-90">{e.overview}</p>
        <ul className="list-disc pl-5">
          {e.goals.map((g: string) => <li key={g}>{g}</li>)}
        </ul>
      </Card>

      <Card className="p-5 space-y-3">
        <h2 className="text-lg font-semibold">Core Areas</h2>
        <ul className="list-disc pl-5">
          {e.core_areas.map((c: string) => <li key={c}>{c}</li>)}
        </ul>
      </Card>

      <Card className="p-5 space-y-3">
        <h2 className="text-lg font-semibold">Methods & Tracks</h2>
        <ul className="list-disc pl-5">
          {e.tracks_and_methods.map((c: string) => <li key={c}>{c}</li>)}
        </ul>
      </Card>

      <Card className="p-5 space-y-3">
        <h2 className="text-lg font-semibold">Courses</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium">Year 1</h3>
            <ul className="list-disc pl-5 text-sm mt-1">{e.courses.year1.map((c: string) => <li key={c}>{c}</li>)}</ul>
          </div>
          <div>
            <h3 className="font-medium">Year 2</h3>
            <ul className="list-disc pl-5 text-sm mt-1">{e.courses.year2.map((c: string) => <li key={c}>{c}</li>)}</ul>
          </div>
          <div>
            <h3 className="font-medium">Year 3</h3>
            <ul className="list-disc pl-5 text-sm mt-1">{e.courses.year3.map((c: string) => <li key={c}>{c}</li>)}</ul>
          </div>
        </div>
      </Card>
    </section>
  );
}
