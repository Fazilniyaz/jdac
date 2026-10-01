import { currency, feeOptions, type FeeOption, type StageId } from "@/content/academy";

export type PlanKind = "oneTime" | "monthly";
export type FeeSelection = "full" | StageId;

export interface FeeQuote {
  option: FeeOption;
  plan: PlanKind;
  /** Total payable under the chosen plan, in INR (whole rupees). */
  total: number;
  /** The equivalent one-time total, for comparison. */
  oneTimeTotal: number;
  /** For monthly: how much more you pay vs one-time. 0 for one-time plan. */
  premiumAmount: number;
  /** For monthly: premium as a fraction (e.g. 0.1538). 0 for one-time plan. */
  premiumRate: number;
  /** For monthly: the per-month amount and count. Null for one-time. */
  monthly: { amount: number; count: number } | null;
}

/** Look up a fee option by id. Throws if unknown — ids come from config. */
export function getFeeOption(id: FeeSelection): FeeOption {
  const option = feeOptions.find((o) => o.id === id);
  if (!option) {
    throw new Error(`Unknown fee option: ${id}`);
  }
  return option;
}

/** Monthly total for an option (derived, never stored). */
export function monthlyTotal(option: FeeOption): number {
  return option.monthlyAmount * option.monthlyCount;
}

/**
 * Compute a fee quote. Pure and deterministic — unit-tested.
 * All amounts are whole INR.
 */
export function quoteFee(id: FeeSelection, plan: PlanKind): FeeQuote {
  const option = getFeeOption(id);
  const oneTimeTotal = option.oneTime;
  const mTotal = monthlyTotal(option);

  if (plan === "oneTime") {
    return {
      option,
      plan,
      total: oneTimeTotal,
      oneTimeTotal,
      premiumAmount: 0,
      premiumRate: 0,
      monthly: null,
    };
  }

  const premiumAmount = mTotal - oneTimeTotal;
  const premiumRate = oneTimeTotal > 0 ? premiumAmount / oneTimeTotal : 0;

  return {
    option,
    plan,
    total: mTotal,
    oneTimeTotal,
    premiumAmount,
    premiumRate,
    monthly: { amount: option.monthlyAmount, count: option.monthlyCount },
  };
}

/** Format a whole-rupee amount, e.g. 65000 -> "₹65,000". */
export function formatINR(amount: number): string {
  return `${currency.symbol}${amount.toLocaleString("en-IN")}`;
}

/** Format a fraction as a rounded percentage, e.g. 0.1538 -> "15%". */
export function formatPercent(rate: number): string {
  return `${Math.round(rate * 100)}%`;
}
