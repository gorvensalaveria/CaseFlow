// app/components/Footer.tsx
"use client";

import { useState } from "react";

export default function Footer() {
  const [showContacts, setShowContacts] = useState(false);

  const contactButtonBase =
    "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900";

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-8 md:py-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left: branding */}
          <div>
            <p className="text-sm font-semibold text-white">
              Gorven G. Salaveria
            </p>
            <p className="text-xs md:text-sm text-slate-400 mt-1">
              Full-stack developer specialising in WordPress, Moodle LMS, and
              modern React / Next.js applications.
            </p>
          </div>

          {/* Right: quick nav */}
          <nav className="flex flex-wrap items-center gap-4 text-xs md:text-sm">
            <a href="#hero" className="hover:text-white transition">
              Hero
            </a>
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
            <a href="#clients-projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#personal-project" className="hover:text-white transition">
              Personal project
            </a>
            <a href="#process" className="hover:text-white transition">
              Process
            </a>
            <a href="#testimonials" className="hover:text-white transition">
              Testimonials
            </a>

            {/* Contact button + popup */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowContacts((prev) => !prev)}
                className={`${contactButtonBase} border border-white/30 bg-slate-900 text-white hover:bg-slate-800 cursor-pointer`}
              >
                Contact me
              </button>

              {showContacts && (
                <div className="absolute py-2 bottom-full right-0 mt-3 w-64 rounded-2xl border border-white/15 bg-slate-900/95 p-3 shadow-xl backdrop-blur">
                  {/* Close button */}
                  <button
                    type="button"
                    onClick={() => setShowContacts(false)}
                    className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-slate-800 text-xs text-slate-200 hover:bg-white hover:text-slate-900 cursor-pointer"
                    aria-label="Close contact options"
                  >
                    ×
                  </button>

                  <div className="space-y-2 pt-2">
                    <a
                      href="mailto:gorvengarciasalaveria@gmail.com"
                      className={`${contactButtonBase} w-full bg-slate-800 text-slate-100 hover:bg-white hover:text-slate-900 border border-white/10 cursor-pointer`}
                    >
                      Email me
                    </a>

                    <a
                      href="viber://chat?number=+639606101392"
                      className={`${contactButtonBase} w-full bg-slate-800 text-slate-100 hover:bg-white hover:text-slate-900 border border-white/10 cursor-pointer`}
                    >
                      Viber: 0960&nbsp;610&nbsp;1392
                    </a>

                    <a
                      href="https://wa.me/639606101392"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${contactButtonBase} w-full bg-slate-800 text-slate-100 hover:bg-white hover:text-slate-900 border border-white/10 cursor-pointer`}
                    >
                      WhatsApp: 0960&nbsp;610&nbsp;1392
                    </a>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Bottom row */}
        <div className="mt-6 pt-6 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Gorven G. Salaveria. All rights
            reserved.
          </p>

          <div className="flex items-center gap-4 text-xs md:text-sm">
            <a
              href="https://github.com/gorvensalaveria"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>
            <span className="text-slate-500">
              Built with Next.js &amp; Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
