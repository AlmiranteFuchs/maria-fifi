import { Router } from 'express';
import path = require("node:path");

const router = Router();

// Only serve static frontend in production
// In development, Vite dev server handles the frontend
if (process.env.NODE_ENV === 'production') {
    const frontendPath = path.join(__dirname, '../../frontend/dist');

    // serve Vue static stuff
    router.use('/', require('express').static(frontendPath));

    // fallback for Vue router
    router.get(/.*/, (_req, res) => {
        res.sendFile(path.join(frontendPath, 'index.html'));
    });
} else {
    // In development, just return a message for non-API routes
    router.get('/', (_req, res) => {
        res.json({
            message: 'Backend API running. Frontend is served by Vite dev server on port 5173',
            frontend: 'http://localhost:5173'
        });
    });
}

export default router;
