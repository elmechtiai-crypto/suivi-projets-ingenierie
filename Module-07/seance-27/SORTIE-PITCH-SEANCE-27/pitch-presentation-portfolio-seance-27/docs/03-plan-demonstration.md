# 03 — Plan de démonstration

**Candidat :** Karim El Mechti  
**Projet :** INGÉNIA PILOT V10  
**Destinataire :** M. Abderrahman  
**Date :** 2026-09-02  
**Phase exécutée :** PHASE 3 — Démonstration et questions  
**Durée cible :** 2 à 3 minutes  
**Statut :** DÉMONSTRATION CHRONOMÉTRÉE À 2 MINUTES — VERSION LOCALE À TESTER

## 1. Objectif

Montrer une seule production, INGÉNIA PILOT V10, et prouver en moins de trois
minutes qu’un utilisateur peut :

1. voir l’état général du portefeuille ;
2. repérer les sept alertes ;
3. comprendre un blocage et l’action associée ;
4. identifier les limites de la démonstration.

Le parcours utilise uniquement des données fictives et ne nécessite aucun
compte personnel.

## 2. Préparation avant la démonstration

### Production locale principale

```text
PROJET KARIM/mini-site-ingenia-pilot/
```

Commande locale documentée par le projet, à lancer depuis ce dossier :

```text
python -m http.server 8090 --bind 127.0.0.1
```

Adresse locale :

```text
http://127.0.0.1:8090/
```

### Contrôles à effectuer avant l’arrivée du destinataire

```text
[ ] serveur local démarré
[ ] accueil chargé complètement
[ ] compteur des missions égal à 41
[ ] compteur des alertes égal à 7
[ ] section Alertes accessible
[ ] aucune image cassée
[ ] aucun compte, onglet privé ou notification visible
[ ] zoom du navigateur à 100 %
[ ] version locale déjà chargée dans le navigateur de démonstration
[ ] captures de secours faciles à retrouver
```

## 3. Parcours principal — cible de 2 min 40 s

| Temps cible | Action à l’écran | Explication orale | Preuve observée |
|---:|---|---|---|
| 0:00–0:20 | Ouvrir l’accueil `#accueil` | « Voici INGÉNIA PILOT V10, ma production principale. Elle présente un portefeuille de démonstration sans données réelles. » | titre du projet et besoin général |
| 0:20–0:45 | Aller à `#missions` | « Le tableau contient 41 missions fictives. Les indicateurs donnent une vue immédiate des états de suivi. » | compteur `missions-total` et indicateurs |
| 0:45–1:25 | Cliquer sur « Voir les alertes » ou ouvrir `#alertes` | « Sept missions nécessitent une clarification. Chaque carte montre une référence fictive, une raison de blocage, une action à réaliser et un responsable générique. » | compteur `alertes-total` égal à 7 et première carte complète |
| 1:25–1:55 | Utiliser le lien vers le tableau filtré | « Le même statut est visible dans le tableau. Le filtre permet de retrouver les lignes concernées sans parcourir les 41 missions. » | vue `?statut=À confirmer#missions` et lignes concernées |
| 1:55–2:20 | Ouvrir `#securite` | « Le site reste un démonstrateur. Il ne contient ni formulaire, ni base de données, ni sauvegarde de saisie et ne doit recevoir aucune information confidentielle. » | section Sécurité et limites |
| 2:20–2:40 | Revenir aux alertes ou rester sur la limite | « Le résultat observable est simple : une alerte, son blocage et son action sont retrouvés rapidement, tout en conservant une limite clairement annoncée. » | parcours terminé dans une seule production |

## 4. Script court de démonstration

> Voici INGÉNIA PILOT V10, ma production principale. Le tableau contient
> quarante et une missions fictives. Je vais directement à la section Alertes :
> sept missions nécessitent une clarification. Chaque carte présente une
> référence fictive, la raison du blocage, l’action à réaliser et un responsable
> générique. Le lien ouvre ensuite le tableau avec le statut concerné déjà
> filtré. Cette production facilite donc le repérage d’une action prioritaire.
> Sa limite reste claire : c’est un démonstrateur sans saisie ni base de données,
> et il ne doit recevoir aucune information confidentielle.

## 5. Version locale de secours

### Ordre de repli

1. **Parcours principal :** serveur local sur `127.0.0.1:8090`.
2. **Repli hors serveur :** page déjà chargée et ressources disponibles dans le
   cache V10 du même profil de navigateur.
3. **Repli statique :** captures de validation locale conservées dans
   `Module-07/07-portfolio/preuves/`.
4. **Repli verbal :** expliquer les quatre faits vérifiables sans prétendre que
   la page fonctionne si elle ne s’affiche pas.

### Captures disponibles

```text
Module-07/07-portfolio/preuves/validation-v10-ordinateur-affiches.png
Module-07/07-portfolio/preuves/validation-v10-mobile-affiches.png
```

Ces captures servent uniquement de secours local. Leur intégration dans le
futur mini-site S27 exigera une décision distincte sur les visuels autorisés.

## 6. Incidents et réponse prévue

| Incident | Réponse immédiate | Formulation honnête |
|---|---|---|
| URL publique indisponible | utiliser la version locale | « Je poursuis avec la version locale contrôlée. » |
| serveur local arrêté | tenter la page déjà mise en cache | « Je vérifie le secours local sans modifier la production. » |
| cache indisponible | ouvrir une capture de preuve | « La démonstration interactive est indisponible ; voici la capture du contrôle daté. » |
| compteur différent de 41 ou 7 | arrêter la démonstration chiffrée | « L’état affiché ne correspond pas à la version contrôlée ; je ne valide pas ce résultat. » |
| donnée inattendue ou sensible | masquer l’écran et arrêter | « Je protège l’information et je reprends uniquement avec la version de secours. » |

## 7. Informations à ne jamais afficher

- fichier de correspondance réel–fictif ;
- nom réel de client ou de projet ;
- référence réelle, montant ou adresse ;
- compte GitHub personnel pendant une connexion ;
- token, mot de passe, cookie ou historique privé ;
- dossier professionnel source.

## 8. Fiche de répétition humaine

| Contrôle | Valeur à renseigner |
|---|---|
| Date et heure | 2026-09-04 — heure non précisée |
| Durée totale observée | 2 minutes — secondes non précisées |
| Étape la plus lente |  |
| Incident rencontré | aucun incident communiqué ; version locale non testée |
| Correction décidée | aucune correction demandée |
| Version locale de secours testée | NON |

La durée annoncée entre dans la cible de deux à trois minutes. Le critère de
secours local reste non satisfait et devra être testé avant le statut
`PRÊT POUR PRÉSENTATION`.

Critères de réussite :

```text
[ ] durée entre 2 et 3 minutes
[ ] une seule production ouverte
[ ] 41 missions et 7 alertes visibles
[ ] une alerte, son blocage et son action montrés
[ ] limite annoncée
[ ] aucun compte ni donnée sensible affiché
[ ] version locale de secours prête
```

## 9. Point d’arrêt

```text
DÉMONSTRATION ET QUESTIONS PRÊTES — RÉPÉTITION HUMAINE REQUISE
```
