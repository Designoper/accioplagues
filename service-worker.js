const VERSION = "1.0.5";
const ROOT = "/accioplagues/";

// Activación: limpia caches antiguos
self.addEventListener("activate", event => {
	event.waitUntil(
		caches.keys().then(keys =>
			Promise.all(keys.filter(key => key !== VERSION).map(key => caches.delete(key)))
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
						caches.open(VERSION).then(cache => cache.put(request, cloned));
					}
					return response;
				})
				// .catch(() => {
				// 	if (request.headers.get("accept").includes("text/html")) {
				// 		return caches.match(`${ROOT}index.html`);
				// 	}
				// });
		})
	);
});
