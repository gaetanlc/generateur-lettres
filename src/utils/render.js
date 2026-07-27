// src/utils/render.js

export function renderTemplate(template, valeurs) {
  // 1. On calcule les valeurs dérivées (ex : préavis de 1 ou 3 mois)
  const calculees = template.regles ? template.regles(valeurs) : {};

  // 2. On fusionne : valeurs saisies + valeurs calculées
  const data = { ...valeurs, ...calculees };

  // 3. On remplace chaque {{placeholder}} par sa valeur
  return template.corps.replace(/\{\{(\w+)\}\}/g, (match, cle) => {
    const valeur = data[cle];
    // Champ vide ou absent → on affiche [cle] pour la preview
    return valeur !== undefined && valeur !== "" ? valeur : `[${cle}]`;
  });
}