# AGENTS.md — PITCH, PRÉSENTATION ET PORTFOLIO — SÉANCE 27

## Portée

Ces instructions s’appliquent au dossier :

```text
pitch-presentation-portfolio-seance-27/
```

Le fichier doit être placé dans ce dossier sous le nom exact :

```text
AGENTS.md
```

Ne pas le renommer `AGENT.md`.

## Mission

Transformer un portfolio professionnel existant en une présentation courte, maîtrisée, répétable et vérifiable.

Livrables :

- pitch de trois à cinq minutes ;
- démonstration de deux à trois minutes ;
- mini-site Vite ;
- mode présentation ;
- quatre questions préparées ;
- guide PDF ;
- version locale de secours ;
- preuves et rapports de contrôle ;
- préparation Git et GitHub Pages après autorisation.

Livrables pédagogiques canoniques :

```text
07-portfolio/pitch-progression-v1.md
preuve-27-pitch-progression.md
grille-preselection-seance-27.md
```

Préparer d’abord des copies dans `livrables-s27/`. Ne jamais écraser un livrable canonique existant.

## Autorité humaine

Le pilote humain est le Prof. Abderrahman EL HISSE.

Codex assiste. Il ne prononce pas seul :

- la validation du pitch ;
- la validation du portfolio ;
- la présélection ;
- le statut de finaliste ;
- l’autorisation de publication.

Règle :

```text
FINALISTE PROPOSÉ ≠ FINALISTE CONFIRMÉ
```

`FINALISTE CONFIRMÉ` est réservé au pilote humain.

Une proposition de finaliste exige aussi la confirmation de sa disponibilité le 4 septembre 2026.

Chaque candidat non retenu reçoit un retour documenté et une prochaine action.

## Sources prioritaires

Lire dans cet ordre :

1. le présent `AGENTS.md` ;
2. les instructions héritées de la racine ;
3. le prompt maître de la séance 27 ;
4. les cinq fichiers pédagogiques S27 ;
5. `07-portfolio/05-portfolio-professionnel-v1.md` ;
6. l’index des preuves ;
7. la progression avant/après ;
8. les README et rapports utiles.

Une source marquée `À VALIDER` reste provisoire.

## Règles de vérité

- Utiliser uniquement les informations présentes dans les sources ou confirmées par le pilote.
- Ne jamais inventer un besoin, un client, une durée observée, un résultat ou un impact.
- Distinguer résultat attendu et résultat observé.
- Relier toute affirmation importante à une preuve.
- Présenter une limite réelle.
- Ne pas déclarer une page publiée avant contrôle public.
- Ne pas présenter une proposition comme une validation.

## Protection des productions

- Ne supprimer aucun fichier.
- Ne pas écraser un fichier existant.
- Ne pas déplacer ou renommer une production originale sans autorisation.
- Ne pas modifier les Modules 01 à 06.
- Ne pas modifier le portfolio source pour faciliter l’intégration.
- Créer les adaptations uniquement dans le dossier S27.
- Utiliser des liens relatifs ou des copies autorisées.

## Confidentialité et droits

- Ne jamais afficher mot de passe, token, clé, cookie ou secret.
- Ne pas reproduire une donnée sensible dans un rapport.
- Ne pas afficher un compte personnel pendant la démonstration.
- Vérifier les droits de chaque affiche et image.
- Vérifier les consentements avant diffusion.
- Écarter les contacts, listes privées et documents confidentiels.
- Préparer une version locale expurgée.

## Contenu du pitch

Respecter six blocs :

1. activité ou sujet ;
2. besoin traité ;
3. production principale ;
4. progression avant/après ;
5. méthode avec l’IA ;
6. prochaine étape.

Durée cible :

```text
3 à 5 minutes
```

Ne pas raconter tout le Challenge. Ne pas lire le portfolio mot à mot.

## Démonstration

Montrer une seule production existante.

Parcours :

```text
besoin
→ ouverture
→ élément essentiel
→ correction
→ résultat observé
→ limite
```

Durée cible :

```text
2 à 3 minutes
```

Une version locale de secours est obligatoire avant le statut `PRÊT POUR PRÉSENTATION`.

## Questions obligatoires

Préparer ces quatre questions :

1. Quel besoin professionnel votre projet traite-t-il ?
2. Quelle preuve montre le mieux votre progression et pourquoi ?
3. Quel rôle l’IA a-t-elle joué et qu’avez-vous contrôlé vous-même ?
4. Quelle limite reconnaissez-vous et quelle est votre prochaine étape ?

Réponses courtes, factuelles et reliées à une preuve.

## Règles du mini-site

- Vite et JavaScript natif par défaut.
- HTML sémantique.
- CSS modulaire.
- Aucune fonction serveur.
- Aucune clé d’API.
- Aucun suivi utilisateur.
- Chronomètre local uniquement.
- Navigation clavier.
- Focus visible.
- Contrastes suffisants.
- `prefers-reduced-motion`.
- Responsive à 360, 768, 1024 et 1440 px.
- Contrôle en projection 16:9.
- Chemins relatifs compatibles GitHub Pages.
- Casse exacte des fichiers.
- `.nojekyll` si requis par la méthode de publication.

## Identité LN-IA

- bleu nuit ;
- blanc ou blanc cassé ;
- cyan ou turquoise ;
- or utilisé avec retenue ;
- forte lisibilité ;
- logo officiel confirmé ;
- effets 3D sobres ;
- affiches utilisées comme repères, pas comme texte à lire.

Formule :

```text
L’IA assiste. L’humain pilote, contrôle et décide.
```

## Guide PDF

- Conserver une source Markdown.
- Produire une page HTML imprimable.
- Contrôler visuellement avant export.
- Ne pas installer une bibliothèque PDF sans autorisation.
- Signaler clairement si l’export reste à effectuer.
- Vérifier marges, sauts de page, liens et pages vides.
- Ne pas intégrer de donnée privée.

## Dépendances

- Afficher Node.js, npm et Vite avant installation.
- Présenter la liste exacte des dépendances.
- Attendre une autorisation explicite.
- Réutiliser uniquement une dépendance du projet réellement déclarée.
- Générer `package-lock.json` après l’installation autorisée.
- Ne pas ajouter une dépendance pour une fonction réalisable en JavaScript natif.

## Git

- Commencer par `git status` en lecture seule.
- Ne jamais utiliser `git add .`.
- Ne jamais utiliser `git commit -a`.
- Ne pas modifier directement `main`.
- Proposer la branche `feat/pitch-presentation-seance-27`.
- Utiliser une liste blanche exacte.
- Attendre des autorisations séparées pour branche, indexation, commit et push.
- Ne pas inclure `node_modules`, `.env*`, secrets, fichiers privés, caches, logs ou ZIP antérieurs.
- Ne pas toucher aux changements sans rapport déjà présents dans le dépôt.

## Pull Request et publication

- Décrire les fichiers, tests, preuves, droits, limites et décisions attendues.
- Demander une revue humaine.
- Ne pas fusionner automatiquement.
- Ne pas activer un déploiement automatique sans décision explicite.
- Après publication, tester l’URL publique, le PDF, les images, les liens, le mobile et l’absence de données sensibles.
- Consigner le commit réellement publié.

## Points d’arrêt

S’arrêter après chaque phase du prompt maître.

Le rapport doit indiquer :

- sources lues ;
- fichiers créés ou modifiés ;
- commandes exécutées ;
- résultats observés ;
- éléments non vérifiables ;
- risques ;
- décisions humaines requises ;
- statut exact.

Ne pas enchaîner automatiquement.

## Commandes de contrôle

Utiliser les commandes déclarées par le projet :

```text
npm run build
npm run preview
```

Ajouter une commande seulement si elle est nécessaire, documentée et autorisée.

## Définition de terminé

Le travail local peut être déclaré prêt seulement si :

- les six blocs du pitch sont présents ;
- le pitch est chronométré ;
- la démonstration est répétée ;
- les quatre réponses sont préparées ;
- la production principale est accessible ;
- l’avant/après est vérifiable ;
- la version locale de secours fonctionne ;
- le build réussit ;
- les contrôles d’accessibilité sont effectués ;
- le guide est contrôlé ;
- la confidentialité est contrôlée ;
- le pilote humain prononce le statut.

Statuts autorisés dans les rapports :

```text
À COMPLÉTER
PRÊT POUR PRÉSENTATION — VALIDATION HUMAINE REQUISE
FINALISTE PROPOSÉ — DÉCISION HUMAINE REQUISE
BLOQUÉ — DÉCISION OU SOURCE MANQUANTE
```
