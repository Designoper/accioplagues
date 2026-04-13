const ROOT = "/accioplagues/";

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register(`${ROOT}sw.js?v=${Date.now()}`)
		.then(() => console.log("Service Worker registrado"))
		.catch(err => console.error("Error al registrar SW:", err));
}
