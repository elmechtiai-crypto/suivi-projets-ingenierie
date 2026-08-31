# Rapport final GitHub Pages — INGÉNIA PILOT V9

**Date du contrôle :** 21 août 2026

**Statut :** PUBLICATION V9 DÉPLOYÉE ET CONTRÔLÉE

## Publication

- dépôt GitHub : `https://github.com/elmechtiai-crypto/suivi-projets-ingenierie` ;
- site GitHub Pages réel : `https://elmechtiai-crypto.github.io/suivi-projets-ingenierie/` ;
- visibilité : publique ;
- source Pages : branche `master`, dossier `/(root)` ;
- méthode : `Deploy from a branch` ;
- Pull Request : nº 1, `Intégrer l’affiche du prompt maître LN-IA` ;
- commit fonctionnel : `10155ddafb40f007d1b4fa386f6f90f7c8684b75` ;
- commit de fusion publié : `30c10fcd2c6632f574f6ec36603839b006525e6c` ;
- déploiement Pages : exécution `32517326622`, terminée avec succès le 21 août 2026.

## Résultats des contrôles publics

- HTTPS : réussi, accueil en HTTP 200 ;
- page d’accueil, styles, scripts, données JSON et images : chargés ;
- galerie : quatre affiches présentes ;
- affiche du prompt maître : HTTP 200 en `image/png`, dimensions 864 × 1821 px ;
- écran large : grille de deux colonnes, sans débordement horizontal ;
- mobile émulé à 390 px : une colonne, sans débordement horizontal ;
- ressources PWA : 23 sur 23 servies en HTTP 200, aucune 404 essentielle ;
- manifeste : reconnu par Chrome, aucune erreur signalée ;
- service worker : actif sous `https://elmechtiai-crypto.github.io/suivi-projets-ingenierie/` ;
- cache : `ingenia-pilot-v9`, 23 ressources ;
- hors connexion strict : accueil V9 chargé depuis le cache derrière un proxy inaccessible ;
- URL non mise en cache hors connexion : page `Hors connexion — INGÉNIA PILOT` affichée ;
- erreurs JavaScript, erreurs de journal ou échecs réseau lors du contrôle en ligne : aucun.

## Sécurité et confidentialité

- contrôle des signatures de secrets : réussi ;
- aucun chemin Windows local dans les fichiers publics ;
- aucune donnée réelle de client, marché, montant ou paiement ajoutée ;
- illustrations génériques et texte alternatif descriptif conservés.

## Limites déclarées

- aucun test n’a été réalisé sur un second appareil physique ;
- la vue mobile a été vérifiée par émulation Chrome à 390 px ;
- l’installation réelle de la PWA sur le bureau ou l’écran d’accueil n’a pas été exécutée ;
- l’affiche PNG ajoute environ 1,8 Mo au cache hors ligne ;
- le navigateur intégré à l’environnement de travail n’était pas disponible ; les contrôles ont été réalisés avec une instance Chrome isolée en arrière-plan.

## Corrections et décisions

- correction visuelle avant publication : `AUCUN PUSH FORCE` remplacé par `AUCUN PUSH FORCÉ` ;
- correction après contrôle public : aucune correction fonctionnelle nécessaire ;
- documentation V9 mise à jour dans une branche distincte après publication ;
- release GitHub : RELEASE NON NÉCESSAIRE POUR CETTE PUBLICATION DOCUMENTAIRE.

## Conclusion

Le mini-site V9 est public, partageable et conforme au périmètre contrôlé. La nouvelle affiche illustre les étapes S21 à S24 du prompt maître et reste disponible en ligne comme hors connexion après précache.

## Addendum — publication INGÉNIA PILOT V10

**Date :** 31 août 2026
**Statut :** PUBLICATION V10 DÉPLOYÉE ET CONTRÔLÉE

### Décision et Git

- validation humaine locale : accordée le 31 août 2026 ;
- phase 9 complète : autorisée séparément par le candidat ;
- commit V10 : `5229420122f41c47d65ba0bad238a71f9f08c8cf` ;
- branche de travail poussée : `documentation/finaliser-publication-v9` ;
- fusion : avance rapide vers `master` ;
- push `master` : réussi ;
- déploiement Pages : exécution `33406469601`, conclusion `success`.

### Contrôles publics V10

- URL : `https://elmechtiai-crypto.github.io/suivi-projets-ingenierie/` ;
- titre public : `INGÉNIA PILOT — Pilotage des projets d’ingénierie` ;
- données publiques : 41 missions et 7 alertes ;
- galerie : quatre affiches, affiche 04 visible et affiche 03 absente ;
- affiche 04 : HTTP 200, type `image/png` ;
- anciennes URL de l'affiche 03 : HTTP 404 pour JPG et WebP ;
- service worker : cache `ingenia-pilot-v10-local`, 22 ressources déclarées ;
- affichage public : réussi à 1 440 × 900 et 390 × 844 px, sans débordement
  horizontal ni image cassée ;
- confidentialité : aucune des 101 valeurs réelles contrôlées n'est présente
  dans le dépôt public ; aucun fichier privé n'est suivi par Git.

### Limites

- les vues ordinateur et mobile ont été contrôlées dans un profil Edge isolé,
  pas sur deux appareils physiques distincts ;
- le nom de cache `ingenia-pilot-v10-local` est conservé car il correspond à
  l'artefact validé humainement avant publication ;
- aucune release GitHub séparée n'a été créée.

La V10 remplace désormais la V9 sur GitHub Pages. Elle est publique,
partageable et reliée au commit ainsi qu'à l'exécution de déploiement ci-dessus.
