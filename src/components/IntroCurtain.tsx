/**
 * Opening animation: a navy curtain where the Jadvix mark draws in and the
 * brand stripe sweeps before the curtain lifts. Pure CSS (globals.css
 * "opening intro"); only shown while html[data-intro] is set by the pre-paint
 * script in layout.tsx — once per session, never for reduced motion.
 */
export function IntroCurtain() {
  return (
    <div className="intro" aria-hidden>
      <div className="flex flex-col items-center">
        {/* eslint-disable-next-line @next/next/no-img-element -- static SVG */}
        <img src="/brand/jadvix-mark.svg" alt="" className="intro-mark" />
        <p className="intro-word">Jadvix Academy</p>
        <div className="intro-stripe tri-stripe" />
      </div>
    </div>
  );
}
