const menuBtns = document.querySelectorAll('button[aria-label="View menu"]');

let menuBtn;
let shareBtn;
let copyBtn;
let closeBtn;

let counter = 2;
let counterMax = menuBtns.length;

let scrapeInterval;

function scrape() {
	scrapeInterval = setInterval(function () {
		menuBtn = menuBtns[counter];
		menuBtn.onclick = share;
		menuBtn.click();

		function share() {
			shareBtn = document.querySelector('.icon-share');
			shareBtn.onclick = copy;
			shareBtn.click();
		}

		function copy() {
			copyBtn = document.querySelector('.share-action-copy');
			closeBtn = document.getElementById('modal-close');
			copyBtn.onclick = close;
			copyBtn.click();
		}
		function close() {
			closeBtn.click();
		}
		counter++;
		if (counter === counterMax) {
			clearInterval(scrapeInterval);
		}
	}, 5000);
}

function clear() {
	clearInterval(scrapeInterval);
}