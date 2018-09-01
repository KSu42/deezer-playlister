const menuBtns = document.querySelectorAll('button[aria-label="View menu"]');

let menuBtn;
let shareBtn;
let copyBtn;
let closeBtn;

let counter = 2;
const counterMax = menuBtns.length - 12;

let scrapeInterval;

let links = [];

function scrape() {
	scrapeInterval = setInterval(function () {
		menuBtn = menuBtns[counter];
		// console.log('TCL: scrapeInterval -> menuBtn', menuBtn);
		if (counter === counterMax) {
			clearInterval(scrapeInterval);
			console.log('interval cleared');
			setTimeout(function () {
				console.log(links.join('\n'));
			}, 1000);
		}
		if (counter != counterMax) {
			counter++;
			menuBtn.click();
			setTimeout(function () {
				shareBtn = document.querySelector('.icon-share');
				// console.log('TCL: scrapeInterval -> shareBtn', shareBtn);
				shareBtn.click();
				console.log('first trip');
				setTimeout(function () {
					copyBtn = document.querySelector('.share-action-copy');
					// console.log('TCL: scrapeInterval -> copyBtn', copyBtn);
					closeBtn = document.getElementById('modal-close');
					// console.log('TCL: scrapeInterval -> closeBtn', closeBtn);
					console.log('second trip');
					setTimeout(function () {
						// grab link and add it to link array
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