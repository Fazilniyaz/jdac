import { ArrowRight, CheckCircle2, Lock, Trophy, Briefcase } from "lucide-react";
import { stages, overview } from "@/content/academy";
import { cn } from "@/lib/cn";

const stageAccent: Record<string, string> = {
  frontend: "border-blue-400 bg-blue-50",
  backend: "border-orange-500/60 bg-orange-50",
  agentic: "border-navy-600 bg-mist",
};

const stageDot: Record<string, string> = {
  frontend: "bg-blue text-white",
  backend: "bg-orange text-white",
  agentic: "bg-navy text-white",
};

/**
 * Visual of the full train-to-hire path:
 * Stage 1 → Frontend Evaluation → Stage 2 → Backend Evaluation → Stage 3 →
 * Capstone → 6-month internship → Full-time offer.
 *
 * `compact` renders a lighter version for the Home page.
 */
export function PipelineDiagram({ compact = false }: { compact?: boolean }) {
  return (
    <div className="space-y-6">
      <ol className="grid gap-4 lg:grid-cols-3">
        {stages.map((stage) => (
          <li
            key={stage.id}
            className={cn(
              "relative flex flex-col rounded-2xl border-2 p-5 shadow-card",
              stageAccent[stage.id]
            )}
          >
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                  stageDot[stage.id]
                )}
              >
                {stage.index}
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink/60">
                  {stage.months}
                </p>
                <h3 className="text-lg leading-tight">{stage.name}</h3>
              </div>
            </div>

            {!compact && (
              <p className="mt-3 text-sm text-ink/70">{stage.summary}</p>
            )}

            <div className="mt-4 rounded-lg border border-navy/10 bg-white/70 p-3">
              <p className="flex items-center gap-1.5 text-xs font-semibold text-navy">
                <Lock size={13} className="text-navy-600" />
                Gate: {stage.gate.name}
              </p>
              <p className="mt-1 text-xs text-ink/60">{stage.gate.when}</p>
              <p className="mt-2 flex items-start gap-1.5 text-xs text-green-700">
                <CheckCircle2 size={13} className="mt-0.5 shrink-0" />
                <span>
                  Pass → {stage.internRole} + unlock next stage
                </span>
              </p>
            </div>
          </li>
        ))}
      </ol>

      {/* Downstream: internship → full-time */}
      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        <div className="flex flex-1 items-center gap-3 rounded-2xl border-2 border-blue-400 bg-blue-50 p-5">
          <Briefcase className="shrink-0 text-blue-600" />
          <div>
            <h3 className="text-base leading-tight">
              {overview.internshipMonths}-month paid internship
            </h3>
            <p className="mt-0.5 text-sm text-ink/70">
              Each cleared gate unlocks the matching internship (capacity permitting).
            </p>
          </div>
        </div>
        <ArrowRight
          className="hidden shrink-0 text-navy-600 sm:block"
          aria-hidden
        />
        <div className="flex flex-1 items-center gap-3 rounded-2xl border-2 border-orange-500/60 bg-orange-50 p-5">
          <Trophy className="shrink-0 text-orange-600" />
          <div>
            <h3 className="text-base leading-tight">Full-time offer at Jadvix LTD</h3>
            <p className="mt-0.5 text-sm text-ink/70">
              A direct pathway, based on internship performance — not a guaranteed job.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
