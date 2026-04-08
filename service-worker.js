const NAME = "accioplagues";
const VERSION = "1.0.0";
const CACHE_NAME = `${NAME}-v${VERSION}`;

const SUBDIRECTORY = "/accioplagues/";

const CORE_ASSETS = [
	`${SUBDIRECTORY}`,
	`${SUBDIRECTORY}index.html`,
	`${SUBDIRECTORY}manifest.json`,
	`${SUBDIRECTORY}assets/img/icons/icon-512.png`,
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
						return caches.match(`${SUBDIRECTORY}index.html`);
					}
				});
		})
	);
});
