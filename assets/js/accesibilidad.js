const applyColorTheme = (() => {
	const COLOR_TOGGLER = document.getElementById('color-toggle');
	const PREFERRED_THEME = localStorage.getItem('Theme');
	PREFERRED_THEME === 'light' ? COLOR_TOGGLER.toggleAttribute('open') : localStorage.setItem('Theme', 'dark');
	COLOR_TOGGLER.onclick = () => updateColorTheme();
})();

const updateColorTheme = () => {
	const CURRENT_THEME = localStorage.getItem('Theme');
	let newTheme = CURRENT_THEME === "dark" ? "light" : "dark";
	localStorage.setItem('Theme', newTheme);
}


function mouseoverHandler() {
	this.toggleAttribute('open', true);
}

function mouseoutHandler() {
	this.toggleAttribute('open', false);
}

const addEventListeners = () => {
	document.querySelectorAll('nav details').addEventListener('mouseover', mouseoverHandler);
	document.querySelectorAll('nav details').addEventListener('mouseout', mouseoutHandler);
}

const removeEventListeners = () => {
	document.querySelectorAll('nav details').removeEventListener('mouseover', mouseoverHandler);
	document.querySelectorAll('nav details').removeEventListener('mouseout', mouseoutHandler);
}

window.innerWidth >= 1083 ? addEventListeners() : null;

window.addEventListener('resize', () => window.innerWidth >= 1083 ? addEventListeners() : removeEventListeners());