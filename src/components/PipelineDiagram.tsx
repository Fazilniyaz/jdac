import { ArrowRight, CheckCircle2, Lock, Trophy, Briefcase } from "lucide-react";
import { stages, overview } from "@/content/academy";
import { cn } from "@/lib/cn";

const stageDot: Record<string, string> = {
  frontend: "bg-blue text-white",
  backend: "bg-orange text-white",
  agentic: "bg-white text-navy",
};

const stageGlow: Record<string, string> = {
  frontend: "from-blue-500/20",
  backend: "from-orange-500/20",
  agentic: "from-white/10",
};

/**
 * Visual of the full train-to-hire path:
 * Stage 1 → Frontend Evaluation → Stage 2 → Backend Evaluation → Stage 3 →
 * Capstone → 6-month internship → Full-time offer.
 */
export function PipelineDiagram({ compact = false }: { compact?: boolean }) {
  return (
    <div className="space-y-5">
      <ol className="grid gap-5 lg:grid-cols-3">
        {stages.map((stage) => (
          <li
            key={stage.id}
            className={cn(
              "relative overflow-hidden rounded-3xl border border-white/10 bg-panel p-6 shadow-float"
            )}
          >
            <div
              aria-hidden
              className={cn(
                "pointer-events-none absolute -top-16 right-0 h-40 w-40 rounded-full bg-gradient-to-b to-transparent blur-2xl",
                stageGlow[stage.id]
              )}
            />
            <div className="relative flex items-center gap-3">
              <span
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                  stageDot[stage.id]
                )}
              >
                {stage.index}
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {stage.months}
                </p>
                <h3 className="text-lg leading-tight text-white">{stage.name}</h3>
              </div>
            </div>

            {!compact && (
              <p className="relative mt-4 text-sm text-slate-400">{stage.summary}</p>
            )}

            <div className="relative mt-5 rounded-2xl border border-white/10 bg-night-800/60 p-4">
              <p className="flex items-center gap-1.5 text-xs font-semibold text-slate-200">
                <Lock size={13} className="text-blue-400" />
                Gate: {stage.gate.name}
              </p>
              <p className="mt-1 text-xs text-slate-500">{stage.gate.when}</p>
              <p className="mt-2 flex items-start gap-1.5 text-xs text-emerald-400">
                <CheckCircle2 size={13} className="mt-0.5 shrink-0" />
                <span>Pass → {stage.internRole} + unlock next stage</span>
              </p>
            </div>
          </li>
        ))}
      </ol>

      {/* Downstream: internship → full-time */}
      <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
        <div className="flex flex-1 items-center gap-3 rounded-3xl border border-blue-500/30 bg-blue-500/10 p-6">
          <Briefcase className="shrink-0 text-blue-300" />
          <div>
            <h3 className="text-base leading-tight text-white">
              {overview.internshipMonths}-month paid internship
            </h3>
            <p className="mt-0.5 text-sm text-slate-400">
              Each cleared gate unlocks the matching internship (capacity permitting).
            </p>
          </div>
        </div>
        <ArrowRight className="hidden shrink-0 text-slate-500 sm:block" aria-hidden />
        <div className="flex flex-1 items-center gap-3 rounded-3xl border border-orange-500/30 bg-orange-500/10 p-6">
          <Trophy className="shrink-0 text-orange" />
          <div>
            <h3 className="text-base leading-tight text-white">
              Full-time offer at Jadvix LTD
            </h3>
            <p className="mt-0.5 text-sm text-slate-400">
              A direct pathway, based on internship performance — not a guaranteed job.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
