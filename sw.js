const CACHE_NAME = "stress-rest-v32-startup-animation-fix";
const FILES_TO_CACHE = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg", "./stress-rest-app-icon.png", "./stress-rest-start-symbol.png", "./stress-rest-start-wordmark.png", "./stress-rest-word-stress.png", "./stress-rest-word-arrow.png", "./stress-rest-word-rest.png"];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)));
  self.skipWaiting();
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(key => key.startsWith("stress-rest-") && key !== CACHE_NAME).map(key => caches.delete(key))
  )));
  self.clients.claim();
});
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then(cached => {
    if (cached) return cached;
    return fetch(event.request).then(response => {
      if (response.ok && new URL(event.request.url).origin === self.location.origin) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      }
      return response;
    });
  }));
});
