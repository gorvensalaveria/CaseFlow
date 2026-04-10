type DashboardProps = {
  email: string;
  role: 'admin' | 'client';
  onLogout: () => void;
};

function Dashboard({ email, role, onLogout }: DashboardProps) {
  return (
    <section className="mt-8 rounded-3xl border border-blue-900/10 bg-blue-50/70 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
            Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950">
            Welcome back
          </h2>
          <p className="mt-3 text-sm text-slate-700">
            Logged in as <strong>{email}</strong>
          </p>
          <p className="mt-1 text-sm text-slate-700">Role: {role}</p>
        </div>

        <button
          className="rounded-full border border-blue-700 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
          type="button"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-900/5">
          <p className="text-sm font-medium text-slate-500">Active Matters</p>
          <p className="mt-2 text-3xl font-semibold text-slate-950">1</p>
        </article>

        <article className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-900/5">
          <p className="text-sm font-medium text-slate-500">Pending Documents</p>
          <p className="mt-2 text-3xl font-semibold text-slate-950">2</p>
        </article>

        <article className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-900/5">
          <p className="text-sm font-medium text-slate-500">AI Drafts</p>
          <p className="mt-2 text-3xl font-semibold text-slate-950">1</p>
        </article>
      </div>
    </section>
  );
}

export default Dashboard;
