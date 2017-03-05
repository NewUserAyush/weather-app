self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('Weather_App').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/app.js',
        'https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.css',
        'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js',
        'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-animate.min.js',
        'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-messages.min.js',
        'https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.js',
        'https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js',
        'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.28//angular-route.min.js'
      ])
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});