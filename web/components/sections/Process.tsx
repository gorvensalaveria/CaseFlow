// app/components/sections/Process.tsx

export default function Process() {
  return (
    <section id="process" className="py-20 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h3 className="text-sm tracking-widest text-brand-blue uppercase">
          Process
        </h3>

        <h2 className="text-3xl font-bold mt-2">
          Transforming ideas into functional digital solutions
        </h2>

        <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
          A clear, repeatable full-stack workflow that keeps projects
          structured, transparent, and aligned with real business goals—from
          discovery to deployment and long-term optimization.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {/* Step 1 */}
        <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700">
          <p className="text-brand-blue font-bold text-lg mb-2">1</p>
          <h4 className="font-semibold mb-2">
            Discovery, consultation & technical scoping
          </h4>
          <p className="text-slate-300 text-sm">
            Defining goals, user journeys, system requirements, and business
            rules. Identifying APIs, integrations, and constraints for platforms
            such as WordPress, Moodle LMS, and custom full-stack applications.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700">
          <p className="text-brand-blue font-bold text-lg mb-2">2</p>
          <h4 className="font-semibold mb-2">
            Architecture, planning & stack design
          </h4>
          <p className="text-slate-300 text-sm">
            Planning system structure using technologies like React, Next.js,
            Node.js, Express, PHP, WordPress, Moodle LMS, REST APIs, PostgreSQL,
            MySQL, Docker, and AWS. Establishing data flow, modular structure,
            and integration strategy.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700">
          <p className="text-brand-blue font-bold text-lg mb-2">3</p>
          <h4 className="font-semibold mb-2">
            Development, integration & iterative testing
          </h4>
          <p className="text-slate-300 text-sm">
            Building features in agile iterations: implementing APIs, creating
            custom WP plugins, Moodle modules, and full-stack applications.
            Ensuring quality through continuous testing and refinement.
          </p>
        </div>

        {/* Step 4 */}
        <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700">
          <p className="text-brand-blue font-bold text-lg mb-2">4</p>
          <h4 className="font-semibold mb-2">
            Deployment, launch & continuous optimization
          </h4>
          <p className="text-slate-300 text-sm">
            Deploying applications on AWS, 10Web, Cloudways, and other hosting
            platforms. Optimizing speed, monitoring logs, fixing edge cases, and
            providing long-term support for WordPress, Moodle LMS, and
            full-stack systems.
          </p>
        </div>
      </div>
    </section>
  );
}
