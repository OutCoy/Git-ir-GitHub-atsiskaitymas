const introTabBtn = document.querySelector('#introTabBtn');
const workTabBtn = document.querySelector('#workTabBtn');
const aboutTabBtn = document.querySelector('#aboutTabBtn');
const contactTabBtn = document.querySelector('#contactTabBtn');

const introTab = document.querySelector('#introTab');

const landingPage = document.querySelector('#landingPage');

introTabBtn.addEventListener('click', () => {
    landingPage.classList.add('displayNone');
    introTab.classList.remove('displayNone');
});