import { readData, writeData } from "../utils/fileHandler.js";
import { generateId } from "../utils/idGenerator.js";

const filePath = "./src/data/workers.json";

// Create worker
export const createWorker = (worker) => {
  const workers = readData(filePath);

  const newWorker = {
    id: generateId(worker.skills, workers),
    ...worker
  };

  workers.push(newWorker);
  writeData(filePath, workers);

  return newWorker;
};

// Get all workers
export const getWorkers = () => {
  return readData(filePath);
};

// Update worker
export const updateWorker = (id, data) => {
  const workers = readData(filePath);

  const index = workers.findIndex(w => w.id === id);

  if (index === -1) return null;

  workers[index] = { ...workers[index], ...data };

  writeData(filePath, workers);

  return workers[index];
};

// Delete worker
export const deleteWorker = (id) => {
  let workers = readData(filePath);

  workers = workers.filter(w => w.id !== id);

  writeData(filePath, workers);

  return workers;
};

// Search workers
export const searchWorkers = (query) => {
  const workers = readData(filePath);

  return workers.filter(w => {

    if (query.skills &&
      !w.skills.toLowerCase().includes(query.skills.toLowerCase())) {
      return false;
    }

    if (query.name &&
      !w.name.toLowerCase().includes(query.name.toLowerCase())) {
      return false;
    }

    if (query.location &&
      !w.location.toLowerCase().includes(query.location.toLowerCase())) {
      return false;
    }

    if (query.availability &&
      w.availability.toLowerCase() !== query.availability.toLowerCase()) {
      return false;
    }

    if (query.experienceLevel &&
      w.experienceLevel.toLowerCase() !== query.experienceLevel.toLowerCase()) {
      return false;
    }

    return true;
  });
};