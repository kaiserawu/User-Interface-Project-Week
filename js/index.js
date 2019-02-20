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

// Services tab selection code below
const tabButtonList = document.querySelectorAll('.tab-button');
const tabContentList = document.querySelectorAll('.tab-content');

class TabButton {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.contentElement = document.querySelector(`.tab-content[data-tab='${this.data}']`);
        this.tabContent = new TabContent(this.contentElement);

        this.element.addEventListener('click', () => { this.select(); })
    }

    select() {
        Array.from(tabButtonList).forEach((button) => { button.classList.remove('tab-button-selected'); })
        this.element.classList.add('tab-button-selected');
        this.tabContent.select();
    }
}

class TabContent {
    constructor(element) {
        this.element = element;
    }

    select() {
        Array.from(tabContentList).forEach((content) => { content.classList.remove('tab-content-selected'); })
        this.element.classList.add('tab-content-selected');
    }
}

tabButtonList.forEach((button) => new TabButton(button));