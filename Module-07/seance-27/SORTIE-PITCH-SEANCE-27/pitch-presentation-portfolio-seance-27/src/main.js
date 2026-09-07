import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/components.css";
import "./styles/presenter.css";
import "./styles/responsive.css";
import "./styles/print.css";

import { pitch } from "./data/pitch.js";
import { preuves } from "./data/preuves.js";
import { questions } from "./data/questions.js";
import { liens } from "./data/liens.js";
import { initialiserAccessibilite } from "./modules/accessibility.js";
import { initialiserChecklist } from "./modules/checklist.js";
import { initialiserNavigation } from "./modules/navigation.js";
import { initialiserModePresentation } from "./modules/presenter.js";
import { initialiserChronometre } from "./modules/timer.js";

document.documentElement.classList.add("js");

const annee = document.querySelector("#annee");

if (annee) {
  annee.textContent = String(new Date().getFullYear());
}

function creerElement(tag, classe, texte) {
  const element = document.createElement(tag);
  if (classe) element.className = classe;
  if (texte) element.textContent = texte;
  return element;
}

function afficherQuestions() {
  const conteneur = document.querySelector("#questions-list");
  if (!conteneur) return;

  const fragment = document.createDocumentFragment();

  questions.forEach((item, index) => {
    const details = creerElement("details", "question-card");
    if (index === 0) details.open = true;

    const summary = creerElement("summary", "question-title", item.question);
    const contenu = creerElement("div", "question-content");
    contenu.append(
      creerElement("p", "question-answer", item.reponse),
      creerElement("p", "question-proof", `Preuve : ${item.preuve}`),
      creerElement("p", "question-limit", `Limite : ${item.limite}`),
    );
    const retour = creerElement("button", "return-presentation-button", "Retour à la présentation principale");
    retour.type = "button";
    retour.dataset.returnToPresentation = "true";
    contenu.append(retour);
    details.append(summary, contenu);
    fragment.append(details);
  });

  conteneur.replaceChildren(fragment);
}

function afficherPreuves() {
  const conteneur = document.querySelector("#proofs-list");
  if (!conteneur) return;

  const fragment = document.createDocumentFragment();

  preuves.forEach((preuve) => {
    const article = creerElement("article", "proof-card");
    article.id = `preuve-${preuve.id}`;
    article.tabIndex = -1;
    article.append(
      creerElement("span", "proof-id", preuve.id),
      creerElement("h4", "", preuve.titre),
      creerElement("p", "proof-role", preuve.role),
      creerElement("p", "proof-fact", preuve.fait),
      creerElement("p", "proof-reserve", preuve.reserve),
    );

    const actions = creerElement("div", "proof-actions");

    preuve.affiches?.forEach((affiche) => {
      const ancre = creerElement("a", "proof-poster-link", affiche.label);
      ancre.href = affiche.href;
      ancre.dataset.showSupport = "true";
      actions.append(ancre);
    });

    if (preuve.galerieHref) {
      const ancre = creerElement("a", "proof-poster-link", "Voir les affiches associées");
      ancre.href = preuve.galerieHref;
      ancre.dataset.showSupport = "true";
      actions.append(ancre);
    }

    if (actions.childElementCount > 0) article.append(actions);
    const retour = creerElement("button", "return-presentation-button", "Retour à la présentation principale");
    retour.type = "button";
    retour.dataset.returnToPresentation = "true";
    article.append(retour);
    fragment.append(article);
  });

  conteneur.replaceChildren(fragment);
}

function afficherLiens() {
  const conteneur = document.querySelector("#links-list");
  if (!conteneur) return;

  const fragment = document.createDocumentFragment();

  liens.forEach((lien) => {
    const article = creerElement("article", "link-card");
    const ancre = creerElement("a", "link-title", lien.label);
    ancre.href = lien.href;
    if (lien.external) {
      ancre.target = "_blank";
      ancre.rel = "noopener noreferrer";
      ancre.dataset.external = "true";
    }
    article.append(
      ancre,
      creerElement("p", "", lien.description),
      creerElement("span", "link-kind", lien.type || (lien.external ? "Lien externe" : "Ressource locale")),
    );
    fragment.append(article);
  });

  conteneur.replaceChildren(fragment);
}

document.title = `${pitch.projet} — Pitch et portfolio`;
afficherQuestions();
afficherPreuves();
afficherLiens();
initialiserNavigation();
initialiserChecklist();
initialiserChronometre();
initialiserModePresentation();
initialiserAccessibilite();
