// src/pages/PageLettre.jsx
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getTemplate } from "../templates";
import { renderTemplate } from "../utils/render";
import { exporterPdf } from "../utils/exportPdf";
import FormulaireDynamique from "../components/FormulaireDynamique";

function PageLettre() {
  const { id } = useParams();
  const template = getTemplate(id);

  const [valeurs, setValeurs] = useState({});

  const handleChange = (name, valeur) => {
    setValeurs((prec) => ({ ...prec, [name]: valeur }));
  };

  if (!template) {
    return (
      <div className="app">
        <h1>Modèle introuvable 😕</h1>
        <Link to="/">← Retour à l'accueil</Link>
      </div>
    );
  }

  const lettre = renderTemplate(template, valeurs);

  const champsManquants = template.champs.filter(
    (champ) => champ.required && !valeurs[champ.name]
  );
  const formulaireComplet = champsManquants.length === 0;

  const nbRequis = template.champs.filter((c) => c.required).length;
  const nbRemplis = nbRequis - champsManquants.length;
  const progression = Math.round((nbRemplis / nbRequis) * 100);

  return (
    <div>
      <div className="bandeau-lettre" style={{ backgroundImage: `url(${template.image})` }}>
        <div className="bandeau-contenu">
          <Link to="/" className="lien-retour-bandeau">← Tous les modèles</Link>
          <span className="carte-categorie">{template.categorie}</span>
          <h1>{template.titre}</h1>
        </div>
      </div>

      <div className="app">
        <div className="deux-colonnes">
          <div className="colonne-formulaire">
            <div className="barre-progression">
              <div className="barre-progression-infos">
                <span>Votre lettre</span>
                <span>{nbRemplis}/{nbRequis} champs</span>
              </div>
              <div className="barre-piste">
                <div
                  className="barre-remplissage"
                  style={{ width: `${progression}%` }}
                />
              </div>
            </div>

            <FormulaireDynamique
              champs={template.champs}
              valeurs={valeurs}
              onChange={handleChange}
            />
          </div>

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
    </div>
  );
}

export default PageLettre;