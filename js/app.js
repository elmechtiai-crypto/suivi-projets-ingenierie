"use strict";

const checklistButton = document.getElementById("checklist-toggle");
const checklistContent = document.getElementById("checklist-contenu");

if (!checklistButton || !checklistContent) {
  console.error(
    "Interaction indisponible : le bouton ou le contenu de la checklist est introuvable."
  );
} else {
  const updateChecklistState = (isExpanded) => {
    checklistContent.hidden = !isExpanded;
    checklistButton.setAttribute("aria-expanded", String(isExpanded));
    checklistButton.textContent = isExpanded
      ? "Masquer la checklist"
      : "Afficher la checklist";
  };

  checklistButton.hidden = false;
  updateChecklistState(false);

  checklistButton.addEventListener("click", () => {
    const isExpanded = checklistButton.getAttribute("aria-expanded") === "true";
    updateChecklistState(!isExpanded);
  });
}

const beneficesListe = document.getElementById("benefices-liste");
const beneficesStatut = document.getElementById("benefices-statut");

function setBeneficesStatut(message, type = "info") {
  beneficesStatut.textContent = message;
  beneficesStatut.classList.toggle("error", type === "error");
}

function creerBeneficeArticle(benefice) {
  const article = document.createElement("article");

  const titre = document.createElement("h3");
  titre.textContent = benefice.titre;

  const texte = document.createElement("p");
  texte.textContent = benefice.texte;

  article.append(titre, texte);
  return article;
}

async function chargerBenefices() {
  beneficesListe.replaceChildren();
  beneficesListe.setAttribute("aria-busy", "true");
  setBeneficesStatut("Chargement des bénéfices…");

  try {
    const reponse = await fetch("./data/data.json", { cache: "no-store" });
    if (!reponse.ok) {
      throw new Error(`Réponse HTTP ${reponse.status}`);
    }

    const donnees = await reponse.json();
    const benefices = donnees.benefices;
    if (!Array.isArray(benefices)) {
      throw new Error("Le JSON doit contenir un tableau \"benefices\".");
    }

    if (benefices.length === 0) {
      setBeneficesStatut("Aucun bénéfice disponible pour le moment.");
      return;
    }

    const fragment = document.createDocumentFragment();
    benefices.forEach((benefice) => fragment.append(creerBeneficeArticle(benefice)));
    beneficesListe.append(fragment);
    setBeneficesStatut("");
  } catch (error) {
    console.error("Chargement des bénéfices impossible :", error);
    setBeneficesStatut(
      "Impossible de charger les bénéfices. Vérifiez le serveur local, le chemin et le JSON.",
      "error"
    );
  } finally {
    beneficesListe.setAttribute("aria-busy", "false");
  }
}

if (beneficesListe && beneficesStatut) {
  chargerBenefices();
}

const colonnesListe = document.getElementById("colonnes-liste");
const colonnesStatut = document.getElementById("colonnes-statut");

function setColonnesStatut(message, type = "info") {
  colonnesStatut.textContent = message;
  colonnesStatut.classList.toggle("error", type === "error");
}

function creerColonneArticle(colonne) {
  const article = document.createElement("article");

  const categorie = document.createElement("p");
  categorie.className = "colonne-categorie";
  categorie.textContent = colonne.category;

  const titre = document.createElement("h3");
  titre.textContent = colonne.title;

  const texte = document.createElement("p");
  texte.textContent = colonne.description;

  article.append(categorie, titre, texte);
  return article;
}

async function chargerColonnes() {
  colonnesListe.replaceChildren();
  colonnesListe.setAttribute("aria-busy", "true");
  setColonnesStatut("Chargement des informations suivies…");

  try {
    const reponse = await fetch("./data/data.json", { cache: "no-store" });
    if (!reponse.ok) {
      throw new Error(`Réponse HTTP ${reponse.status}`);
    }

    const donnees = await reponse.json();
    const colonnes = donnees.colonnes_suivi;
    if (!Array.isArray(colonnes)) {
      throw new Error("Le JSON doit contenir un tableau \"colonnes_suivi\".");
    }

    if (colonnes.length === 0) {
      setColonnesStatut("Aucune information disponible pour le moment.");
      return;
    }

    const fragment = document.createDocumentFragment();
    colonnes.forEach((colonne) => fragment.append(creerColonneArticle(colonne)));
    colonnesListe.append(fragment);
    setColonnesStatut("");
  } catch (error) {
    console.error("Chargement des informations suivies impossible :", error);
    setColonnesStatut(
      "Impossible de charger les informations suivies. Vérifiez le serveur local, le chemin et le JSON.",
      "error"
    );
  } finally {
    colonnesListe.setAttribute("aria-busy", "false");
  }
}

if (colonnesListe && colonnesStatut) {
  chargerColonnes();
}

const missionsTable = document.getElementById("missions-table");
const missionsCorps = document.getElementById("missions-corps");
const missionsStatut = document.getElementById("missions-statut");
const missionsRecherche = document.getElementById("missions-recherche");
const missionsFiltreStatut = document.getElementById("missions-filtre-statut");
const missionsFiltreAnnee = document.getElementById("missions-filtre-annee");
const missionsReinitialiser = document.getElementById("missions-reinitialiser");
const missionsTotal = document.getElementById("missions-total");
const missionsEnSuivi = document.getElementById("missions-en-suivi");
const missionsADemarrer = document.getElementById("missions-a-demarrer");
const missionsAConfirmer = document.getElementById("missions-a-confirmer");
const alertesListe = document.getElementById("alertes-liste");
const alertesStatut = document.getElementById("alertes-statut");
const alertesTotal = document.getElementById("alertes-total");
const prioritesListe = document.getElementById("priorites-liste");
const prioritesStatut = document.getElementById("priorites-statut");
let toutesLesMissions = [];

function setMissionsStatut(message, type = "info") {
  missionsStatut.textContent = message;
  missionsStatut.classList.toggle("error", type === "error");
}

function classePourStatut(statut) {
  return {
    "À confirmer": "statut-a-confirmer",
    "À démarrer": "statut-a-demarrer",
    "En suivi": "statut-en-suivi",
    "Clôture à confirmer": "statut-cloture",
  }[statut] || "statut-neutre";
}

function creerCelluleTexte(valeur, classe = "") {
  const cellule = document.createElement("td");
  cellule.textContent = valeur ?? "";
  if (classe) cellule.className = classe;
  return cellule;
}

function creerLigneMission(mission) {
  const ligne = document.createElement("tr");
  ligne.dataset.statut = mission.statut_suivi;
  if (missionEstEnAlerte(mission)) ligne.classList.add("mission-alert-row");

  [
    mission.reference,
    mission.client,
    mission.type_mission,
    mission.echeance,
    mission.dernier_document,
  ].forEach((valeur) => ligne.append(creerCelluleTexte(valeur)));

  const avancementCellule = document.createElement("td");
  avancementCellule.className = "mission-progress-cell";
  const progression = document.createElement("progress");
  const avancement = Math.min(100, Math.max(0, Number(mission.avancement) || 0));
  progression.max = 100;
  progression.value = avancement;
  progression.setAttribute(
    "aria-label",
    `Avancement de ${mission.reference} : ${avancement}%`
  );
  const progressionTexte = document.createElement("span");
  progressionTexte.textContent = `${avancement}%`;
  const badgeStatut = document.createElement("span");
  badgeStatut.className = `status-badge ${classePourStatut(mission.statut_suivi)}`;
  badgeStatut.textContent = mission.statut_suivi;
  avancementCellule.append(progression, progressionTexte, badgeStatut);
  ligne.append(avancementCellule);

  const blocageCellule = creerCelluleTexte(mission.livrable_bloquant);
  if (missionEstEnAlerte(mission)) blocageCellule.classList.add("blocking-warning");
  ligne.append(
    blocageCellule,
    creerCelluleTexte(mission.statut_paiement),
    creerCelluleTexte(mission.action_prioritaire, "priority-action-text"),
    creerCelluleTexte(mission.responsable),
    creerCelluleTexte(mission.derniere_maj)
  );

  return ligne;
}

function setAlertesStatut(message, type = "info") {
  if (!alertesStatut) return;
  alertesStatut.textContent = message;
  alertesStatut.classList.toggle("error", type === "error");
}

function missionEstEnAlerte(mission) {
  return mission.statut_suivi === "À confirmer";
}

function creerCarteAlerte(mission) {
  const article = document.createElement("article");
  article.className = "alert-card";

  const entete = document.createElement("div");
  entete.className = "alert-card-header";

  const titre = document.createElement("h3");
  titre.textContent = mission.reference;

  const badge = document.createElement("span");
  badge.className = "alert-badge";
  badge.textContent = "À confirmer";

  entete.append(titre, badge);

  const meta = document.createElement("p");
  meta.className = "alert-meta";
  meta.textContent = `${mission.client} · ${mission.type_mission}`;

  const details = document.createElement("dl");
  [
    ["Raison du blocage", mission.livrable_bloquant || "Information à confirmer"],
    ["Action à réaliser", mission.action_prioritaire || "Définir la prochaine action"],
    ["Responsable", mission.responsable || "À désigner"],
    ["Dernière mise à jour", mission.derniere_maj || "Non renseignée"],
  ].forEach(([libelle, valeur]) => {
    const terme = document.createElement("dt");
    terme.textContent = libelle;
    const description = document.createElement("dd");
    description.textContent = valeur;
    details.append(terme, description);
  });

  article.append(entete, meta, details);
  return article;
}

function afficherAlertes(missions) {
  if (!alertesListe || !alertesTotal) return;

  const missionsEnAlerte = missions.filter(missionEstEnAlerte);
  alertesTotal.textContent = String(missionsEnAlerte.length);
  alertesListe.replaceChildren();

  if (missionsEnAlerte.length === 0) {
    setAlertesStatut("Aucune mission en alerte pour le moment.");
    return;
  }

  const fragment = document.createDocumentFragment();
  missionsEnAlerte.forEach((mission) => fragment.append(creerCarteAlerte(mission)));
  alertesListe.append(fragment);
  setAlertesStatut(
    `${missionsEnAlerte.length} mission${missionsEnAlerte.length > 1 ? "s" : ""} nécessite${missionsEnAlerte.length > 1 ? "nt" : ""} une clarification.`
  );
}

function setPrioritesStatut(message, type = "info") {
  if (!prioritesStatut) return;
  prioritesStatut.textContent = message;
  prioritesStatut.classList.toggle("error", type === "error");
}

function creerCartePriorite(statut, missions) {
  const article = document.createElement("article");
  article.className = `priority-card ${classePourStatut(statut)}`;

  const entete = document.createElement("div");
  entete.className = "priority-card-header";
  const nombre = document.createElement("strong");
  nombre.textContent = String(missions.length);
  nombre.setAttribute("aria-label", `${missions.length} missions`);
  const titre = document.createElement("h3");
  titre.textContent = statut;
  entete.append(nombre, titre);

  const actions = [...new Set(
    missions.map((mission) => mission.action_prioritaire).filter(Boolean)
  )];
  const action = document.createElement("p");
  const libelle = document.createElement("strong");
  libelle.textContent = "Action : ";
  action.append(libelle, actions.join(" · ") || "Action à définir");

  const lien = document.createElement("a");
  lien.href = `./index.html?statut=${encodeURIComponent(statut)}#missions`;
  lien.textContent = "Afficher ces missions";

  article.append(entete, action, lien);
  return article;
}

function afficherPriorites(missions) {
  if (!prioritesListe) return;

  const ordre = ["À confirmer", "À démarrer", "En suivi", "Clôture à confirmer"];
  prioritesListe.replaceChildren();
  const fragment = document.createDocumentFragment();

  ordre.forEach((statut) => {
    const groupe = missions.filter((mission) => mission.statut_suivi === statut);
    if (groupe.length > 0) fragment.append(creerCartePriorite(statut, groupe));
  });

  prioritesListe.append(fragment);
  setPrioritesStatut(
    `${missions.length} mission${missions.length > 1 ? "s" : ""} répartie${missions.length > 1 ? "s" : ""} par priorité.`
  );
}

function normaliserRecherche(valeur) {
  return String(valeur ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("fr");
}

function mettreAJourSynthese(missions) {
  missionsTotal.textContent = String(missions.length);
  missionsEnSuivi.textContent = String(
    missions.filter((mission) => mission.statut_suivi === "En suivi").length
  );
  missionsADemarrer.textContent = String(
    missions.filter((mission) => mission.statut_suivi === "À démarrer").length
  );
  missionsAConfirmer.textContent = String(
    missions.filter((mission) =>
      ["À confirmer", "Clôture à confirmer"].includes(mission.statut_suivi)
    ).length
  );
}

function preparerFiltreAnnees(missions) {
  const annees = new Set();
  missions.forEach((mission) => {
    String(mission.annee ?? "").match(/20\d{2}/g)?.forEach((annee) => annees.add(annee));
  });
  [...annees]
    .sort()
    .reverse()
    .forEach((annee) => {
      const option = document.createElement("option");
      option.value = annee;
      option.textContent = annee;
      missionsFiltreAnnee.append(option);
    });
}

function appliquerScenarioDepuisAdresse() {
  const parametres = new URLSearchParams(window.location.search);
  const statutDemande = parametres.get("statut");
  const anneeDemandee = parametres.get("annee");

  if (
    statutDemande &&
    [...missionsFiltreStatut.options].some((option) => option.value === statutDemande)
  ) {
    missionsFiltreStatut.value = statutDemande;
  }

  if (
    anneeDemandee &&
    [...missionsFiltreAnnee.options].some((option) => option.value === anneeDemandee)
  ) {
    missionsFiltreAnnee.value = anneeDemandee;
  }
}

function afficherMissions() {
  const recherche = normaliserRecherche(missionsRecherche.value.trim());
  const statut = missionsFiltreStatut.value;
  const annee = missionsFiltreAnnee.value;
  const missionsFiltrees = toutesLesMissions.filter((mission) => {
    const contenu = normaliserRecherche(
      [mission.reference, mission.client, mission.type_mission, mission.annee, mission.statut_suivi].join(" ")
    );
    return (
      (!recherche || contenu.includes(recherche)) &&
      (!statut || mission.statut_suivi === statut) &&
      (!annee || String(mission.annee).includes(annee))
    );
  });

  missionsCorps.replaceChildren();
  const fragment = document.createDocumentFragment();
  missionsFiltrees.forEach((mission) => fragment.append(creerLigneMission(mission)));
  missionsCorps.append(fragment);
  setMissionsStatut(
    `${missionsFiltrees.length} mission${missionsFiltrees.length > 1 ? "s" : ""} affichée${missionsFiltrees.length > 1 ? "s" : ""} sur ${toutesLesMissions.length}.`
  );
}

async function chargerMissions() {
  missionsCorps.replaceChildren();
  missionsTable.setAttribute("aria-busy", "true");
  alertesListe?.replaceChildren();
  alertesListe?.setAttribute("aria-busy", "true");
  prioritesListe?.replaceChildren();
  prioritesListe?.setAttribute("aria-busy", "true");
  setMissionsStatut("Chargement des missions…");
  setAlertesStatut("Chargement des alertes…");
  setPrioritesStatut("Chargement des priorités…");

  try {
    const reponse = await fetch("./data/data.json", { cache: "no-store" });
    if (!reponse.ok) {
      throw new Error(`Réponse HTTP ${reponse.status}`);
    }

    const donnees = await reponse.json();
    const missions = donnees.missions;
    if (!Array.isArray(missions)) {
      throw new Error("Le JSON doit contenir un tableau \"missions\".");
    }

    if (missions.length === 0) {
      setMissionsStatut("Aucune mission disponible pour le moment.");
      afficherAlertes([]);
      afficherPriorites([]);
      return;
    }

    toutesLesMissions = missions;
    mettreAJourSynthese(missions);
    afficherAlertes(missions);
    afficherPriorites(missions);
    preparerFiltreAnnees(missions);
    appliquerScenarioDepuisAdresse();
    afficherMissions();
  } catch (error) {
    console.error("Chargement des missions impossible :", error);
    setMissionsStatut(
      "Impossible de charger les missions. Vérifiez le serveur local, le chemin et le JSON.",
      "error"
    );
    setAlertesStatut(
      "Impossible de charger les alertes. Vérifiez le serveur local, le chemin et le JSON.",
      "error"
    );
    setPrioritesStatut(
      "Impossible de charger les priorités. Vérifiez le serveur local, le chemin et le JSON.",
      "error"
    );
  } finally {
    missionsTable.setAttribute("aria-busy", "false");
    alertesListe?.setAttribute("aria-busy", "false");
    prioritesListe?.setAttribute("aria-busy", "false");
  }
}

if (missionsTable && missionsCorps && missionsStatut) {
  chargerMissions();
}

[missionsRecherche, missionsFiltreStatut, missionsFiltreAnnee].forEach((controle) => {
  controle?.addEventListener("input", afficherMissions);
  controle?.addEventListener("change", afficherMissions);
});

missionsReinitialiser?.addEventListener("click", () => {
  missionsRecherche.value = "";
  missionsFiltreStatut.value = "";
  missionsFiltreAnnee.value = "";
  afficherMissions();
  missionsRecherche.focus();
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .catch((error) => {
        console.error("Enregistrement du service worker impossible :", error);
      });
  });
}
