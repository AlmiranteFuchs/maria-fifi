import path = require("node:path");
import express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// API route
app.get("/api/health", (_req, res) => {
    res.json({ status: "aaaaaa", time: new Date().toISOString() });
});

// Serve Vue build
const frontendPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(frontendPath));

// Fallback for Vue router
app.get(/.*/, (_req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`⚔️ Server running on http://localhost:${PORT}`);
});
