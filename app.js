const menuBtns = document.querySelectorAll('button[aria-label="View menu"]');

let menuBtn;
let shareBtn;
let copyBtn;
let closeBtn;

let counter = 2;
const counterMax = menuBtns.length-12;

let scrapeInterval;

function scrape() {
	scrapeInterval = setInterval(function () {
		menuBtn = menuBtns[counter];
		menuBtn.click();
		setTimeout(function () {
			shareBtn = document.querySelector('.icon-share');
			shareBtn.click();
			console.log('first trip');
			setTimeout(function () {
				copyBtn = document.querySelector('.share-action-copy');
				closeBtn = document.getElementById('modal-close');
				console.log('second trip');
				setTimeout(function () {
					copyBtn.click();
					closeBtn.click();
					console.log('third trip');
				}, 1000);
			}, 1000);
		}, 1000);
		counter++;
		if (counter === counterMax) {
			clearInterval(scrapeInterval);
			console.log('interval cleared will stop after 1 more run');
		}
	}, 5000);
}

function clear() {
	clearInterval(scrapeInterval);
}