import { z } from "zod";

/** Shared field — a phone/WhatsApp number, loosely validated (international). */
const phone = z
  .string()
  .trim()
  .min(6, "Please enter a valid phone / WhatsApp number")
  .max(20, "Please enter a valid phone / WhatsApp number")
  .regex(/^[+]?[\d\s().-]{6,20}$/, "Please enter a valid phone / WhatsApp number");

const name = z
  .string()
  .trim()
  .min(2, "Please enter your name")
  .max(80, "Name is too long");

const email = z.string().trim().email("Please enter a valid email address");

/**
 * Honeypot: a hidden field real users never fill. If present, reject silently.
 * Named innocuously so bots that autofill common field names get caught.
 */
export const honeypotField = "company_website";

const honeypot = z
  .string()
  .max(0, "Spam detected")
  .optional()
  .or(z.literal(""));

/** Apply / enquiry form (section 3, page 6). */
export const applySchema = z.object({
  name,
  email,
  phone,
  country: z.string().trim().min(2, "Please enter your country").max(60),
  background: z
    .string()
    .trim()
    .min(2, "Tell us a little about your current background")
    .max(300, "Please keep this under 300 characters"),
  entryPoint: z.enum(["full", "frontend", "backend", "agentic"], {
    errorMap: () => ({ message: "Please choose an entry point" }),
  }),
  paymentPlan: z.enum(["oneTime", "monthly"], {
    errorMap: () => ({ message: "Please choose a payment plan" }),
  }),
  message: z.string().trim().max(1000, "Please keep your message under 1000 characters").optional(),
  [honeypotField]: honeypot,
});

export type ApplyInput = z.infer<typeof applySchema>;

/** Contact form (section 3, page 9). */
export const contactSchema = z.object({
  name,
  email,
  message: z
    .string()
    .trim()
    .min(5, "Please enter a message")
    .max(1000, "Please keep your message under 1000 characters"),
  [honeypotField]: honeypot,
});

export type ContactInput = z.infer<typeof contactSchema>;
