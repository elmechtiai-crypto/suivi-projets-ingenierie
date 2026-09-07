export function initialiserNavigation() {
  const liens = [...document.querySelectorAll('.main-nav a[href^="#"]')];
  const sections = liens
    .map((lien) => document.querySelector(lien.getAttribute("href")))
    .filter(Boolean);

  if (!("IntersectionObserver" in window) || sections.length === 0) return;

  const observateur = new IntersectionObserver(
    (entrees) => {
      const sectionVisible = entrees
        .filter((entree) => entree.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!sectionVisible) return;

      liens.forEach((lien) => {
        const actif = lien.getAttribute("href") === `#${sectionVisible.target.id}`;
        lien.toggleAttribute("aria-current", actif);
      });
    },
    { rootMargin: "-35% 0px -55%", threshold: [0, 0.25, 0.6] },
  );

  sections.forEach((section) => observateur.observe(section));
}
