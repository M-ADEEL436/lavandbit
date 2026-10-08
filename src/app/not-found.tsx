import { Cta } from "@/components/Cta";
import { mainNav } from "@/lib/nav";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-page flex max-w-2xl flex-col items-start gap-6">
        <h1 className="text-h2">That page does not exist</h1>
        <p className="text-[1.02rem] leading-relaxed text-ink-2">
          The link may be out of date, or the page may have moved. Here is
          everything that is worth reading.
        </p>

        <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-3">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-[0.95rem] font-medium text-brand hover:underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <Cta href="/get-started" size="lg">
            Get Started Free
          </Cta>
        </div>
      </div>
    </section>
  );
}
