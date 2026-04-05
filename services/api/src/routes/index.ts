import { Router } from 'express';
import { authRouter } from '../modules/auth/auth.routes';

export const apiRouter = Router();

apiRouter.get('/health', (_request, response) => {
  response.status(200).json({
    name: 'CaseFlow API',
    status: 'ok',
  });
});

apiRouter.use('/auth', authRouter);
