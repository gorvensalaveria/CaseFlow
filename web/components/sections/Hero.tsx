"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [showContacts, setShowContacts] = useState(false);

  const contactButtonBase =
    "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900";

  return (
    <section
      id="hero"
      className="bg-slate-900 text-white border-b border-white/5"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:py-20">
        {/* Left side */}
        <div className="w-full md:w-1/2">
          <p className="text-sm text-slate-300 mb-3">Hire</p>

          <h1 className="text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
            Full-stack developer
          </h1>

          <p className="mt-4 text-slate-300 max-w-md text-sm md:text-base">
            I build robust web applications that solve real problems. My code
            transforms complex challenges into elegant, functional systems
            across WordPress, React, and Moodle platforms.
          </p>

          {/* Buttons row */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://www.dropbox.com/scl/fi/1hjyuwwblnc68b5tbgcla/Resume_Salaveria_Gorven_G.pdf?rlkey=i4z2yus7thezaneors768zj7i&e=2&st=50zq10e5&dl=0"
              className={`${contactButtonBase} bg-brand-blue text-white hover:bg-brand-blue/90 hover:text-slate-400`}
            >
              View Resume
            </a>

            {/* Contact button + popup wrapper */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowContacts((prev) => !prev)}
                className={`${contactButtonBase} border border-white/30 bg-white text-black hover:bg-gray-400 cursor-pointer`}
              >
                Contact me
              </button>

              {showContacts && (
                <div className="absolute bottom-full right-0 mb-3 w-64 rounded-2xl border border-white/15 bg-slate-900/95 p-3 shadow-xl backdrop-blur">
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
                      href="viber://chat?number=+639606101392"
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
          </div>
        </div>

        {/* Right side: photo */}
        <div className="w-full md:w-1/2">
          <div className="relative mx-auto max-w-md rounded-3xl bg-white p-4 shadow-lg">
            <Image
              src="/hero-photo.webp"
              alt="Gorven G. Salaveria portrait"
              width={900}
              height={1200}
              className="h-auto w-full rounded-2xl object-cover object-[50%_20%]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
