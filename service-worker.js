self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("anaskafi-cache").then((cache) =>
      cache.addAll([
        "./",
        "./index-survey.html",
        "./index-excavation.html",
        "./manifest-survey.json",
        "./manifest-excavation.json",
        "./anaskafi-pattern.png"
      ])
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) =>
      response || fetch(event.request)
    )
  );
});