import { describe, it, expect } from "vitest";
import { calculateRefund } from "./refund";

describe("calculateRefund — one-time", () => {
  it("never refunds a one-time payment", () => {
    const r = calculateRefund({
      plan: "oneTime",
      monthlyAmount: 0,
      totalMonths: 10,
      currentMonth: 3,
      currentMonthDebited: true,
    });
    expect(r.refundAmount).toBe(0);
    expect(r.notCharged).toBe(0);
    expect(r.monthsCovered).toBe(0);
  });
});

describe("calculateRefund — monthly", () => {
  const base = { plan: "monthly" as const, monthlyAmount: 7500, totalMonths: 10 };

  it("current month debited: refund current + cancel remaining", () => {
    // In month 3 of 10, current debited. Remaining after = 7 months.
    const r = calculateRefund({ ...base, currentMonth: 3, currentMonthDebited: true });
    expect(r.refundAmount).toBe(7500); // current month returned
    expect(r.notCharged).toBe(7 * 7500); // months 4..10
    expect(r.monthsCovered).toBe(8); // current + 7 remaining
  });

  it("current month not debited: nothing refunded, future not charged", () => {
    const r = calculateRefund({ ...base, currentMonth: 3, currentMonthDebited: false });
    expect(r.refundAmount).toBe(0);
    expect(r.notCharged).toBe(7 * 7500);
    expect(r.monthsCovered).toBe(8);
  });

  it("last month: only the current month is in scope", () => {
    const r = calculateRefund({ ...base, currentMonth: 10, currentMonthDebited: true });
    expect(r.refundAmount).toBe(7500);
    expect(r.notCharged).toBe(0);
    expect(r.monthsCovered).toBe(1);
  });

  it("first month debited: whole plan refunded/cancelled", () => {
    const r = calculateRefund({ ...base, currentMonth: 1, currentMonthDebited: true });
    expect(r.refundAmount).toBe(7500);
    expect(r.notCharged).toBe(9 * 7500);
    expect(r.monthsCovered).toBe(10);
  });

  it("clamps an out-of-range current month", () => {
    const r = calculateRefund({ ...base, currentMonth: 99, currentMonthDebited: true });
    expect(r.monthsCovered).toBe(1);
    expect(r.notCharged).toBe(0);
  });
});
