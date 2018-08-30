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
					console.log('third trip');
					setTimeout(function () {
						closeBtn.click();
						console.log('fourth trip');
					}, 1000);
				}, 1000);
			}, 1000);
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