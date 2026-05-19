// Service worker sederhana agar aplikasi memenuhi syarat PWA Android & iOS
self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('fetch', function(e) {
  // Biarkan data mengalir langsung secara realtime dari internet
  e.respondWith(fetch(e.request));
});
