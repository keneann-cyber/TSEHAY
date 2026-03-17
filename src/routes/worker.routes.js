import express from "express";
import {
  addWorker,
  getWorkers,
  searchWorkers,
  deleteWorker,
  updateWorker
} from "../controllers/worker.controller.js";

import { validateWorkerMiddleware } from "../middleware/validateWorker.middleware.js";

const router = express.Router();

// Create new worker
router.post("/", validateWorkerMiddleware, addWorker);

// Get all workers
router.get("/", getWorkers);

// Search and filter workers
router.get("/search", searchWorkers);

// Update worker
router.put("/:id", updateWorker);

// Delete worker
router.delete("/:id", deleteWorker);

export default router;