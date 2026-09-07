# 06 - Rapport des contrôles de la PHASE 8

**Candidat :** Karim El Mechti  
**Projet :** INGÉNIA PILOT  
**Date :** 2026-09-07  
**Phase exécutée :** PHASE 8 - Tests et répétitions  
**Statut :** PRÊT POUR PRÉSENTATION — VALIDATION HUMAINE REQUISE

## 1. Autorisations reçues

Le candidat a :

- validé le guide PDF S27 ;
- autorisé sa copie dans `public/` ;
- autorisé la PHASE 8.

Ces autorisations ne couvrent aucune action Git, publication ou décision de
présélection.

## 2. PDF copié et intégré

Le guide validé a été copié vers :

```text
public/guide-pitch-seance-27.pdf
```

Il a été ajouté aux ressources du mini-site. Les exemplaires source, public et
build possèdent la même empreinte SHA-256 :

```text
28E7ABC06772E9560EAFF4FB276CEA26A2B83148CBC319F9493844EA320062F8
```

## 3. Contrôles automatiques réussis

| Contrôle | Résultat observé |
|---|---|
| syntaxe JavaScript | 10 fichiers valides |
| build Vite final après validation des durées | réussi en 204 ms |
| modules transformés | 19 |
| écrans de présentation | 7 |
| identifiants HTML dupliqués | aucun |
| images avec attribut `alt` | 10 sur 10 |
| questions structurées | 4 |
| preuves structurées | 7 |
| liens structurés | 3, dont le guide PDF |
| statut du site | `PRÊT POUR PRÉSENTATION — VALIDATION HUMAINE REQUISE` |
| statut final réservé dans la page publique | absent |
| lien d'évitement | présent |
| focus visible | présent dans le CSS |
| réduction des animations | `prefers-reduced-motion` présent |
| navigation clavier prévue | flèches, Page précédente/suivante, Début, Fin, Échap |
| persistance du chronomètre ou de la checklist | aucune |
| ressources déclarées dans le cache du secours | 22 sur 22 présentes |
| chemins du build | relatifs |
| `.nojekyll` dans le build | présent |
| fichiers publics textuels contrôlés | 14 |
| secret, clé, chemin Windows ou référence au dossier privé | aucun détecté |

Script reproductible :

```text
node scripts/validate-static.mjs
```

Résultat : `STATIC_CHECK_OK`.

## 4. Build, preview et ressources

Le serveur `npm run preview` a été démarré sur `127.0.0.1:4173`, contrôlé puis
arrêté.

| Ressource | HTTP | Type observé |
|---|---:|---|
| accueil du build | 200 | `text/html` |
| JavaScript de production | 200 | `text/javascript` |
| CSS de production | 200 | `text/css` |
| guide PDF | 200 | `application/pdf` |
| favicon | 200 | `image/svg+xml` |
| carte sociale | 200 | `image/png` |
| visuel principal | 200 | `image/png` |
| quatre affiches | 200 | JPEG ou PNG |
| accueil du secours local | 200 | `text/html` |
| CSS, JavaScript et JSON du secours | 200 | types conformes |
| page hors ligne et service worker du secours | 200 | types conformes |

Le build a aussi été servi avec un serveur HTTP statique indépendant sur le
port 4174. L'accueil, le CSS, le JavaScript, le PDF et le secours ont tous
répondu en HTTP 200. Ce contrôle confirme que les ressources locales du build
ne dépendent pas du serveur de développement.

Le serveur statique et le serveur de preview ont été arrêtés après contrôle. Le
serveur de développement sur `http://127.0.0.1:5173/` reste actif pour la
répétition humaine.

## 5. Production publique

L'URL de la V10 a été recontrôlée le 4 septembre 2026 :

```text
https://elmechtiai-crypto.github.io/suivi-projets-ingenierie/
```

Résultat observé : HTTP 200, type `text/html; charset=utf-8`.

## 6. Contraste et responsive prévus

Ratios calculés sur les principales associations de couleurs :

| Association | Ratio |
|---|---:|
| texte principal / fond | 17,67:1 |
| texte secondaire / fond | 10,56:1 |
| texte secondaire / carte | 9,15:1 |
| turquoise / fond | 9,93:1 |
| or / fond | 10,46:1 |
| focus / fond | 12,92:1 |
| focus / surface forte | 9,75:1 |

Ces ratios dépassent 4,5:1. Les règles CSS couvrent le mobile sous 48 rem, la
tablette sous 64 rem et la projection à partir d'un ratio 16/10. Elles sont
compatibles avec les largeurs demandées de 360, 768, 1024 et 1440 px sur le
plan statique.

## 7. Contrôle du guide PDF

| Élément | Résultat |
|---|---|
| pages | 8 pages A4 |
| pages vides | aucune |
| texte extrait | présent sur les 8 pages |
| lien cliquable | présent |
| métadonnées | titre accentué contrôlé |
| rendu visuel | contrôlé page par page pendant la PHASE 7 |
| copie publique et copie du build | identiques au PDF validé |

## 8. Contrôles humains reçus

Le candidat a confirmé le 4 septembre 2026 :

- secours local testé : OUI ;
- mode présentation et touches testés : OUI ;
- affichage sur son écran testé : OUI ;
- troisième pitch : 6 minutes ;
- quatre réponses : 1 minute chacune.

Ces résultats sont enregistrés comme contrôles sur déclaration du candidat. La
connexion au navigateur automatisé n'était pas disponible. Les points suivants
restent sans confirmation explicite :

- console réelle du navigateur ;
- ordre détaillé du focus ;
- chronomètre et checklist en interaction réelle ;
- rendu aux largeurs 360, 768, 1024 et 1440 px ;
- lisibilité sur une projection 16:9 ;
- ouverture du PDF depuis le bouton du site ;
- présence des compteurs 41 et 7 dans le secours testé ;
- absence de compte, notification ou document privé pendant l'essai.

Trois répétitions humaines du pitch sont documentées : 7 minutes, 6 minutes,
puis 6 minutes. Une démonstration de 2 minutes a été communiquée pour l'essai 2.
Il manque encore :

- un pitch entre 3 et 5 minutes ;
- la durée de démonstration de l'essai 3 ;
- la correction décidée par le candidat ;
- quatre réponses ramenées entre 20 et 40 secondes ;
- la confirmation que les preuves et limites sont présentées sans hésitation.

## 9. Livrables de travail préparés

Sans écraser les emplacements canoniques :

```text
livrables-s27/pitch-progression-v1.md
livrables-s27/preuve-27-pitch-progression.md
livrables-s27/grille-preselection-seance-27.md
```

Ils restent des copies de travail portant le statut `À COMPLÉTER`.

Une correction supplémentaire a été préparée après le troisième essai :

```text
livrables-s27/pitch-progression-v2-court.md
livrables-s27/reponses-questions-v2-courtes.md
```

Le pitch V2 contient environ 280 mots et les quatre réponses sont recentrées sur
un fait, une preuve et une limite. Ces versions restent à chronométrer et ne
remplacent pas une validation humaine.

## 10. Rapport après action - état intermédiaire

```text
RAPPORT APRÈS ACTION

Phase exécutée : PHASE 8 - Tests et répétitions, partie technique exécutée
Racine effective : <RACINE_DU_DEPOT>
Instructions AGENTS.md chargées : AGENTS.md S27 et prompt maître S27
Sources lues : mini-site ; guide PDF ; documents phases 1 à 7 ; portfolio ; progression ; index P01 à P07
Fichiers créés : journal des répétitions ; rapport de contrôles ; script de contrôle statique ; trois livrables S27 de travail ; pitch V2 court ; réponses V2 courtes ; registre des prompts du lot de trois affiches
Fichiers modifiés : données des liens ; rendu des liens ; index ; styles ; contrôle statique ; README ; registre des actifs
Fichiers copiés : PDF validé vers public ; trois affiches de preuves générées vers public/assets/images/affiches-s27
Fichiers non touchés : production V10 source ; portfolio original ; dossier privé ; Modules 01 à 06 ; Git ; publication
Commandes exécutées : contrôles JavaScript ; build ; preview ; HTTP ; serveur statique ; contraste ; PDF ; confidentialité
Contrôles réalisés : structure ; dépendances ; build ; ressources ; URL publique ; secours technique ; PDF ; sécurité statique
Résultats observés : contrôles automatiques réussis ; ressources HTTP 200 ; URL V10 HTTP 200 ; PDF identique ; secours, mode et affichage confirmés par le candidat ; pitch à 6 minutes ; quatre réponses à 1 minute
Éléments non vérifiables : console ; ordre détaillé du focus ; largeurs responsive exactes ; projection ; durée de démonstration de l'essai 3
Liens intégrés : V10 publique ; secours local ; guide PDF local
Liens testés : trois destinations accessibles techniquement ; interactions humaines encore requises
Affiches prévues : quatre affiches existantes et trois affiches de preuves S27
Affiches autorisées : sept affiches intégrées ; les trois affiches de preuves S27 sont servies en HTTP 200
Risques ou limites : pitch à 6 minutes ; quatre réponses à 1 minute ; correction et durée de démonstration manquantes ; navigateur automatisé indisponible
Décisions humaines requises : valider la correction proposée ; chronométrer le pitch V2 et les réponses courtes ; communiquer la durée de démonstration manquante
Prochaine phase proposée : terminer la PHASE 8 avant toute PHASE 9
Statut exact : À COMPLÉTER
```

Le point d'arrêt `MINI-SITE ET PITCH CONTRÔLÉS - DÉCISION HUMAINE REQUISE`
n'est pas encore atteint, car les durées restent hors cible ou incomplètes.

```text
À COMPLÉTER
```

## 11. Lot de trois affiches de preuves S27

Le candidat a autorisé le 4 septembre 2026 la création et l’intégration locale de
trois affiches de présentation. Les rôles sont volontairement distincts :

- résultat démontrable : `P06`, 41 missions et 7 alertes ;
- progression vérifiable : `P02`, `P03`, `P06`, de S19 à la V10 ;
- méthode sous contrôle humain : `P05`, `P06`.

Les trois visuels ont été générés au format 1 672 × 941 px, relus visuellement,
copiés sous des noms versionnés et reliés depuis leurs sections respectives. Une
galerie dédiée est ajoutée à l’écran « Ressources et preuves ». Les prompts exacts
et les contrôles sont conservés dans `docs/prompts-affiches-preuves-s27.md`.

Contrôles exécutés après intégration :

| Contrôle | Résultat |
|---|---|
| build Vite | réussi, 19 modules transformés |
| contrôle statique | `STATIC_CHECK_OK` |
| écrans de présentation | 7 |
| images avec texte alternatif | 10 sur 10 |
| page locale | HTTP 200 |
| trois nouvelles affiches | HTTP 200 chacune |
| données privées, logos tiers ou watermark dans les affiches | aucun observé |
| Git et publication | non touchés |

Cette amélioration visuelle ne clôt pas la PHASE 8 : le pitch V2 court et les
réponses courtes doivent encore être chronométrés par le candidat.

## 12. Harmonisation pitch, preuves et affiches

Autorisation humaine reçue le 7 septembre 2026 :

```text
J’AUTORISE L’HARMONISATION DU MINI-SITE AVEC LE PITCH V2.
LES QUESTIONS, PREUVES ET RESSOURCES DEVIENNENT DES ANNEXES.
```

Conformément à cette autorisation, le parcours de présentation a été aligné sur
le pitch V2 court. Le mode présentation comprend désormais sept
étapes : introduction, besoin, production, progression, méthode, prochaine
étape et conclusion. Les questions et ressources deviennent des annexes du mode
consultation et ne sont plus comptées dans le déroulé oral.

Les liaisons suivantes sont intégrées :

| Partie du pitch | Preuve accessible | Affiche accessible |
|---|---|---|
| besoin | P06 | Du besoin à l’action |
| production principale | P06 | 41 missions et 7 alertes |
| progression | P02, P03, P06 | Une progression vérifiable |
| méthode avec l’IA | P05, P06 | Qui fait quoi ? |
| conclusion | P05, P06 | galerie des trois affiches |

Chaque carte de preuve contient maintenant un fait vérifiable, sa réserve et,
lorsqu’elle existe, la liaison vers l’affiche correspondante. La navigation vers
ces supports conserve l’écran de présentation afin de permettre un retour direct.

Contrôles après harmonisation : build Vite réussi, `STATIC_CHECK_OK`, sept écrans
de pitch, sept preuves structurées, dix images avec texte alternatif, page locale,
preuve P06 et affiche P06 accessibles en HTTP 200. Git et publication restent
non touchés. Le statut de la PHASE 8 demeure `À COMPLÉTER` jusqu’au nouveau
chronométrage humain.

## 13. Clarification du sujet et emplacement des annexes

À la demande du candidat du 7 septembre 2026 :

- la définition affichée et dite devient « INGÉNIA PILOT est un démonstrateur de suivi de projets d’ingénierie » ;
- le terme demandé est retiré du mini-site S27, du pitch V2 et du build ;
- la confidentialité reste explicitée par « données de démonstration, sans information professionnelle réelle » ;
- une entrée « Annexes » est ajoutée au menu ;
- un sommaire des annexes est placé immédiatement après la conclusion ;
- ce sommaire relie l’annexe A, l’annexe B et les trois affiches de preuves.

Le secours V10 et les documents historiques ne sont pas modifiés. Le build Vite
et le contrôle statique réussissent ; la page locale répond en HTTP 200. Le
statut reste `À COMPLÉTER`.

## 14. Retour vers la présentation principale

À la demande du candidat, un mécanisme de retour est ajouté après consultation
d’une preuve, d’une affiche ou d’une question. Depuis le mode présentation :

1. l’écran courant est mémorisé ;
2. le support demandé est affiché dans le même onglet ;
3. un bouton « Retour à la présentation principale » est proposé ;
4. ce bouton réactive le mode présentation sur l’écran mémorisé ;
5. le chronomètre conserve son état et n’est pas remis à zéro.

Les affiches s’affichent désormais dans leur galerie intégrée plutôt que sous
forme d’image isolée sans navigation. Chaque affiche ciblée s’étend sur toute la
largeur de la galerie et propose le bouton de retour. Les cartes P01 à P07 et
les quatre réponses préparées proposent le même retour.

Contrôles : build Vite réussi, `STATIC_CHECK_OK`, sept écrans, 46 identifiants
uniques, dix images avec texte alternatif et page locale en HTTP 200. Aucun
commit, push ou déploiement n’a été effectué.

## 15. Correction de l’organisation des affiches

Le candidat a signalé, capture à l’appui, que les trois affiches étaient
présentées dans des colonnes trop étroites : les titres, chiffres et bords des
visuels étaient coupés.

Correction appliquée :

- une affiche complète par ligne ;
- largeur maximale commune et centrée ;
- hauteur calculée automatiquement selon les dimensions originales ;
- affichage en mode `contain`, sans recadrage ;
- légende et bouton de retour conservés sous chaque affiche ;
- même organisation sur ordinateur, tablette et mobile.

Le build Vite et le contrôle statique réussissent. Le contrôle vérifie désormais
explicitement la colonne unique, la hauteur automatique et l’absence de
recadrage. La page locale répond en HTTP 200. Une validation visuelle humaine
après actualisation reste requise.

## 16. Annexe à la fin de la présentation

À la demande du candidat, le sommaire des annexes devient le dernier écran du
mode présentation. L’ordre est maintenant : sept écrans de pitch, conclusion,
puis un écran d’annexe clairement marqué « hors chronométrage ».

Cet écran donne accès à :

- l’annexe A — questions préparées ;
- l’annexe B — preuves et ressources ;
- la galerie des trois affiches de preuves.

Lorsqu’un contenu est ouvert depuis cet écran, le bouton de retour ramène à
l’annexe. Un bouton distinct permet de revenir directement à la conclusion du
pitch. Le compteur distingue `7 écrans de pitch` et `1 écran d’annexe`.

Contrôles : build Vite réussi, `STATIC_CHECK_OK`, page locale en HTTP 200,
sept écrans chronométrés et une annexe hors chronométrage. Git et publication
restent non touchés.

## 17. Plan au premier écran

À la demande du candidat, le premier écran présente désormais le parcours
complet : introduction, besoin, production, progression, méthode, prochaine
étape et conclusion. Il précise la cible de trois à cinq minutes et annonce
l’annexe questions, preuves, ressources et affiches hors chronométrage.

Le plan utilise une grille compacte à deux colonnes sur grand écran et une seule
colonne sur mobile. Le build Vite et le contrôle statique réussissent ; la page
locale répond en HTTP 200. Le contrôle confirme `7 écrans de pitch` et `1 écran
d’annexe`. Git et publication restent non touchés.

## 18. Validation humaine du rendu harmonisé

Le 7 septembre 2026, après consultation du mini-site local, le candidat a
confirmé : « c’est bon, vous pouvez passer à l’étape suivante ».

Cette confirmation valide humainement :

- l’harmonisation du mini-site avec le pitch V2 ;
- les liaisons entre le pitch, les preuves et les affiches ;
- le retour vers la présentation principale ;
- l’organisation corrigée des trois affiches ;
- le plan placé sur le premier écran ;
- l’annexe placée après la conclusion.

Cette validation visuelle a été complétée par les plages de chronométrage
communiquées ensuite par le candidat et enregistrées dans la section 19.

## 19. Clôture de la PHASE 8 sur déclaration humaine

Le 7 septembre 2026, le candidat a communiqué les résultats finaux suivants :

| Contrôle humain | Résultat communiqué | Cible | Conclusion |
|---|---|---|---|
| pitch V2 | 3 à 5 minutes | 3 à 5 minutes | dans la cible |
| démonstration | 2 à 3 minutes | 2 à 3 minutes | dans la cible |
| chaque réponse | 20 à 40 secondes | 20 à 40 secondes | dans la cible |
| preuves et limites sans hésitation | oui | oui | confirmé |
| correction encore nécessaire | non | non | confirmé |

Les valeurs sont enregistrées comme des plages déclarées. Aucune durée exacte
non communiquée n'a été inventée. Le mini-site, le pitch V2 court et les réponses
courtes ont été harmonisés avec ces résultats ; les anciennes mesures restent
conservées dans l'historique des répétitions.

La PHASE 8 est close au niveau candidat. Cette clôture ne vaut ni présélection,
ni validation finale par le pilote humain.

```text
MINI-SITE ET PITCH CONTRÔLÉS — DÉCISION HUMAINE REQUISE
```
