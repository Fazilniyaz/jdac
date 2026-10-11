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
    <div className="card p-6 sm:p-7">
      <div className="flex items-center gap-3">
        <div className="icon-tile">
          <Calculator size={20} />
        </div>
        <div>
          <h3 className="text-lg">Fee calculator</h3>
          <p className="text-sm text-ink-2">
            Estimate your total for a stage or the full pipeline.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {/* What */}
        <div>
          <label
            htmlFor={selectId}
            className="block text-[13.5px] font-semibold text-ink-2"
          >
            What do you want to enrol in?
          </label>
          <select
            id={selectId}
            value={selection}
            onChange={(e) => setSelection(e.target.value as FeeSelection)}
            className="field mt-2"
          >
            {feeOptions.map((o) => (
              <option key={o.id} value={o.id}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        {/* Plan */}
        <div>
          <span className="block text-[13.5px] font-semibold text-ink-2">
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
                  "rounded-input border px-3 py-2.5 text-sm font-medium transition-colors",
                  plan === p
                    ? "border-brand bg-brand/10 text-accent"
                    : "border-line bg-surface text-ink-2 hover:border-brand"
                )}
              >
                {p === "oneTime" ? "One-time" : "Monthly"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Result */}
      <div className="mt-6 rounded-card bg-navy p-6 text-on-navy">
        <p className="text-sm text-on-navy-2">Total payable</p>
        <p className="mt-1 font-display text-4xl font-semibold text-white">
          {formatINR(quote.total)}
        </p>

        {quote.monthly ? (
          <p className="mt-2 text-sm text-on-navy-2">
            {formatINR(quote.monthly.amount)} × {quote.monthly.count} months
            {" "}
            (auto-debited)
          </p>
        ) : (
          <p className="mt-2 text-sm text-on-navy-2">Paid once at enrollment</p>
        )}

        {plan === "monthly" && quote.premiumAmount > 0 && (
          <p className="mt-4 flex items-center gap-2 rounded-input bg-spark/15 px-3 py-2 text-sm text-[#ffb08f]">
            <TrendingUp size={16} className="shrink-0" />
            {formatINR(quote.premiumAmount)} more than one-time (
            {formatPercent(quote.premiumRate)} premium for admin overhead)
          </p>
        )}
      </div>

      <p className="mt-3 text-xs text-muted">
        Estimate only. Internship-linked adjustments may reduce what you
        actually pay — see the adjustments below. All fees in INR.
      </p>
    </div>
  );
}
