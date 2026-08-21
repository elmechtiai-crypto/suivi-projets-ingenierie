# INGÉNIA PILOT — Pilotage des projets d’ingénierie

**Version :** V8 locale — tableau des priorités, statuts visuels, alertes, affiches intégrées, identité INGÉNIA PILOT et PWA
**Date :** V1 le 30 juillet 2026 ; PWA V2 les 8-9 août 2026 ; portefeuille V3 le 14 août 2026 ; affiches V5, identité V6, alertes V7 et enrichissement V8 le 21 août 2026
**Public :** équipe du bureau d’études techniques
**Publication :** dépôt GitHub existant ; mise à jour V8 préparée pour GitHub Pages

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
│       │   ├── affiche-03-manifeste-controle-humain.jpg
│       │   └── affiche-03-manifeste-controle-humain.webp
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
- `assets/images/` contient les illustrations, le logo fictif, les diagrammes de démonstration, les trois affiches en JPG/WebP et les icônes PWA (`icons/icon-192.png`, `icons/icon-512.png`).
- `manifest.webmanifest` déclare l’identité de l’application (nom, icônes, couleurs, `start_url` et `scope` en chemins relatifs) pour permettre son installation.
- `service-worker.js` précache l’enveloppe complète du site, purge les anciennes versions du cache à l’activation, et sert le contenu en réseau d’abord avec repli sur le cache puis sur `offline.html` en cas de perte de connexion.
- `offline.html` s’affiche lors d’une navigation hors connexion vers une page non disponible en cache.

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
- adresse attendue : `https://elmechtiai-crypto.github.io/suivi-projets-ingenierie/`.

Le contenu est préparé sur la branche `publication/preparer-github-pages` avant son intégration dans `master`.

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
- La V8 est validée localement ; sa mise à jour GitHub Pages et son test HTTPS restent à confirmer après le push.
- La page `offline.html` a été testée par navigation réelle après arrêt du serveur local.
- L’installation réelle de la PWA sur bureau ou écran d’accueil n’a pas été testée.

## Améliorations possibles

- optimiser davantage le poids des images matricielles ;
- prévoir une version imprimable contrôlée ;
- préciser les règles internes de responsabilité et de mise à jour avant toute adaptation opérationnelle ;
- tester l'installation réelle de la PWA et le test HTTPS avant tout déploiement ;
- exécuter les tests restants : schéma JSON invalide, largeur exacte 320 px.
- intégrer uniquement des illustrations génériques non identifiables après validation.
