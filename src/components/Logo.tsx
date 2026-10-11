import Image from "next/image";

/**
 * Official Jadvix logo (mark + wordmark), the same artwork as jadvix.uk.
 * Use `variant="light"` (white wordmark) on dark/navy backgrounds and the
 * default dark wordmark on light backgrounds. Never recolor, stretch, or crop.
 * Intrinsic ratio 2826:654 (≈ 4.32:1); width/height prevent layout shift.
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
      alt="Jadvix"
      width={173}
      height={40}
      priority={priority}
      className={className}
    />
  );
}
