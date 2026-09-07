# 08 - Rapport de préparation GitHub Pages

**Date :** 2026-09-07  
**Projet :** INGÉNIA PILOT — Présentation S27  
**Statut :** PUBLICATION NON EXÉCUTÉE — AUTORISATION MANQUANTE

## 1. Raccordement local

La branche `feat/pitch-presentation-seance-27` a été raccordée localement à
`origin/master` après récupération de l'historique distant.

```text
Base distante : 252a1e7
Commit S27 raccordé : 976e1df
Branche de sauvegarde : backup/pitch-presentation-seance-27-root-3dcf0f4
Commit sauvegardé : 3dcf0f4
Ancêtre commun après raccordement : 252a1e7
```

La branche de sauvegarde préserve le commit initial indépendant. Aucun push,
aucune Pull Request, aucune fusion et aucune publication n'ont été effectués.

## 2. Intégration préparée

Le site V10 existant est conservé à la racine. Deux accès visibles vers la
présentation S27 ont été ajoutés à son accueil :

- un lien « Présentation S27 » dans la navigation ;
- un bouton « Ouvrir la présentation S27 » dans le premier écran.

La présentation Vite est construite comme site statique dans :

```text
presentation-s27/
```

Elle contient un lien « Retour à INGÉNIA PILOT ». Après publication autorisée,
l'adresse attendue sera :

```text
https://elmechtiai-crypto.github.io/suivi-projets-ingenierie/presentation-s27/
```

## 3. Contrôles locaux

| Contrôle | Résultat |
|---|---|
| build Vite | réussi, 19 modules, 237 ms |
| validation statique S27 | `STATIC_CHECK_OK` |
| accueil local | HTTP 200 |
| présentation locale | HTTP 200 |
| lien accueil vers présentation | présent |
| retour présentation vers accueil | présent |
| guide PDF | HTTP 200 |
| affiche de progression | HTTP 200 |
| secours INGÉNIA PILOT | HTTP 200 |
| ressources directes de la présentation | 13 contrôlées, 0 échec |
| signatures fortes de secrets | 0 détectée |
| index Git | vide |

Adresse de contrôle local :

```text
http://127.0.0.1:8091/
```

## 4. Liste blanche de l'intégration

Les 45 chemins suivants constituent le seul périmètre proposé pour une prochaine
indexation. Les autres fichiers non suivis du dossier de travail sont exclus.

```text
css/styles.css
index.html
service-worker.js
Module-07/seance-27/SORTIE-PITCH-SEANCE-27/pitch-presentation-portfolio-seance-27/index.html
Module-07/seance-27/SORTIE-PITCH-SEANCE-27/pitch-presentation-portfolio-seance-27/docs/08-rapport-publication.md
presentation-s27/.nojekyll
presentation-s27/assets/images/.gitkeep
presentation-s27/assets/images/affiches/affiche-01-lancement-ingenia-pilot-publication.jpg
presentation-s27/assets/images/affiches/affiche-02-chiffres-cles-publication.jpg
presentation-s27/assets/images/affiches/affiche-04-workflow-github-pages-ln-ia.png
presentation-s27/assets/images/affiches/affiche-prompt-maitre-module-06-ln-ia-v1.png
presentation-s27/assets/images/affiches-s27/affiche-methode-p05-p06-s27-v1.png
presentation-s27/assets/images/affiches-s27/affiche-preuve-p06-besoin-action-s27-v1.png
presentation-s27/assets/images/affiches-s27/affiche-progression-p02-p03-p06-s27-v1.png
presentation-s27/assets/images/hero-workflow-s27-v1.png
presentation-s27/assets/index-B0_PE815.css
presentation-s27/assets/index-CcMuhAlb.js
presentation-s27/assets/preuves/.gitkeep
presentation-s27/favicon.svg
presentation-s27/guide-pitch-seance-27.pdf
presentation-s27/index.html
presentation-s27/og.png
presentation-s27/secours/ingenia-pilot/.nojekyll
presentation-s27/secours/ingenia-pilot/assets/images/affiches/affiche-01-lancement-ingenia-pilot.jpg
presentation-s27/secours/ingenia-pilot/assets/images/affiches/affiche-01-lancement-ingenia-pilot.webp
presentation-s27/secours/ingenia-pilot/assets/images/affiches/affiche-02-chiffres-cles.jpg
presentation-s27/secours/ingenia-pilot/assets/images/affiches/affiche-02-chiffres-cles.webp
presentation-s27/secours/ingenia-pilot/assets/images/affiches/affiche-04-workflow-github-pages-ln-ia.png
presentation-s27/secours/ingenia-pilot/assets/images/affiches/affiche-prompt-maitre-module-06-ln-ia-v1.png
presentation-s27/secours/ingenia-pilot/assets/images/diagramme-cycle-suivi-v1.svg
presentation-s27/secours/ingenia-pilot/assets/images/diagramme-rythme-hebdomadaire-v1.svg
presentation-s27/secours/ingenia-pilot/assets/images/icons/icon-192.png
presentation-s27/secours/ingenia-pilot/assets/images/icons/icon-512.png
presentation-s27/secours/ingenia-pilot/assets/images/illustration-benefices-suivi-v1.png
presentation-s27/secours/ingenia-pilot/assets/images/illustration-checklist-marche-v1.png
presentation-s27/secours/ingenia-pilot/assets/images/illustration-suivi-projets-v1.png
presentation-s27/secours/ingenia-pilot/assets/images/logo-fictif-suivi-projets-v1.png
presentation-s27/secours/ingenia-pilot/assets/images/organigramme-informations-marche-v1.svg
presentation-s27/secours/ingenia-pilot/css/styles.css
presentation-s27/secours/ingenia-pilot/data/data.json
presentation-s27/secours/ingenia-pilot/index.html
presentation-s27/secours/ingenia-pilot/js/app.js
presentation-s27/secours/ingenia-pilot/manifest.webmanifest
presentation-s27/secours/ingenia-pilot/offline.html
presentation-s27/secours/ingenia-pilot/service-worker.js
```

## 5. Point d'arrêt

La préparation locale est terminée. Une autorisation distincte reste nécessaire
pour indexer cette liste, puis pour créer un commit, pousser la branche et ouvrir
une Pull Request. La publication GitHub Pages restera soumise à une validation
ultérieure après fusion humaine.

```text
PUBLICATION NON EXÉCUTÉE — AUTORISATION MANQUANTE
```
