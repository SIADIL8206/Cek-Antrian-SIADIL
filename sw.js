// Service Worker Minimalis & Aman untuk PWA SI-ADIL Info
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Event fetch dikosongkan agar browser menangani jaringan secara murni tanpa interupsi
self.addEventListener('fetch', (event) => {
  return;
});
