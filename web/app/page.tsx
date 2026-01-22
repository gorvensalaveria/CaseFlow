"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type CaseStatus = "NEW" | "IN_PROGRESS" | "WAITING" | "COMPLETED";

type CaseItem = {
  id: number;
  title: string;
  status: CaseStatus;
  type: string;
  created_at: string;
  updated_at: string;
  client_name: string;
  client_email: string;
};

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000";

function formatDate(dateString: string) {
  const d = new Date(dateString);
  return d.toLocaleDateString("en-PH", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function statusLabel(status: CaseStatus) {
  switch (status) {
    case "NEW":
      return "New";
    case "IN_PROGRESS":
      return "In progress";
    case "WAITING":
      return "Waiting on client";
    case "COMPLETED":
      return "Completed";
    default:
      return status;
  }
}

function statusColorClasses(status: CaseStatus) {
  switch (status) {
    case "NEW":
      return "bg-sky-500/10 text-sky-300 border-sky-500/40";
    case "IN_PROGRESS":
      return "bg-amber-500/10 text-amber-300 border-amber-500/40";
    case "WAITING":
      return "bg-purple-500/10 text-purple-300 border-purple-500/40";
    case "COMPLETED":
      return "bg-emerald-500/10 text-emerald-300 border-emerald-500/40";
    default:
      return "bg-slate-500/10 text-slate-300 border-slate-500/40";
  }
}

export default function CaseflowDashboardPage() {
  const [cases, setCases] = useState<CaseItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCases() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`${API_BASE_URL}/api/cases`);

        if (!res.ok) {
          throw new Error(`API error: ${res.status} ${res.statusText}`);
        }

        const data = (await res.json()) as CaseItem[];
        setCases(data);
      } catch (err: any) {
        console.error("Error fetching cases:", err);
        setError(err.message || "Failed to load cases");
      } finally {
        setLoading(false);
      }
    }

    fetchCases();
  }, []);

  const totalCases = cases.length;
  const activeCases = cases.filter((c) => c.status === "IN_PROGRESS").length;
  const waitingCases = cases.filter((c) => c.status === "WAITING").length;
  const completedCases = cases.filter((c) => c.status === "COMPLETED").length;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
        {/* Header */}
        <header className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-brand-blue mb-2">
              Personal project
            </p>
            <h1 className="text-3xl font-bold md:text-4xl">
              CaseFlow – Case Management Dashboard
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
              A demo case management dashboard inspired by real-world CRM and
              migration workflows. Built with Next.js, TypeScript, Tailwind CSS,
              Node.js, Express, and PostgreSQL.
            </p>
          </div>

          <div className="text-xs text-slate-400 md:text-right">
            <p>
              Backend API:{" "}
              <span className="font-mono text-slate-200">
                {API_BASE_URL}/api/cases
              </span>
            </p>
            <p>Data shown here is sample demo data.</p>
          </div>
        </header>

        {/* Stats cards */}
        <section className="mb-10 grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
            <p className="text-xs text-slate-400">Total cases</p>
            <p className="mt-2 text-2xl font-semibold">{totalCases}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
            <p className="text-xs text-slate-400">In progress</p>
            <p className="mt-2 text-2xl font-semibold">{activeCases}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
            <p className="text-xs text-slate-400">Waiting on client</p>
            <p className="mt-2 text-2xl font-semibold">{waitingCases}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
            <p className="text-xs text-slate-400">Completed</p>
            <p className="mt-2 text-2xl font-semibold">{completedCases}</p>
          </div>
        </section>

        {/* Content */}
        <section className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 md:p-6">
          <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold">Cases</h2>
              <p className="text-xs text-slate-400">
                Showing a list of active and historical cases with client
                details and status.
              </p>
            </div>
          </div>

          {loading && (
            <div className="py-10 text-center text-sm text-slate-400">
              Loading cases from API…
            </div>
          )}

          {error && !loading && (
            <div className="py-10 text-center text-sm text-rose-400">
              Failed to load cases: {error}
            </div>
          )}

          {!loading && !error && cases.length === 0 && (
            <div className="py-10 text-center text-sm text-slate-400">
              No cases found. Add some demo data to your PostgreSQL database.
            </div>
          )}

          {!loading && !error && cases.length > 0 && (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-xs uppercase text-slate-400">
                    <th className="py-2 pr-4">Case</th>
                    <th className="py-2 pr-4">Client</th>
                    <th className="py-2 pr-4">Status</th>
                    <th className="py-2 pr-4">Type</th>
                    <th className="py-2 pr-4">Last updated</th>
                  </tr>
                </thead>
                <tbody>
                  {cases.map((c) => (
                    <tr
                      key={c.id}
                      className="border-b border-white/5 hover:bg-slate-800/60"
                    >
                      <td className="py-2 pr-4 align-middle">
                        <Link
                          href={`/cases/${c.id}`}
                          className="block hover:text-brand-blue transition"
                        >
                          <div className="font-medium text-slate-50">
                            {c.title}
                          </div>
                          <div className="text-xs text-slate-400">
                            Case ID #{c.id}
                          </div>
                        </Link>
                      </td>
                      <td className="py-2 pr-4 align-middle">
                        <div className="text-slate-100">{c.client_name}</div>
                        <div className="text-xs text-slate-400">
                          {c.client_email}
                        </div>
                      </td>
                      <td className="py-2 pr-4 align-middle">
                        <span
                          className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${statusColorClasses(
                            c.status
                          )}`}
                        >
                          {statusLabel(c.status)}
                        </span>
                      </td>
                      <td className="py-2 pr-4 align-middle text-slate-100">
                        {c.type}
                      </td>
                      <td className="py-2 pr-4 align-middle text-slate-200">
                        {formatDate(c.updated_at)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
