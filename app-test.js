const menuBtns = document.querySelectorAll('button[aria-label="View menu"]');
let counter = 2;
let menuBtn = menuBtns[counter];

menuBtn.click();

let shareBtn = document.querySelector('.icon-share');
shareBtn.click();

let copyBtn = document.querySelector('.share-action-copy');
let closeBtn = document.getElementById('modal-close');

copyBtn.click();
closeBtn.click();