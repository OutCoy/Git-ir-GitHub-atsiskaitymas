const introTabBtn = document.querySelector('#introTabBtn');
const workTabBtn = document.querySelector('#workTabBtn');
const aboutTabBtn = document.querySelector('#aboutTabBtn');
const contactTabBtn = document.querySelector('#contactTabBtn');

const introTab = document.querySelector('#introTab');
const workTab = document.querySelector('#workTab');
const aboutTab = document.querySelector('#aboutTab');
const contactTab = document.querySelector('#contactTab');

const landingPage = document.querySelector('#landingPage');

const closeTab = document.querySelectorAll('.closeTab');

// introTabBtn.addEventListener('click', () => {
//     landingPage.classList.add('displayNone');
//     introTab.classList.remove('displayNone');
// });

openTab(introTabBtn, introTab);
openTab(workTabBtn, workTab);
openTab(aboutTabBtn, aboutTab);
openTab(contactTabBtn, contactTab);

closeTab.forEach(button => {
    button.addEventListener('click', () => {
        landingPage.classList.remove('displayNone');
        introTab.classList.add('displayNone');
        workTab.classList.add('displayNone');
        aboutTab.classList.add('displayNone');
        contactTab.classList.add('displayNone');
    });
});

function openTab(btn, content){
    btn.addEventListener('click', () => {
        landingPage.classList.add('displayNone');
        content.classList.remove('displayNone');
    });
}