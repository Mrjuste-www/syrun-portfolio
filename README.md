# Syrun — Portfolio

Portfolio personnel de Nathan Delorme, construit avec React, Vite, Framer Motion et Lucide.

## Prérequis
- Node.js 18 ou supérieur
- npm

## Installation
```bash
npm install
npm run dev
```
Ouvre ensuite l'adresse locale affichée par Vite (généralement http://localhost:5173).

## Générer la version de production
```bash
npm run build
npm run preview
```

## Personnalisation à faire avant publication
1. Dans `src/App.jsx`, remplace les trois projets d'exemple par tes vrais projets, leurs descriptions, technologies et URL GitHub.
2. Remplace `ton.email@example.com` par une adresse dédiée au portfolio (dans le terminal, le bouton contact et le footer).
3. Remplace les liens GitHub et LinkedIn génériques par tes profils.
4. Vérifie les compétences et les indicateurs de progression : ils sont indicatifs et doivent refléter ton niveau réel.
5. Confirme l'année de rentrée et l'intitulé exact de la formation Ynov.
6. Ajoute éventuellement un CV PDF dans `public/` et un lien de téléchargement.

## Déploiement
Tu peux publier gratuitement le site avec Vercel ou Netlify en important le dépôt GitHub. Pour Vercel : Framework Preset `Vite`, commande de build `npm run build`, dossier de sortie `dist`.

## Structure
- `src/App.jsx` : contenu, composants et interactions
- `src/style.css` : design responsive et animations CSS
- `index.html` : métadonnées et point d'entrée
