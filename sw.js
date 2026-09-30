// Offline cache for This or That.
// Bump VERSION whenever any file below changes; phones pick up the new version on their next launch.
var VERSION = 'this-or-that-v2';
var FILES = [
  './',
  'index.html',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/maskable-512.png',
  'icons/apple-touch-icon.png',
  'icons/favicon-32.png',
  'fonts/atkinson-400-latin.woff2',
  'fonts/atkinson-400-latin-ext.woff2',
  'fonts/atkinson-700-latin.woff2',
  'fonts/atkinson-700-latin-ext.woff2',
  'fonts/bricolage-latin.woff2',
  'fonts/bricolage-latin-ext.woff2'
];

self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(VERSION)
      // 'reload' skips the browser's HTTP cache so a new version never caches stale files
      .then(function(c){ return c.addAll(FILES.map(function(f){ return new Request(f, {cache: 'reload'}); })); })
      .then(function(){ return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys()
      .then(function(keys){ return Promise.all(keys.filter(function(k){ return k !== VERSION; }).map(function(k){ return caches.delete(k); })); })
      .then(function(){ return self.clients.claim(); })
  );
});

// Cache first for the app's own files. Everything else (the optional Claude API call) goes straight to the network.
self.addEventListener('fetch', function(e){
  var req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(
    caches.match(req, {ignoreSearch: true}).then(function(hit){
      if (hit) return hit;
      if (req.mode === 'navigate') return caches.match('index.html').then(function(page){ return page || fetch(req); });
      return fetch(req);
    })
  );
});
