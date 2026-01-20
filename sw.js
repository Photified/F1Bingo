const CACHE_NAME = 'f1-pickem-v8';
const ASSETS = [
  './',
  './index.html',
  './bingo_data.js',
  './manifest.json',
  './images/logo192.png',
  './images/logo512.png',
  './images/max.png',
  './images/fia.png',
  'https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,400;0,700;0,900;1,400&display=swap'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});