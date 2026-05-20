// const PATHNAME = "/accioplagues/";
// let queryString;
// const FORCE_NEW_SW = true;

// FORCE_NEW_SW
// 	? queryString = `?v=${Date.now()}`
// 	: queryString = "";

// if ('serviceWorker' in navigator) {
// 	navigator.serviceWorker.register(`${PATHNAME}sw.js${queryString}`)
// 		.then(() => console.log("Service Worker registrado"))
// 		.catch(err => console.error("Error al registrar SW:", err));
// }

const PATHNAME = "/accioplagues/";
const FILENAME = "sw.js";

if (navigator.serviceWorker) {
	try {
		await navigator.serviceWorker.register(`${PATHNAME}${FILENAME}`, { type: 'module' });
	} catch (err) {
		console.error("Error al registrar SW:", err);
	}
}
