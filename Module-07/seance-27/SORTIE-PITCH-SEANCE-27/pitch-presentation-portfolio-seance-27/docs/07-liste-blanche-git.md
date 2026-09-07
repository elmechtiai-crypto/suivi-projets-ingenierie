# 07 - Liste blanche Git de la séance 27

**Date :** 2026-09-07  
**Périmètre :** mini-site `pitch-presentation-portfolio-seance-27` uniquement  
**Branche proposée :** `feat/pitch-presentation-seance-27`  
**Statut :** LISTE BLANCHE GIT PRÊTE — AUTORISATIONS HUMAINES REQUISES

## 1. État Git observé

Le dépôt racine ne contient encore aucun commit et pointe sur `master`. De
nombreux fichiers sans rapport avec la séance 27 sont non suivis. Cette situation
interdit tout ajout global tel que `git add .`, `git add -A` ou `git commit -a`.

Aucune branche n'a été créée, aucun fichier n'a été indexé, aucun commit n'a été
créé et aucun envoi distant n'a été effectué pendant cette préparation.

## 2. Contrôle de confidentialité

Le contrôle automatisé, limité au mini-site et réalisé sans afficher les valeurs
recherchées, donne les résultats suivants :

- signature forte de secret ou de clé : 0 fichier ;
- chemin local personnel : 0 fichier après remplacement par
  `<RACINE_DU_DEPOT>` dans les rapports ;
- fichier `.env`, clé privée, journal ou archive à exclure : 0 fichier ;
- une référence au nom du dossier privé demeure uniquement dans le script de
  validation, comme motif de contrôle négatif destiné à empêcher sa publication.

Les données privées, correspondances réel–anonyme et sources professionnelles ne
font pas partie de cette liste blanche.

## 3. Exclusions obligatoires

Les éléments suivants restent exclus même s'ils existent localement :

```text
node_modules/
dist/
output/
rendered/
.env
.env.*
*.log
*.zip
```

## 4. Liste exacte autorisable

Les chemins ci-dessous sont relatifs à la racine du mini-site. La liste contient
86 fichiers, y compris le présent document.

```text
.gitignore
.nojekyll
AGENTS.md
docs/00-rapport-diagnostic.md
docs/01-matrice-sources-pitch.md
docs/02-script-pitch-v1.md
docs/03-plan-demonstration.md
docs/04-questions-reponses.md
docs/05-journal-repetitions.md
docs/06-rapport-controles.md
docs/07-liste-blanche-git.md
docs/plan-mini-site-v1.md
docs/prompts-affiches-preuves-s27.md
docs/prompts-visuels-s27.md
docs/rapport-phase-05-socle-vite.md
docs/rapport-phase-06-integration-contenu.md
docs/rapport-phase-07-guide-pdf.md
guide/.gitkeep
guide/guide-pratique-pitch-progression-seance-27.html
guide/guide-pratique-pitch-progression-seance-27.md
index.html
LICENSE-ASSETS.md
livrables-s27/.gitkeep
livrables-s27/grille-preselection-seance-27.md
livrables-s27/pitch-progression-v1.md
livrables-s27/pitch-progression-v2-court.md
livrables-s27/preuve-27-pitch-progression.md
livrables-s27/reponses-questions-v2-courtes.md
package-lock.json
package.json
public/.nojekyll
public/assets/images/.gitkeep
public/assets/images/affiches/affiche-01-lancement-ingenia-pilot-publication.jpg
public/assets/images/affiches/affiche-02-chiffres-cles-publication.jpg
public/assets/images/affiches/affiche-04-workflow-github-pages-ln-ia.png
public/assets/images/affiches/affiche-prompt-maitre-module-06-ln-ia-v1.png
public/assets/images/affiches-s27/affiche-methode-p05-p06-s27-v1.png
public/assets/images/affiches-s27/affiche-preuve-p06-besoin-action-s27-v1.png
public/assets/images/affiches-s27/affiche-progression-p02-p03-p06-s27-v1.png
public/assets/images/hero-workflow-s27-v1.png
public/assets/preuves/.gitkeep
public/favicon.svg
public/guide-pitch-seance-27.pdf
public/og.png
public/secours/ingenia-pilot/.nojekyll
public/secours/ingenia-pilot/assets/images/affiches/affiche-01-lancement-ingenia-pilot.jpg
public/secours/ingenia-pilot/assets/images/affiches/affiche-01-lancement-ingenia-pilot.webp
public/secours/ingenia-pilot/assets/images/affiches/affiche-02-chiffres-cles.jpg
public/secours/ingenia-pilot/assets/images/affiches/affiche-02-chiffres-cles.webp
public/secours/ingenia-pilot/assets/images/affiches/affiche-04-workflow-github-pages-ln-ia.png
public/secours/ingenia-pilot/assets/images/affiches/affiche-prompt-maitre-module-06-ln-ia-v1.png
public/secours/ingenia-pilot/assets/images/diagramme-cycle-suivi-v1.svg
public/secours/ingenia-pilot/assets/images/diagramme-rythme-hebdomadaire-v1.svg
public/secours/ingenia-pilot/assets/images/icons/icon-192.png
public/secours/ingenia-pilot/assets/images/icons/icon-512.png
public/secours/ingenia-pilot/assets/images/illustration-benefices-suivi-v1.png
public/secours/ingenia-pilot/assets/images/illustration-checklist-marche-v1.png
public/secours/ingenia-pilot/assets/images/illustration-suivi-projets-v1.png
public/secours/ingenia-pilot/assets/images/logo-fictif-suivi-projets-v1.png
public/secours/ingenia-pilot/assets/images/organigramme-informations-marche-v1.svg
public/secours/ingenia-pilot/css/styles.css
public/secours/ingenia-pilot/data/data.json
public/secours/ingenia-pilot/index.html
public/secours/ingenia-pilot/js/app.js
public/secours/ingenia-pilot/manifest.webmanifest
public/secours/ingenia-pilot/offline.html
public/secours/ingenia-pilot/service-worker.js
README.md
scripts/validate-static.mjs
src/data/liens.js
src/data/pitch.js
src/data/preuves.js
src/data/questions.js
src/main.js
src/modules/accessibility.js
src/modules/checklist.js
src/modules/navigation.js
src/modules/presenter.js
src/modules/timer.js
src/styles/base.css
src/styles/components.css
src/styles/presenter.css
src/styles/print.css
src/styles/responsive.css
src/styles/tokens.css
vite.config.js
```

## 5. Séquence d'autorisations

Les autorisations restent séparées :

1. créer la branche `feat/pitch-presentation-seance-27` ;
2. indexer uniquement les 86 fichiers de la liste blanche ;
3. contrôler l'index puis créer un commit ;
4. envoyer la branche vers le dépôt distant ;
5. publier seulement après une autorisation distincte.

```text
LISTE BLANCHE GIT PRÊTE — AUTORISATIONS HUMAINES REQUISES
```
