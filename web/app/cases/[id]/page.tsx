"use client";

import React from "react";

type Activity = {
  id: number;
  message: string;
  created_at: string;
};

type CaseDetail = {
  id: number;
  title: string;
  status: string;
  type: string;
  created_at: string;
  updated_at: string;
  client_name: string;
  client_email: string;
  client_phone: string;
  activities: Activity[];
};

export default function CaseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);

  const [data, setData] = React.useState<CaseDetail | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`http://localhost:4000/api/cases/${id}`);
        if (!res.ok) throw new Error(`API error: ${res.status} ${res.statusText}`);

        const json = (await res.json()) as CaseDetail;
        if (!cancelled) setData(json);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Unknown error");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) return <div className="p-6">Loading case...</div>;
  if (error) return <div className="p-6 text-red-600">Failed to load: {error}</div>;
  if (!data) return <div className="p-6">No case found.</div>;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <div className="text-sm text-slate-500">Case #{data.id}</div>
        <h1 className="text-2xl font-semibold">{data.title}</h1>
        <div className="mt-2 flex gap-2 text-sm">
          <span className="rounded-full border px-3 py-1">{data.status}</span>
          <span className="rounded-full border px-3 py-1">{data.type}</span>
        </div>
      </div>

      {/* Client */}
      <div className="rounded-xl border p-4">
        <div className="text-sm font-medium text-slate-600">Client</div>
        <div className="mt-2">
          <div className="font-semibold">{data.client_name}</div>
          <div className="text-sm text-slate-600">{data.client_email}</div>
          <div className="text-sm text-slate-600">{data.client_phone}</div>
        </div>
      </div>

      {/* Activity timeline */}
      <div className="rounded-xl border p-4">
        <div className="text-sm font-medium text-slate-600">Activity</div>

        <div className="mt-3 space-y-3">
          {data.activities?.length ? (
            data.activities.map((a) => (
              <div key={a.id} className="rounded-lg border p-3">
                <div className="text-sm">{a.message}</div>
                <div className="mt-1 text-xs text-slate-500">
                  {new Date(a.created_at).toLocaleString()}
                </div>
              </div>
            ))
          ) : (
            <div className="text-sm text-slate-500">No activity yet.</div>
          )}
        </div>
      </div>
    </div>
  );
}
