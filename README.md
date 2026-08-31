# INGÉNIA PILOT — Pilotage des projets d’ingénierie

**Version :** V10 validée en local — affiche 03 remplacée par l’affiche 04 et cache PWA actualisé
**Historique :** V1 le 30 juillet 2026 ; PWA V2 les 8-9 août 2026 ; portefeuille V3 le 14 août 2026 ; affiches V5, identité V6, alertes V7, enrichissement V8, affiche du prompt maître et publication V9 le 21 août 2026
**Public :** équipe du bureau d’études techniques
**Publication :** la V9 historique reste accessible sur [GitHub Pages](https://elmechtiai-crypto.github.io/suivi-projets-ingenierie/) ; la publication de la V10 a été autorisée séparément par le candidat le 31 août 2026

## Objectif

INGÉNIA PILOT aide un membre du bureau d’études à comprendre comment identifier un marché ou un dossier, mettre à jour le suivi d’une mission, repérer les blocages et préparer les actions prioritaires.

Il présente une méthode et une checklist génériques. Il ne contient aucune donnée réelle de client, de marché, de montant ou de paiement.

## Arborescence

```text
mini-site-ingenia-pilot/
├── .gitignore
├── .nojekyll
├── index.html
├── offline.html
├── manifest.webmanifest
├── service-worker.js
├── RAPPORT-FINAL-GITHUB-PAGES.md
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── data/
│   └── data.json
├── assets/
│   └── images/
│       ├── logo-fictif-suivi-projets-v1.png
│       ├── illustration-suivi-projets-v1.png
│       ├── illustration-benefices-suivi-v1.png
│       ├── illustration-checklist-marche-v1.png
│       ├── diagramme-cycle-suivi-v1.svg
│       ├── diagramme-rythme-hebdomadaire-v1.svg
│       ├── organigramme-informations-marche-v1.svg
│       ├── affiches/
│       │   ├── affiche-01-lancement-ingenia-pilot.jpg
│       │   ├── affiche-01-lancement-ingenia-pilot.webp
│       │   ├── affiche-02-chiffres-cles.jpg
│       │   ├── affiche-02-chiffres-cles.webp
│       │   ├── affiche-04-workflow-github-pages-ln-ia.png
│       │   └── affiche-prompt-maitre-module-06-ln-ia-v1.png
│       └── icons/
│           ├── icon-192.png
│           └── icon-512.png
└── README.md
```

## Rôle des fichiers

- `index.html` organise l’accueil unique, le portefeuille, les alertes, les priorités, les affiches et la checklist avec des balises HTML sémantiques.
- `css/styles.css` applique l’identité bleu marine, bleu clair et dorée. Il adapte toutes les sections aux écrans mobiles, tablettes et larges, et rend le focus clavier visible.
- `js/app.js` active la checklist, charge les données, affiche les 41 missions anonymisées, calcule les indicateurs et priorités, construit les alertes et gère la recherche ainsi que les filtres par statut et année.
- `data/data.json` contient les bénéfices, les 11 colonnes de suivi et 41 missions sous alias. Il ne contient ni référence réelle, ni client réel, ni objet réel précis, ni montant.
- `assets/images/` contient les illustrations, le logo fictif, les diagrammes de démonstration, deux affiches en JPG/WebP, deux affiches de workflow en PNG et les icônes PWA (`icons/icon-192.png`, `icons/icon-512.png`).
- `manifest.webmanifest` déclare l’identité de l’application (nom, icônes, couleurs, `start_url` et `scope` en chemins relatifs) pour permettre son installation.
- `service-worker.js` précache l’enveloppe complète du site, purge les anciennes versions du cache à l’activation, et sert le contenu en réseau d’abord avec repli sur le cache puis sur `offline.html` en cas de perte de connexion.
- `offline.html` s’affiche lors d’une navigation hors connexion vers une page non disponible en cache.
- `RAPPORT-FINAL-GITHUB-PAGES.md` conserve les preuves de publication et les limites des contrôles V9.

## Ouvrir le mini-site localement

Le service worker et le chargement JSON exigent un serveur local (protocole `http://`, pas `file://`) :

1. Depuis ce dossier, lancer `python -m http.server 8090 --bind 127.0.0.1`.
2. Ouvrir `http://127.0.0.1:8090/` dans Microsoft Edge ou Google Chrome.
3. Ne pas déplacer séparément `index.html`, les dossiers `css`, `js`, `data`, `assets` ou les fichiers PWA, car leurs chemins sont relatifs.

Aucun compte, framework ni CDN n’est nécessaire. Une connexion Internet n’est requise qu’au tout premier chargement (précache).

## Publication GitHub Pages

- dépôt : `elmechtiai-crypto/suivi-projets-ingenierie` ;
- méthode : `Deploy from a branch` ;
- branche de publication existante : `master` ;
- dossier de publication : `/(root)` ;
- adresse réelle : `https://elmechtiai-crypto.github.io/suivi-projets-ingenierie/` ;
- dernier déploiement V9 réussi : commit de fusion `30c10fc`.

La V9 a été préparée sur la branche `publication/integrer-affiche-prompt-maitre`, relue dans la Pull Request nº 1, puis intégrée dans la branche publiée `master`. La configuration Pages existante a automatiquement déployé le commit fusionné.

## Interaction

Au chargement avec JavaScript :

1. la checklist est masquée et le bouton affiche « Afficher la checklist » ;
2. une activation montre la checklist et remplace le libellé par « Masquer la checklist » ;
3. une nouvelle activation referme la zone ;
4. le bouton fonctionne à la souris, avec `Entrée` et avec la barre d’espace ;
5. le portefeuille affiche quatre indicateurs et accepte une recherche limitée aux alias ;
6. les filtres réduisent la liste par statut générique ou année d’activité ;
7. les alertes listent les missions à clarifier avec raison, action et responsable ;
8. le plan d’action regroupe automatiquement les missions par priorité ;
9. les statuts et l’avancement sont visualisés dans le tableau ;
10. le bouton de réinitialisation restaure les 41 missions.

Si JavaScript est indisponible, le contenu de la checklist reste présent dans le HTML et demeure consultable.

## Affiches publiques V5

- la navigation principale ouvre directement la galerie intégrée à l’accueil ;
- les trois affiches possèdent une version WebP prioritaire et une version JPG de repli ;
- les formats intégrés sont 1080 × 1350 pour les affiches portrait et 1080 × 1080 pour l’affiche carrée ;
- les images utilisent `loading="lazy"`, `decoding="async"`, des dimensions explicites et des textes alternatifs ;
- chaque visuel peut être ouvert séparément depuis sa légende ;
- le cache PWA V5 contient les six fichiers d’affiche pour la consultation hors ligne ;
- les illustrations sont génériques et ne représentent aucun projet réel.

### Contrôles réalisés sur la V5

- syntaxe JavaScript de `app.js` et `service-worker.js` : valide ;
- données JSON : valides ;
- liens locaux des pages HTML : aucune cible manquante ;
- ressources du cache PWA : 24 sur 24 présentes ;
- accueil, CSS, service worker et trois affiches WebP servis en HTTP 200 ;
- contrôle visuel interactif : non exécuté, le navigateur intégré n’étant pas disponible pendant ce contrôle.

### Contrôles réalisés sur la V6

- nom `INGÉNIA PILOT` présent sur l’accueil, la page hors ligne et le manifeste ;
- syntaxe du service worker et de l’application : valide ;
- manifeste et données JSON : valides ;
- cache `ingenia-pilot-v6` : 24 ressources sur 24 présentes ;
- accueil, manifeste et page hors ligne servis en HTTP 200 ;
- contrôle visuel interactif : à confirmer manuellement dans le navigateur local.

## Alertes et blocages V7

- un accès « Alertes » avec icône SVG est présent dans la navigation principale ;
- la section `#alertes` sélectionne automatiquement les missions dont le statut public est « À confirmer » ;
- chaque carte affiche la référence et le client anonymisés, la raison générique du blocage, l’action à réaliser, le responsable générique et la date de mise à jour ;
- les missions « Clôture à confirmer » sont exclues, car elles portent la mention « Aucun blocage public » ;
- un bouton ouvre le tableau complet avec le filtre « À confirmer » déjà appliqué ;
- la grille s’adapte aux écrans mobiles, tablettes et larges ;
- le cache applicatif est identifié par `ingenia-pilot-v7`.

### Contrôles réalisés sur la V7

- 7 missions au statut « À confirmer » détectées dans les données anonymisées ;
- 7 sur 7 possèdent une raison, une action et un responsable ;
- syntaxe de `app.js` et `service-worker.js` : valide ;
- manifeste et données JSON : valides ;
- 24 ressources sur 24 présentes dans le cache PWA ;
- accueil, vue filtrée, JavaScript, CSS et service worker servis en HTTP 200 ;
- contrôle visuel interactif : à confirmer manuellement dans le navigateur local.

## Accueil unifié et enrichissement V8

- l’ancienne page de présentation séparée et sa feuille de style dédiée ont été retirées ;
- les trois affiches sont désormais accessibles directement dans la section `#affiches` de l’accueil ;
- la section `#priorites` regroupe automatiquement les 41 missions en quatre plans d’action ;
- chaque groupe de priorité affiche son nombre de missions, l’action générique associée et un lien filtré vers le tableau ;
- le tableau affiche une barre d’avancement et un badge de statut pour chaque mission ;
- les 7 missions en alerte sont marquées en rouge dans le tableau et dans la section Alertes ;
- le cache applicatif est identifié par `ingenia-pilot-v8` et ne référence plus les fichiers retirés.

### Contrôles réalisés sur la V8

- aucune référence à l’ancien mode séparé dans le mini-site ;
- ancienne adresse de présentation : réponse HTTP 404 attendue ;
- 45 identifiants HTML contrôlés, tous uniques ;
- priorités calculées : 7 à confirmer, 8 à démarrer, 20 en suivi et 6 clôtures à confirmer ;
- accueil, vue filtrée, JavaScript, CSS et affiche WebP servis en HTTP 200 ;
- syntaxe JavaScript et JSON : valide ;
- liens HTML locaux : aucune cible manquante ;
- cache PWA : 22 ressources sur 22 présentes ;
- contrôle visuel : réussi dans Chrome en vue ordinateur et en émulation mobile réelle à 390 px, sans débordement général ; le grand tableau conserve son défilement horizontal interne ;
- service worker : activé avec 22 ressources en cache ; seconde page contrôlée et repli réel sur `offline.html` après arrêt du serveur local.
- publication HTTPS : page INGÉNIA PILOT, sections Alertes et Affiches, service worker V8 et affiche WebP contrôlés sur GitHub Pages.

## Affiche du prompt maître V9

- une quatrième affiche illustre les huit étapes du workflow LN-IA des séances S21 à S24 ;
- la composition regroupe les étapes en quatre stations : comprendre, préparer, versionner et publier ;
- les règles d’or rappellent la racine contrôlée, les données anonymisées, l’absence de secret et l’interdiction du push forcé ;
- la validation humaine reste visible à chaque étape ;
- l’affiche PNG mesure 864 × 1821 px et utilise un texte alternatif descriptif ;
- la grille de la galerie adopte une disposition équilibrée de deux colonnes sur écran large ;
- le cache applicatif `ingenia-pilot-v9` inclut 23 ressources.

### Contrôles réalisés sur la V9

- syntaxe de `app.js` et `service-worker.js`, manifeste et données JSON : valides ;
- 45 identifiants HTML contrôlés, sans doublon, et 23 références locales servies en HTTP 200 ;
- galerie : 4 affiches, 2 colonnes sur écran large et 1 colonne à 390 px, sans débordement horizontal ;
- nouvelle affiche : réponse HTTP 200 en `image/png`, dimensions intrinsèques 864 × 1821 px, lien et texte alternatif présents ;
- service worker : cache `ingenia-pilot-v9` actif avec 23 ressources ;
- contrôle visuel dans Chrome : réussi sur ordinateur et mobile, sans erreur JavaScript d’exécution ;
- publication HTTPS : accueil et 23 ressources du cache servis en HTTP 200, sans 404 essentielle ;
- manifeste public : reconnu sans erreur ; service worker actif sous le bon périmètre GitHub Pages ;
- fonctionnement hors ligne strict : accueil V9 chargé depuis le cache et page `offline.html` affichée pour une URL non mise en cache.

## Correction P06 — V10 validée pour publication

Le 28 août 2026, après confirmation des droits visuels et autorisation humaine
explicite, la correction P06 a été préparée. Les contrôles navigateur et la
validation humaine locale ont été terminés le 31 août 2026 :

- l’affiche 03 exclue a été remplacée dans la galerie par `affiche-04-workflow-github-pages-ln-ia.png` ;
- les références à l’ancienne affiche ont été retirées de `index.html` et `service-worker.js` ;
- les deux anciens actifs JPG/WebP ont été retirés du mini-site local ;
- le cache local a été incrémenté vers `ingenia-pilot-v10-local` et contient 22 ressources ;
- la phase 9 complète (commit, push et publication GitHub Pages) a été autorisée
  séparément par le candidat le 31 août 2026.

### Contrôles locaux de la correction

- syntaxe de `app.js` et `service-worker.js` : valide avec `node --check` ;
- `data/data.json` et `manifest.webmanifest` : JSON valides ;
- 45 identifiants HTML : aucun doublon ;
- 22 références locales HTML : toutes présentes ;
- cache `ingenia-pilot-v10-local` : 22 ressources déclarées et présentes ;
- serveur local : 22 ressources sur 22 servies en HTTP 200 ;
- nouvelle affiche 04 : HTTP 200, type `image/png`, dimensions 1024 × 1536 px ;
- anciennes URL JPG/WebP : HTTP 404 attendu ;
- données : 41 missions, dont 7 alertes possédant chacune un blocage et une action ;
- ancienne référence, ancien fichier et mention exclue dans le mini-site public local : aucune occurrence ;
- contrôle navigateur ordinateur 1 440 × 900 et mobile 390 × 844 : réussi sans
  débordement horizontal ni image cassée ; affiche 04 visible ;
- service worker actif : cache `ingenia-pilot-v10-local` de 22 entrées et purge
  du cache témoin V9 réussie ;
- rechargement sans serveur local : 41 missions, 7 alertes et 4 affiches
  restaurées ; ressource témoin non cachée en HTTP 503 ;
- validation humaine locale : accordée par le candidat le 31 août 2026.

## Tests réellement réalisés sur la V2

- ouverture locale dans Microsoft Edge : réussie ;
- affichage des sept visuels et contrôle des chemins relatifs : réussis ;
- ordre des sections et structure HTML : contrôlés ;
- affichage sur écran large : réussi ;
- affichage mobile proche de 320 px : réussi sans débordement horizontal signalé ;
- affichage tablette proche de 768 px : réussi après actualisation ;
- zoom à 200 % dans Microsoft Edge : réussi sans perte de contenu essentiel ;
- interaction à la souris : réussie ;
- interaction au clavier avec focus visible : réussie ;
- console Microsoft Edge après rechargement et interaction : aucune ligne rouge ;
- ouverture, visuels, contraste et interaction dans Google Chrome : réussis ;
- audit statique : aucun chemin cassé, identifiant dupliqué, accès réseau, script interdit ou chemin Windows exposé ;
- chargement JSON (bénéfices et 11 informations suivies), 4 états (chargement, succès, vide, erreur) : réussis ;
- manifeste reconnu par le navigateur (nom, icônes, couleurs), sans erreur bloquante : réussi ;
- service worker installé et actif, cache versionné (16 ressources précachées) : réussi ;
- rechargement complet hors connexion (accueil, sections JSON, méthode, checklist, toutes images) : réussi ;
- mise à jour du cache (changement de version, purge de l'ancien cache) : réussi ;
- navigation clavier (focus visible, bouton checklist activable) : réussie ;
- absence de chemin absolu ou d'adresse locale codée en dur dans le code : confirmée.

## Difficultés et corrections

- Le titre blanc de l’accueil s’affichait sur un fond clair. La règle d’alternance des sections prenait la priorité sur le fond de l’accueil. Le sélecteur CSS a été précisé avec `main > section.hero` afin de rétablir le fond bleu marine.
- Pendant le redimensionnement en largeur tablette, l’illustration des bénéfices a temporairement disparu. Elle est revenue après `Ctrl + R` ; aucune modification de code supplémentaire n’a été nécessaire.
- La dernière section a d’abord semblé absente. Elle se trouvait plus bas après les grands visuels et a été retrouvée en faisant défiler la page.

## Contrôles de la V3

- 41 missions publiques reliées à 41 correspondances privées uniques : réussi ;
- cinq alias V2 conservés et 36 nouveaux alias créés : réussi ;
- références, clients, objets et montants réels absents du mini-site : réussi ;
- syntaxe JSON et JavaScript : réussie ;
- page et JSON servis en HTTP 200 : réussi ;
- quatre compteurs et trois contrôles de filtrage présents dans la page : réussi ;
- 13 références HTML et toutes les ressources du cache V3 présentes : réussi ;
- recherche, filtres, réinitialisation, clavier, mobile et hors connexion : contrôle visuel interactif encore requis.

## Limites actuelles

- Le mini-site présente une démonstration anonymisée, pas un outil opérationnel de gestion de marchés.
- Il ne contient aucun formulaire, aucune base de données et aucune sauvegarde de saisie.
- Il ne remplace ni les contrats, ni les dossiers techniques, ni les factures, ni le tableau interne autorisé.
- Il ne doit recevoir aucune donnée confidentielle dans son état actuel.
- La V9 contenant l’affiche du prompt maître est publiée sur GitHub Pages ; son fonctionnement HTTPS, mobile et hors ligne a été contrôlé après le déploiement.
- La page `offline.html` a été testée par navigation réelle après arrêt du serveur local.
- L’installation réelle de la PWA sur bureau ou écran d’accueil n’a pas été testée.
- Le site public n’a pas été testé sur un second appareil physique ; la vue mobile a été contrôlée par émulation Chrome à 390 px.

## Améliorations possibles

- optimiser davantage le poids des images matricielles ;
- prévoir une version imprimable contrôlée ;
- préciser les règles internes de responsabilité et de mise à jour avant toute adaptation opérationnelle ;
- tester l’installation réelle de la PWA et reproduire les contrôles sur un second appareil physique ;
- exécuter les tests restants : schéma JSON invalide, largeur exacte 320 px.
- intégrer uniquement des illustrations génériques non identifiables après validation.
