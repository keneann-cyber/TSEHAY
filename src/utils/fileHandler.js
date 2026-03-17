import fs from "fs";

// Read JSON file
export const readData = (path) => {
  const data = fs.readFileSync(path);
  return JSON.parse(data);
};

// Write JSON file
export const writeData = (path, data) => {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
};