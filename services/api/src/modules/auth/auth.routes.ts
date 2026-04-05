import { Router } from 'express';
import { z } from 'zod';
import { authService } from './auth.service';
import { requireAuth, type AuthenticatedRequest } from './auth.middleware';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const authRouter = Router();

authRouter.post('/login', async (request, response) => {
  const parsedBody = loginSchema.safeParse(request.body);

  if (!parsedBody.success) {
    return response.status(400).json({
      message: 'Invalid login payload',
      issues: parsedBody.error.flatten(),
    });
  }

  try {
    const result = await authService.login(parsedBody.data);
    return response.status(200).json(result);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unable to complete login';

    return response.status(401).json({ message });
  }
});

authRouter.get('/me', requireAuth, async (request, response) => {
  const authenticatedRequest = request as AuthenticatedRequest;

  if (!authenticatedRequest.user) {
    return response.status(401).json({
      message: 'Not authenticated',
    });
  }

  const currentUser = await authService.getCurrentUser(authenticatedRequest.user.id);

  if (!currentUser) {
    return response.status(404).json({
      message: 'User not found',
    });
  }

  return response.status(200).json(currentUser);
});
