"use client";

import { useState, useId } from "react";
import { Calculator, TrendingUp } from "lucide-react";
import { feeOptions } from "@/content/academy";
import {
  quoteFee,
  formatINR,
  formatPercent,
  type FeeSelection,
  type PlanKind,
} from "@/lib/fees";
import { cn } from "@/lib/cn";

export function FeeCalculator() {
  const [selection, setSelection] = useState<FeeSelection>("full");
  const [plan, setPlan] = useState<PlanKind>("oneTime");
  const selectId = useId();

  const quote = quoteFee(selection, plan);

  return (
    <div className="card">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue text-white">
          <Calculator size={20} />
        </div>
        <div>
          <h3 className="text-lg text-white">Fee calculator</h3>
          <p className="text-sm text-slate-400">
            Estimate your total for a stage or the full pipeline.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {/* What */}
        <div>
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-slate-200"
          >
            What do you want to enrol in?
          </label>
          <select
            id={selectId}
            value={selection}
            onChange={(e) => setSelection(e.target.value as FeeSelection)}
            className="mt-2 w-full rounded-xl border border-white/15 bg-night-800 px-3 py-2.5 text-sm text-white focus:border-blue"
          >
            {feeOptions.map((o) => (
              <option key={o.id} value={o.id} className="bg-night-800 text-white">
                {o.label} ({o.durationMonths} months)
              </option>
            ))}
          </select>
        </div>

        {/* Plan */}
        <div>
          <span className="block text-sm font-medium text-slate-200">
            Payment plan
          </span>
          <div
            role="radiogroup"
            aria-label="Payment plan"
            className="mt-2 grid grid-cols-2 gap-2"
          >
            {(["oneTime", "monthly"] as const).map((p) => (
              <button
                key={p}
                type="button"
                role="radio"
                aria-checked={plan === p}
                onClick={() => setPlan(p)}
                className={cn(
                  "rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors",
                  plan === p
                    ? "border-blue bg-blue-500/15 text-blue-200"
                    : "border-white/15 bg-night-800 text-slate-400 hover:border-blue/50"
                )}
              >
                {p === "oneTime" ? "One-time" : "Monthly"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Result */}
      <div className="mt-6 rounded-2xl border border-blue-500/25 bg-gradient-to-br from-blue-600/20 to-night p-6">
        <p className="text-sm text-slate-300">Total payable</p>
        <p className="mt-1 font-display text-4xl font-bold text-white">
          {formatINR(quote.total)}
        </p>

        {quote.monthly ? (
          <p className="mt-2 text-sm text-slate-300">
            {formatINR(quote.monthly.amount)} × {quote.monthly.count} months
            {" "}
            (auto-debited)
          </p>
        ) : (
          <p className="mt-2 text-sm text-slate-300">Paid once at enrollment</p>
        )}

        {plan === "monthly" && quote.premiumAmount > 0 && (
          <p className="mt-4 flex items-center gap-2 rounded-xl bg-orange/15 px-3 py-2 text-sm text-orange-100">
            <TrendingUp size={16} className="shrink-0" />
            {formatINR(quote.premiumAmount)} more than one-time (
            {formatPercent(quote.premiumRate)} premium for admin overhead)
          </p>
        )}
      </div>

      <p className="mt-3 text-xs text-slate-500">
        Estimate only. Internship-linked adjustments may reduce what you
        actually pay — see the adjustments below. All fees in INR.
      </p>
    </div>
  );
}
