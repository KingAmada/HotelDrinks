self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('hotel-drinks-v1').then(cache => {
      return cache.addAll([
        '/',
        '/HotelDrinks.html',
        '/manifest.json',
        '/sw.js'
        // Add other assets if hosted locally
      ]);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
