import { json_url } from "../config";
export const fetchAll = async () => {
  try {
    fetch(json_url)
    const responce = await fetch(json_url);
    const logements= await responce.json();
    return logements;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const find = async (id) => {
  const logements = await fetchAll();
  if (!logements) return null;
  const logement = logements.find((logement) => logement.id === id);
  return logement || null;
};
