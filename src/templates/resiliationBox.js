// src/templates/resiliationBox.js
import { formaterDateFr } from "../utils/dates";

export const resiliationBox = {
    id: "resiliation-box",
    titre: "Résiliation d'abonnement Box Internet",
    image: "/images/internet.jpg",
    categorie: "Internet",
    source: "https://www.service-public.gouv.fr/particuliers/vosdroits/F22486",

    champs: [
        { name: "prenom", label: "Prénom", type: "text", required: true },
        { name: "nom", label: "Nom", type: "text", required: true },
        { name: "adresse", label: "Votre adresse", type: "text", required: true },
        { name: "nomOperateur", label: "Nom de l'opérateur", type: "text", required: true },
        { name: "adresseOperateur", label: "Adresse du service résiliation", type: "text", required: true },
        { name: "numeroClient", label: "Numéro client", type: "text", required: true },
        { name: "dateEnvoi", label: "Date d'envoi du courrier", type: "date", required: true },
    ],

    regles: (valeurs) => {
        return {
            dateEnvoi: formaterDateFr(valeurs.dateEnvoi),
        };
    },

    corps: `{{prenom}} {{nom}}
{{adresse}}

{{nomOperateur}}
Service résiliation
{{adresseOperateur}}

Objet : Résiliation de mon abonnement internet — contrat n° {{numeroClient}}
Lettre recommandée avec accusé de réception

Madame, Monsieur,

Je vous informe par la présente de ma décision de résilier mon abonnement internet référencé sous le numéro de contrat ci-dessus.

Conformément à l'article L.224-39 du code de la consommation, je vous demande de procéder à cette résiliation dans un délai de dix (10) jours suivant la réception de ce courrier.

Je vous remercie de bien vouloir me confirmer par écrit la date effective de résiliation, de cesser tout prélèvement au-delà des sommes dues, et de m'indiquer les modalités de restitution du matériel (box, décodeur).

Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

Fait le {{dateEnvoi}}

{{prenom}} {{nom}}`,
};