import express from "express";
import cors from "cors";
import workerRoutes from "./routes/worker.routes.js";

// Initialize express application
const app = express();

// Middleware configuration
app.use(cors()); // allow frontend requests
app.use(express.json()); // parse JSON body

// Root route for testing server
app.get("/", (req, res) => {
  res.send("Tsehay Gig Worker API is running");
});

// Register worker routes
app.use("/api/workers", workerRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});