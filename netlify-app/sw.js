/* ============================================================
   Asian Blend Spa — Service Worker
   Offline-first: precache the whole app shell, serve cache-first,
   keep a versioned cache and clean up old versions on activate.
   ============================================================ */

const VERSION = 'v1.1.0';
const CACHE = 'asian-blend-spa-' + VERSION;

/* Every local asset the app needs to run with zero network. */
const CORE = [
  './',
  './index.html',
  './manifest.json',
  './icons/favicon-32.png',
  './icons/icon-180.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png',
  './images/logo.png',
  './images/logo-mark.png'
];

/* ---------- install: precache the shell ---------- */
self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // cache:'reload' bypasses the HTTP cache so we never precache a stale copy
    await cache.addAll(CORE.map((url) => new Request(url, { cache: 'reload' })));
    await self.skipWaiting();
  })());
});

/* ---------- activate: drop old versions, take control ---------- */
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys.filter((k) => k.startsWith('asian-blend-spa-') && k !== CACHE)
          .map((k) => caches.delete(k))
    );
    await self.clients.claim();
  })());
});

/* ---------- fetch: cache-first, network fallback ---------- */
self.addEventListener('fetch', (event) => {
  const req = event.request;

  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  // Only handle our own origin; let anything external pass through.
  if (url.origin !== self.location.origin) return;

  /* Navigations: try the network for freshness, fall back to the cached shell
     so the app opens instantly with no connection at all. */
  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      try {
        const fresh = await fetch(req);
        cache.put('./index.html', fresh.clone());
        return fresh;
      } catch (err) {
        return (await cache.match('./index.html')) ||
               (await cache.match('./')) ||
               new Response('<h1>Offline</h1>', {
                 status: 503,
                 headers: { 'Content-Type': 'text/html; charset=utf-8' }
               });
      }
    })());
    return;
  }

  /* Everything else: cache-first. */
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const hit = await cache.match(req, { ignoreSearch: true });
    if (hit) return hit;

    try {
      const res = await fetch(req);
      if (res && res.status === 200 && res.type === 'basic') {
        cache.put(req, res.clone());
      }
      return res;
    } catch (err) {
      return new Response('Offline', { status: 503, statusText: 'Offline' });
    }
  })());
});

/* ---------- allow the page to trigger an immediate update ---------- */
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
