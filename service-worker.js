const CACHE_NAME = "accioplagues-v1";

const CORE_ASSETS = [
	"/accioplagues/",
	"/accioplagues/index.html",
	"/accioplagues/manifest.json",
	"/accioplagues/assets/img/icons/icon-512.png",
];

// Instalación: cachea solo lo esencial
self.addEventListener("install", event => {
	event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS)));
	self.skipWaiting();
});

// Activación: limpia caches antiguos
self.addEventListener("activate", event => {
	event.waitUntil(
		caches.keys().then(keys =>
			Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
		)
	);
	self.clients.claim();
});

// Fetch: cache dinámico + fallback
self.addEventListener("fetch", event => {
	const request = event.request;

	if (request.method !== "GET") return;

	event.respondWith(
		caches.match(request).then(cached => {
			if (cached) return cached;

			return fetch(request)
				.then(response => {
					if (response && response.status === 200 && response.type === "basic") {
						const cloned = response.clone();
						caches.open(CACHE_NAME).then(cache => cache.put(request, cloned));
					}
					return response;
				})
				.catch(() => {
					if (request.headers.get("accept").includes("text/html")) {
						return caches.match("/accioplagues/index.html");
					}
				});
		})
	);
});
