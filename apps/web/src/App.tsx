import { FormEvent, useState } from 'react';
import LoginForm from './components/LoginForm';

type LoginResponse = {
  token: string;
  user: {
    id: string;
    email: string;
    role: 'admin' | 'client';
    clientId: string | null;
  };
};

type CurrentUser = {
  id: string;
  email: string;
  role: 'admin' | 'client';
  clientId: string | null;
};

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setCurrentUser(null);
    setToken('');

    try {
      const loginResponse = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const loginData: LoginResponse | { message?: string } =
        await loginResponse.json();

      if (!loginResponse.ok) {
        setError(
          'message' in loginData ? (loginData.message ?? 'Login failed') : 'Login failed',
        );
        return;
      }

      const authToken = (loginData as LoginResponse).token;
      setToken(authToken);

      const meResponse = await fetch('http://localhost:3000/api/auth/me', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      const meData: CurrentUser | { message?: string } = await meResponse.json();

      if (!meResponse.ok) {
        setError(
          'message' in meData
            ? (meData.message ?? 'Unable to load current user')
            : 'Unable to load current user',
        );
        return;
      }

      setCurrentUser(meData as CurrentUser);
    } catch {
      setError('Unable to connect to the API');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setEmail('');
    setPassword('');
    setToken('');
    setCurrentUser(null);
    setError('');
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(147,197,253,0.45),transparent_28%),linear-gradient(160deg,#eff6ff_0%,#dbeafe_45%,#f8fbff_100%)] px-6 py-10 text-slate-900">
      <section className="mx-auto w-full max-w-xl rounded-[30px] border border-blue-900/10 bg-white/85 p-8 shadow-[0_24px_80px_rgba(30,64,175,0.12)] backdrop-blur">
        <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700">
          CaseFlow
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
          Login
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Sign in to test the CaseFlow frontend against the Express auth API.
        </p>

        <LoginForm
          email={email}
          password={password}
          loading={loading}
          onEmailChange={setEmail}
          onPasswordChange={setPassword}
          onSubmit={handleSubmit}
        />

        {error ? (
          <p className="mt-4 text-sm font-semibold text-red-700">{error}</p>
        ) : null}

        {currentUser ? (
          <section className="mt-6 rounded-3xl border border-blue-900/10 bg-blue-50/70 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-950">
                  Authenticated User
                </h2>
                <p className="mt-2 text-sm text-slate-700">
                  Logged in as <strong>{currentUser.email}</strong>
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Role: {currentUser.role}
                </p>
              </div>

              <button
                className="rounded-full border border-blue-700 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
                type="button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>

            <div className="mt-4 rounded-2xl bg-slate-950 p-4 text-xs text-blue-50">
              <p className="mb-2 font-semibold text-blue-200">Current token</p>
              <pre className="overflow-auto whitespace-pre-wrap break-all">
                {token}
              </pre>
            </div>

            <div className="mt-4 rounded-2xl bg-slate-950 p-4 text-xs text-blue-50">
              <p className="mb-2 font-semibold text-blue-200">Current user</p>
              <pre>{JSON.stringify(currentUser, null, 2)}</pre>
            </div>
          </section>
        ) : null}
      </section>
    </main>
  );
}

export default App;
