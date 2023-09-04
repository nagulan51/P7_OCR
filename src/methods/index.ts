import axios from "axios";
import { Tlogement } from "../types/logement";
import { TFetchAll, TFind } from "../types/method";
import { json_url } from "../config";
export const fetchAll: TFetchAll = async () => {
  try {
    const responce = await axios.get(json_url);
    const logements: Tlogement[] = responce.data;
    return logements;
  } catch (error) {
    return null;
  }
};

export const find: TFind = async (id) => {
  const logements = await fetchAll();
  if (!logements) return null;
  const logement = logements.find((logement) => logement.id === id);
  return logement || null;
};
