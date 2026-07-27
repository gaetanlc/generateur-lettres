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
          <button
            className="btn-export"
            onClick={() => exporterPdf(lettre, `${template.id}-${valeurs.nom ?? ""}`)}
          >
            📄 Télécharger en PDF
          </button>
          <pre className="preview">{lettre}</pre>
        </div>
      </div>
    </div>
  );
}

export default PageLettre;