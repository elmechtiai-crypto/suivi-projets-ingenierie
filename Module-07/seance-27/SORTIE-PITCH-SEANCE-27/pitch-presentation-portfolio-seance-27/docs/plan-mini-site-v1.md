# Plan du mini-site V1 — Séance 27

**Candidat :** Karim El Mechti  
**Projet présenté :** INGÉNIA PILOT V10  
**Destinataire :** M. Abderrahman  
**Date :** 2026-09-04  
**Phase exécutée :** PHASE 4 — Plan du mini-site  
**Nom prévu :** `pitch-presentation-portfolio-seance-27`  
**Statut affichable à ce stade :** À COMPLÉTER  
**Statut du document :** PLAN DU MINI-SITE PRÊT — AUTORISATION EXPLICITE REQUISE POUR VITE ET LES DÉPENDANCES

**Décision humaine du 2026-09-04 :** plan validé ; statut initial
`À COMPLÉTER` confirmé ; création future d’affiches et de logo autorisée ;
PHASE 5 et installation de Vite comme unique dépendance de développement
autorisées.

## 1. Décisions et résultats reçus avant la phase 4

| Élément | État communiqué |
|---|---|
| Matrice sources–pitch | validée |
| Message central | validé, puis formulation orale adaptée à la demande du candidat |
| Destinataire | M. Abderrahman |
| Premier chronométrage du pitch | 7 minutes |
| Second chronométrage du pitch | 6 minutes |
| Démonstration | 2 minutes, dans la cible |
| Version locale de secours | non testée |
| Questions | non chronométrées |
| Correction demandée pendant la phase 3 | aucune précision supplémentaire |

Le pitch a progressé d’une minute mais dépasse encore la cible de trois à cinq
minutes. Le mini-site ne devra donc pas afficher `PRÊT POUR PRÉSENTATION` avant
une nouvelle réduction, le test du secours local et le chronométrage des quatre
réponses.

## 2. Finalité éditoriale

Le mini-site doit aider Karim El Mechti à présenter son projet sans lire son
portfolio mot à mot. Il doit permettre à M. Abderrahman de comprendre, dans cet
ordre :

1. qui présente le projet ;
2. quel besoin est traité ;
3. quelle production principale existe ;
4. quelle progression est prouvée ;
5. comment les responsabilités humain–IA sont réparties ;
6. quelle limite reste reconnue ;
7. quelle prochaine étape est prévue.

Le site présente une seule production principale : INGÉNIA PILOT V10. Les
autres productions servent uniquement de preuves de progression.

## 3. Modes prévus

### Mode consultation

- page verticale responsive ;
- navigation par ancres vers neuf sections ;
- preuves résumées, avec détails accessibles à la demande ;
- liens externes clairement signalés ;
- lecture possible sans animation ;
- version imprimable courte.

### Mode présentation

- neuf écrans successifs occupant l’espace disponible ;
- une idée principale par écran ;
- navigation par boutons, touches fléchées, `Page précédente`, `Page suivante`,
  `Début` et `Fin` ;
- indicateur visible `écran courant / 9` ;
- chronomètre local avec démarrer, pause et réinitialiser ;
- aucun enregistrement ni envoi des durées ;
- sortie du mode présentation avec la touche `Échap` ;
- fonctionnement après build sans dépendance à une connexion réseau, hors lien
  vers la production publique.

Le choix retenu pour le chronomètre est **sans persistance** : une actualisation
réinitialise la valeur et aucune donnée n’est conservée dans `localStorage`.

## 4. Parcours éditorial des neuf écrans

| Écran | Titre proposé | Contenu essentiel | Source ou preuve | Action possible |
|---:|---|---|---|---|
| 1 | INGÉNIA PILOT | Karim El Mechti, message central, durée cible, statut `À COMPLÉTER` | script V1 et matrice | démarrer la présentation |
| 2 | Mon sujet | mini-site PWA de suivi de projets d’ingénierie avec données fictives | portfolio, P06 | passer au besoin |
| 3 | Le besoin | repérer une alerte, comprendre le blocage, retrouver l’action sans exposer de données réelles | portfolio, P06 | afficher le résultat attendu |
| 4 | La production principale | V10, 41 missions, 7 alertes, blocages, actions et limites | P06, rapports V10 | ouvrir la production publique ou signaler le secours local |
| 5 | Ma progression | P02/S19 → P03/S20 → P06/V10 | document avant/après | révéler les trois étapes successivement |
| 6 | Ma méthode avec l’IA | candidat décide ; IA propose et structure ; contrôle humain vérifie et autorise | P05, P06 | afficher les trois responsabilités |
| 7 | Ma prochaine étape | réduire le pitch, tester le secours local, chronométrer les réponses | mesures S27 | afficher les critères restants |
| 8 | Questions préparées | quatre questions avec réponse courte, preuve et limite | document questions–réponses | ouvrir une question à la fois |
| 9 | Ressources | portfolio, preuve principale, avant/après, guide et liens contrôlés | index P01–P07 | revenir au début ou quitter |

## 5. Contenu prévu par section

### 5.1 En-tête

- lien d’évitement « Aller au contenu » ;
- marque textuelle `INGÉNIA PILOT` tant qu’aucun logo S27 n’est autorisé ;
- bouton `Mode présentation` ;
- bouton de changement de thème uniquement s’il reste lisible et utile ;
- statut visible : `À COMPLÉTER`.

### 5.2 Message central

Formulation prévue pour l’interface :

> INGÉNIA PILOT montre comment rendre visibles les alertes, les blocages et les
> actions prioritaires d’un portefeuille de projets, sans données réelles et
> avec un contrôle humain sur l’assistance de l’IA.

Cette formulation adapte le message validé au choix terminologique communiqué
par le candidat. Elle devra être relue avant intégration.

### 5.3 Production principale

Trois éléments seulement :

1. chiffre `41 missions fictives` ;
2. chiffre `7 alertes complètes` ;
3. bouton vers la production, accompagné de la mention « lien externe ».

La section affiche aussi une limite :

```text
Démonstrateur sans saisie, base de données ni mesure d’impact professionnel.
```

### 5.4 Progression

Présenter trois cartes horizontales ou verticales selon la largeur :

```text
S19 — comprendre et structurer
0 mission · 0 alerte

S20 — tester et corriger
précache : 10 → 16 ressources

V10 — produire et prouver
41 missions · 7 alertes · cache de 22 ressources
```

Une note visible rappelle que l’ancien fichier du cache S20 n’est pas conservé
séparément et que le journal de test complète la preuve.

### 5.5 Méthode humain–IA

| Candidat | IA | Contrôle humain |
|---|---|---|
| définit le besoin, choisit et décide | propose, structure et assiste | vérifie, corrige et autorise |

Formule prévue :

```text
L’IA assiste. L’humain pilote, contrôle et décide.
```

### 5.6 État de préparation

Le site ne calcule aucun statut de finaliste. Il peut afficher une checklist
locale :

```text
[ ] pitch ramené entre 3 et 5 minutes
[x] démonstration annoncée à 2 minutes
[ ] version locale de secours testée
[ ] quatre réponses chronométrées
[ ] visuels autorisés
[ ] liens contrôlés avant présentation
```

Le statut `FINALISTE CONFIRMÉ` ne figure dans aucune logique automatique.

## 6. Maquette textuelle

```text
┌──────────────────────────────────────────────────────────────┐
│ Aller au contenu                                             │
│ INGÉNIA PILOT        À COMPLÉTER       [Mode présentation]   │
├──────────────────────────────────────────────────────────────┤
│ Accueil · Besoin · Production · Progression · Méthode · Suite│
├──────────────────────────────────────────────────────────────┤
│ KARIM EL MECHTI                                             │
│ INGÉNIA PILOT                                               │
│ Message central court                                       │
│ [Démarrer] [Voir la production — lien externe]              │
├──────────────────────────────────────────────────────────────┤
│ BESOIN                                                       │
│ Alerte → blocage → action                                    │
├──────────────────────────────────────────────────────────────┤
│ PRODUCTION PRINCIPALE                                       │
│ [41 missions] [7 alertes] [V10 contrôlée le 31 août 2026]   │
│ Limite du démonstrateur                                     │
├──────────────────────────────────────────────────────────────┤
│ PROGRESSION                                                  │
│ [S19] ───────── [S20] ───────── [V10]                       │
├──────────────────────────────────────────────────────────────┤
│ MÉTHODE                                                      │
│ [Candidat]       [IA]        [Contrôle humain]               │
├──────────────────────────────────────────────────────────────┤
│ PROCHAINE ÉTAPE ET ÉTAT DE PRÉPARATION                      │
│ checklist locale, sans collecte                             │
├──────────────────────────────────────────────────────────────┤
│ QUESTIONS                                                    │
│ [Q1] [Q2] [Q3] [Q4]                                        │
├──────────────────────────────────────────────────────────────┤
│ RESSOURCES ET PREUVES                                       │
│ liens autorisés · guide imprimable · statut de contrôle     │
└──────────────────────────────────────────────────────────────┘

MODE PRÉSENTATION
┌──────────────────────────────────────────────────────────────┐
│ Écran 4 / 9                         Chronomètre 02:14         │
│                                                              │
│                 UNE IDÉE PRINCIPALE                          │
│                 UNE PREUVE OU UN CHIFFRE                     │
│                 UNE LIMITE COURTE                            │
│                                                              │
│ [Précédent]                               [Suivant]           │
└──────────────────────────────────────────────────────────────┘
```

## 7. Architecture technique proposée — sans création à cette phase

```text
pitch-presentation-portfolio-seance-27/
├── AGENTS.md                         # déjà présent
├── index.html                        # prévu, non créé
├── package.json                      # prévu, non créé
├── package-lock.json                 # après installation autorisée seulement
├── vite.config.js                    # prévu, non créé
├── .gitignore                        # prévu, non créé
├── .nojekyll                         # prévu, non créé
├── README.md                         # prévu, non créé
├── LICENSE-ASSETS.md                 # prévu, non créé
├── public/
│   ├── favicon.svg
│   ├── guide-pitch-seance-27.pdf     # phase 7 seulement
│   └── assets/
│       ├── images/
│       └── preuves/
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
│       ├── print.css
│       └── responsive.css
├── guide/
├── docs/                              # documents de préparation existants
└── livrables-s27/
```

## 8. Dépendances proposées pour la phase 5

| Dépendance | Type | Justification |
|---|---|---|
| `vite` | développement uniquement | serveur local et build statique |

Aucune bibliothèque JavaScript d’interface, aucun framework, aucun service
d’analyse et aucune bibliothèque de chronométrage ne sont proposés. HTML, CSS
et JavaScript natifs suffisent.

Version à figer seulement après contrôle de compatibilité avec Node.js et
autorisation d’installation. La version observée dans un autre projet S25 ne
doit pas être copiée automatiquement.

## 9. Liens prévus

| Ressource | Destination prévue | Statut actuel | Secours prévu |
|---|---|---|---|
| Production V10 | `https://elmechtiai-crypto.github.io/suivi-projets-ingenierie/` | publication contrôlée le 31 août 2026 ; non retestée en phase 4 | dossier local préparé séparément |
| Portfolio source | fichier Markdown S26 | local, non publié comme portfolio | résumé dans le site |
| Index des preuves | fichier Markdown S26 | local | fiches courtes dans le site |
| Avant/après | fichier Markdown S26 | local | synthèse S19/S20/V10 |
| Guide S27 | futur PDF | non produit | future page HTML imprimable |
| Ressource séance 27 | URL fournie par le guide | non contrôlée dans cette phase | aucun secours décidé |

Avant intégration, chaque lien devra recevoir une date de contrôle, un libellé
compréhensible, une indication public/local et une décision d’autorisation.

## 10. Affiches et images

**Décision de la phase 4 : aucune affiche intégrée dans le plan fonctionnel.**

Éléments repérés mais non autorisés pour le futur mini-site S27 :

- quatre affiches P07, avec droits historiquement déclarés par le candidat ;
- affiche de clôture V1, encore soumise à validation humaine ;
- captures ordinateur et mobile de la V10, prévues seulement comme secours
  local dans le plan de démonstration.

Avant toute intégration, le candidat devra fournir une liste exacte. Pour chaque
visuel retenu, `LICENSE-ASSETS.md` indiquera source, droit, texte alternatif,
section, taille et statut de publication.

## 11. Identité visuelle

- fond bleu nuit ;
- surfaces blanc cassé ;
- cyan ou turquoise pour les éléments interactifs ;
- or uniquement pour les repères importants ;
- typographie système lisible, sans téléchargement externe ;
- motifs géométriques sobres inspirés de l’ingénierie ;
- aucune photographie de chantier ;
- aucun logo tant que son usage S27 n’est pas confirmé.

## 12. Accessibilité et responsive

| Contrôle prévu | Règle de conception |
|---|---|
| 360 px | une colonne, navigation compacte et boutons pleine largeur si nécessaire |
| 768 px | deux colonnes seulement lorsque le contenu reste lisible |
| 1024 px | mode consultation élargi et mode présentation stable |
| 1440 px | largeur de lecture limitée, espaces renforcés |
| Projection 16:9 | texte principal lisible à distance et contenu essentiel sans défilement |
| Clavier | ordre logique, focus visible, aucune interaction réservée à la souris |
| Mouvement | prise en compte de `prefers-reduced-motion` |
| Impression | contraste noir et blanc, liens développés et sauts de page maîtrisés |
| Structure | un seul `h1`, titres hiérarchisés, régions sémantiques |

## 13. Confidentialité et sécurité

- aucun compte utilisateur ;
- aucun formulaire envoyant des données ;
- aucun service externe d’analyse ;
- aucune clé d’API ;
- aucune donnée professionnelle source ;
- aucun chemin Windows dans le build ;
- aucune copie du fichier de correspondance ;
- liens externes distingués des fichiers locaux ;
- chronomètre entièrement local et sans persistance ;
- statut final jamais calculé automatiquement.

## 14. Critères d’acceptation du futur socle

```text
[ ] les neuf écrans sont représentés
[ ] consultation et présentation utilisent le même contenu source
[ ] le mode présentation fonctionne au clavier
[ ] le chronomètre ne collecte rien
[ ] la production principale est unique
[ ] chaque chiffre renvoie à une preuve
[ ] la limite du démonstrateur est visible
[ ] le statut reste À COMPLÉTER tant que les contrôles humains manquent
[ ] aucun visuel non autorisé n’est copié
[ ] aucun chemin absolu n’apparaît dans le build
[ ] aucune donnée réelle n’est intégrée
[ ] aucune publication n’est exécutée
```

## 15. Décisions requises avant la phase 5

1. autoriser ou refuser la création du socle Vite ;
2. autoriser ou refuser l’installation de `vite` comme unique dépendance de
   développement ;
3. confirmer que le statut initial du site reste `À COMPLÉTER` ;
4. confirmer qu’aucune affiche ni aucun logo ne sera intégré au socle initial ;
5. confirmer la formulation du message central de la section 5.2.

Ces décisions n’autorisent ni l’intégration complète du contenu, ni Git, ni
publication.

## 16. Rapport après action

```text
RAPPORT APRÈS ACTION

Phase exécutée : PHASE 4 — Plan du mini-site
Racine effective : <RACINE_DU_DEPOT>
Instructions AGENTS.md chargées : copie S27 présente dans le dossier cible
Sources lues : matrice ; script corrigé ; plan de démonstration ; questions–réponses ; guide S27 ; portfolio ; index et rapports V10
Fichier créé : docs/plan-mini-site-v1.md
Fichiers modifiés : docs/02-script-pitch-v1.md ; docs/03-plan-demonstration.md ; docs/04-questions-reponses.md pour consigner les résultats humains reçus
Fichiers non touchés : productions originales ; mini-site INGÉNIA PILOT ; portfolio source ; dossier privé ; Git
Commandes exécutées : lecture des statuts ; contrôle d’absence du plan ; création et contrôles textuels
Contrôles réalisés : architecture éditoriale ; neuf écrans ; deux modes ; maquette textuelle ; liens ; preuves ; visuels ; accessibilité ; sécurité
Résultats observés : pitch à 6 minutes ; démonstration à 2 minutes ; secours local non testé ; questions non chronométrées ; plan complet sans code
Éléments non vérifiables : rendu réel du futur site ; fonctionnement Vite ; liens au jour de la présentation ; visuels autorisés ; durées des réponses
Liens prévus : production V10, portfolio, avant/après, guide et ressource S27
Liens intégrés : aucun, le mini-site n’est pas encore codé
Liens testés : aucun lien réseau pendant cette phase
Affiches prévues : aucune dans le socle initial
Affiches autorisées : aucune pour S27 à ce stade
Risques ou limites : pitch encore trop long ; secours non testé ; questions non chronométrées ; sources pédagogiques S27 toujours manquantes
Décisions humaines requises : autorisation du socle Vite et autorisation distincte d’installation de la dépendance
Prochaine phase proposée : PHASE 5 — Créer le socle Vite
Statut exact : PLAN DU MINI-SITE PRÊT — AUTORISATION EXPLICITE REQUISE POUR VITE ET LES DÉPENDANCES
```

```text
PLAN DU MINI-SITE PRÊT — AUTORISATION EXPLICITE REQUISE POUR VITE ET LES DÉPENDANCES
```
