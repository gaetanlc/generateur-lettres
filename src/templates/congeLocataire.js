// src/templates/congeLocataire.js
import { formaterDateFr } from "../utils/dates";

export const congeLocataire = {
  id: "conge-locataire",
  titre: "Congé du locataire (résiliation de bail)",
  image: "/images/demenagement.jpg",
  categorie: "Logement",
  source: "https://www.service-public.fr/particuliers/vosdroits/F1168",

  champs: [
    { name: "prenom", label: "Prénom", type: "text", required: true },
    { name: "nom", label: "Nom", type: "text", required: true },
    { name: "adresseLogement", label: "Adresse du logement", type: "text", required: true },
    { name: "nomProprietaire", label: "Nom du propriétaire", type: "text", required: true },
    { name: "adresseProprietaire", label: "Adresse du propriétaire", type: "text", required: true },
    {
      name: "typeLogement",
      label: "Type de logement",
      type: "select",
      options: ["vide", "meublé"],
      required: true,
    },
    { name: "zoneTendue", label: "Logement en zone tendue ?", type: "checkbox" },
    { name: "dateEnvoi", label: "Date d'envoi du courrier", type: "date", required: true },
  ],

  regles: (valeurs) => {
    const preavisMois =
      valeurs.typeLogement === "meublé" || valeurs.zoneTendue ? 1 : 3;

    return {
      preavisMois,
      dateEnvoi: formaterDateFr(valeurs.dateEnvoi),
    };
  },

  corps: `{{prenom}} {{nom}}
{{adresseLogement}}

À l'attention de {{nomProprietaire}}
{{adresseProprietaire}}

Objet : Congé du logement situé {{adresseLogement}}
Lettre recommandée avec accusé de réception

Madame, Monsieur,

Par la présente, je vous informe de ma décision de mettre fin au bail du logement mentionné ci-dessus, conformément à l'article 15 de la loi n° 89-462 du 6 juillet 1989.

Je respecterai un préavis de {{preavisMois}} mois à compter de la date de réception de ce courrier.

Je me tiens à votre disposition pour convenir d'un rendez-vous afin de réaliser l'état des lieux de sortie et la remise des clés.

Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

Fait le {{dateEnvoi}}

{{prenom}} {{nom}}`,
};