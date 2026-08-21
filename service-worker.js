const CACHE_NAME = "ingenia-pilot-v9";
const CACHE_PREFIXES = ["ingenia-pilot-", "suivi-projets-ingenierie-"];
const APP_SHELL = [
  "./",
  "./index.html",
  "./offline.html",
  "./css/styles.css",
  "./js/app.js",
  "./data/data.json",
  "./manifest.webmanifest",
  "./assets/images/icons/icon-192.png",
  "./assets/images/icons/icon-512.png",
  "./assets/images/logo-fictif-suivi-projets-v1.png",
  "./assets/images/diagramme-cycle-suivi-v1.svg",
  "./assets/images/diagramme-rythme-hebdomadaire-v1.svg",
  "./assets/images/illustration-benefices-suivi-v1.png",
  "./assets/images/illustration-checklist-marche-v1.png",
  "./assets/images/illustration-suivi-projets-v1.png",
  "./assets/images/organigramme-informations-marche-v1.svg",
  "./assets/images/affiches/affiche-01-lancement-ingenia-pilot.jpg",
  "./assets/images/affiches/affiche-01-lancement-ingenia-pilot.webp",
  "./assets/images/affiches/affiche-02-chiffres-cles.jpg",
  "./assets/images/affiches/affiche-02-chiffres-cles.webp",
  "./assets/images/affiches/affiche-03-manifeste-controle-humain.jpg",
  "./assets/images/affiches/affiche-03-manifeste-controle-humain.webp",
  "./assets/images/affiches/affiche-prompt-maitre-module-06-ln-ia-v1.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) => Promise.all(
      names
        .filter((name) => CACHE_PREFIXES.some((prefix) => name.startsWith(prefix)) && name !== CACHE_NAME)
        .map((name) => caches.delete(name))
    ))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then(async (response) => {
        if (response.ok && new URL(event.request.url).origin === self.location.origin) {
          const copy = response.clone();
          const cache = await caches.open(CACHE_NAME);
          await cache.put(event.request, copy);
        }
        return response;
      })
      .catch(async () => {
        const cached = await caches.match(event.request);
        if (cached) return cached;
        if (event.request.mode === "navigate") return caches.match("./offline.html");
        return new Response("Ressource indisponible hors connexion.", {
          status: 503,
          headers: { "Content-Type": "text/plain; charset=utf-8" }
        });
      })
  );
});
