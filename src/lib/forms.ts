/**
 * Form submission for a static frontend.
 *
 * There is no backend here. By default the handler is STUBBED: it validates,
 * applies a simple client-side rate limit, and resolves with success without
 * storing anything. To wire a real backend later, set NEXT_PUBLIC_FORM_ENDPOINT
 * to a public form endpoint (e.g. Formspree / Basin / your own API) — do not put
 * secret keys in a public env var. See .env.example.
 *
 * TODO: connect a real form endpoint / storage (tracked in academy.ts TODOS).
 */

const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";

/** Best-effort client-side rate limit: one submit per form per window. */
const RATE_LIMIT_MS = 30_000;

function rateLimited(key: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    const now = Date.now();
    const last = Number(window.localStorage.getItem(key) || 0);
    if (now - last < RATE_LIMIT_MS) return true;
    window.localStorage.setItem(key, String(now));
    return false;
  } catch {
    // localStorage unavailable (private mode etc.) — do not block the user.
    return false;
  }
}

export interface SubmitResult {
  ok: boolean;
  message: string;
}

export async function submitForm(
  formKey: string,
  payload: Record<string, unknown>
): Promise<SubmitResult> {
  if (rateLimited(`jadvix:lastSubmit:${formKey}`)) {
    return {
      ok: false,
      message: "You just submitted this form. Please wait a moment before trying again.",
    };
  }

  // No endpoint configured: stubbed success (no data leaves the browser).
  if (!ENDPOINT) {
    await new Promise((r) => setTimeout(r, 500));
    return {
      ok: true,
      message:
        "Thanks — your details have been received. Our team will be in touch. (Note: form delivery is not yet connected; this is a demo submission.)",
    };
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ form: formKey, ...payload }),
    });
    if (!res.ok) {
      return { ok: false, message: "Something went wrong. Please try again, or email us directly." };
    }
    return { ok: true, message: "Thanks — your details have been received. Our team will be in touch." };
  } catch {
    return { ok: false, message: "Network error. Please try again, or email us directly." };
  }
}
