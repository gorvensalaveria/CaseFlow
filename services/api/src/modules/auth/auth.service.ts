import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { env } from '../../config/env';
import { prisma } from '../../lib/prisma';
import type { AuthenticatedUser, LoginInput } from './auth.types';

const toAuthenticatedUser = (user: {
  id: string;
  email: string;
  role: 'admin' | 'client';
  clientId: string | null;
}): AuthenticatedUser => ({
  id: user.id,
  email: user.email,
  role: user.role,
  clientId: user.clientId,
});

export const authService = {
  async login(input: LoginInput) {
    const normalizedEmail = input.email.trim().toLowerCase();

    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
      select: {
        id: true,
        email: true,
        role: true,
        clientId: true,
        passwordHash: true,
      },
    });

    if (!user) {
      throw new Error('Invalid email or password');
    }

    const passwordMatches = await bcrypt.compare(input.password, user.passwordHash);

    if (!passwordMatches) {
      throw new Error('Invalid email or password');
    }

    const authenticatedUser = toAuthenticatedUser(user);
    const token = jwt.sign(authenticatedUser, env.jwtSecret, {
      expiresIn: '1d',
    });

    return {
      token,
      user: authenticatedUser,
    };
  },

  async getCurrentUser(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        role: true,
        clientId: true,
      },
    });

    if (!user) {
      return null;
    }

    return toAuthenticatedUser(user);
  },
};
