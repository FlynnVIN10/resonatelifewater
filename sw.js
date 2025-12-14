/* Resonate Life Water - simple offline-first service worker */

var CACHE = "rlw-cache-v1";
var CORE_ASSETS = [
  "./",
  "./index.html",
  "./products.html",
  "./css/styles.css",
  "./js/main.js",
  "./images/logo.svg",
  "./images/hero-waterfall.jpg",
  "./images/product-kit.svg",
  "./images/product-refill.svg",
  "./images/lifestyle.svg",
  "./images/avatar-a.svg",
  "./images/avatar-j.svg",
  "./images/avatar-s.svg"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches
      .open(CACHE)
      .then(function (cache) {
        return cache.addAll(CORE_ASSETS);
      })
      .then(function () {
        return self.skipWaiting();
      })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches
      .keys()
      .then(function (keys) {
        return Promise.all(
          keys
            .filter(function (k) {
              return k !== CACHE;
            })
            .map(function (k) {
              return caches.delete(k);
            })
        );
      })
      .then(function () {
        return self.clients.claim();
      })
  );
});

self.addEventListener("fetch", function (event) {
  var req = event.request;
  if (req.method !== "GET") return;

  event.respondWith(
    caches.match(req).then(function (cached) {
      var fetchPromise = fetch(req)
        .then(function (res) {
          // Cache fresh responses for same-origin.
          try {
            var url = new URL(req.url);
            if (url.origin === self.location.origin && res && res.status === 200) {
              var copy = res.clone();
              caches.open(CACHE).then(function (cache) {
                cache.put(req, copy);
              });
            }
          } catch (e) {}
          return res;
        })
        .catch(function () {
          // Fall back to cached home for navigations.
          if (req.mode === "navigate") return caches.match("./index.html");
          return cached;
        });

      return cached || fetchPromise;
    })
  );
});
