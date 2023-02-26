import { Forfait } from "./forfait";
import { Etablissement } from "./etablissement";
import { Avis } from "./avis";

export const FORFAITS: Forfait[] = [
    {
        nom: 'Forfait 1',
        description: 'Description forfait 1',
        code: 'Code forfait 1',
        categories: ['Hébergement', 'restauration', 'détente'],
        dateDebut: 'Date debut 1',
        dateFin: 'Date fin 1',
        prix: 10,
        nouveauPrix:5,
        premium: false,
        etablissement: {

            nomEtablissement: 'etablissement 1',
            adresse: 'adresse 1',
            ville: 'ville 1',
            telephone: 'téléphone 1',
            courriel: 'courriel 1',
            siteWeb: 'site web 1',
            description: 'description 1',
        },
        avis: {
            commentaires: 'avis 1',
            noteSurDix: [1, 2, 3],
        }
    },

    {
        nom: 'Forfait 2',
        description: 'Description forfait 2',
        code: 'Code forfait 2',
        categories: ['Hébergement', 'restauration', 'détente'],
        dateDebut: 'Date debut 2',
        dateFin: 'Date fin 2',
        prix: 20,
        
        premium: true,
        etablissement: {

            nomEtablissement: 'etablissement 2',
            adresse: 'adresse 2',
            ville: 'ville 2',
            telephone: 'téléphone 2',
            courriel: 'courriel 2',
            siteWeb: 'site web 2',
            description: 'description 2',
        },
        avis: {
            commentaires: 'avis 2',
            noteSurDix: [1, 2, 3],
        }
    },

    {
        nom: 'Forfait 3',
        description: 'Description forfait 3',
        code: 'Code forfait 3',
        categories: ['Hébergement', 'restauration', 'détente'],
        dateDebut: 'Date debut 3',
        dateFin: 'Date fin 3',
        prix: 30,
        nouveauPrix:25,
        premium: true,
        etablissement: {

            nomEtablissement: 'etablissement 3',
            adresse: 'adresse 3',
            ville: 'ville 3',
            telephone: 'téléphone 3',
            courriel: 'courriel 3',
            siteWeb: 'site web 3',
            description: 'description 3',
        },
        avis: {
            commentaires: 'avis 3',
            noteSurDix: [1, 2, 3],
        }
    }

]