import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

type LoginResponse = {
  token: string;
  user: {
    id: string;
    email: string;
    role: 'admin' | 'client';
    clientId: string | null;
  };
};

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const restoreSession = async () => {
      const savedToken = localStorage.getItem('caseflow_token');

      if (!savedToken) {
        return;
      }

      try {
        const response = await fetch('http://localhost:3000/api/auth/me', {
          headers: {
            Authorization: `Bearer ${savedToken}`,
          },
        });

        if (response.ok) {
          navigate('/dashboard', { replace: true });
        }
      } catch {
        setError('Unable to restore session');
      }
    };

    void restoreSession();
  }, [navigate]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');

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
      localStorage.setItem('caseflow_token', authToken);
      navigate('/dashboard', { replace: true });
    } catch {
      setError('Unable to connect to the API');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
    </>
  );
}

export default LoginPage;
