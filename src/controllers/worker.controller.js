// Import service layer functions
import * as workerService from "../services/worker.service.js";

// Controller handles HTTP request/response

// Create worker
export const addWorker = (req, res) => {
  const worker = workerService.createWorker(req.body);

  res.status(201).json({
    message: "Worker created successfully",
    data: worker
  });
};

// Get all workers
export const getWorkers = (req, res) => {
  const workers = workerService.getWorkers();
  res.json(workers);
};

// Search workers using query parameters
export const searchWorkers = (req, res) => {
  const result = workerService.searchWorkers(req.query);
  res.json(result);
};

// Update worker by ID
export const updateWorker = (req, res) => {
  const updated = workerService.updateWorker(req.params.id, req.body);

  if (!updated) {
    return res.status(404).json({
      message: "Worker not found"
    });
  }

  res.json({
    message: "Worker updated successfully",
    data: updated
  });
};

// Delete worker by ID
export const deleteWorker = (req, res) => {
  const result = workerService.deleteWorker(req.params.id);

  res.json({
    message: "Worker deleted successfully",
    data: result
  });
};