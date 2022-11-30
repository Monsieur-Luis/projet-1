import { Etablissement } from "./etablissement";
import { Avis } from "./avis";
export interface Forfait {
    nom: string;
    description: string;
    code: string;
    categories: string[];
    dateDebut: string;
    dateFin: string;
    prix: number;
    nouveauPrix?: number;
    etablissement: Etablissement;
    premium?: boolean;
    avis: Avis

}
