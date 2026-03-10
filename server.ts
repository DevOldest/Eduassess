import express from "express";
import { createServer as createViteServer } from "vite";

/**
 * Main server entry point.
 * Configures Express, API routes, and Vite middleware for the EduAssess platform.
 */
async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes will be registered here
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "EduAssess AI API is running" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
