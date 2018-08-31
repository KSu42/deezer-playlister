const menuBtns = document.querySelectorAll('button[aria-label="View menu"]');

let menuBtn;
let shareBtn;
let copyBtn;
let closeBtn;

let counter = 2;
let counterMax = menuBtns.length;

let scrapeInterval;
let menuTimeout;
let shareTimeout;
let copyTimeout;
let closeTimeout;

function scrape() {
	scrapeInterval = setInterval(function () {
		menuBtn = menuBtns[counter];
		menuBtn.onclick = menuTimeout;
		menuBtn.click();
		menuTimeout = setTimeout(function () {
			shareBtn = document.querySelector('.icon-share');
			shareBtn.onclick = shareTimeout;
			shareBtn.click();
			console.log('first trip');
		}, 1000);
		shareTimeout = setTimeout(function () {
			copyBtn = document.querySelector('.share-action-copy');
			copyBtn.onclick = copyTimeout;
			closeBtn = document.getElementById('modal-close');
			closeBtn.onclick = closeTimeout;
			console.log('second trip');
		}, 1000);
		copyTimeout = setTimeout(function () {
			copyBtn.click();
			console.log('third trip');
		}, 1000);
		closeTimeout = setTimeout(function () {
			closeBtn.click();
			console.log('fourth trip');
		}, 1000);
		counter++;
		if (counter === counterMax) {
			clearInterval(scrapeInterval);
		}
	}, 6000);
}

function clear() {
	clearInterval(scrapeInterval);
}