// Retires the service worker left behind by the old booking app.
// Browsers that still have it installed fetch this file on their next visit,
// clear the stale cache, unregister, and reload onto the live site.
self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => caches.delete(k)));
    await self.registration.unregister();
    const clients = await self.clients.matchAll({ type: "window" });
    clients.forEach(client => client.navigate(client.url));
  })());
});
