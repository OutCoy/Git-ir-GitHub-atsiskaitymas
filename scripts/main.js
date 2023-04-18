const introTabBtn = document.querySelector('#introTabBtn');
const workTabBtn = document.querySelector('#workTabBtn');
const aboutTabBtn = document.querySelector('#aboutTabBtn');
const contactTabBtn = document.querySelector('#contactTabBtn');

const introTab = document.querySelector('#introTab');
// const workTab = document.querySelector('#workTab');
// const aboutTab = document.querySelector('#aboutTab');
// const contactTab = document.querySelector('#contactTab');

const landingPage = document.querySelector('#landingPage');

const closeTab = document.querySelector('.closeTab');

introTabBtn.addEventListener('click', () => {
    landingPage.classList.add('displayNone');
    introTab.classList.remove('displayNone');
});

closeTab.addEventListener('click', () => {
    landingPage.classList.remove('displayNone');
    introTab.classList.add('displayNone');
    // workTab.classList.add('displayNone');
    // aboutTab.classList.add('displayNone');
    // contactTab.classList.add('displayNone');
});