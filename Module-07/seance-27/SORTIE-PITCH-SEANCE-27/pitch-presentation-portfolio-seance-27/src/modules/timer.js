export function initialiserChronometre() {
  const sortie = document.querySelector("#timer-output");
  const demarrer = document.querySelector("#timer-start");
  const pause = document.querySelector("#timer-pause");
  const reinitialiser = document.querySelector("#timer-reset");

  if (!sortie || !demarrer || !pause || !reinitialiser) return;

  let depart = 0;
  let tempsCumule = 0;
  let intervalle = null;

  function format(duree) {
    const secondesTotales = Math.floor(duree / 1000);
    const minutes = Math.floor(secondesTotales / 60);
    const secondes = secondesTotales % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secondes).padStart(2, "0")}`;
  }

  function mettreAJour() {
    const duree = tempsCumule + (intervalle ? Date.now() - depart : 0);
    sortie.value = format(duree);
    sortie.textContent = format(duree);
  }

  demarrer.addEventListener("click", () => {
    if (intervalle) return;
    depart = Date.now();
    intervalle = window.setInterval(mettreAJour, 250);
    demarrer.disabled = true;
    pause.disabled = false;
  });

  pause.addEventListener("click", () => {
    if (!intervalle) return;
    tempsCumule += Date.now() - depart;
    window.clearInterval(intervalle);
    intervalle = null;
    mettreAJour();
    demarrer.disabled = false;
    pause.disabled = true;
  });

  reinitialiser.addEventListener("click", () => {
    if (intervalle) window.clearInterval(intervalle);
    intervalle = null;
    depart = 0;
    tempsCumule = 0;
    demarrer.disabled = false;
    pause.disabled = true;
    mettreAJour();
  });

  pause.disabled = true;
  mettreAJour();
}
