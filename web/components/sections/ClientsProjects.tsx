// app/components/sections/Projects.tsx
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    slug: "learning-management-system",
    title: "Learning Management System (Moodle LMS)",
    jobTitle: "Solutions Developer",
    date: "November 23, 2023 - July 15, 2025",
    description:
      "Custom LMS with lessons, quizzes, learner tracking, and employee training.",
    tags: ["Moodle", "LMS", "E-learning", "PHP", "MySQL"],
    image: "/khalifa.webp",
    url: "https://learning.khalifafund.ae/",
  },
  {
    slug: "ecommerce-platform",
    title: "E-commerce Platform (WooCommerce)",
    jobTitle: "Solutions Developer",
    date: "January 01, 2025 - August 29, 2025",
    description:
      "Responsive online store with tailored product pages, cart, checkout, and easy admin updates.",
    tags: ["WordPress", "WooCommerce", "E-commerce", "PHP", "MySQL"],
    image: "/practicetestacademy.webp", // put file in /public/projects/
    url: "https://www.practicetestsacademy.com/",
  },
  {
    slug: "portfolio-website",
    title: "CRM & Case Management Platform (ASUN Migrations)",
    jobTitle: "Full-Stack WordPress Engineer – CRM Platform Development",
    date: "August 29, 2025 - Present",
    description:
      "Custom CRM + Client Portal for migration agencies with client management, matters, workflows, documents, payments & compliance.",
    tags: ["WordPress", "Custom CRM", "Case Management", "PHP", "MySQL"],
    image: "/asunmigrations.webp",
    url: "https://asunmigrations.com.au/",
  },
];

export default function Projects() {
  return (
    <section
      id="clients-projects"
      className="bg-slate-900 text-white border-t border-white/5 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold tracking-[0.2em] text-brand-blue uppercase">
            Clients Projects
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight">
            Projects I have worked on
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-300">
            A selection of work that highlights my full-stack skills across
            front-end, back-end, and learning platforms.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group rounded-2xl bg-slate-800/70 border border-white/10 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative aspect-[4/3] bg-slate-700">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3 flex-1">
                <h1 className="text-base font-semibold">{project.title}</h1>
                <h2 className="text-sm text-slate-300">{project.jobTitle}</h2>
                <h4 className="text-sm text-slate-300">{project.date}</h4>
                <p className="text-sm text-slate-300">{project.description}</p>

                {/* Tags */}
                <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-slate-300">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-900/50 border border-white/10 px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {/* Link */}
                <div className="mt-auto pt-4">
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-medium text-brand-blue hover:text-brand-blue/80"
                  >
                    View project →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
