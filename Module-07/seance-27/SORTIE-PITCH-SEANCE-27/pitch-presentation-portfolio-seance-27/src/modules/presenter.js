export function initialiserModePresentation() {
  const diapositives = [...document.querySelectorAll("[data-slide]")];
  const barre = document.querySelector("#presenter-toolbar");
  const bascule = document.querySelector("#presentation-toggle");
  const demarrer = document.querySelector("#presentation-start");
  const precedent = document.querySelector("#slide-previous");
  const suivant = document.querySelector("#slide-next");
  const quitter = document.querySelector("#presentation-exit");
  const compteur = document.querySelector("#slide-counter");
  const libelle = document.querySelector("#slide-label");
  const nombreEcransPitch = diapositives.filter((diapositive) => !diapositive.hasAttribute("data-annex")).length;

  if (!barre || diapositives.length === 0) return;

  let indexActif = 0;
  let indexRetour = 0;

  function afficher(index) {
    indexActif = Math.min(Math.max(index, 0), diapositives.length - 1);
    diapositives.forEach((diapositive, indexDiapositive) => {
      const active = indexDiapositive === indexActif;
      diapositive.classList.toggle("is-active", active);
      diapositive.setAttribute("aria-hidden", String(!active));
    });

    const diapositive = diapositives[indexActif];
    compteur.textContent = diapositive.hasAttribute("data-annex")
      ? "Annexe · hors chronométrage"
      : `Écran ${indexActif + 1} / ${nombreEcransPitch}`;
    libelle.textContent = diapositive.dataset.slideLabel || "Présentation";
    precedent.disabled = indexActif === 0;
    suivant.disabled = indexActif === diapositives.length - 1;
    diapositive.scrollTo?.({ top: 0, behavior: "instant" });
  }

  function entrer(index = 0) {
    document.body.classList.add("presentation-mode");
    barre.hidden = false;
    bascule?.setAttribute("aria-pressed", "true");
    afficher(index);
    quitter?.focus();
  }

  function sortir(restaurerFocus = true) {
    document.body.classList.remove("presentation-mode");
    barre.hidden = true;
    bascule?.setAttribute("aria-pressed", "false");
    diapositives.forEach((diapositive) => {
      diapositive.classList.remove("is-active");
      diapositive.removeAttribute("aria-hidden");
    });
    if (restaurerFocus) bascule?.focus();
  }

  function ouvrirSupport(event) {
    if (!document.body.classList.contains("presentation-mode")) return;

    const url = new URL(event.currentTarget.href, window.location.href);
    const cible = url.hash ? document.querySelector(url.hash) : null;
    if (!cible) return;

    event.preventDefault();
    indexRetour = indexActif;
    sortir(false);
    window.history.pushState(null, "", url.hash);
    cible.scrollIntoView({ block: "start" });
    cible.focus?.({ preventScroll: true });
  }

  function revenirPresentation() {
    entrer(indexRetour);
  }

  function revenirConclusion() {
    const indexConclusion = diapositives.findIndex((diapositive) => diapositive.id === "conclusion");
    entrer(indexConclusion >= 0 ? indexConclusion : nombreEcransPitch - 1);
  }

  bascule?.setAttribute("aria-pressed", "false");
  bascule?.addEventListener("click", () => entrer(0));
  demarrer?.addEventListener("click", () => entrer(0));
  precedent?.addEventListener("click", () => afficher(indexActif - 1));
  suivant?.addEventListener("click", () => afficher(indexActif + 1));
  quitter?.addEventListener("click", () => sortir());
  document.querySelectorAll("[data-show-support]").forEach((lien) => {
    lien.addEventListener("click", ouvrirSupport);
  });
  document.querySelectorAll("[data-return-to-presentation]").forEach((bouton) => {
    bouton.addEventListener("click", revenirPresentation);
  });
  document.querySelectorAll("[data-return-to-conclusion]").forEach((bouton) => {
    bouton.addEventListener("click", revenirConclusion);
  });

  document.addEventListener("keydown", (event) => {
    if (!document.body.classList.contains("presentation-mode")) return;

    if (["ArrowRight", "PageDown"].includes(event.key)) {
      event.preventDefault();
      afficher(indexActif + 1);
    }
    if (["ArrowLeft", "PageUp"].includes(event.key)) {
      event.preventDefault();
      afficher(indexActif - 1);
    }
    if (event.key === "Home") {
      event.preventDefault();
      afficher(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      afficher(diapositives.length - 1);
    }
    if (event.key === "Escape") sortir();
  });
}
