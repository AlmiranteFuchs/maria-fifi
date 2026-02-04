import registerRoutes from './routes';
import express = require("express");

function initApp() {
    const app = express();

    // middlewares (JSON parsing, logging, etc.)
    app.use(express.json());

    // register routes
    registerRoutes(app);

    return app;
}

const PORT = process.env.PORT || 3000;
const app = initApp();

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT} :3`);
});
