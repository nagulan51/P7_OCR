import { Tlogement } from "./logement";
export type TFetchAll = () => Promise<Tlogement[] | null>;
export type TFind = (id: string) => Promise<Tlogement | null>;
