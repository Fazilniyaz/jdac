import Image from "next/image";
import { company } from "@/content/academy";

/**
 * Brand logo. Use `variant="light"` (white logo) on dark/navy backgrounds and
 * the default dark logo on light backgrounds. Never recolor, stretch, or crop.
 */
export function Logo({
  variant = "dark",
  className,
  priority = false,
}: {
  variant?: "dark" | "light";
  className?: string;
  priority?: boolean;
}) {
  const src =
    variant === "light"
      ? "/brand/jadvix-logo-light.svg"
      : "/brand/jadvix-logo.svg";
  return (
    <Image
      src={src}
      alt={`${company.academyName}`}
      width={220}
      height={48}
      priority={priority}
      className={className}
    />
  );
}
