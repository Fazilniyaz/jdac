import { ArrowRight, CheckCircle2, Lock, Trophy, Briefcase } from "lucide-react";
import { stages, overview } from "@/content/academy";
import { Reveal } from "@/components/Reveal";

const stageNumber: Record<string, string> = {
  frontend: "bg-[#4599d3] text-white",
  backend: "bg-[#f05623] text-white",
  agentic: "bg-[#0b3b5c] text-white ring-1 ring-white/25",
};

/**
 * The full train-to-hire path: three gated stages, then the internship and the
 * full-time offer.
 */
export function PipelineDiagram({ compact = false }: { compact?: boolean }) {
  return (
    <div className="space-y-4">
      <ol className="grid gap-4 lg:grid-cols-3">
        {stages.map((stage, i) => (
          <Reveal as="li" key={stage.id} delay={i * 90} className="card flex flex-col">
            <div className="flex items-center gap-3">
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-sm font-semibold ${stageNumber[stage.id]}`}>
                {stage.index}
              </span>
              <div>
                <p className="jx-label text-[11px] text-muted">{stage.months}</p>
                <h3 className="text-[17px] leading-tight">{stage.name}</h3>
              </div>
            </div>
            {!compact && <p className="mt-4 text-sm text-ink-2">{stage.summary}</p>}
            <div className="mt-5 border-t border-line pt-4">
              <p className="flex items-center gap-1.5 text-[13px] font-semibold text-ink">
                <Lock size={13} className="text-accent" />
                Gate: {stage.gate.name}
              </p>
              <p className="mt-1 text-[13px] text-muted">{stage.gate.when}</p>
              <p className="mt-2 flex items-start gap-1.5 text-[13px] text-success">
                <CheckCircle2 size={14} className="mt-0.5 shrink-0" />
                <span>Pass → {stage.internRole} + unlock next stage</span>
              </p>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={240} className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
        <div className="card-flat flex flex-1 items-center gap-4 border-l-[3px] border-l-brand">
          <Briefcase className="shrink-0 text-accent" />
          <div>
            <h3 className="text-base leading-tight">{overview.internshipMonths}-month paid internship</h3>
            <p className="mt-0.5 text-sm text-ink-2">
              Each cleared gate unlocks the matching internship (capacity permitting).
            </p>
          </div>
        </div>
        <ArrowRight className="hidden shrink-0 text-muted sm:block" aria-hidden />
        <div className="card-flat flex flex-1 items-center gap-4 border-l-[3px] border-l-spark">
          <Trophy className="shrink-0 text-spark" />
          <div>
            <h3 className="text-base leading-tight">Full-time offer at Jadvix LTD</h3>
            <p className="mt-0.5 text-sm text-ink-2">
              A direct pathway, based on internship performance — not a guaranteed job.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
