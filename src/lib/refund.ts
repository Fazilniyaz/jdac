/**
 * Refund calculation — implements the Refund Policy (section 4.6) exactly.
 *
 *   - One-time payment: NO refund (full pipeline or any single stage).
 *   - Monthly installments: refund the remaining months, counted from the
 *     CURRENT month. The current month's installment (if already debited) plus
 *     all remaining months are refunded; completed months are not refunded.
 *
 * Pure and deterministic — unit-tested. Amounts are whole INR.
 */

export type PlanKind = "oneTime" | "monthly";

export interface RefundInput {
  plan: PlanKind;
  /** Per-month installment amount (monthly plan only). */
  monthlyAmount: number;
  /** Total number of months in the plan. */
  totalMonths: number;
  /**
   * Which month the student is currently in, 1-based.
   * Month 1 = the first month. The current month counts toward the refund.
   */
  currentMonth: number;
  /** Whether the current month's installment has already been debited. */
  currentMonthDebited: boolean;
}

export interface RefundResult {
  /** Amount refunded to the original payment method (already-debited money). */
  refundAmount: number;
  /** Future installments that will simply not be charged. */
  notCharged: number;
  /** Count of months covered by the refund/cancellation (current + remaining). */
  monthsCovered: number;
  /** Human-readable explanation. */
  explanation: string;
}

export function calculateRefund(input: RefundInput): RefundResult {
  const { plan, monthlyAmount, totalMonths, currentMonth, currentMonthDebited } =
    input;

  if (plan === "oneTime") {
    return {
      refundAmount: 0,
      notCharged: 0,
      monthsCovered: 0,
      explanation:
        "One-time payment: no refund is due under the refund policy.",
    };
  }

  // Validate monthly inputs defensively.
  const safeTotal = Math.max(0, Math.trunc(totalMonths));
  const safeCurrent = clamp(Math.trunc(currentMonth), 1, Math.max(1, safeTotal));
  const amount = Math.max(0, Math.trunc(monthlyAmount));

  // Remaining months strictly after the current month.
  const futureMonths = Math.max(0, safeTotal - safeCurrent);
  // Current month counts toward the refund window.
  const monthsCovered = Math.min(safeTotal, futureMonths + 1);

  // Already-debited money that must be returned: the current month if it was
  // debited. (Completed prior months are never refunded.)
  const refundAmount = currentMonthDebited ? amount : 0;
  // Future months are cancelled, not charged.
  const notCharged = futureMonths * amount;

  return {
    refundAmount,
    notCharged,
    monthsCovered,
    explanation: currentMonthDebited
      ? `Auto-debit cancelled. The current month (₹${amount.toLocaleString(
          "en-IN"
        )}) is refunded and the remaining ${futureMonths} month(s) will not be charged.`
      : `Auto-debit cancelled. The current month and the remaining ${futureMonths} month(s) will not be charged. Completed months are not refunded.`,
  };
}

function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}
