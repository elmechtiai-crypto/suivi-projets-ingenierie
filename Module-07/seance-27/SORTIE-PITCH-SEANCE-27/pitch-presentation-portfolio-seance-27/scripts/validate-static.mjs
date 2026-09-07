import { createHash } from "node:crypto";
import { readdir, readFile, stat } from "node:fs/promises";
import { join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { liens } from "../src/data/liens.js";
import { pitch } from "../src/data/pitch.js";
import { preuves } from "../src/data/preuves.js";
import { questions } from "../src/data/questions.js";

const racine = resolve(fileURLToPath(new URL("..", import.meta.url)));

function verifier(condition, message) {
  if (!condition) throw new Error(message);
}

async function lire(chemin) {
  return readFile(join(racine, chemin), "utf8");
}

async function existe(chemin) {
  try {
    return (await stat(join(racine, chemin))).isFile();
  } catch {
    return false;
  }
}

async function empreinte(chemin) {
  const contenu = await readFile(join(racine, chemin));
  return createHash("sha256").update(contenu).digest("hex");
}

async function listerTextes(dossier) {
  const extensions = new Set([".css", ".html", ".js", ".json", ".svg", ".webmanifest"]);
  const resultats = [];

  async function parcourir(chemin) {
    for (const entree of await readdir(join(racine, chemin), { withFileTypes: true })) {
      const relatif = join(chemin, entree.name);
      if (entree.isDirectory()) {
        await parcourir(relatif);
      } else if (extensions.has(entree.name.slice(entree.name.lastIndexOf(".")))) {
        resultats.push(relatif);
      }
    }
  }

  await parcourir(dossier);
  return resultats;
}

const html = await lire("index.html");
const htmlBuild = await lire("dist/index.html");
const pitchV2 = await lire("livrables-s27/pitch-progression-v2-court.md");
const baseCss = await lire("src/styles/base.css");
const componentsCss = await lire("src/styles/components.css");
const responsiveCss = await lire("src/styles/responsive.css");
const printCss = await lire("src/styles/print.css");
const presenterJs = await lire("src/modules/presenter.js");
const timerJs = await lire("src/modules/timer.js");
const checklistJs = await lire("src/modules/checklist.js");
const serviceWorkerSecours = await lire("public/secours/ingenia-pilot/service-worker.js");

const identifiants = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
const identifiantsUniques = new Set(identifiants);
const diapositives = [...html.matchAll(/\sdata-slide(?:\s|>)/g)];
const diapositivesAnnexes = [...html.matchAll(/\sdata-annex(?:\s|>)/g)];
const titresH1 = [...html.matchAll(/<h1\b/g)];
const images = [...html.matchAll(/<img\b[^>]*>/g)].map((match) => match[0]);
const ancresInternes = [...html.matchAll(/href="#([^"]+)"/g)].map((match) => match[1]);

verifier(html.includes('<html lang="fr">'), "La langue française n'est pas déclarée.");
verifier(html.includes('class="skip-link" href="#contenu"'), "Le lien d'évitement est absent.");
verifier(titresH1.length === 1, `Nombre de h1 incorrect : ${titresH1.length}.`);
verifier(diapositives.length === 8, `Nombre total d'écrans incorrect : ${diapositives.length}.`);
verifier(diapositivesAnnexes.length === 1, `Nombre d'écrans d'annexe incorrect : ${diapositivesAnnexes.length}.`);
verifier(identifiants.length === identifiantsUniques.size, "Des identifiants HTML sont dupliqués.");
verifier(ancresInternes.every((id) => identifiantsUniques.has(id)), "Une ancre interne ne cible aucun identifiant.");
verifier(images.every((balise) => /\salt="[^"]*"/.test(balise)), "Une image n'a pas d'attribut alt.");
verifier(images.length === 10, `Nombre d'images incorrect : ${images.length}.`);
verifier(html.includes("PRÊT POUR PRÉSENTATION — VALIDATION HUMAINE REQUISE"), "Le statut de préparation est absent.");
verifier(html.includes("INGÉNIA PILOT est un démonstrateur de suivi de projets d’ingénierie"), "La définition d’INGÉNIA PILOT est absente ou incorrecte.");
verifier(html.includes('id="annexes"'), "L’entrée des annexes est absente.");
verifier(html.includes("Plan de la présentation"), "Le plan de présentation est absent du premier écran.");
verifier(html.includes("7 écrans · 3 à 5 minutes"), "La durée et le nombre d'écrans du plan sont absents.");
verifier(html.includes("annexe questions, preuves, ressources et affiches · hors chronométrage"), "L'annexe n'est pas annoncée dans le plan.");
verifier(!/fictif/i.test(`${html}\n${pitchV2}`), "Le terme retiré apparaît encore dans le mini-site ou le pitch V2.");
verifier(!html.includes("FINALISTE CONFIRMÉ"), "Un statut final réservé apparaît dans la page publique.");
verifier(baseCss.includes(":focus-visible"), "Le focus visible n'est pas défini.");
verifier(baseCss.includes("prefers-reduced-motion"), "La réduction des animations n'est pas gérée.");
verifier(componentsCss.includes(".proof-poster-grid"), "La galerie des affiches n'est pas stylée.");
verifier(componentsCss.includes("grid-template-columns: minmax(0, 1fr)"), "Les affiches ne sont pas organisées sur une colonne lisible.");
verifier(componentsCss.includes("object-fit: contain"), "Les affiches risquent d'être recadrées.");
verifier(componentsCss.includes("height: auto"), "La hauteur proportionnelle des affiches n'est pas garantie.");
verifier(printCss.includes("@media print"), "La feuille d'impression est incomplète.");
verifier(responsiveCss.includes("max-width: 48rem"), "Le comportement mobile n'est pas défini.");
verifier(responsiveCss.includes("max-width: 64rem"), "Le comportement tablette n'est pas défini.");
verifier(responsiveCss.includes("min-aspect-ratio: 16 / 10"), "Le mode projection n'est pas défini.");
verifier(presenterJs.includes("indexRetour"), "Le retour vers l'écran de présentation n'est pas mémorisé.");
verifier(presenterJs.includes("data-show-support"), "L'ouverture contrôlée des annexes n'est pas gérée.");
verifier(presenterJs.includes("data-return-to-presentation"), "Le retour depuis les annexes n'est pas géré.");
verifier(presenterJs.includes("data-return-to-conclusion"), "Le retour de l'annexe vers la conclusion n'est pas géré.");
verifier(presenterJs.includes("nombreEcransPitch"), "Le décompte séparé du pitch et de l'annexe n'est pas géré.");
for (const id of ["affiche-p06", "affiche-progression", "affiche-methode"]) {
  verifier(html.includes(`id="${id}"`), `La cible d'affiche ${id} est absente.`);
}

for (const touche of ["ArrowRight", "PageDown", "ArrowLeft", "PageUp", "Home", "End", "Escape"]) {
  verifier(presenterJs.includes(touche), `La touche ${touche} n'est pas gérée.`);
}

verifier(!/localStorage|sessionStorage/.test(`${timerJs}\n${checklistJs}`), "Une persistance navigateur non prévue est utilisée.");
verifier(questions.length === 4, `Nombre de questions incorrect : ${questions.length}.`);
verifier(preuves.length === 7, `Nombre de preuves incorrect : ${preuves.length}.`);
verifier(preuves.every((preuve) => preuve.fait), "Une preuve ne contient pas de fait vérifiable.");
for (const id of ["P02", "P03", "P05", "P06"]) {
  const preuve = preuves.find((item) => item.id === id);
  verifier(preuve?.affiches?.length > 0, `La preuve ${id} n'est reliée à aucune affiche.`);
}
verifier(liens.length === 3, `Nombre de liens structurés incorrect : ${liens.length}.`);
verifier(liens.some((lien) => lien.href === "./guide-pitch-seance-27.pdf"), "Le guide PDF n'est pas référencé.");
verifier(pitch.statut === "PRÊT POUR PRÉSENTATION — VALIDATION HUMAINE REQUISE", `Statut de données incorrect : ${pitch.statut}.`);
verifier(pitch.dureeObservee.startsWith("3 à 5 minutes"), `Durée du pitch V2 incorrecte : ${pitch.dureeObservee}.`);
verifier(pitch.dureeDemonstration.startsWith("2 à 3 minutes"), `Durée de démonstration incorrecte : ${pitch.dureeDemonstration}.`);
verifier(pitch.dureeQuestions.startsWith("20 à 40 secondes"), `Durée des réponses incorrecte : ${pitch.dureeQuestions}.`);
verifier(pitch.preuvesEtLimitesSansHesitation === true, "La maîtrise des preuves et limites n'est pas confirmée.");
verifier(pitch.correctionEncoreNecessaire === false, "Une correction est encore indiquée comme nécessaire.");

const blocAppShell = serviceWorkerSecours.match(/const APP_SHELL = \[([\s\S]*?)\];/);
verifier(blocAppShell, "La liste APP_SHELL du secours est introuvable.");
const ressourcesSecours = [...blocAppShell[1].matchAll(/"(\.\/[^\"]*)"/g)].map((match) => match[1]);
verifier(ressourcesSecours.length === 22, `Nombre de ressources du secours incorrect : ${ressourcesSecours.length}.`);
for (const ressource of ressourcesSecours.filter((chemin) => chemin !== "./")) {
  const chemin = `public/secours/ingenia-pilot/${ressource.slice(2)}`;
  verifier(await existe(chemin), `Ressource APP_SHELL manquante : ${chemin}.`);
}

for (const chemin of [
  "dist/index.html",
  "dist/.nojekyll",
  "dist/favicon.svg",
  "dist/og.png",
  "dist/guide-pitch-seance-27.pdf",
  "dist/assets/images/hero-workflow-s27-v1.png",
  "dist/assets/images/affiches-s27/affiche-preuve-p06-besoin-action-s27-v1.png",
  "dist/assets/images/affiches-s27/affiche-progression-p02-p03-p06-s27-v1.png",
  "dist/assets/images/affiches-s27/affiche-methode-p05-p06-s27-v1.png",
  "dist/secours/ingenia-pilot/index.html",
  "dist/secours/ingenia-pilot/data/data.json",
]) {
  verifier(await existe(chemin), `Fichier de build manquant : ${chemin}.`);
}

verifier(!/[A-Za-z]:\\/.test(htmlBuild), "Un chemin Windows apparaît dans le build HTML.");
verifier(/src="\.\/assets\/index-[^"]+\.js"/.test(htmlBuild), "Le JavaScript de build n'utilise pas un chemin relatif.");
verifier(/href="\.\/assets\/index-[^"]+\.css"/.test(htmlBuild), "Le CSS de build n'utilise pas un chemin relatif.");

const hashSource = await empreinte("output/pdf/guide-pitch-seance-27.pdf");
const hashPublic = await empreinte("public/guide-pitch-seance-27.pdf");
const hashBuild = await empreinte("dist/guide-pitch-seance-27.pdf");
verifier(hashSource === hashPublic && hashPublic === hashBuild, "Les trois exemplaires du guide PDF diffèrent.");

const motifsSensibles = [
  /ghp_[A-Za-z0-9]+/,
  /github_pat_[A-Za-z0-9_]+/,
  /AIza[0-9A-Za-z_-]{20,}/,
  /sk-[A-Za-z0-9_-]{20,}/,
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
  /C:\\Users\\PC/i,
  /donnees-privees-ne-pas-partager/i,
];

const fichiersPublics = await listerTextes("dist");
for (const chemin of fichiersPublics) {
  const contenu = await lire(chemin);
  verifier(!motifsSensibles.some((motif) => motif.test(contenu)), `Contenu sensible potentiel : ${relative(racine, chemin)}.`);
}

console.log(JSON.stringify({
  statut: "STATIC_CHECK_OK",
  ecransPitch: diapositives.length - diapositivesAnnexes.length,
  ecransAnnexes: diapositivesAnnexes.length,
  identifiants: identifiants.length,
  imagesAvecAlt: images.length,
  questions: questions.length,
  preuves: preuves.length,
  liens: liens.length,
  ressourcesSecours: ressourcesSecours.length,
  fichiersPublicsControles: fichiersPublics.length,
  guideSha256: hashPublic.toUpperCase(),
}, null, 2));
