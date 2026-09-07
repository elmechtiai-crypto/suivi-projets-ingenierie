export const preuves = Object.freeze([
  {
    id: "P01",
    titre: "Messages de suivi adaptés",
    role: "Communication contrôlée",
    fait: "Des modèles de messages ont été structurés avec une relecture humaine obligatoire avant diffusion.",
    reserve: "Brouillons à relire avant toute diffusion.",
  },
  {
    id: "P02",
    titre: "Première PWA JSON",
    role: "Point de départ",
    fait: "Première PWA : 3 bénéfices, 11 informations, 0 mission et 0 alerte.",
    reserve: "Tests interactifs historiques non tous rejoués.",
    affiches: [
      {
        label: "Affiche · Une progression vérifiable",
        href: "#affiche-progression",
      },
    ],
  },
  {
    id: "P03",
    titre: "Paquet déployable S20",
    role: "Test et correction du précache",
    fait: "La correction documentée fait passer le précache de 10 à 16 ressources.",
    reserve: "Ancien fichier du cache non conservé séparément.",
    affiches: [
      {
        label: "Affiche · Une progression vérifiable",
        href: "#affiche-progression",
      },
    ],
  },
  {
    id: "P04",
    titre: "Organisation et nommage",
    role: "Protection des fichiers et des chemins",
    fait: "Les règles de nommage, de rangement et de protection des chemins sont documentées.",
    reserve: "Certaines règles restent des propositions documentées.",
  },
  {
    id: "P05",
    titre: "Workflow Git et GitHub Pages",
    role: "Décisions et traçabilité",
    fait: "Les validations locales et les autorisations Git sont consignées comme des décisions humaines séparées.",
    reserve: "Chaque action distante exige une autorisation distincte.",
    affiches: [
      {
        label: "Affiche · Qui fait quoi ?",
        href: "#affiche-methode",
      },
    ],
  },
  {
    id: "P06",
    titre: "INGÉNIA PILOT V10",
    role: "Production principale publiée et contrôlée",
    fait: "La V10 affiche 41 missions, 7 alertes complètes et utilise un cache local de 22 ressources.",
    reserve: "Démonstrateur sans usage opérationnel prouvé.",
    affiches: [
      {
        label: "Affiche · Du besoin à l’action",
        href: "#affiche-p06",
      },
      {
        label: "Affiche · Une progression vérifiable",
        href: "#affiche-progression",
      },
      {
        label: "Affiche · Qui fait quoi ?",
        href: "#affiche-methode",
      },
    ],
  },
  {
    id: "P07",
    titre: "Quatre affiches admissibles",
    role: "Communication visuelle",
    fait: "Quatre affiches existantes sont conservées comme repères visuels avec des droits déclarés par le candidat.",
    reserve: "Droits confirmés sur déclaration du candidat.",
    galerieHref: "#reperes-visuels",
  },
]);
