import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../components/Dashboard';

type CurrentUser = {
  id: string;
  email: string;
  role: 'admin' | 'client';
  clientId: string | null;
};

function DashboardPage() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadCurrentUser = async () => {
      const savedToken = localStorage.getItem('caseflow_token');

      if (!savedToken) {
        navigate('/login', { replace: true });
        return;
      }

      try {
        const response = await fetch('http://localhost:3000/api/auth/me', {
          headers: {
            Authorization: `Bearer ${savedToken}`,
          },
        });

        const data: CurrentUser | { message?: string } = await response.json();

        if (!response.ok) {
          localStorage.removeItem('caseflow_token');
          navigate('/login', { replace: true });
          return;
        }

        setCurrentUser(data as CurrentUser);
      } catch {
        setError('Unable to load dashboard');
      } finally {
        setLoading(false);
      }
    };

    void loadCurrentUser();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('caseflow_token');
    setCurrentUser(null);
    navigate('/login', { replace: true });
  };

  if (loading) {
    return (
      <>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
          Dashboard
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-700">
          Loading your session...
        </p>
      </>
    );
  }

  if (error) {
    return (
      <>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
          Dashboard
        </h1>
        <p className="mt-4 text-sm font-semibold text-red-700">{error}</p>
      </>
    );
  }

  if (!currentUser) {
    return null;
  }

  return (
    <Dashboard
      email={currentUser.email}
      role={currentUser.role}
      onLogout={handleLogout}
    />
  );
}

export default DashboardPage;
