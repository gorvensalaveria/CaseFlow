import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../../config/env';
import type { AuthenticatedUser } from './auth.types';

export type AuthenticatedRequest = Request & {
  user?: AuthenticatedUser;
};

export const requireAuth = (
  request: AuthenticatedRequest,
  response: Response,
  next: NextFunction,
) => {
  const authorizationHeader = request.headers.authorization;

  if (!authorizationHeader?.startsWith('Bearer ')) {
    return response.status(401).json({
      message: 'Missing bearer token',
    });
  }

  const token = authorizationHeader.replace('Bearer ', '').trim();

  try {
    const payload = jwt.verify(token, env.jwtSecret) as AuthenticatedUser;
    request.user = payload;
    return next();
  } catch {
    return response.status(401).json({
      message: 'Invalid or expired token',
    });
  }
};
