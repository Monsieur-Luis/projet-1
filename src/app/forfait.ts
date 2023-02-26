import { Etablissement } from "./etablissement";
import { Avis } from "./avis";
export interface Forfait {
    id?:number;
    nom: string;
    description: string;
    code: string;
    categories: string[];
    dateDebut: string;
    dateFin: string;
    prix: number;
    nouveauPrix?: number;
    premium?: boolean;
    etablissement: Etablissement;
    avis?: Avis

}
