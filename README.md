# Guide Web interne — Suivi des projets d’ingénierie

**Version :** V2 locale — PWA (manifeste, service worker, hors connexion)
**Date :** V1 le 30 juillet 2026 ; PWA ajoutée et testée les 8-9 août 2026
**Public :** équipe du bureau d’études techniques
**Publication :** aucune

## Objectif

Ce mini-site aide un membre du bureau d’études à comprendre comment identifier un marché ou un dossier, mettre à jour le suivi d’une mission, repérer les blocages et préparer les actions prioritaires.

Il présente une méthode et une checklist génériques. Il ne contient aucune donnée réelle de client, de marché, de montant ou de paiement.

## Arborescence

```text
mini-site-v1/
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
│       └── icons/
│           ├── icon-192.png
│           └── icon-512.png
└── README.md
```

## Rôle des fichiers

- `index.html` organise le contenu, les titres, la navigation, les images et la checklist avec des balises HTML sémantiques.
- `css/styles.css` applique l’identité bleu marine, bleu clair et dorée. Il adapte la page aux écrans mobiles, tablettes et larges, et rend le focus clavier visible.
- `js/app.js` active le bouton qui affiche ou masque la checklist, maintient l’attribut `aria-expanded` cohérent, charge les données depuis `data/data.json` (bénéfices et informations suivies) et enregistre le service worker.
- `data/data.json` contient les contenus dynamiques (bénéfices, 11 colonnes de suivi) chargés via `fetch()`, avec gestion des états chargement / succès / vide / erreur.
- `assets/images/` contient les illustrations, le logo fictif, les diagrammes de démonstration et les icônes PWA (`icons/icon-192.png`, `icons/icon-512.png`).
- `manifest.webmanifest` déclare l’identité de l’application (nom, icônes, couleurs, `start_url` et `scope` en chemins relatifs) pour permettre son installation.
- `service-worker.js` précache l’enveloppe complète du site (16 ressources) à l’installation, purge les anciennes versions du cache à l’activation, et sert le contenu en réseau d’abord avec repli sur le cache puis sur `offline.html` en cas de perte de connexion.
- `offline.html` s’affiche lors d’une navigation hors connexion vers une page non disponible en cache.

## Ouvrir le mini-site localement

Le service worker et le chargement JSON exigent un serveur local (protocole `http://`, pas `file://`) :

1. Depuis ce dossier, lancer `python -m http.server 8080`.
2. Ouvrir `http://localhost:8080/` dans Microsoft Edge ou Google Chrome.
3. Ne pas déplacer séparément `index.html`, les dossiers `css`, `js`, `data`, `assets` ou les fichiers PWA, car leurs chemins sont relatifs.

Aucun compte, framework ni CDN n’est nécessaire. Une connexion Internet n’est requise qu’au tout premier chargement (précache).

## Interaction

Au chargement avec JavaScript :

1. la checklist est masquée et le bouton affiche « Afficher la checklist » ;
2. une activation montre la checklist et remplace le libellé par « Masquer la checklist » ;
3. une nouvelle activation referme la zone ;
4. le bouton fonctionne à la souris, avec `Entrée` et avec la barre d’espace.

Si JavaScript est indisponible, le contenu de la checklist reste présent dans le HTML et demeure consultable.

## Tests réellement réalisés

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

## Limites de la V2

- Le mini-site est un guide de démonstration, pas un outil opérationnel de gestion de marchés.
- Il ne contient aucun formulaire, aucune base de données et aucune sauvegarde de saisie.
- Il ne remplace ni les contrats, ni les dossiers techniques, ni les factures, ni le tableau interne autorisé.
- Il ne doit recevoir aucune donnée confidentielle dans son état actuel.
- Il fonctionne uniquement en local et n’est pas publié ; le test HTTPS réel n’a pas été réalisé (validé en localhost, ce qui est autorisé pour le développement local).
- La page `offline.html` n’a pas été testée isolément (uniquement en navigation vers une page non précachée).
- L’installation réelle de la PWA sur bureau ou écran d’accueil n’a pas été testée.

## Améliorations possibles

- optimiser davantage le poids des images matricielles ;
- prévoir une version imprimable contrôlée ;
- préciser les règles internes de responsabilité et de mise à jour avant toute adaptation opérationnelle ;
- tester l'installation réelle de la PWA et le test HTTPS avant tout déploiement ;
- exécuter les tests restants : schéma JSON invalide, largeur exacte 320 px.
