// app/components/sections/Testimonials.tsx

export default function Testimonials() {
  const testimonials = [
    {
      name: "Leonard S.",
      role: "CEO, ASUN Migrations",
      comment:
        "Gorven consistently delivers high-quality solutions. He built our entire CRM from scratch and transformed the way our team handles clients, documents, and workflow. Very reliable and fast.",
    },
    {
      name: "Jasmeet K.",
      role: "Project Manager, Capytech",
      comment:
        "A highly skilled full-stack developer. Gorven handles complex WordPress and Moodle tasks with ease and produces clean, maintainable code. Great communication and dependable.",
    },
    {
      name: "Jimmy D.",
      role: "Technical Evaluator",
      comment:
        "His ability to understand system logic, create efficient backend structures, and build full-stack features is impressive. Strong grasp of modern development tools and best practices.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-slate-white text-slate-900 border-t border-white/5 py-20 px-4 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto text-center">
        <p className="uppercase tracking-widest text-brand-blue text-sm mb-3">
          Testimonials
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What people say about working with me
        </h2>

        <p className="text-slate-900 max-w-2xl mx-auto mb-16">
          Feedback from clients, managers, and evaluators I’ve worked with
          across custom systems, WordPress development, LMS projects, and
          full-stack builds.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-slate-800 p-6 rounded-2xl flex flex-col gap-4"
          >
            <p className="text-slate-50 text-sm leading-relaxed">
              “{t.comment}”
            </p>

            <div className="mt-auto">
              <p className="font-semibold text-sm text-slate-50">{t.name}</p>
              <p className="text-xs text-slate-50">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
