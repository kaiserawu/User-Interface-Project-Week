// JS goes here

// Header code below
let navButton = document.querySelector('#nav-icon');
let openImg = document.querySelector('.nav-open');
let closeImg = document.querySelector('.nav-close');
let navDropdown = document.querySelector('.nav-dropdown');
navButton.addEventListener('click', () => {
    navDropdown.classList.toggle('displayed');
    openImg.classList.toggle('icon-hidden');
    closeImg.classList.toggle('icon-hidden');
})