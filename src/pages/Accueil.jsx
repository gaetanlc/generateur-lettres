// src/pages/Accueil.jsx
import { Link } from "react-router-dom";
import { templates } from "../templates";

function Accueil() {
  return (
    <div className="app">
      {/* Bandeau d'intro */}
      <header className="hero">
        <h1>
          Résiliez <span className="accent">sans prise de tête</span>
        </h1>
        <p>
          Choisissez votre modèle, remplissez le formulaire, téléchargez votre
          lettre en PDF. Conforme, simple et gratuit.
        </p>
      </header>

      <div className="grille-templates">
        {templates.map((t) => (
          <Link key={t.id} to={`/lettre/${t.id}`} className="carte-template">
            <img src={t.image} alt="" className="carte-image" />
            <div className="carte-contenu">
              <span className="carte-categorie">{t.categorie}</span>
              <h3>{t.titre}</h3>
              <span className="nb-champs">
                {t.champs.length} champs · PDF en 2 min
              </span>
              <span className="carte-fleche">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Accueil;