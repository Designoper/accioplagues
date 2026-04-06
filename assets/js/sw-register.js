if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("/accioplagues/service-worker.js")
		.then(() => console.log("Service Worker registrado"))
		.catch(err => console.error("Error al registrar SW:", err));
}
