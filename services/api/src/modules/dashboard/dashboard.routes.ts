import { Router } from 'express';
import { requireAuth } from '../auth/auth.middleware';
import { dashboardService } from './dashboard.service';

export const dashboardRouter = Router();

dashboardRouter.get('/summary', requireAuth, async (_request, response) => {
  try {
    const summary = await dashboardService.getSummary();
    return response.status(200).json(summary);
  } catch {
    return response.status(500).json({
      message: 'Unable to load dashboard summary',
    });
  }
});
