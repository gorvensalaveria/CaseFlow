import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(147,197,253,0.45),transparent_28%),linear-gradient(160deg,#eff6ff_0%,#dbeafe_45%,#f8fbff_100%)] px-6 py-10 text-slate-900">
      <section className="mx-auto w-full max-w-xl rounded-[30px] border border-blue-900/10 bg-white/85 p-8 shadow-[0_24px_80px_rgba(30,64,175,0.12)] backdrop-blur">
        <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700">
          CaseFlow
        </p>

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
