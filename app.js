const menuBtns = document.querySelectorAll('button[aria-label="View menu"]');

let menuBtn;
let shareBtn;
let closeBtn;

let counter = 2;
const counterMax = menuBtns.length - 12;

let scrapeInterval;

let links = [];

function scrape() {
	scrapeInterval = setInterval(function () {
		menuBtn = menuBtns[counter];
		if (counter === counterMax) {
			clearInterval(scrapeInterval);
			console.log('interval cleared');
			console.log('Playlist Count: ' + links.length);
			setTimeout(function () {
				console.log(links.join('\n'));
			}, 1000);
		}
		if (counter != counterMax) {
			counter++;
			menuBtn.click();
			setTimeout(function () {
				shareBtn = document.querySelector('.icon-share');
				shareBtn.click();
				console.log('first trip');
				setTimeout(function () {
					closeBtn = document.getElementById('modal-close');
					console.log('second trip');
					setTimeout(function () {
						let formVal = document.querySelector('.form-control-static').value;
						links.push(formVal);
						closeBtn.click();
						console.log('third trip');
					}, 200);
				}, 200);
			}, 200);
		}
	}, 1200);
}

function clear() {
	clearInterval(scrapeInterval);
}

scrape();