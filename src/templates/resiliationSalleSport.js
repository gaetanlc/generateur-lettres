// src/templates/resiliationSalleSport.js

export const resiliationSalleSport = {
    id: "resiliation-salle-sport",
    titre: "Résiliation d'abonnement de salle de sport",
    titre: "Résiliation d'abonnement de salle de sport",
    image: "/images/sport.jpg",
    categorie: "Sport & loisirs",
    source: "https://www.service-public.fr/particuliers/vosdroits/F31149",

    champs: [
        { name: "prenom", label: "Prénom", type: "text", required: true },
        { name: "nom", label: "Nom", type: "text", required: true },
        { name: "adresse", label: "Votre adresse", type: "text", required: true },
        { name: "nomSalle", label: "Nom de la salle", type: "text", required: true },
        { name: "adresseSalle", label: "Adresse de la salle", type: "text", required: true },
        { name: "numeroAbonne", label: "Numéro d'abonné", type: "text", required: true },
        { name: "dateEnvoi", label: "Date d'envoi du courrier", type: "date", required: true },
    ],

    regles: (valeurs) => {
        let dateEnvoi = valeurs.dateEnvoi;
        if (dateEnvoi) {
            const [annee, mois, jour] = dateEnvoi.split("-");
            dateEnvoi = `${jour}/${mois}/${annee}`;
        }
        return { dateEnvoi };
    },

    corps: `{{prenom}} {{nom}}
{{adresse}}

{{nomSalle}}
{{adresseSalle}}

Objet : Résiliation de mon abonnement n° {{numeroAbonne}}
Lettre recommandée avec accusé de réception

Madame, Monsieur,

Par la présente, je vous informe de ma décision de résilier mon abonnement n° {{numeroAbonne}} souscrit auprès de votre établissement.

Conformément aux conditions générales de mon contrat, cette résiliation prendra effet à l'issue du préavis prévu, à compter de la date de réception de ce courrier.

Je vous remercie de bien vouloir m'adresser une confirmation écrite de cette résiliation.

Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

Fait le {{dateEnvoi}}

{{prenom}} {{nom}}`,
};