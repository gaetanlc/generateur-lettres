// src/templates/index.js
import { congeLocataire } from "./congeLocataire";
import { resiliationSalleSport } from "./resiliationSalleSport";
import { resiliationBox } from "./resiliationBox";

// La liste de TOUS les templates du site.
export const templates = [congeLocataire, resiliationSalleSport, resiliationBox];

// Petit helper pour retrouver un template par son id
export function getTemplate(id) {
  return templates.find((t) => t.id === id);
}