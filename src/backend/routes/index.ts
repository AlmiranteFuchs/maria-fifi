import { Application } from 'express';
import healthRouter from './api/health';
import frontendRouter from './frontend';

// lil function to attach all routes to app >:3
export default function registerRoutes(app: Application) {
    app.use('/api', healthRouter);      // /api/health
    app.use('/', frontendRouter);       // Vue SPA fallback
}