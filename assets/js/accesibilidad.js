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