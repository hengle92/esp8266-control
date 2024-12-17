self.addEventListener('install', function(event) {
  console.log('Service Worker 安装成功');
  event.waitUntil(
    caches.open('esp-control-cache').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './style.css',
        './script.js',
        './manifest.json',
        './icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
