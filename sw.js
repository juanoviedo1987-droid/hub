// Service Worker mínimo para cumplir los requisitos de instalación PWA de Google Chrome
const CACHE_NAME = 'hub-cache-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pasa derecho a la red
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
