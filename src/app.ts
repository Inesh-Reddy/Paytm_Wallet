import express from "express";
import type { Express } from "express";

import cors from "cors";
import helmet from "helmet";
import walletRoutes from "./api-gateway/routes/wallet-route.js";
import TransactionRoutes from "./api-gateway/routes/transaction-route.js";
import { errorHandler } from "./shared/middleware/error-handler.js";

export function createApp(): Express {
  const app = express();

  app.use(cors());
  app.use(helmet());

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/health", (req, res) => {
    res.json({ status: "ok", time: new Date().toISOString });
  });

  app.use("/api/wallets", walletRoutes);
  app.use("/api/transactions", TransactionRoutes);
  app.use(errorHandler);
  return app;
}
