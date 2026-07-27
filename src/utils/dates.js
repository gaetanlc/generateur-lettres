// src/utils/dates.js

// Transforme une date ISO "2026-07-27" en format français "27/07/2026".
// Si la valeur est vide ou undefined, on la retourne telle quelle
// (la preview affichera [dateEnvoi] tant que le champ n'est pas rempli).
export function formaterDateFr(dateIso) {
  if (!dateIso) {
    return dateIso;
  }

  const [annee, mois, jour] = dateIso.split("-");
  return `${jour}/${mois}/${annee}`;
}