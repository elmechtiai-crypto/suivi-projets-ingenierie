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

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .catch((error) => {
        console.error("Enregistrement du service worker impossible :", error);
      });
  });
}
