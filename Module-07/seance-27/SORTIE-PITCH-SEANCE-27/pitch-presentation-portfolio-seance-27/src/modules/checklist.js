export function initialiserChecklist() {
  const controles = [...document.querySelectorAll("[data-preparation-check]")];
  const sortie = document.querySelector("#readiness-progress");

  if (!sortie || controles.length === 0) return;

  function mettreAJour() {
    const coches = controles.filter((controle) => controle.checked).length;
    sortie.textContent = `${coches} critères sur ${controles.length} renseignés`;
  }

  controles.forEach((controle) => controle.addEventListener("change", mettreAJour));
  mettreAJour();
}
