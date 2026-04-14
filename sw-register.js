const PATHNAME = "/accioplagues/";
let queryString;
const FORCE_NEW_SW = true;

FORCE_NEW_SW
	? queryString = `?v=${Date.now()}`
	: queryString = "";

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register(`${PATHNAME}sw.js${queryString}`)
		.then(() => console.log("Service Worker registrado"))
		.catch(err => console.error("Error al registrar SW:", err));
}
