# ✂️ Résilettre — Générateur de lettres de résiliation

Générez une lettre de résiliation conforme en 2 minutes : choisissez un modèle,
remplissez le formulaire, la lettre se construit en temps réel sous vos yeux,
téléchargez-la en PDF. Simple et gratuit.

**🔗 Démo en ligne : [generateur-lettres.vercel.app](https://generateur-lettres.vercel.app)**

![Page d'accueil](docs/screenshot-accueil.png)
![Page de génération](docs/screenshot-lettre.png)

## ✨ Fonctionnalités

- **Preview en temps réel** — la lettre se remplit à chaque frappe
- **Règles intelligentes** — le préavis se calcule automatiquement selon la situation
  (logement meublé ou zone tendue → 1 mois au lieu de 3)
- **Export PDF** — mise en page A4 propre, prête à imprimer et envoyer
- **Validation** — impossible d'exporter une lettre incomplète, barre de progression
  des champs requis
- **Modèles fiables** — basés sur les modèles officiels de service-public.fr

## 🛠️ Stack technique

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) — navigation SPA
- [jsPDF](https://github.com/parallax/jsPDF) — génération des PDF côté client
- CSS pur (pas de framework) — grid, flexbox, animations
- Déploiement continu sur [Vercel](https://vercel.com/)

## 🚀 Lancer le projet en local

```bash
git clone https://github.com/gaetanlc/generateur-lettres.git
cd generateur-lettres
npm install
npm run dev
```

Le site est disponible sur `http://localhost:5173`.

## ➕ Ajouter un modèle de lettre

L'architecture est entièrement pilotée par la data : **un modèle = un fichier**,
aucun code d'interface à écrire.

1. Créer un fichier dans `src/templates/` (ex : `resiliationBox.js`) qui exporte
   un objet avec :
   - `champs` — la liste des champs du formulaire (générés automatiquement)
   - `regles` — les valeurs calculées (préavis, formatage de date...)
   - `corps` — le texte de la lettre avec des placeholders `{{champ}}`
2. L'ajouter au registre dans `src/templates/index.js`

C'est tout : la carte d'accueil, le formulaire, la preview, la validation et
l'export PDF sont générés automatiquement.

## 📄 Avertissement

Les modèles sont fournis à titre indicatif et basés sur les modèles officiels
de service-public.fr. Ce site ne constitue pas un conseil juridique.