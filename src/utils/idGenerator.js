// Generate unique ID based on skill category

export const generateId = (skill, workers) => {

  const letter = skill[0].toUpperCase();

  const same = workers.filter(
    w => w.skills[0].toUpperCase() === letter
  );

  const number = String(same.length + 1).padStart(3, "0");

  return letter + number;
};