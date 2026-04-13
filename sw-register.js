const ROOT = "/accioplagues/";

// if ('serviceWorker' in navigator) {
// 	navigator.serviceWorker.register(`${ROOT}sw.js?v=${Date.now()}`)
// 		.then(() => console.log("Service Worker registrado"))
// 		.catch(err => console.error("Error al registrar SW:", err));
// }

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register(`${ROOT}sw.js?v=${Date.now()}`)
		.then(reg => {
			reg.addEventListener('updatefound', () => {
				const newSW = reg.installing;
				newSW.addEventListener('statechange', () => {
					if (newSW.state === 'installed' && navigator.serviceWorker.controller) {
						// Recargar para activar el SW nuevo
						location.reload();
					}
				});
			});
		});
}
