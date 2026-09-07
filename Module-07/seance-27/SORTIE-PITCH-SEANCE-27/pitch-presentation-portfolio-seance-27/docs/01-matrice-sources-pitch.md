# 01 — Matrice sources–pitch de la séance 27

**Candidat :** Karim El Mechti  
**Projet :** INGÉNIA PILOT  
**Date :** 2026-09-02  
**Phase exécutée :** PHASE 1 — Matrice sources–pitch  
**Production principale retenue :** INGÉNIA PILOT V10  
**Statut :** MATRICE SOURCES–PITCH PRÊTE — VALIDATION HUMAINE REQUISE

## 1. Objet et règle de lecture

Cette matrice prépare un pitch de trois à cinq minutes à partir du portfolio et
des preuves existantes. Elle ne constitue pas encore le script du pitch.

Chaque affirmation est classée selon l’un des états suivants :

| État | Sens dans la matrice |
|---|---|
| `FAIT SOURCE` | information écrite dans une source accessible |
| `RÉSULTAT OBSERVÉ` | résultat contrôlé et documenté dans une preuve |
| `INTENTION` | action envisagée, non encore exécutée ou confirmée |
| `LIMITE` | réserve qui doit rester visible dans le pitch |
| `À CONFIRMER` | décision ou information humaine manquante |

Une mention de publication historique ne vaut pas nouvelle autorisation de
publication. Le statut `FINALISTE CONFIRMÉ` n’est attribué que par le pilote
humain.

## 2. Sources de référence retenues

| Code | Source | Usage dans le pitch | Statut de lecture |
|---|---|---|---|
| S27-G | `Module-07/seance-27/guide-pitch-seance-27.md` | structure des six blocs, durée, questions et répétitions | V1 à valider |
| S26-P | `Module-07/07-portfolio/05-portfolio-professionnel-v1.md` | activité, besoin, production, méthode et prochaine étape | présent et lu |
| S26-I | `Module-07/07-portfolio/06-index-preuves-v1.md` | chemins, versions, contrôles, confidentialité et droits | présent et lu |
| S26-A | `Module-07/07-portfolio/04-progression-avant-apres-v1.md` | progression P02/S19 → P03/S20 → P06 | présent et lu ; état historique à dater |
| S26-C | `Module-07/07-portfolio/07-checklist-controle-s25-s26.md` | contrôles consolidés et décisions humaines | présent et lu |
| S26-R | `Module-07/07-portfolio/08-rapport-final-s26.md` | contrôle du portfolio et limites chronologiques | présent et lu |
| V10-L | `Module-07/07-portfolio/09-rapport-validation-locale-v10.md` | recette navigateur locale et validation humaine | présent et lu |
| V10-P | `Module-07/07-portfolio/10-rapport-publication-github-pages-v10.md` | publication V10 et contrôles publics documentés | présent et lu |
| P01–P07 | `Module-07/07-portfolio/02-selection-preuves-portfolio-v1.md` | contribution, rôle de l’IA et limites de chaque preuve | sélection confirmée |
| C01–C08 | `Module-07/07-portfolio/03-matrice-competences-preuves-v1.md` | compétences reliées aux preuves | matrice disponible, états historiques à actualiser |

Les quatre fichiers pédagogiques S27 nommés dans le prompt maître, le README
S27 et `preuve-26-portfolio-v1.md` restent absents. Ils ne sont ni reconstitués
ni présentés comme lus.

## 3. Matrice des six blocs du pitch

| Bloc du pitch | Élément à expliquer | État | Source principale | Preuve associée | Formulation factuelle exploitable | Limite ou donnée manquante |
|---|---|---|---|---|---|---|
| 1 — Activité ou sujet | rôle du candidat | `FAIT SOURCE` | S26-P, section 1 | P06 | Je conçois, contrôle et documente INGÉNIA PILOT, un mini-site PWA de démonstration pour le suivi anonymisé de projets d’ingénierie. | Ne pas présenter le démonstrateur comme un logiciel opérationnel de gestion. |
| 1 — Activité ou sujet | public concerné | `FAIT SOURCE` | S26-P, section 1 | P05, P06 | La production s’adresse aux professionnels et aux membres d’une équipe de bureau d’études qui veulent évaluer une méthode de suivi et ses preuves. | Le destinataire précis du pitch S27 n’est pas confirmé : jury, professionnel, partenaire ou équipe. |
| 2 — Besoin traité | besoin professionnel | `FAIT SOURCE` | S26-P, section 2 | P06 | Le besoin est de rendre un portefeuille de projets lisible, de repérer les blocages et de voir l’action prioritaire sans exposer de données réelles. | L’usage repose sur une démonstration anonymisée ; aucun déploiement métier réel n’est prouvé. |
| 2 — Besoin traité | résultat attendu | `INTENTION` | S26-P, section 2 | P06 | Un utilisateur doit pouvoir identifier une mission en alerte, comprendre la raison du blocage et retrouver l’action à réaliser. | Distinguer ce résultat attendu des contrôles effectivement réalisés. |
| 2 — Besoin traité | résultat effectivement contrôlé | `RÉSULTAT OBSERVÉ` | V10-L, sections 2 à 6 | P06 | Les contrôles locaux ont affiché 41 missions, 7 cartes d’alerte complètes et les informations de blocage, d’action et de responsabilité. | Contrôles effectués aux dimensions documentées, pas sur tous les appareils possibles. |
| 3 — Production principale | production choisie | `FAIT SOURCE` | S26-P, sections 4.1 et 9 | P06 | La production principale est INGÉNIA PILOT V10, accessible localement dans `PROJET KARIM/mini-site-ingenia-pilot/`. | Montrer une seule production pendant la démonstration. |
| 3 — Production principale | fonctions démontrables | `RÉSULTAT OBSERVÉ` | S26-C et V10-L | P06 | La V10 affiche 41 missions anonymisées, isole 7 alertes, montre leurs blocages et actions, propose des filtres et fonctionne avec un cache local de 22 ressources. | La saisie, la base de données et la sauvegarde utilisateur ne font pas partie du mini-site. |
| 3 — Production principale | publication documentée | `RÉSULTAT OBSERVÉ` | V10-P | P06 | Le rapport du 31 août 2026 documente un déploiement GitHub Pages réussi et des contrôles publics sur ordinateur et mobile. | L’URL n’a pas été recontrôlée en ligne pendant la PHASE 1 S27 ; parler d’un résultat daté. |
| 3 — Production principale | confidentialité | `RÉSULTAT OBSERVÉ` | V10-P, section 5 | P06 | Le paquet public ne contient ni correspondance réel–anonyme, ni courriel, ni chemin Windows ; les missions sont présentées sous alias. | Le site ne doit recevoir aucune donnée confidentielle dans son état actuel. |
| 4 — Progression avant/après | état initial P02/S19 | `FAIT SOURCE` | S26-A, sections 2 et 5 | P02 | La première PWA présentait 3 bénéfices et 11 informations de suivi, sans collection de missions ni alerte automatique. | Les tests interactifs historiques n’ont pas tous été rejoués pendant l’assemblage du portfolio. |
| 4 — Progression avant/après | correction intermédiaire P03/S20 | `RÉSULTAT OBSERVÉ` | S26-A, section 4 | P03 | La recette S20 documente la correction d’un précache incomplet, passé de 10 à 16 ressources. | Le fichier antérieur à la correction n’est pas conservé séparément ; la preuve repose en partie sur le journal de test. |
| 4 — Progression avant/après | état final V10 | `RÉSULTAT OBSERVÉ` | S26-C, V10-L et V10-P | P06 | La V10 réunit 41 missions, 7 alertes complètes, 4 affiches, un cache de 22 ressources et une publication contrôlée le 31 août 2026. | Ne pas confondre progression fonctionnelle, impact professionnel réel et validation pédagogique finale. |
| 4 — Progression avant/après | preuve la plus claire | `À CONFIRMER` | S26-A | P02, P03, P06 | La comparaison proposée est : première PWA descriptive → correction du cache → démonstrateur métier V10. | Le candidat doit confirmer quelle comparaison il expliquera le plus facilement à l’oral. |
| 5 — Méthode avec l’IA | contribution du candidat | `FAIT SOURCE` | S26-P, section 6 | P05, P06 | Le candidat définit le besoin, choisit les fonctions, demande les corrections, accepte les résultats et donne les autorisations phase par phase. | La répartition exacte du code écrit directement par le candidat et proposé par l’IA doit être expliquée honnêtement. |
| 5 — Méthode avec l’IA | assistance de l’IA | `FAIT SOURCE` | S26-P, section 6 | P01, P05, P06, P07 | L’IA assiste l’inventaire, la structuration, le code, les visuels, les tests et la documentation. | Ne pas présenter cette assistance comme un travail réalisé seul par le candidat. |
| 5 — Méthode avec l’IA | contrôle humain | `RÉSULTAT OBSERVÉ` | S26-C, V10-L et V10-P | P05, P06 | Les décisions, validations locales, autorisations Git et contrôles publics sont consignés séparément et datés. | La validation pédagogique du pitch et le statut de finaliste restent réservés au pilote humain. |
| 6 — Prochaine étape | démonstration professionnelle | `INTENTION` | S26-P, section 8 | P06 | Le portfolio propose comme prochaine étape une démonstration à un professionnel du bureau d’études avec des données toujours anonymisées. | Destinataire, date, accord et critère de réussite non confirmés. |
| 6 — Prochaine étape | préparation S27 | `INTENTION` | S27-G, sections 5, 6 et 9 | future preuve S27 | Préparer un pitch de 3 à 5 minutes, une démonstration de 2 à 3 minutes et trois répétitions chronométrées. | Aucune répétition S27 ni durée observée n’existe encore. |

## 4. Production principale vérifiée

### Choix retenu pour la matrice

```text
INGÉNIA PILOT V10
```

### Chemins et accès

| Élément | Localisation | Résultat de la PHASE 1 |
|---|---|---|
| Mini-site local | `PROJET KARIM/mini-site-ingenia-pilot/` | présent |
| Page principale | `PROJET KARIM/mini-site-ingenia-pilot/index.html` | présente |
| Données | `PROJET KARIM/mini-site-ingenia-pilot/data/data.json` | présentes |
| README | `PROJET KARIM/mini-site-ingenia-pilot/README.md` | présent et lu |
| Dépôt Git du mini-site | même dossier | propre sur `master...origin/master` au diagnostic |
| URL documentée | `https://elmechtiai-crypto.github.io/suivi-projets-ingenierie/` | publication prouvée par V10-P ; non recontrôlée en ligne pendant cette phase |
| Secours local | dossier complet du mini-site | présent ; parcours de démonstration à définir en PHASE 3 |

Le choix de P06 évite de disperser le pitch sur plusieurs productions. P02 et
P03 restent des preuves de progression, pas des démonstrations concurrentes.

## 5. Preuve avant/après vérifiée

| Étape | Preuve | Fait utilisable | Réserve obligatoire |
|---|---|---|---|
| Avant | P02 — S19 | PWA descriptive avec 3 bénéfices, 11 informations, 0 mission et 0 alerte | état historique et tests partiellement rejoués |
| Correction | P03 — S20 | précache documenté de 10 à 16 ressources | ancien fichier non conservé séparément |
| Après | P06 — V10 | 41 missions, 7 alertes, blocages, actions, 4 affiches, cache de 22 ressources | impact opérationnel réel non mesuré |

La preuve avant/après est suffisante pour préparer le script, à condition de
conserver ces trois réserves et de ne pas présenter S19 et S20 comme deux codes
actuellement différents.

## 6. Proposition de message central à valider

La formulation suivante est soutenue par les sources, mais reste une
proposition éditoriale :

> INGÉNIA PILOT démontre qu’un suivi anonymisé peut rendre visibles les alertes,
> les blocages et les actions prioritaires d’un portefeuille de projets, avec
> une assistance de l’IA maintenue sous contrôle humain.

**État :** `À CONFIRMER PAR LE CANDIDAT AVANT LA PHASE 2`.

## 7. Écarts de statut et règles d’arbitrage

### 7.1 Progression V9 puis V10

Les documents `02-selection-preuves-portfolio-v1.md`,
`03-matrice-competences-preuves-v1.md` et
`04-progression-avant-apres-v1.md` décrivent d’abord P06 en V9 avec une
correction encore requise. Les rapports plus récents `07`, `09` et `10`
documentent le remplacement de l’affiche exclue, la V10, sa validation locale
et sa publication.

**Arbitrage retenu :** utiliser V10 comme état actuel et citer V9 uniquement
comme étape historique.

### 7.2 Portfolio local et mini-site publié

Le statut initial du portfolio indique qu’il est assemblé localement et non
publié. Cela n’entre pas en contradiction avec la publication de la V10 : le
portfolio Markdown et le mini-site INGÉNIA PILOT sont deux livrables distincts.

### 7.3 Sources pédagogiques S27 manquantes

La matrice peut être préparée avec le guide S27 et les preuves S26. Elle ne peut
pas affirmer une conformité aux quatre fichiers pédagogiques S27 absents.

## 8. Informations humaines encore nécessaires

| Paramètre | État actuel | Moment de décision recommandé |
|---|---|---|
| Destinataire exact | non confirmé | avant le script du pitch |
| Message central | proposition en section 6 | avant le script du pitch |
| Preuve avant/après à privilégier oralement | comparaison proposée, choix non confirmé | avant le script du pitch |
| Prochaine étape définitive | deux intentions documentées | avant la conclusion du script |
| Affiches autorisées dans S27 | aucune liste explicitement autorisée pour S27 | avant le plan du mini-site |
| Logo autorisé | non confirmé pour S27 | avant le plan du mini-site |
| Réutilisation de l’URL publique | non autorisée pour le futur site à ce stade | avant l’intégration |

## 9. Rapport après action

```text
RAPPORT APRÈS ACTION

Phase exécutée : PHASE 1 — Matrice sources–pitch
Racine effective : <RACINE_DU_DEPOT>
Instructions AGENTS.md chargées : copie S27 présente dans le dossier cible
Sources lues : guide S27 ; diagnostic S27 ; sélection P01–P07 ; matrice compétences–preuves ; portfolio ; index ; avant/après ; checklist ; rapports S26 et V10
Fichier créé : docs/01-matrice-sources-pitch.md
Fichiers modifiés : aucun fichier existant
Fichiers non touchés : productions originales ; portfolio source ; mini-site INGÉNIA PILOT ; dossier privé ; Git
Commandes exécutées : lecture des sources ; contrôle d’absence du fichier cible
Contrôles réalisés : correspondance des six blocs ; production principale ; avant/après ; faits, résultats, intentions, limites et informations manquantes
Résultats observés : P06/V10 retenue comme production unique ; progression P02 → P03 → P06 vérifiable ; six blocs reliés à des preuves
Éléments non vérifiables : destinataire S27 ; chronométrage oral ; répétitions ; autorisation des visuels S27 ; contrôle en ligne actuel de l’URL
Liens prévus : mini-site V10, portfolio, index, preuves et futur guide
Liens intégrés : aucun dans un mini-site, celui-ci n’étant pas encore créé
Liens testés : chemins locaux principaux vérifiés pendant le diagnostic ; URL non retestée en PHASE 1
Affiches prévues : aucune décision d’intégration à ce stade
Affiches autorisées : quatre P07 avec droits déclarés historiquement ; réutilisation S27 non autorisée
Risques ou limites : sources pédagogiques S27 manquantes ; anciens statuts V9 à ne pas reprendre comme états actuels ; ne pas confondre résultat attendu et impact réel
Décisions humaines requises : valider la matrice, le message central, le destinataire et la preuve avant/après à privilégier
Prochaine phase proposée : PHASE 2 — Script du pitch
Statut exact : MATRICE SOURCES–PITCH PRÊTE — VALIDATION HUMAINE REQUISE
```

```text
MATRICE SOURCES–PITCH PRÊTE — VALIDATION HUMAINE REQUISE
```
