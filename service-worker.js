// The app has been retired. Clear any cached app data and unregister
// so devices that already installed it stop running it offline.
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll({ type: "window" }))
      .then(clients => clients.forEach(client => client.navigate(client.url)))
  );
});
