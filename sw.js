const CACHE_NAME = 'course-schedule-cache-v1';
const urlsToCache = [
  './百日计划.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
  // 如有其他静态资源可继续添加
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
}); 