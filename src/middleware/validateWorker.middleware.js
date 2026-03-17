// Middleware to validate request body before reaching controller

const allowedFields = [
  "name",
  "contact",
  "location",
  "skills",
  "availability",
  "experienceLevel"
];

export const validateWorkerMiddleware = (req, res, next) => {

  const data = req.body;
  const errors = [];

  // Check unknown fields
  const unknown = Object.keys(data).filter(f => !allowedFields.includes(f));
  if (unknown.length) {
    errors.push(`Unknown fields: ${unknown.join(", ")}`);
  }

  // Required fields validation
  if (!data.name) errors.push("Name is required");
  if (!data.contact) errors.push("Contact is required");
  if (!data.location) errors.push("Location is required");
  if (!data.skills) errors.push("Skills are required");
  if (!data.availability) errors.push("Availability is required");
  if (!data.experienceLevel) errors.push("Experience level is required");

  // Format validation
  if (data.contact && !/^[0-9]{10,15}$/.test(data.contact)) {
    errors.push("Contact must be 10-15 digits");
  }

  if (data.availability &&
    !["available", "busy"].includes(data.availability)) {
    errors.push("Availability must be 'available' or 'busy'");
  }

  if (data.experienceLevel &&
    !["beginner", "intermediate", "expert"].includes(data.experienceLevel)) {
    errors.push("Invalid experience level");
  }

  if (errors.length) {
    return res.status(400).json({
      message: "Validation failed",
      errors
    });
  }

  next(); // move to controller if valid
};