"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [showContacts, setShowContacts] = useState(false);

  const contactButtonBase =
    "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900";
  return (
    <header className="bg-white-900 --color-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="font-heading text-lg">Gorven G. Salaveria</div>
        <nav className="hidden md:flex gap-6 text-sm px-0.1 py-0.1 items-center">
          <a href="#hero" className="hover:opacity-80">
            Hero
          </a>
          <a href="#skills" className="hover:opacity-80">
            Skills
          </a>
          <a href="#clients-projects" className="hover:opacity-80">
            Clients Projects
          </a>
          <a href="#personal-project" className="hover:opacity-80">
            Personal Project
          </a>
          <a href="#process" className="hover:opacity-80">
            Process
          </a>
          <a href="#testimonials" className="hover:opacity-80 ">
            Testimonials
          </a>
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowContacts((prev) => !prev)}
              className={`${contactButtonBase} border border-white/30 bg-slate-900 text-white hover:bg-gray-400 cursor-pointer`}
            >
              Contact me
            </button>

            {showContacts && (
              <div className="absolute top-full left-10 mb-3 w-64 rounded-2xl border border-white/15 bg-slate-900/95 p-3 shadow-xl backdrop-blur">
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
                    className={`${contactButtonBase} w-full bg-slate-800 text-sm text-slate-100 hover:bg-white hover:text-slate-900 border border-white/10`}
                  >
                    Email me
                  </a>

                  <a
                    href="viber://chat?number=09606101392"
                    className={`${contactButtonBase} w-full bg-slate-800 text-sm text-slate-100 hover:bg-white hover:text-slate-900 border border-white/10`}
                  >
                    Viber: 0960&nbsp;610&nbsp;1392
                  </a>

                  <a
                    href="https://wa.me/639606101392"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${contactButtonBase} w-full bg-slate-800 text-sm text-slate-100 hover:bg-white hover:text-slate-900 border border-white/10`}
                  >
                    WhatsApp: 0960&nbsp;610&nbsp;1392
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
