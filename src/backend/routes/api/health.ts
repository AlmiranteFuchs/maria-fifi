import { Router } from 'express';
const router = Router();

// lil health check >w<
router.get('/health', (_req, res) => {
    res.json({ status: 'aaaaaa', time: new Date().toISOString() });
});

export default router;
