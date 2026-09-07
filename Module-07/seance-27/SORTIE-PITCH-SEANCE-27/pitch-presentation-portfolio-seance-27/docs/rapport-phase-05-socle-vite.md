# Rapport de la PHASE 5 — Socle Vite

**Candidat :** Karim El Mechti  
**Projet :** INGÉNIA PILOT — pitch et présentation du portfolio  
**Date :** 2026-09-04  
**Phase exécutée :** PHASE 5 — Créer le socle Vite  
**Statut :** SOCLE VITE S27 CRÉÉ — CONTRÔLE HUMAIN DE L’ARCHITECTURE REQUIS

## 1. Autorisations humaines reçues

Le candidat a :

- validé le plan du mini-site ;
- confirmé le statut initial `À COMPLÉTER` ;
- autorisé la création future d’affiches et de logo ;
- autorisé la PHASE 5 ;
- autorisé l’installation de Vite comme unique dépendance de développement.

Ces autorisations ne couvrent ni l’intégration complète du pitch, ni une action
Git, ni une publication.

## 2. Versions contrôlées

| Élément | Version ou résultat |
|---|---|
| Node.js | `v24.18.0` |
| npm | `11.16.0` |
| Vite disponible dans le registre | `8.2.2` |
| Moteur Node.js demandé par Vite | `^20.19.0 || >=22.12.0` |
| Compatibilité observée | Node.js `24.18.0` satisfait la contrainte |

## 3. Dépendances

Une seule dépendance directe a été installée :

```text
vite@8.2.2 — devDependency
```

La commande d’installation a ajouté quinze paquets, dépendances transitives
comprises. Aucun framework d’interface, outil d’analyse, service distant ou
bibliothèque de données n’a été ajouté.

Le fichier `package-lock.json` a été généré par npm après l’autorisation.

## 4. Socle créé

```text
pitch-presentation-portfolio-seance-27/
├── AGENTS.md
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── .gitignore
├── .nojekyll
├── README.md
├── LICENSE-ASSETS.md
├── public/
│   ├── .nojekyll
│   ├── favicon.svg
│   └── assets/
│       ├── images/.gitkeep
│       └── preuves/.gitkeep
├── src/
│   ├── main.js
│   ├── data/
│   │   ├── pitch.js
│   │   ├── preuves.js
│   │   ├── questions.js
│   │   └── liens.js
│   ├── modules/
│   │   ├── navigation.js
│   │   ├── presenter.js
│   │   ├── timer.js
│   │   ├── checklist.js
│   │   └── accessibility.js
│   └── styles/
│       ├── tokens.css
│       ├── base.css
│       ├── components.css
│       ├── presenter.css
│       ├── responsive.css
│       └── print.css
├── guide/.gitkeep
├── docs/
└── livrables-s27/.gitkeep
```

`node_modules/` et `dist/` existent localement après installation et build,
mais sont exclus par `.gitignore`.

## 5. Premier contenu du socle

Le socle contient uniquement une première surface identifiable :

- nom INGÉNIA PILOT ;
- candidat Karim El Mechti ;
- destinataire M. Abderrahman ;
- message central adapté ;
- statut `À COMPLÉTER` ;
- indication que le contenu interactif sera intégré après contrôle humain.

Le mode présentation, le chronomètre, la checklist, les preuves et les
questions ne sont pas encore intégrés. Leurs modules sont seulement réservés
dans l’architecture.

## 6. Actif visuel initial

Un favicon SVG original et provisoire a été créé avec le monogramme `IP`. Il est
déclaré dans `LICENSE-ASSETS.md` et reste soumis à validation visuelle.

L’autorisation de créer des affiches et un logo détaillé est enregistrée, mais
aucune affiche n’a été générée ou copiée pendant la PHASE 5 afin de respecter la
séparation entre socle technique et intégration du contenu.

## 7. Configuration Vite

La configuration utilise :

```js
base: process.env.VITE_BASE_PATH || "./"
```

Le build reste statique, utilise des chemins relatifs et produit sa sortie dans
`dist/`. Le fichier `public/.nojekyll` est copié dans le build.

## 8. Contrôles exécutés

| Contrôle | Résultat |
|---|---|
| installation npm | réussie |
| dépendance directe | uniquement `vite@8.2.2` |
| serveur Vite local | démarré sur `http://127.0.0.1:5173/` |
| réponse HTTP de l’accueil | `200` |
| build Vite | réussi en 227 ms |
| modules transformés | 10 |
| `dist/index.html` | 2,29 kB ; gzip 1,03 kB |
| CSS produit | 3,65 kB ; gzip 1,37 kB |
| JavaScript produit | 0,80 kB ; gzip 0,45 kB |
| `.nojekyll` dans `dist/` | présent |
| favicon dans `dist/` | présent |
| chemin Windows dans sources publiques ou build | aucun détecté |
| token, clé connue ou courriel | aucun détecté |
| serveur de développement après contrôle | arrêté |

Le contrôle visuel dans un navigateur n’a pas été exécuté pendant cette phase,
car la décision attendue porte d’abord sur l’architecture du socle.

## 9. Fichiers et périmètres non touchés

- mini-site INGÉNIA PILOT V10 ;
- portfolio source et preuves P01 à P07 ;
- dossier privé et correspondance réel–fictif ;
- Modules 01 à 06 ;
- métadonnées Git ;
- publication GitHub Pages existante.

## 10. Limites actuelles

- contenu complet non intégré ;
- modules interactifs réservés mais non implémentés ;
- favicon provisoire non validé visuellement ;
- affiches et logo détaillé non créés ;
- aucune recette responsive ou clavier ;
- aucune version locale complète de secours testée ;
- pitch encore chronométré à six minutes ;
- quatre réponses non chronométrées.

## 11. Rapport après action

```text
RAPPORT APRÈS ACTION

Phase exécutée : PHASE 5 — Créer le socle Vite
Racine effective : <RACINE_DU_DEPOT>
Instructions AGENTS.md chargées : copie S27 à la racine du projet
Sources lues : plan validé ; matrice ; script ; démonstration ; questions ; instructions de construction du site
Fichiers créés : socle Vite, architecture src/public/guide/livrables-s27, README, registre des actifs et présent rapport
Fichiers modifiés : docs/plan-mini-site-v1.md pour consigner les autorisations reçues
Fichiers non touchés : productions originales ; portfolio ; mini-site V10 ; dossier privé ; Git
Commandes exécutées : contrôle Node/npm/Vite ; npm install autorisé ; serveur local ; requête HTTP ; build ; contrôles statiques
Contrôles réalisés : dépendances directes ; build ; HTTP ; chemins relatifs ; fichiers de sortie ; confidentialité
Résultats observés : Vite 8.2.2 installé ; accueil HTTP 200 ; build réussi ; aucune donnée sensible détectée
Éléments non vérifiables : rendu visuel ; interactions finales ; responsive ; clavier ; contenu complet
Liens prévus : production V10, portfolio, avant/après, guide et ressource S27
Liens intégrés : aucun lien externe dans le socle initial
Liens testés : accueil local uniquement
Affiches prévues : création autorisée pour une phase ultérieure
Affiches autorisées : création de nouvelles affiches autorisée ; aucune intégrée en phase 5
Risques ou limites : pitch trop long ; secours et questions non testés ; contenus S27 manquants
Décisions humaines requises : contrôle de l’architecture ; autorisation distincte de la PHASE 6
Prochaine phase proposée : PHASE 6 — Intégrer le pitch et le portfolio
Statut exact : SOCLE VITE S27 CRÉÉ — CONTRÔLE HUMAIN DE L’ARCHITECTURE REQUIS
```

```text
SOCLE VITE S27 CRÉÉ — CONTRÔLE HUMAIN DE L’ARCHITECTURE REQUIS
```
