/* ####### Menu Show Y Hidden ####### */
const navMenu = document.getElementById('nav-menu');
const navTog = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* ####### MENU SHOW ####### */
// Validation if constant exists
if (navTog) {
    navTog.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}
/* ####### MENU HIDDEN #######*/
// Validate if constant exists
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/* ####### REMOVE MENU MOBILE #######*/
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // when we click on each nav_link, we remove the show-menu class 
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));