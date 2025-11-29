// app/components/sections/Skills.tsx
export default function Skills() {
  return (
    // Skills Section

    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h3 className="text-sm tracking-widest text-brand-blue uppercase">
          Skills
        </h3>
        <h2 className="text-3xl font-bold mt-2">
          Crafting digital solutions with precision and power
        </h2>
        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
          A technical stack that lets me build end-to-end solutions—fast,
          scalable, and maintainable across modern platforms.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {/* 1 */}
        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
          <h4 className="font-semibold mb-2">Web foundations</h4>
          <p className="text-slate-600 text-sm mb-3">
            Clean, responsive front-end development built with semantic HTML and
            modern CSS.
          </p>
          <p className="text-xs text-slate-500">
            HTML • CSS • TailwindCSS • Responsive Design • Accessibility
          </p>
        </div>

        {/* 2 */}
        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
          <h4 className="font-semibold mb-2">Server-side development</h4>
          <p className="text-slate-600 text-sm mb-3">
            Scalable back-end logic, secure APIs, and reliable data
            architecture.
          </p>
          <p className="text-xs text-slate-500">
            Node.js • Express • REST APIs • PHP • WordPress • MySQL • PostgreSQL
            • Authentication
          </p>
        </div>

        {/* 3 */}
        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
          <h4 className="font-semibold mb-2">Modern JavaScript ecosystem</h4>
          <p className="text-slate-600 text-sm mb-3">
            Interactive, high-performance apps with modern tooling and
            frameworks.
          </p>
          <p className="text-xs text-slate-500">
            React • Next.js • TypeScript • Zustand • SWR • Component
            Architecture
          </p>
        </div>

        {/* 4 */}
        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
          <h4 className="font-semibold mb-2">Platforms & DevOps</h4>
          <p className="text-slate-600 text-sm mb-3">
            Deployment, infrastructure, and optimization across multiple
            platforms.
          </p>
          <p className="text-xs text-slate-500">
            Docker • AWS • Cloudways • 10Web • Git • CI/CD • Performance
            Monitoring • Moodle LMS
          </p>
        </div>
      </div>
    </section>
  );
}
