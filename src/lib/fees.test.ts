import { describe, it, expect } from "vitest";
import { quoteFee, monthlyTotal, getFeeOption, formatINR, formatPercent } from "./fees";

describe("quoteFee — one-time", () => {
  it("full pipeline one-time is ₹65,000 with no premium", () => {
    const q = quoteFee("full", "oneTime");
    expect(q.total).toBe(65000);
    expect(q.premiumAmount).toBe(0);
    expect(q.premiumRate).toBe(0);
    expect(q.monthly).toBeNull();
  });

  it("each stage one-time matches the config", () => {
    expect(quoteFee("frontend", "oneTime").total).toBe(26000);
    expect(quoteFee("backend", "oneTime").total).toBe(26000);
    expect(quoteFee("agentic", "oneTime").total).toBe(15000);
  });
});

describe("quoteFee — monthly", () => {
  it("full pipeline monthly is 7,500 × 10 = ₹75,000", () => {
    const q = quoteFee("full", "monthly");
    expect(q.total).toBe(75000);
    expect(q.monthly).toEqual({ amount: 7500, count: 10 });
  });

  it("full pipeline monthly premium is ₹10,000 (~15%)", () => {
    const q = quoteFee("full", "monthly");
    expect(q.premiumAmount).toBe(10000);
    expect(Math.round(q.premiumRate * 100)).toBe(15);
  });

  it("frontend/backend monthly is 7,500 × 4 = ₹30,000", () => {
    expect(quoteFee("frontend", "monthly").total).toBe(30000);
    expect(quoteFee("backend", "monthly").total).toBe(30000);
  });

  it("agentic monthly is 7,500 × 2 = ₹15,000 with no premium", () => {
    const q = quoteFee("agentic", "monthly");
    expect(q.total).toBe(15000);
    expect(q.premiumAmount).toBe(0);
  });
});

describe("helpers", () => {
  it("monthlyTotal multiplies amount by count", () => {
    expect(monthlyTotal(getFeeOption("full"))).toBe(75000);
  });

  it("getFeeOption throws on unknown id", () => {
    // @ts-expect-error — testing runtime guard with an invalid id
    expect(() => getFeeOption("nope")).toThrow();
  });

  it("formatINR uses Indian grouping and the rupee symbol", () => {
    expect(formatINR(65000)).toBe("₹65,000");
    expect(formatINR(100000)).toBe("₹1,00,000");
  });

  it("formatPercent rounds", () => {
    expect(formatPercent(0.1538)).toBe("15%");
  });
});
