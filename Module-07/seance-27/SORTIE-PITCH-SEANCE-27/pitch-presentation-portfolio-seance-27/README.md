# Pitch et présentation du portfolio — Séance 27

## État actuel

Le mode présentation suit sept étapes harmonisées avec le pitch V2 :
introduction, besoin, production, progression, méthode, prochaine étape et
conclusion. Les questions, preuves et ressources restent accessibles comme
annexes dans le mode consultation. Le chronomètre, la checklist, les visuels,
le secours local et le guide PDF sont conservés.

Le premier écran affiche le plan complet des sept étapes et annonce l’annexe
hors chronométrage placée après la conclusion.

Statut affiché : `À COMPLÉTER`.

## Développement local

```text
npm install
npm run dev
```

## Contrôle du build

```text
npm run build
npm run preview
```

## Principes

- Vite est l’unique dépendance de développement ;
- l’interface utilise HTML, CSS et JavaScript natifs ;
- aucune donnée réelle, clé d’API ou fonction serveur ;
- aucun suivi utilisateur ;
- aucune durée ni préférence conservée dans le navigateur ;
- aucune action Git ou publication autorisée à cette phase.

## Mode présentation

Utiliser le bouton « Mode présentation » ou « Démarrer la présentation ».

- `Flèche droite` ou `Page suivante` : écran suivant ;
- `Flèche gauche` ou `Page précédente` : écran précédent ;
- `Début` et `Fin` : premier et dernier écran ;
- `Échap` : quitter le mode présentation.

Les boutons « Preuve P0x » ouvrent l’entrée correspondante de l’index des
preuves. Les boutons « Affiche » ouvrent directement le repère visuel associé.
Ce fonctionnement permet de garder le pitch linéaire tout en donnant accès aux
justificatifs à la demande du jury.

## Emplacement des annexes

L’entrée « Annexes » du menu conduit à un écran placé immédiatement après la
conclusion. Cet écran termine le mode présentation et donne accès à l’annexe A
« Questions préparées », à l’annexe B « Preuves et ressources » et aux trois
affiches de preuves. Il porte la mention « hors chronométrage » : le pitch reste
composé de sept écrans, suivis d’un écran d’annexe.

## Retour depuis les preuves et annexes

Depuis le mode présentation, l’ouverture d’une preuve, d’une affiche ou du
sommaire des annexes mémorise l’écran en cours. Le bouton « Retour à la
présentation principale » réactive ensuite le mode présentation sur ce même
écran. Le chronomètre n’est pas réinitialisé par cet aller-retour.

Le chronomètre fonctionne uniquement dans la page et se réinitialise à
l’actualisation.

Contrôles humains reçus le 4 septembre 2026 : secours local, mode présentation,
touches et affichage sur l'écran du candidat testés. Le pitch reste à 6 minutes
et les quatre réponses à 1 minute chacune ; la réduction reste à effectuer.

## Secours local

La copie locale d’INGÉNIA PILOT se trouve dans :

```text
public/secours/ingenia-pilot/
```

Elle est intégrée au build sous `dist/secours/ingenia-pilot/`.

## Guide S27

Sources éditables :

```text
guide/guide-pratique-pitch-progression-seance-27.md
guide/guide-pratique-pitch-progression-seance-27.html
```

PDF contrôlé en huit pages A4 :

```text
output/pdf/guide-pitch-seance-27.pdf
```

Après validation humaine, une copie identique a été ajoutée à :

```text
public/guide-pitch-seance-27.pdf
```

Elle apparaît dans la section « Ressources et preuves » du mini-site.

## Affiches de preuves S27

Trois affiches 16:9 sont intégrées dans la section « Ressources et preuves » et
reliées depuis les écrans concernés :

- `P06` : du besoin à l’action avec 41 missions et 7 alertes ;
- `P02, P03, P06` : progression de S19 à la V10 ;
- `P05, P06` : répartition entre décision du candidat, assistance IA et contrôle humain.

Les fichiers se trouvent dans `public/assets/images/affiches-s27/`. Les prompts
et contrôles sont conservés dans `docs/prompts-affiches-preuves-s27.md`.

## Sources éditoriales

Les documents de travail sont conservés dans `docs/`. Les productions
originales et le portfolio source restent à leur emplacement et ne sont pas
modifiés.
