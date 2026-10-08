import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "light" | "muted" | "dark";
}) {
  const tones = {
    light: "bg-canvas",
    muted: "bg-surface-2",
    dark: "bg-ink-panel text-inverse-2",
  };
  return (
    /* 64/80px rather than 80/96px. The page carries around a dozen sections,
       and at the old value the padding alone added close to a thousand pixels
       of scroll on the homepage. */
    <section id={id} className={`${tones[tone]} py-12 sm:py-16 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

/** The small uppercase label that used to sit above the heading is gone:
 *  the headings carry the meaning on their own, and the labels were adding a
 *  line of vertical space above every section on the site. */
export function SectionHead({
  title,
  intro,
  tone = "light",
  align = "left",
}: {
  title: ReactNode;
  intro?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={`flex max-w-3xl flex-col gap-4 ${
        align === "center" ? "mx-auto text-center items-center" : ""
      }`}
    >
      <h2 className={`text-h2 ${isDark ? "text-inverse" : ""}`}>
        {title}
      </h2>
      {intro && (
        <div className={`text-[1.05rem] leading-relaxed ${isDark ? "text-inverse-2" : "text-ink-2"}`}>
          {intro}
        </div>
      )}
    </div>
  );
}

