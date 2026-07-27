// src/templates/index.js
import { congeLocataire } from "./congeLocataire";
import { resiliationSalleSport } from "./resiliationSalleSport";

// La liste de TOUS les templates du site.
// Ajouter un template = l'importer et l'ajouter ici. C'est tout.
export const templates = [congeLocataire, resiliationSalleSport];

// Petit helper pour retrouver un template par son id
export function getTemplate(id) {
  return templates.find((t) => t.id === id);
}