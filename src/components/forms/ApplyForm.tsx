"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Label, FieldError, TextInput, TextArea, Select } from "./Field";
import { applySchema, honeypotField } from "@/lib/validation";
import { submitForm } from "@/lib/forms";
import { feeOptions } from "@/content/academy";

type Errors = Partial<Record<string, string>>;

const planOptions = [
  { value: "oneTime", label: "One-time payment" },
  { value: "monthly", label: "Monthly plan" },
];

export function ApplyForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(
    null
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setResult(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const parsed = applySchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      // Move focus to the first invalid field for accessibility.
      const first = parsed.error.issues[0]?.path[0];
      if (first) form.querySelector<HTMLElement>(`[name="${String(first)}"]`)?.focus();
      return;
    }

    setErrors({});
    setStatus("submitting");
    const res = await submitForm("apply", parsed.data);
    setResult(res);
    setStatus(res.ok ? "done" : "idle");
    if (res.ok) form.reset();
  }

  if (status === "done" && result?.ok) {
    return (
      <div className="card text-center" role="status" aria-live="polite">
        <CheckCircle2 className="mx-auto text-green-700" size={40} />
        <h3 className="mt-4 text-xl">Application received</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-ink/70">
          {result.message}
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setResult(null);
          }}
          className="btn-outline mt-6"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form className="card space-y-5" onSubmit={onSubmit} noValidate>
      {/* Honeypot — hidden from humans. */}
      <div aria-hidden className="hidden">
        <label htmlFor={honeypotField}>Company website (leave blank)</label>
        <input
          id={honeypotField}
          name={honeypotField}
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" required>Full name</Label>
          <TextInput id="name" name="name" autoComplete="name" aria-describedby="err-name" />
          <FieldError id="err-name" message={errors.name} />
        </div>
        <div>
          <Label htmlFor="email" required>Email</Label>
          <TextInput id="email" name="email" type="email" autoComplete="email" aria-describedby="err-email" />
          <FieldError id="err-email" message={errors.email} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="phone" required>Phone / WhatsApp</Label>
          <TextInput id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" aria-describedby="err-phone" />
          <FieldError id="err-phone" message={errors.phone} />
        </div>
        <div>
          <Label htmlFor="country" required>Country</Label>
          <TextInput id="country" name="country" autoComplete="country-name" aria-describedby="err-country" />
          <FieldError id="err-country" message={errors.country} />
        </div>
      </div>

      <div>
        <Label htmlFor="background" required>Current background</Label>
        <TextInput id="background" name="background" placeholder="e.g. Final-year CS student, self-taught, career switcher" aria-describedby="err-background" />
        <FieldError id="err-background" message={errors.background} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="entryPoint" required>Entry point</Label>
          <Select id="entryPoint" name="entryPoint" defaultValue="full" aria-describedby="err-entryPoint">
            {feeOptions.map((o) => (
              <option key={o.id} value={o.id}>{o.label}</option>
            ))}
          </Select>
          <FieldError id="err-entryPoint" message={errors.entryPoint} />
        </div>
        <div>
          <Label htmlFor="paymentPlan" required>Preferred payment plan</Label>
          <Select id="paymentPlan" name="paymentPlan" defaultValue="oneTime" aria-describedby="err-paymentPlan">
            {planOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </Select>
          <FieldError id="err-paymentPlan" message={errors.paymentPlan} />
        </div>
      </div>

      <div>
        <Label htmlFor="message">Anything else? (optional)</Label>
        <TextArea id="message" name="message" aria-describedby="err-message" />
        <FieldError id="err-message" message={errors.message} />
      </div>

      {result && !result.ok && (
        <p role="alert" className="rounded-lg bg-red/10 px-4 py-3 text-sm text-red-600">
          {result.message}
        </p>
      )}

      <button type="submit" className="btn-primary w-full" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <><Loader2 size={16} className="animate-spin" /> Submitting…</>
        ) : (
          <>Submit application <Send size={16} /></>
        )}
      </button>
      <p className="text-xs text-ink/50">
        By submitting you agree to be contacted about your enquiry. We don&apos;t
        share your details with third parties.
      </p>
    </form>
  );
}
