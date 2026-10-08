import Link from "next/link";
import type { ReactNode } from "react";

export function Breadcrumbs({
  trail,
}: {
  trail: readonly { name: string; path: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.7rem] tracking-wide text-ink-3">
        {trail.map((crumb, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-ink-2">
                  {crumb.name}
                </span>
              ) : (
                <Link href={crumb.path} className="hover:text-brand">
                  {crumb.name}
                </Link>
              )}
              {!last && <span aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function PageHero({
  title,
  sub,
  trail,
  children,
}: {
  title: string;
  sub?: string;
  trail?: readonly { name: string; path: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-canvas py-14 sm:py-20">
      <div className="container-page flex flex-col gap-6">
        {trail && <Breadcrumbs trail={trail} />}
        <h1 className="max-w-4xl text-h2">{title}</h1>
        {sub && <p className="max-w-2xl text-[1.05rem] leading-relaxed text-ink-2">{sub}</p>}
        {children}
      </div>
    </section>
  );
}
