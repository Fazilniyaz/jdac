import { describe, it, expect } from "vitest";
import { applySchema, contactSchema, honeypotField } from "./validation";

const validApply = {
  name: "Asha K",
  email: "asha@example.com",
  phone: "+91 98765 43210",
  country: "India",
  background: "Final-year CS student",
  entryPoint: "full",
  paymentPlan: "monthly",
  message: "Interested in the next cohort.",
  [honeypotField]: "",
};

describe("applySchema", () => {
  it("accepts a valid application", () => {
    expect(applySchema.safeParse(validApply).success).toBe(true);
  });

  it("rejects a bad email", () => {
    const r = applySchema.safeParse({ ...validApply, email: "nope" });
    expect(r.success).toBe(false);
  });

  it("rejects an invalid entry point", () => {
    const r = applySchema.safeParse({ ...validApply, entryPoint: "wizardry" });
    expect(r.success).toBe(false);
  });

  it("rejects a bad phone number", () => {
    const r = applySchema.safeParse({ ...validApply, phone: "abc" });
    expect(r.success).toBe(false);
  });

  it("rejects when the honeypot is filled (spam)", () => {
    const r = applySchema.safeParse({ ...validApply, [honeypotField]: "http://spam" });
    expect(r.success).toBe(false);
  });

  it("allows an empty optional message", () => {
    const { message, ...rest } = validApply;
    void message;
    expect(applySchema.safeParse(rest).success).toBe(true);
  });
});

describe("contactSchema", () => {
  it("accepts a valid contact message", () => {
    const r = contactSchema.safeParse({
      name: "Ravi",
      email: "ravi@example.com",
      message: "Please call me about Stage 2.",
      [honeypotField]: "",
    });
    expect(r.success).toBe(true);
  });

  it("requires a message", () => {
    const r = contactSchema.safeParse({ name: "Ravi", email: "ravi@example.com", message: "" });
    expect(r.success).toBe(false);
  });
});
