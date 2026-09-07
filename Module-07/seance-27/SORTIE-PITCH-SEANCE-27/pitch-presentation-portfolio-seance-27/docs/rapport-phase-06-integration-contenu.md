# Rapport de la PHASE 6 — Intégration du contenu S27

**Candidat :** Karim El Mechti  
**Projet :** INGÉNIA PILOT — pitch et présentation du portfolio  
**Destinataire :** M. Abderrahman  
**Date :** 2026-09-04  
**Phase exécutée :** PHASE 6 — Intégrer le pitch, le portfolio, le mode présentation, le chronomètre et les visuels  
**Statut :** CONTENU S27 INTÉGRÉ — REVUE HUMAINE DU FOND REQUISE

## 1. Autorisation humaine reçue

Le candidat a validé l’architecture du socle Vite et autorisé la PHASE 6. Cette
autorisation couvre l’intégration du contenu, des interactions et des visuels.
Elle ne couvre ni une action Git, ni une publication, ni l’attribution du statut
`FINALISTE CONFIRMÉ`.

Le statut public du site reste donc exactement :

```text
À COMPLÉTER
```

## 2. Contenu intégré

Le mini-site comporte neuf écrans utilisables en consultation continue ou en
mode présentation :

1. message central et identité du pitch ;
2. sujet présenté à M. Abderrahman ;
3. besoin professionnel traité ;
4. production principale INGÉNIA PILOT V10 ;
5. progression avant/après ;
6. méthode de travail avec l’IA et contrôle humain ;
7. limites et prochaine étape ;
8. quatre questions-réponses factuelles ;
9. ressources, preuves et visuels.

Le contenu reprend les éléments validés pendant les phases 1 à 4 : message
central, preuves P01 à P07, chiffres 41 missions et 7 alertes, limites annoncées,
pitch mesuré à 6 minutes, démonstration mesurée à 2 minutes, secours restant à
tester humainement et questions restant à chronométrer.

Le mot dont la suppression a été demandée n’est pas employé dans le nouveau
contenu oral S27. Il reste présent dans la copie historique de la V10, conservée
sans modification pour préserver l’intégrité de cette preuve antérieure.

## 3. Fonctions intégrées

| Fonction | Comportement |
|---|---|
| mode consultation | lecture verticale normale avec navigation par ancres |
| mode présentation | une diapositive active parmi neuf |
| navigation clavier | flèches, Page précédente/suivante, Début, Fin et Échap |
| navigation visible | boutons précédent, suivant et quitter |
| chronomètre | démarrer, pause et remise à zéro dans la page |
| checklist | six critères, compteur local, aucun statut automatique |
| questions | quatre réponses structurées par fait, preuve et limite |
| ressources | liens vers la V10 publiée, le secours local et les preuves |

Le chronomètre et la checklist ne conservent aucune information après
l’actualisation. Aucun compte, service distant, suivi utilisateur ou clé d’API
n’est utilisé.

## 4. Visuels intégrés

Deux actifs ont été créés spécialement pour la séance 27 avec le générateur
d’images intégré :

- `public/assets/images/hero-workflow-s27-v1.png` — visuel principal du workflow
  et de la décision humaine ;
- `public/og.png` — carte de présentation INGÉNIA PILOT.

Les prompts exacts et les informations de génération sont conservés dans
`docs/prompts-visuels-s27.md`.

Quatre affiches déjà autorisées ont été copiées depuis
`PROJET KARIM/affiches-publication/` vers
`public/assets/images/affiches/`. Leur provenance, leurs dimensions et leur
statut sont consignés dans `LICENSE-ASSETS.md`.

La carte `og.png` est visible dans les ressources. Elle n’est pas encore reliée
à une métadonnée `og:image`, car aucune origine publique S27 n’a été validée.

## 5. Production principale et secours

Le lien documenté vers la production principale est :

```text
https://elmechtiai-crypto.github.io/suivi-projets-ingenierie/
```

Ce lien avait été contrôlé le 31 août 2026. Il n’a pas été revalidé sur Internet
pendant cette phase locale.

Une copie technique complète de la V10 a été placée dans :

```text
public/secours/ingenia-pilot/
```

Elle est accessible depuis le site S27 et incluse dans le build sous
`dist/secours/ingenia-pilot/`. Le dépôt Git et les documents de travail de la
production source n’ont pas été copiés. La source originale n’a pas été
modifiée.

## 6. Fichiers créés ou enrichis

### Créés pendant la PHASE 6

- deux visuels générés ;
- quatre copies d’affiches autorisées ;
- copie publique locale de secours de la V10 ;
- `docs/prompts-visuels-s27.md` ;
- présent rapport.

### Enrichis pendant la PHASE 6

- `index.html` ;
- `src/main.js` ;
- les quatre modules de données dans `src/data/` ;
- les cinq modules fonctionnels dans `src/modules/` ;
- les six feuilles de style dans `src/styles/` ;
- `README.md` ;
- `LICENSE-ASSETS.md`.

## 7. Contrôles exécutés

| Contrôle | Résultat |
|---|---|
| syntaxe des dix fichiers JavaScript | réussie |
| nombre d’écrans de présentation | 9 |
| identifiants HTML dupliqués | aucun |
| questions préparées | 4 |
| preuves structurées | 7 |
| liens principaux structurés | 2 |
| statut chargé depuis les données | `À COMPLÉTER` |
| dépendance directe | uniquement `vite@8.2.2` |
| build Vite | réussi en 679 ms |
| modules transformés | 19 |
| `dist/index.html` | 15,96 kB ; gzip 4,45 kB |
| CSS produit | 14,93 kB ; gzip 3,93 kB |
| JavaScript produit | 9,03 kB ; gzip 3,64 kB |
| accueil local | HTTP 200 |
| visuel principal | HTTP 200, `image/png` |
| carte de présentation | HTTP 200, `image/png` |
| quatre affiches | HTTP 200 |
| accueil du secours local | HTTP 200 |
| JSON du secours | valide |
| fichiers essentiels dans `dist/` | présents |
| chemin Windows, token, clé ou fichier privé dans le contenu public | aucun détecté |
| serveur après contrôle | arrêté |

Le rendu visuel détaillé, le responsive, le clavier complet et la répétition
humaine n’ont pas été déclarés validés à cette phase. Ils restent à effectuer
dans les phases de contrôle prévues.

## 8. Limites et décisions encore requises

- le pitch observé dure 6 minutes, au-dessus de la cible de 3 à 5 minutes ;
- la démonstration a une durée communiquée de 2 minutes, mais le nouveau parcours
  intégré n’a pas encore été répété ;
- la copie locale est techniquement servie, mais n’a pas encore été testée par
  le candidat dans son navigateur de présentation ;
- les quatre réponses n’ont pas encore été chronométrées ;
- les deux nouveaux visuels et l’ordre narratif nécessitent une revue humaine ;
- aucune mesure d’impact professionnel réel n’est disponible ;
- aucune publication ou action Git n’est autorisée à cette phase.

## 9. Périmètres non touchés

- production source INGÉNIA PILOT V10 ;
- portfolio et preuves originales P01 à P07 ;
- dossier privé et correspondance réel–fictif ;
- Modules 01 à 06 ;
- métadonnées Git ;
- publication GitHub Pages existante.

## 10. Rapport après action

```text
RAPPORT APRÈS ACTION

Phase exécutée : PHASE 6 — Intégrer le pitch, le portfolio, le mode présentation, le chronomètre et les visuels
Racine effective : <RACINE_DU_DEPOT>
Instructions AGENTS.md chargées : copie S27 à la racine du projet
Sources lues : matrice ; script V1 ; plan de démonstration ; questions ; plan du mini-site ; preuves P01 à P07 ; V10 publique et locale documentée
Fichiers créés : visuel principal ; carte de présentation ; copies d’affiches ; secours V10 ; prompts visuels ; présent rapport
Fichiers modifiés : index ; données ; modules JavaScript ; styles ; README ; registre des actifs
Fichiers non touchés : productions originales ; portfolio source ; dossier privé ; Modules 01 à 06 ; Git
Commandes exécutées : contrôles JavaScript et JSON ; build Vite ; serveur local ; requêtes HTTP ; scans statiques
Contrôles réalisés : neuf écrans ; quatre questions ; sept preuves ; statut ; dépendance ; build ; ressources ; confidentialité
Résultats observés : build réussi ; toutes les ressources critiques HTTP 200 ; aucun secret ou chemin privé détecté
Éléments non vérifiables : qualité du discours par le candidat ; durée du nouveau parcours ; responsive et clavier complets ; disponibilité publique au jour du pitch
Liens intégrés : V10 publique documentée ; secours local S27
Liens testés : accueil S27 et ressources locales ; lien public non recontrôlé pendant la phase 6
Affiches intégrées : quatre affiches autorisées et deux nouveaux visuels générés
Risques ou limites : pitch à 6 minutes ; secours non validé humainement ; réponses non chronométrées ; visuels à approuver
Décisions humaines requises : revue du fond, de l’ordre narratif et des visuels ; autorisation distincte de la PHASE 7
Prochaine phase proposée : PHASE 7 — Produire le guide PDF
Statut exact : CONTENU S27 INTÉGRÉ — REVUE HUMAINE DU FOND REQUISE
```

```text
CONTENU S27 INTÉGRÉ — REVUE HUMAINE DU FOND REQUISE
```
