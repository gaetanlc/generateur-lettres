// src/pages/PageLettre.jsx
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getTemplate } from "../templates";
import { renderTemplate } from "../utils/render";
import { exporterPdf } from "../utils/exportPdf";
import FormulaireDynamique from "../components/FormulaireDynamique";

function PageLettre() {
  // Récupère le :id depuis l'URL (ex: /lettre/conge-locataire)
  const { id } = useParams();
  const template = getTemplate(id);

  const [valeurs, setValeurs] = useState({});

  const handleChange = (name, valeur) => {
    setValeurs((prec) => ({ ...prec, [name]: valeur }));
  };

  // Si l'id de l'URL ne correspond à aucun template
  if (!template) {
    return (
      <div className="app">
        <h1>Modèle introuvable 😕</h1>
        <Link to="/">← Retour à l'accueil</Link>
      </div>
    );
  }

  const lettre = renderTemplate(template, valeurs);

  // Champs requis non remplis (état dérivé : calculé, pas stocké)
  const champsManquants = template.champs.filter(
    (champ) => champ.required && !valeurs[champ.name]
  );

  const formulaireComplet = champsManquants.length === 0;

  return (
    <div className="app">
      <Link to="/" className="lien-retour">← Tous les modèles</Link>
      <h1>{template.titre}</h1>

      <div className="deux-colonnes">
        <FormulaireDynamique
          champs={template.champs}
          valeurs={valeurs}
          onChange={handleChange}
        />

        <div className="colonne-preview">
          <div className="zone-export">
            {!formulaireComplet && (
              <span className="aide-export">
                {champsManquants.length} champ
                {champsManquants.length > 1 ? "s" : ""} requis à remplir
              </span>
            )}
            <button
              className="btn-export"
              disabled={!formulaireComplet}
              onClick={() =>
                exporterPdf(lettre, `${template.id}-${valeurs.nom ?? ""}`)
              }
            >
              📄 Télécharger en PDF
            </button>
          </div>
          <pre className="preview">{lettre}</pre>
        </div>
      </div>
    </div>
  );
}

export default PageLettre;