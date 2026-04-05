export type LoginInput = {
  email: string;
  password: string;
};

export type AuthenticatedUser = {
  id: string;
  email: string;
  role: 'admin' | 'client';
  clientId: string | null;
};
