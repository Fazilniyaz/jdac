/**
 * Official Jadvix logo (mark + wordmark), the same artwork as jadvix.uk.
 * Both variants are rendered and CSS shows the right one for the theme
 * (dark wordmark on light, white wordmark on dark / navy bands), so there is no
 * flash on load. Never recolor, stretch, or crop. Ratio 2826:654 (≈ 4.32:1).
 */
export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element -- static SVG */}
      <img src="/brand/jadvix-logo.svg" alt="Jadvix" width={173} height={40} className={`logo-on-light ${className}`} />
      {/* eslint-disable-next-line @next/next/no-img-element -- static SVG */}
      <img src="/brand/jadvix-logo-light.svg" alt="Jadvix" width={173} height={40} className={`logo-on-dark ${className}`} />
    </>
  );
}
