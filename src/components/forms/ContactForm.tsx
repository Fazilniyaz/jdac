"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Label, FieldError, TextInput, TextArea } from "./Field";
import { contactSchema, honeypotField } from "@/lib/validation";
import { submitForm } from "@/lib/forms";

type Errors = Partial<Record<string, string>>;

export function ContactForm() {
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

    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      const first = parsed.error.issues[0]?.path[0];
      if (first) form.querySelector<HTMLElement>(`[name="${String(first)}"]`)?.focus();
      return;
    }

    setErrors({});
    setStatus("submitting");
    const res = await submitForm("contact", parsed.data);
    setResult(res);
    setStatus(res.ok ? "done" : "idle");
    if (res.ok) form.reset();
  }

  if (status === "done" && result?.ok) {
    return (
      <div className="card text-center" role="status" aria-live="polite">
        <CheckCircle2 className="mx-auto text-emerald-400" size={40} />
        <h3 className="mt-4 text-xl">Message sent</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">{result.message}</p>
      </div>
    );
  }

  return (
    <form className="card space-y-5" onSubmit={onSubmit} noValidate>
      <div aria-hidden className="hidden">
        <label htmlFor={`${honeypotField}-c`}>Company website (leave blank)</label>
        <input id={`${honeypotField}-c`} name={honeypotField} type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <Label htmlFor="c-name" required>Name</Label>
        <TextInput id="c-name" name="name" autoComplete="name" aria-describedby="err-c-name" />
        <FieldError id="err-c-name" message={errors.name} />
      </div>
      <div>
        <Label htmlFor="c-email" required>Email</Label>
        <TextInput id="c-email" name="email" type="email" autoComplete="email" aria-describedby="err-c-email" />
        <FieldError id="err-c-email" message={errors.email} />
      </div>
      <div>
        <Label htmlFor="c-message" required>Message</Label>
        <TextArea id="c-message" name="message" className="min-h-32" aria-describedby="err-c-message" />
        <FieldError id="err-c-message" message={errors.message} />
      </div>

      {result && !result.ok && (
        <p role="alert" className="rounded-xl border border-red/30 bg-red/15 px-4 py-3 text-sm text-red-200">
          {result.message}
        </p>
      )}

      <button type="submit" className="btn-primary w-full" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <><Loader2 size={16} className="animate-spin" /> Sending…</>
        ) : (
          <>Send message <Send size={16} /></>
        )}
      </button>
    </form>
  );
}
