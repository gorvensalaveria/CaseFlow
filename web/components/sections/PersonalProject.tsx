// app/components/sections/PersonalProject.tsx
import Image from "next/image";
import Link from "next/link";

export default function PersonalProject() {
  return (
    <section
      id="personal-project"
      className="bg-slate-950 text-white border-t border-white/5 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900">
          {/* Background image */}
          <div className="relative h-[260px] md:h-[420px]">
            <Image
              src="/personal-project.webp" // put this file inside /public
              alt="Personal full-stack project screenshot"
              fill
              priority
              className="object-cover"
            />

            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40" />
          </div>

          {/* Text content overlay */}
          <div className="absolute inset-0 flex items-end">
            <div className="w-full px-6 py-6 md:px-10 md:py-8">
              <p className="text-xs md:text-sm font-semibold tracking-[0.2em] text-brand-blue uppercase">
                Personal project
              </p>

              <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
                Transforming ideas into a full-stack digital product
              </h2>

              <p className="mt-3 max-w-xl text-sm md:text-base text-slate-200">
                A self-initiated full-stack project where I designed and built
                the product from scratch—covering UX, front-end, back-end, and
                deployment. It showcases how I approach architecture, tooling,
                and real-world problem solving.
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] md:text-xs text-slate-200">
                <span className="rounded-full bg-slate-900/70 border border-white/15 px-3 py-1">
                  React &amp; Next.js
                </span>
                <span className="rounded-full bg-slate-900/70 border border-white/15 px-3 py-1">
                  TypeScript &amp; Tailwind CSS
                </span>
                <span className="rounded-full bg-slate-900/70 border border-white/15 px-3 py-1">
                  Full-stack architecture
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-[11px] md:text-xs text-slate-200">
                <span className="rounded-full bg-slate-900/70 border border-white/15 px-3 py-1">
                  Python
                </span>
                <span className="rounded-full bg-slate-900/70 border border-white/15 px-3 py-1">
                  PostgreSQL
                </span>
                <span className="rounded-full bg-slate-900/70 border border-white/15 px-3 py-1">
                  Git
                </span>
                <span className="rounded-full bg-slate-900/70 border border-white/15 px-3 py-1">
                  Express JS
                </span>
              </div>

              {/* CTA */}
              <div className="mt-5">
                <Link
                  href="#" // or replace with your real case study link
                  className="inline-flex items-center text-sm font-medium text-brand-blue hover:text-brand-blue/80"
                >
                  View case study →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
