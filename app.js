// Scroll to bottom of playlist page so that all the elements are loaded before running this code.
const linkSelect = document.querySelectorAll('.heading-4 a');
let links = [];
linkSelect.forEach(
	function (link) {
		let linkURL = link.href;
		links.push(linkURL);
	}
);
console.log(links.join('\n'));
console.log('Playlist Count: ' + links.length);
