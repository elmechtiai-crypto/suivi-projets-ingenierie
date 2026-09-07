# Rapport de la PHASE 7 - Guide PDF

**Candidat :** Karim El Mechti  
**Projet :** INGÉNIA PILOT - pitch et présentation du portfolio  
**Destinataire :** M. Abderrahman  
**Date :** 2026-09-04  
**Phase exécutée :** PHASE 7 - Produire le guide PDF  
**Statut :** GUIDE S27 CONTRÔLÉ - VALIDATION HUMAINE REQUISE

## 1. Autorisation reçue

Le candidat a validé le contenu S27 intégré et autorisé la PHASE 7. Aucune
autorisation Git, publication ou attribution d'un statut final n'a été donnée.

## 2. Livrables produits

### Source Markdown

```text
guide/guide-pratique-pitch-progression-seance-27.md
```

### Page HTML imprimable

```text
guide/guide-pratique-pitch-progression-seance-27.html
```

### PDF contrôlé

```text
output/pdf/guide-pitch-seance-27.pdf
```

Le PDF n'a pas été copié dans `public/`. Le prompt maître réserve cette copie à
une décision humaine prise après contrôle du guide.

## 3. Structure du guide

Le guide compte huit pages :

1. couverture, identité, destinataire et statut ;
2. objectif et six blocs du pitch ;
3. déroulé du pitch en moins de cinq minutes ;
4. démonstration INGÉNIA PILOT en deux à trois minutes ;
5. progression P02, P03 et P06 ;
6. rôles du candidat, de l'IA et du contrôle humain, puis quatre questions ;
7. sécurité, confidentialité et ordre de secours ;
8. grille de trois répétitions, statuts et zone de décision humaine.

Le guide reprend les faits et limites présents dans le mini-site : 41 missions,
7 alertes, pitch observé à 6 minutes, démonstration communiquée à 2 minutes,
secours local restant à tester humainement et réponses restant à chronométrer.

## 4. Identité visuelle

La page imprimable utilise :

- bleu nuit pour la structure et les titres ;
- blanc cassé pour le fond ;
- turquoise pour les repères et la progression ;
- or limité aux alertes et aux accents ;
- typographie système lisible ;
- tableaux et checklists utilisables à l'impression ;
- pied de page et numérotation `01 / 08` à `08 / 08`.

Le visuel principal S27 est utilisé en arrière-plan sobre de la couverture. Sa
source et son statut sont déjà consignés dans `LICENSE-ASSETS.md`.

## 5. Outils et dépendances

Les outils déjà présents ont été utilisés :

| Outil | Usage |
|---|---|
| HTML et CSS natifs | page A4 imprimable |
| Google Chrome installé | export HTML vers PDF |
| PyMuPDF installé | rendu des pages en images pour le contrôle visuel |
| Pillow installé | planche-contact de contrôle |
| pypdf installé | structure, texte et liens du PDF |

Aucune bibliothèque, dépendance npm ou extension supplémentaire n'a été
installée.

## 6. Contrôles réalisés

| Contrôle | Résultat observé |
|---|---|
| format | A4, 594,96 x 841,92 points |
| nombre de pages | 8 |
| pages contenant du texte | 8 sur 8 |
| page vide | aucune |
| rendu visuel | contrôlé page par page |
| débordement ou texte coupé | aucun après correction |
| chevauchement | aucun observé |
| titres et hiérarchie | cohérents |
| numérotation | complète de 01/08 à 08/08 |
| lien public | 1 annotation cliquable dans le PDF |
| caractères de remplacement dans le texte extrait | aucun |
| titre interne du PDF | accents contrôlés après correction des métadonnées |
| statut `À COMPLÉTER` | présent |
| chemin Windows dans le PDF | absent |
| token, clé ou référence au dossier privé | aucun détecté |
| taille du PDF | 1 112 247 octets |

Le premier export comportait onze pages à cause de trois débordements. Les
espacements ont été corrigés, puis le document a été réexporté et intégralement
recontrôlé. Le second export compte exactement huit pages sans page résiduelle.
Les accents du titre interne ont ensuite été corrigés dans les métadonnées ; le
nombre de pages et l'annotation du lien ont été recontrôlés après cette opération.

## 7. Liens et portée

Le PDF contient un lien vers la V10 publique documentée :

```text
https://elmechtiai-crypto.github.io/suivi-projets-ingenierie/
```

La disponibilité Internet de cette URL n'a pas été recontrôlée pendant la
PHASE 7. Le guide indique également le chemin relatif du secours local S27.

## 8. Limites et décisions attendues

- revue humaine du texte, de l'ordre des pages et de la lisibilité ;
- validation ou corrections du guide ;
- autorisation distincte avant copie du PDF dans `public/` ;
- pitch encore mesuré à 6 minutes ;
- secours local non encore validé par le candidat dans son navigateur ;
- quatre réponses non encore chronométrées ;
- aucune action Git ou publication exécutée.

## 9. Rapport après action

```text
RAPPORT APRÈS ACTION

Phase exécutée : PHASE 7 - Guide PDF
Racine effective : <RACINE_DU_DEPOT>
Instructions AGENTS.md chargées : AGENTS.md S27 et prompt maître S27
Sources lues : matrice ; script V1 ; plan de démonstration ; quatre questions-réponses ; plan du mini-site ; rapport de phase 6
Fichiers créés : source Markdown ; page HTML imprimable ; PDF final ; présent rapport
Fichiers modifiés : README.md ; LICENSE-ASSETS.md
Fichiers non touchés : production V10 source ; portfolio original ; dossier privé ; Modules 01 à 06 ; Git ; publication
Commandes exécutées : contrôle des outils ; export HTML vers PDF ; rendu PNG ; extraction et contrôle PDF ; scan de confidentialité
Contrôles réalisés : A4 ; pages ; marges ; sauts ; lisibilité ; liens ; texte ; pages vides ; confidentialité ; cohérence avec le mini-site
Résultats observés : PDF de huit pages, toutes lisibles et non vides ; aucune donnée sensible détectée
Éléments non vérifiables : appréciation du lecteur ; impression sur l'imprimante réelle ; disponibilité publique du lien le jour de la présentation
Liens prévus : production V10 publique et secours local
Liens intégrés : un lien public cliquable ; chemin relatif du secours local
Liens testés : annotation PDF contrôlée ; URL publique non recontrôlée dans cette phase
Affiches prévues : aucune affiche supplémentaire dans le guide
Affiches autorisées : visuel S27 déjà autorisé utilisé en couverture
Risques ou limites : pitch à 6 minutes ; secours non validé humainement ; réponses non chronométrées
Décisions humaines requises : validation ou corrections du PDF ; autorisation ultérieure de copie dans public ; autorisation distincte de la PHASE 8
Prochaine phase proposée : PHASE 8 - Tests et répétitions
Statut exact : GUIDE S27 CONTRÔLÉ - VALIDATION HUMAINE REQUISE
```

```text
GUIDE S27 CONTRÔLÉ - VALIDATION HUMAINE REQUISE
```
