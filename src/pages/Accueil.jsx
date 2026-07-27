// src/pages/Accueil.jsx
import { Link } from "react-router-dom";
import { templates } from "../templates";

const etapes = [
  {
    numero: "1",
    titre: "Choisissez votre modèle",
    texte: "Bail, salle de sport, assurance... Des modèles basés sur les lettres officielles.",
  },
  {
    numero: "2",
    titre: "Remplissez le formulaire",
    texte: "La lettre se construit en temps réel, avec les règles légales calculées pour vous.",
  },
  {
    numero: "3",
    titre: "Téléchargez votre PDF",
    texte: "Une lettre propre au format A4, prête à imprimer et à envoyer en recommandé.",
  },
];

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
        <ul className="hero-preuves">
          <li>✓ Gratuit</li>
          <li>✓ Aucune inscription</li>
          <li>✓ Basé sur les modèles officiels</li>
        </ul>
      </header>

      {/* Les modèles */}
      <h2 className="titre-section">
        Nos modèles <span className="compte-modeles">({templates.length})</span>
      </h2>

      <div className="grille-templates">
        {templates.map((t, index) => (
          <Link
            key={t.id}
            to={`/lettre/${t.id}`}
            className="carte-template"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
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

      {/* Comment ça marche */}
      <section className="comment-ca-marche">
        <h2 className="titre-section">Comment ça marche ?</h2>
        <div className="grille-etapes">
          {etapes.map((etape) => (
            <div key={etape.numero} className="carte-etape">
              <span className="etape-numero">{etape.numero}</span>
              <h3>{etape.titre}</h3>
              <p>{etape.texte}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Accueil;