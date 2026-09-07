export function initialiserAccessibilite() {
  document.querySelectorAll("[data-external]").forEach((lien) => {
    const libelle = lien.getAttribute("aria-label") || lien.textContent.trim();
    lien.setAttribute("aria-label", `${libelle} — ouvre un nouvel onglet`);
  });
}
